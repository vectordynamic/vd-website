import { describe, it, expect, vi, beforeEach } from 'vitest';

const sendMock = vi.fn();

vi.mock('resend', () => ({
  Resend: class MockResend {
    constructor() {
      this.emails = { send: sendMock };
    }
  },
}));

import { POST } from './route';

function makeReq(body, ip = '10.0.0.1') {
  return new Request('http://localhost:3000/api/contact', {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
      'x-forwarded-for': ip,
    },
    body: JSON.stringify(body),
  });
}

describe('POST /api/contact', () => {
  beforeEach(() => {
    sendMock.mockReset();
    process.env.RESEND_API_KEY = 're_test_123';
  });

  it('delivers valid inquiries with replyTo and escaped HTML', async () => {
    sendMock.mockResolvedValueOnce({ data: { id: 'email_1' }, error: null });
    const res = await POST(
      makeReq(
        {
          name: 'Alex Rivera',
          email: 'alex@freightco.com',
          company: 'FreightCo',
          inquiryType: 'Systems Review',
          message: 'We process <500> dispatch sheets manually each week.',
          utm_source: 'linkedin',
        },
        '203.0.113.1'
      )
    );
    expect(res.status).toBe(200);
    expect(sendMock).toHaveBeenCalledTimes(1);
    const arg = sendMock.mock.calls[0][0];
    expect(arg.replyTo).toBe('alex@freightco.com');
    expect(arg.html).toContain('&lt;500&gt;');
    expect(arg.html).toContain('linkedin');
  });

  it('drops honeypot spam silently with 200', async () => {
    const res = await POST(
      makeReq(
        {
          name: 'Bot',
          email: 'bot@spam.io',
          website: 'https://buy-links.biz',
          message: 'Buy backlinks today!',
        },
        '203.0.113.2'
      )
    );
    expect(res.status).toBe(200);
    expect(sendMock).not.toHaveBeenCalled();
  });

  it('returns 400 with field errors when invalid', async () => {
    const res = await POST(makeReq({ name: 'A', email: 'bad', message: 'short' }, '203.0.113.3'));
    expect(res.status).toBe(400);
    const json = await res.json();
    expect(json.fields).toHaveProperty('name');
    expect(json.fields).toHaveProperty('email');
    expect(json.fields).toHaveProperty('message');
  });

  it('returns 503 when RESEND_API_KEY is missing', async () => {
    delete process.env.RESEND_API_KEY;
    const res = await POST(
      makeReq(
        {
          name: 'Alex Rivera',
          email: 'alex@freightco.com',
          message: 'Need a custom ERP inventory module.',
        },
        '203.0.113.4'
      )
    );
    expect(res.status).toBe(503);
  });

  it('rate limits the 6th submission from the same IP', async () => {
    sendMock.mockResolvedValue({ data: { id: 'ok' }, error: null });
    const payload = {
      name: 'Alex Rivera',
      email: 'alex@freightco.com',
      message: 'Need a custom ERP inventory module.',
    };
    for (let i = 0; i < 5; i += 1) {
      const r = await POST(makeReq(payload, '203.0.113.99'));
      expect(r.status).toBe(200);
    }
    const sixth = await POST(makeReq(payload, '203.0.113.99'));
    expect(sixth.status).toBe(429);
  });
});

