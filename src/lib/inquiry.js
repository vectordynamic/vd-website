export const INQUIRY_TYPES = [
  'Systems Review',
  'Discovery Call',
  'Custom software or platform',
  'ERP or business system',
  'AI or automation',
  'Dedicated engineering pod',
  'Referral partnership',
  'White-label / agency partnership',
  'Software house overflow / trial task',
  'Something else',
];

export const BUDGET_RANGES = [
  'Not sure yet — help us scope it',
  'Under $5,000 (focused workflow / pilot)',
  '$5,000 – $15,000',
  '$15,000 – $50,000',
  '$50,000+',
  'Monthly retainer / dedicated pod',
];

export function escapeHtml(value) {
  if (value === null || value === undefined) return '';
  return String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

export function isSpam(input) {
  if (!input || typeof input !== 'object') return false;
  return typeof input.website === 'string' && input.website.trim().length > 0;
}

const trimMax = (val, max) => (typeof val === 'string' ? val.trim().slice(0, max) : '');
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

export function validateInquiry(input) {
  const raw = input && typeof input === 'object' ? input : {};
  const errors = {};

  const name = typeof raw.name === 'string' ? raw.name.trim() : '';
  const email = typeof raw.email === 'string' ? raw.email.trim() : '';
  const company = typeof raw.company === 'string' ? raw.company.trim() : '';
  const companyUrl = typeof raw.companyUrl === 'string' ? raw.companyUrl.trim() : '';
  const phone = typeof raw.phone === 'string' ? raw.phone.trim() : '';
  const inquiryType = typeof raw.inquiryType === 'string' ? raw.inquiryType.trim() : '';
  const budget = typeof raw.budget === 'string' ? raw.budget.trim() : '';
  const timezone = typeof raw.timezone === 'string' ? raw.timezone.trim() : '';
  const message = typeof raw.message === 'string' ? raw.message.trim() : '';

  if (name.length < 2 || name.length > 100) {
    errors.name = 'Please enter your name (2–100 characters).';
  }
  if (!email || email.length > 254 || !EMAIL_RE.test(email)) {
    errors.email = 'Please enter a valid work email address.';
  }
  if (company.length > 120) {
    errors.company = 'Company name must be 120 characters or fewer.';
  }
  if (companyUrl.length > 200) {
    errors.companyUrl = 'Website URL must be 200 characters or fewer.';
  }
  if (phone.length > 40) {
    errors.phone = 'Phone number must be 40 characters or fewer.';
  }
  if (inquiryType && !INQUIRY_TYPES.includes(inquiryType)) {
    errors.inquiryType = 'Please choose a valid inquiry type.';
  }
  if (budget && !BUDGET_RANGES.includes(budget)) {
    errors.budget = 'Please choose a valid budget range.';
  }
  if (timezone.length > 100) {
    errors.timezone = 'Timezone window must be 100 characters or fewer.';
  }
  if (message.length < 10 || message.length > 5000) {
    errors.message = 'Please add a short note (at least 10 characters).';
  }

  if (Object.keys(errors).length > 0) {
    return { ok: false, errors };
  }

  return {
    ok: true,
    data: {
      name,
      email,
      company,
      companyUrl,
      phone,
      inquiryType,
      budget,
      timezone,
      message,
      utm_source: trimMax(raw.utm_source, 100),
      utm_medium: trimMax(raw.utm_medium, 100),
      utm_campaign: trimMax(raw.utm_campaign, 100),
      utm_content: trimMax(raw.utm_content, 100),
      referrer: trimMax(raw.referrer, 200),
      page: trimMax(raw.page, 200),
    },
  };
}

export function buildInquiryEmail(data) {
  const cleanLine = (s) => String(s || '').replace(/[\r\n]+/g, ' ').trim();
  const label = cleanLine(data.inquiryType) || 'Inquiry';
  const who = cleanLine(data.name);
  const org = cleanLine(data.company);
  const subject = `[Vector Dynamic] ${label}: ${who}${org ? ` (${org})` : ''}`;

  const rows = [
    ['Inquiry Type', data.inquiryType || 'General inquiry'],
    ['Name', data.name],
    ['Email', data.email],
    ['Company', data.company],
    ['Website', data.companyUrl],
    ['Phone', data.phone],
    ['Budget / Scope', data.budget],
    ['Timezone Overlap', data.timezone],
    ['Submitted From Page', data.page],
    ['UTM Source', data.utm_source],
    ['UTM Medium', data.utm_medium],
    ['UTM Campaign', data.utm_campaign],
    ['UTM Content', data.utm_content],
    ['Initial Referrer', data.referrer],
  ].filter(([, val]) => Boolean(val));

  const htmlRows = rows
    .map(
      ([k, v]) =>
        `<tr><td style="padding:8px 12px;border-bottom:1px solid #d9d3c7;font-weight:600;color:#101418;width:180px;vertical-align:top;">${escapeHtml(k)}</td><td style="padding:8px 12px;border-bottom:1px solid #d9d3c7;color:#3a424b;">${escapeHtml(v)}</td></tr>`
    )
    .join('');

  const escapedMsg = escapeHtml(data.message).replace(/\r?\n/g, '<br>');

  const html = `<!doctype html>
<html>
  <body style="font-family:system-ui,-apple-system,sans-serif;background:#f6f3ec;padding:24px;color:#101418;">
    <div style="max-width:640px;margin:0 auto;background:#ffffff;border:1px solid #d9d3c7;padding:24px;">
      <h2 style="margin:0 0 16px;font-size:20px;color:#101418;">${escapeHtml(subject)}</h2>
      <table style="width:100%;border-collapse:collapse;font-size:14px;margin-bottom:20px;">
        ${htmlRows}
      </table>
      <div style="font-size:13px;font-weight:600;text-transform:uppercase;letter-spacing:0.06em;color:#5b636b;margin-bottom:8px;">Details / Workflow</div>
      <div style="font-size:15px;line-height:1.6;color:#101418;background:#f6f3ec;padding:16px;border:1px solid #d9d3c7;">${escapedMsg}</div>
    </div>
  </body>
</html>`;

  const text = [
    subject,
    '----------------------------------------',
    ...rows.map(([k, v]) => `${k}: ${v}`),
    '',
    'Details / Workflow:',
    data.message,
  ].join('\n');

  return { subject, html, text };
}

