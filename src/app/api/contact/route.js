import { NextResponse } from 'next/server';
import { Resend } from 'resend';
import { site } from '@/content/site';
import { isSpam, validateInquiry, buildInquiryEmail } from '@/lib/inquiry';
import { createRateLimiter } from '@/lib/rate-limit';

const limiter = createRateLimiter({ limit: 5, windowMs: 10 * 60 * 1000 });

function getClientIp(request) {
  const forwarded = request.headers.get('x-forwarded-for');
  if (forwarded) {
    const first = forwarded.split(',')[0].trim();
    if (first) return first;
  }
  return request.headers.get('x-real-ip')?.trim() || 'unknown';
}

export async function POST(request) {
  const ip = getClientIp(request);
  if (!limiter.check(ip)) {
    return NextResponse.json(
      { error: `Too many requests. Please wait a few minutes or email ${site.email} directly.` },
      { status: 429 }
    );
  }

  let body;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: 'Invalid request payload.' }, { status: 400 });
  }

  if (isSpam(body)) {
    return NextResponse.json({ ok: true }, { status: 200 });
  }

  const checked = validateInquiry(body);
  if (!checked.ok) {
    return NextResponse.json(
      { error: 'Please review the highlighted fields below.', fields: checked.errors },
      { status: 400 }
    );
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    return NextResponse.json(
      { error: `Our inquiry service is temporarily offline. Please email ${site.email} directly and we will respond within one business day.` },
      { status: 503 }
    );
  }

  const from = process.env.CONTACT_FROM_EMAIL || `Vector Dynamic <${site.email}>`;
  const to = process.env.CONTACT_TO_EMAIL || site.email;
  const { subject, html, text } = buildInquiryEmail(checked.data);

  try {
    const resend = new Resend(apiKey);
    const result = await resend.emails.send({
      from,
      to,
      replyTo: checked.data.email,
      subject,
      html,
      text,
    });

    if (result?.error) {
      console.error('Resend provider error:', result.error);
      return NextResponse.json(
        { error: `We could not deliver your message automatically. Please email ${site.email} directly.` },
        { status: 502 }
      );
    }

    return NextResponse.json({ ok: true }, { status: 200 });
  } catch (err) {
    console.error('Contact API exception:', err);
    return NextResponse.json(
      { error: `We could not deliver your message automatically. Please email ${site.email} directly.` },
      { status: 502 }
    );
  }
}

