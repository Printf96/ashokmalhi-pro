import { useState, type FormEvent } from 'react';
import { SeoHead } from '@/components/seo/SeoHead';
import { IDENTITY, buildBreadcrumbSchema } from '@/lib/seo';
import { SOCIAL_LINKS } from '@/lib/socialConfig';
import styles from './ContactPage.module.css';

// Pulled from the single central social/contact configuration rather
// than hardcoded again here, so the phone/WhatsApp number is defined
// in exactly one place across the whole site.
const PHONE_LINK = SOCIAL_LINKS.find((l) => l.platform === 'phone');
const WHATSAPP_LINK = SOCIAL_LINKS.find((l) => l.platform === 'whatsapp');
const EMAIL_LINK = SOCIAL_LINKS.find((l) => l.platform === 'email');

interface FormState {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const INITIAL_FORM: FormState = { name: '', email: '', subject: '', message: '' };

export function ContactPage() {
  const [form, setForm] = useState<FormState>(INITIAL_FORM);
  const [fieldErrors, setFieldErrors] = useState<Partial<Record<keyof FormState, string>>>({});

  function validate(): boolean {
    const errors: Partial<Record<keyof FormState, string>> = {};
    if (form.name.trim().length < 2) errors.name = 'Please enter your name.';
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) errors.email = 'Please enter a valid email address.';
    if (form.subject.trim().length < 3) errors.subject = 'Please enter a subject.';
    if (form.message.trim().length < 10) errors.message = 'Message must be at least 10 characters.';
    setFieldErrors(errors);
    return Object.keys(errors).length === 0;
  }

  // No backend exists yet for this project, so the form composes a
  // mailto: to the verified address instead of posting anywhere —
  // never a fake "message sent" confirmation for a request that went
  // nowhere.
  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (!validate() || !EMAIL_LINK?.url) return;
    const body = `From: ${form.name} (${form.email})\n\n${form.message}`;
    const mailto = `${EMAIL_LINK.url}?subject=${encodeURIComponent(form.subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailto;
  }

  return (
    <>
      <SeoHead
        title={`Contact | ${IDENTITY.displayName}`}
        description={`Get in touch with ${IDENTITY.displayName}, ${IDENTITY.professionalTitle} at ${IDENTITY.affiliation}.`}
        path="/contact"
        jsonLd={[
          buildBreadcrumbSchema([
            { name: 'Home', path: '/' },
            { name: 'Contact', path: '/contact' },
          ]),
        ]}
      />

      <section className={styles.section}>
        <h1>Contact</h1>
        <div className={styles.grid}>
          <div className={styles.infoCard}>
            <div className={styles.infoRow}>
              <p className={styles.infoLabel}>Institution</p>
              <p>{IDENTITY.affiliation}</p>
            </div>
            {EMAIL_LINK?.url && (
              <div className={styles.infoRow}>
                <p className={styles.infoLabel}>Email</p>
                <p>
                  <a href={EMAIL_LINK.url} title={EMAIL_LINK.tooltip}>
                    {EMAIL_LINK.url.replace('mailto:', '')}
                  </a>
                </p>
              </div>
            )}
            {PHONE_LINK?.url && (
              <div className={styles.infoRow}>
                <p className={styles.infoLabel}>Phone</p>
                <p>
                  <a href={PHONE_LINK.url} title={PHONE_LINK.tooltip}>
                    {PHONE_LINK.url.replace('tel:', '')}
                  </a>
                </p>
              </div>
            )}
            {WHATSAPP_LINK?.url && (
              <div className={styles.infoRow}>
                <p className={styles.infoLabel}>WhatsApp Business</p>
                <p>
                  <a
                    href={WHATSAPP_LINK.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    title={WHATSAPP_LINK.tooltip}
                  >
                    Message on WhatsApp
                  </a>
                </p>
              </div>
            )}
          </div>

          <form className={styles.form} onSubmit={handleSubmit} noValidate>
            <div className={styles.field}>
              <label htmlFor="name">Name</label>
              <input
                id="name"
                className={styles.input}
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                aria-invalid={!!fieldErrors.name}
                aria-describedby={fieldErrors.name ? 'name-error' : undefined}
                autoComplete="name"
                required
              />
              {fieldErrors.name && <span id="name-error">{fieldErrors.name}</span>}
            </div>

            <div className={styles.field}>
              <label htmlFor="email">Email</label>
              <input
                id="email"
                type="email"
                className={styles.input}
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                aria-invalid={!!fieldErrors.email}
                aria-describedby={fieldErrors.email ? 'email-error' : undefined}
                autoComplete="email"
                required
              />
              {fieldErrors.email && <span id="email-error">{fieldErrors.email}</span>}
            </div>

            <div className={styles.field}>
              <label htmlFor="subject">Subject</label>
              <input
                id="subject"
                className={styles.input}
                value={form.subject}
                onChange={(e) => setForm({ ...form, subject: e.target.value })}
                aria-invalid={!!fieldErrors.subject}
                aria-describedby={fieldErrors.subject ? 'subject-error' : undefined}
                required
              />
              {fieldErrors.subject && <span id="subject-error">{fieldErrors.subject}</span>}
            </div>

            <div className={styles.field}>
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                className={styles.textarea}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                aria-invalid={!!fieldErrors.message}
                aria-describedby={fieldErrors.message ? 'message-error' : undefined}
                required
              />
              {fieldErrors.message && <span id="message-error">{fieldErrors.message}</span>}
            </div>

            <button type="submit" className={styles.submitBtn}>
              Send message
            </button>
          </form>
        </div>
      </section>
    </>
  );
}
