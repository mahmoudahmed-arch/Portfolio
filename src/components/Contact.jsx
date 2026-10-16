import { useState } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, Info, Linkedin, Mail, MapPin, Phone, Send } from 'lucide-react';
import { contactInfo, personal } from '../data/portfolioData.js';
import { SectionHeading } from './About.jsx';

const initialForm = { name: '', email: '', subject: '', message: '' };

export default function Contact() {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState(null); // { type: 'info' | 'error' }

  const set = (key) => (e) => {
    setForm((f) => ({ ...f, [key]: e.target.value }));
    setErrors((prev) => ({ ...prev, [key]: undefined }));
    setStatus(null);
  };

  const validate = () => {
    const e = {};
    if (form.name.trim().length < 2) e.name = 'Please enter your name (at least 2 characters).';
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim()))
      e.email = 'Please enter a valid email address.';
    if (form.subject.trim().length < 3) e.subject = 'Please add a subject (at least 3 characters).';
    if (form.message.trim().length < 10)
      e.message = 'Please write a message of at least 10 characters.';
    return e;
  };

  const onSubmit = (ev) => {
    ev.preventDefault();
    const e = validate();
    setErrors(e);
    if (Object.keys(e).length > 0) {
      setStatus({ type: 'error' });
      document.getElementById('contact-form-status')?.focus();
      return;
    }
    // No backend: compose a mailto link so the visitor's mail app sends it.
    // We NEVER claim it was "sent" — we say the mail app was opened.
    const to = personal.email;
    const subject = encodeURIComponent(`[Portfolio] ${form.subject.trim()} — ${form.name.trim()}`);
    const body = encodeURIComponent(
      `Name: ${form.name.trim()}\nEmail: ${form.email.trim()}\n\n${form.message.trim()}\n\n— Sent from mahmoud-hassan portfolio contact form`
    );
    window.location.href = `mailto:${to}?subject=${subject}&body=${body}`;
    setStatus({ type: 'info' });
  };

  const infoCards = [
    {
      icon: Mail,
      label: 'Email',
      value: personal.email,
      href: `mailto:${personal.email}`,
      external: false,
    },
    { icon: Phone, label: 'Phone', value: personal.phone, href: personal.phoneHref, external: false },
    { icon: MapPin, label: 'Location', value: personal.location, href: null, external: false },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: personal.linkedin ? 'View profile' : 'Coming soon — link not added yet',
      href: personal.linkedin || null,
      external: true,
    },
  ];

  const inputClass = (key) => `input-field mt-1.5 ${errors[key] ? 'input-error' : ''}`;

  return (
    <section id="contact" aria-labelledby="contact-heading" className="section-pad relative">
      <div className="container-x">
        <SectionHeading
          eyebrow="Contact"
          title={contactInfo.title}
          description={contactInfo.subtitle}
        />
        <h3 id="contact-heading" className="sr-only">
          Contact Mahmoud Ahmed Hassan
        </h3>

        <div className="mt-12 grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          {/* Info */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="space-y-4"
          >
            {infoCards.map((c) => {
              const Icon = c.icon;
              const inner = (
                <>
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-sky-500/12 text-sky-300" style={{ border: '1px solid rgba(56,189,248,.25)' }}>
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <span>
                    <span className="block text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">
                      {c.label}
                    </span>
                    <span className="mt-0.5 block break-all text-sm font-semibold text-slate-100">
                      {c.value}
                    </span>
                  </span>
                </>
              );
              return c.href ? (
                <a
                  key={c.label}
                  href={c.href}
                  {...(c.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                  className="glass card-hover flex items-center gap-4 rounded-2xl p-5"
                >
                  {inner}
                </a>
              ) : (
                <div key={c.label} className="glass flex items-center gap-4 rounded-2xl p-5">
                  {inner}
                </div>
              );
            })}

            <div className="glass flex items-start gap-3 rounded-2xl p-5 text-xs leading-6 text-slate-400">
              <Info className="mt-0.5 h-4 w-4 shrink-0 text-sky-300" aria-hidden="true" />
              <p>{contactInfo.mailtoHint}</p>
            </div>
          </motion.div>

          {/* Form */}
          <motion.form
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            onSubmit={onSubmit}
            noValidate
            aria-describedby="contact-form-status"
            className="glass rounded-2xl p-6 sm:p-8"
          >
            <div
              id="contact-form-status"
              tabIndex={-1}
              role="status"
              aria-live="polite"
              className="mb-5 min-h-[1rem] text-sm"
            >
              {status?.type === 'error' && (
                <p className="flex items-start gap-2 rounded-xl border border-red-400/30 bg-red-500/10 p-3 text-red-200">
                  Please fix the highlighted fields and try again.
                </p>
              )}
              {status?.type === 'info' && (
                <p className="flex items-start gap-2 rounded-xl border border-emerald-400/30 bg-emerald-500/10 p-3 text-emerald-200">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" />
                  Your email app should now open with the message pre-filled — just press Send
                  there to deliver it to {personal.email}. Nothing was auto-sent by this site.
                </p>
              )}
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label htmlFor="cf-name" className="text-sm font-semibold text-slate-200">
                  Name <span aria-hidden="true" className="text-sky-300">*</span>
                </label>
                <input
                  id="cf-name"
                  name="name"
                  type="text"
                  autoComplete="name"
                  placeholder="Your full name"
                  value={form.name}
                  onChange={set('name')}
                  aria-invalid={Boolean(errors.name)}
                  aria-describedby={errors.name ? 'cf-name-err' : undefined}
                  className={inputClass('name')}
                />
                {errors.name && (
                  <p id="cf-name-err" className="mt-1.5 text-xs text-red-300">{errors.name}</p>
                )}
              </div>
              <div>
                <label htmlFor="cf-email" className="text-sm font-semibold text-slate-200">
                  Email <span aria-hidden="true" className="text-sky-300">*</span>
                </label>
                <input
                  id="cf-email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  placeholder="you@example.com"
                  value={form.email}
                  onChange={set('email')}
                  aria-invalid={Boolean(errors.email)}
                  aria-describedby={errors.email ? 'cf-email-err' : undefined}
                  className={inputClass('email')}
                />
                {errors.email && (
                  <p id="cf-email-err" className="mt-1.5 text-xs text-red-300">{errors.email}</p>
                )}
              </div>
            </div>

            <div className="mt-5">
              <label htmlFor="cf-subject" className="text-sm font-semibold text-slate-200">
                Subject <span aria-hidden="true" className="text-sky-300">*</span>
              </label>
              <input
                id="cf-subject"
                name="subject"
                type="text"
                placeholder="Project idea, opportunity, collaboration…"
                value={form.subject}
                onChange={set('subject')}
                aria-invalid={Boolean(errors.subject)}
                aria-describedby={errors.subject ? 'cf-subject-err' : undefined}
                className={inputClass('subject')}
              />
              {errors.subject && (
                <p id="cf-subject-err" className="mt-1.5 text-xs text-red-300">{errors.subject}</p>
              )}
            </div>

            <div className="mt-5">
              <label htmlFor="cf-message" className="text-sm font-semibold text-slate-200">
                Message <span aria-hidden="true" className="text-sky-300">*</span>
              </label>
              <textarea
                id="cf-message"
                name="message"
                rows={5}
                placeholder="Tell me about your project, timeline, and goals…"
                value={form.message}
                onChange={set('message')}
                aria-invalid={Boolean(errors.message)}
                aria-describedby={errors.message ? 'cf-message-err' : undefined}
                className={`${inputClass('message')} resize-y`}
              />
              {errors.message && (
                <p id="cf-message-err" className="mt-1.5 text-xs text-red-300">{errors.message}</p>
              )}
            </div>

            <button type="submit" className="btn-primary mt-6 w-full sm:w-auto">
              <Send className="h-4 w-4" aria-hidden="true" />
              Send via Email App
            </button>
            <p className="mt-3 text-xs leading-6 text-slate-500">
              Prefer direct email? Write to{' '}
              <a href={`mailto:${personal.email}`} className="font-semibold text-sky-300 hover:underline">
                {personal.email}
              </a>
              .
            </p>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
