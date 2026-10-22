'use client';
import { useState } from 'react';
import emailjs from '@emailjs/browser';
import { FiMail, FiSend } from 'react-icons/fi';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import Section from './Section';
import Reveal from './Reveal';
import { profile } from '@/data/profile';

// EmailJS keys come from environment variables only (see .env.example and README).
const SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
const PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

const links = [
  { icon: FiMail, label: 'Email', value: profile.email, href: `mailto:${profile.email}` },
  { icon: FaLinkedin, label: 'LinkedIn', value: 'priya-kushwaha2892', href: profile.linkedin },
  { icon: FaGithub, label: 'GitHub', value: 'Priya-2892', href: profile.github },
];

const empty = { name: '', email: '', subject: '', message: '' };

function Field({ id, label, error, multiline, ...props }) {
  const cls = `mt-1.5 w-full rounded-md border bg-surface px-3.5 py-2.5 text-[16px] text-ink outline-none transition-colors placeholder:text-muted/60 focus:border-cobalt ${error ? 'border-red-500' : 'border-rule'}`;
  return (
    <div>
      <label htmlFor={id} className="text-[14.5px] font-medium">{label}</label>
      {multiline ? <textarea id={id} rows={5} className={`${cls} resize-y`} aria-invalid={!!error} aria-describedby={error ? `${id}-err` : undefined} {...props} />
        : <input id={id} className={cls} aria-invalid={!!error} aria-describedby={error ? `${id}-err` : undefined} {...props} />}
      {error && <p id={`${id}-err`} className="mt-1 text-sm text-red-600">{error}</p>}
    </div>
  );
}

export default function Contact() {
  const [form, setForm] = useState(empty);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('idle'); // idle | sending | sent | failed

  const set = (k) => (e) => {
    setForm((f) => ({ ...f, [k]: e.target.value }));
    setErrors((x) => ({ ...x, [k]: '' }));
    if (status === 'failed') setStatus('idle');
  };

  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name = 'Enter your name.';
    if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(form.email)) e.email = 'Enter a valid email address.';
    if (!form.subject.trim()) e.subject = 'Enter a subject.';
    if (form.message.trim().length < 10) e.message = 'Write at least 10 characters.';
    return e;
  };

  const submit = async (ev) => {
    ev.preventDefault();
    const e = validate();
    if (Object.keys(e).length) { setErrors(e); return; }
    if (!SERVICE_ID || !TEMPLATE_ID || !PUBLIC_KEY) { setStatus('failed'); return; }
    setStatus('sending');
    try {
      await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        { from_name: form.name, from_email: form.email, subject: form.subject, message: form.message, to_email: profile.email },
        PUBLIC_KEY
      );
      setStatus('sent');
      setForm(empty);
    } catch (err) {
      console.error('EmailJS error:', err);
      setStatus('failed');
    }
  };

  return (
    <Section id="contact" title="Contact">
      <p className="max-w-[56ch] text-[18px] leading-relaxed text-ink/85">
        I&apos;m looking for an SDE I role where I can build and ship full-stack features. Send a message
        and I&apos;ll reply within 24 hours.
      </p>

      <Reveal className="mt-10 grid gap-12 lg:grid-cols-[1fr_1.15fr]">
        <ul className="space-y-1">
          {links.map(({ icon: Icon, label, value, href }) => (
            <li key={label}>
              <a
                href={href}
                {...(href.startsWith('http') ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                className="flex items-center gap-4 border-b border-rule py-4 transition-colors hover:text-cobalt"
              >
                <Icon size={20} aria-hidden="true" />
                <span>
                  <span className="block text-[13.5px] text-muted">{label}</span>
                  <span className="block break-all text-[16.5px] font-medium">{value}</span>
                </span>
              </a>
            </li>
          ))}
        </ul>

        {status === 'sent' ? (
          <div role="status" className="self-start rounded-lg border border-rule bg-surface p-8">
            <h3 className="font-display text-xl font-semibold">Message sent</h3>
            <p className="mt-2 text-muted">Thanks for reaching out. I&apos;ll reply within 24 hours.</p>
            <button onClick={() => setStatus('idle')} className="btn btn-outline mt-6">Send another message</button>
          </div>
        ) : (
          <form onSubmit={submit} noValidate className="space-y-5">
            <div className="grid gap-5 sm:grid-cols-2">
              <Field id="name" label="Your name" autoComplete="name" value={form.name} onChange={set('name')} error={errors.name} />
              <Field id="email" label="Email address" type="email" autoComplete="email" value={form.email} onChange={set('email')} error={errors.email} />
            </div>
            <Field id="subject" label="Subject" placeholder="SDE I opportunity" value={form.subject} onChange={set('subject')} error={errors.subject} />
            <Field id="message" label="Message" multiline value={form.message} onChange={set('message')} error={errors.message} />
            {status === 'failed' && (
              <p role="alert" className="text-sm text-red-600">
                The message didn&apos;t send. Try again, or email {profile.email} directly.
              </p>
            )}
            <button type="submit" disabled={status === 'sending'} className="btn btn-primary w-full disabled:opacity-60">
              <FiSend aria-hidden="true" /> {status === 'sending' ? 'Sending' : 'Send message'}
            </button>
          </form>
        )}
      </Reveal>
    </Section>
  );
}
