// Contact form delivery. Uses Resend if RESEND_API_KEY is set on the project,
// otherwise relays to FormSubmit.co (free, no account; needs one-time activation
// click from the inbox the first time it receives a submission).
const TO = 'ialbertbislimi@gmail.com';
const esc = (s) => String(s || '').slice(0, 5000);

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).json({ ok: false, error: 'method' });
  let b = req.body || {};
  if (typeof b === 'string') { try { b = JSON.parse(b); } catch { b = {}; } }
  if (b._gotcha) return res.status(200).json({ ok: true }); // honeypot: pretend success
  const name = esc(b.name).trim(), email = esc(b.email).trim(), type = esc(b.type).trim(), message = esc(b.message).trim();
  if (!name || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) || message.length < 10)
    return res.status(400).json({ ok: false, error: 'invalid' });
  const subject = `New project: ${type || 'enquiry'}, from ${name}`;
  const text = `Name: ${name}\nEmail: ${email}\nProject type: ${type}\n\n${message}`;
  try {
    if (process.env.RESEND_API_KEY) {
      const r = await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: { Authorization: `Bearer ${process.env.RESEND_API_KEY}`, 'Content-Type': 'application/json' },
        body: JSON.stringify({ from: 'albertbislimi.com <onboarding@resend.dev>', to: [TO], reply_to: email, subject, text }),
      });
      if (!r.ok) throw new Error('resend ' + r.status);
      return res.status(200).json({ ok: true, via: 'resend' });
    }
    const r = await fetch(`https://formsubmit.co/ajax/${TO}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Accept: 'application/json', Referer: 'https://albertbislimi.com/', Origin: 'https://albertbislimi.com' },
      body: JSON.stringify({ name, email, type, message, _subject: subject, _replyto: email, _template: 'table', _captcha: 'false' }),
    });
    const j = await r.json().catch(() => ({}));
    const ok = r.ok && (j.success === true || j.success === 'true');
    const activation = /activat/i.test(j.message || '');
    if (!ok && !activation) throw new Error('formsubmit ' + r.status + ' ' + (j.message || ''));
    return res.status(200).json({ ok: true, via: 'formsubmit', activation });
  } catch (e) {
    return res.status(502).json({ ok: false, error: 'delivery' });
  }
}
