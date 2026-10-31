import { useState } from 'react'
import { links } from '../content'

// Messages are delivered to mohsalma.mt@gmail.com by Web3Forms (free, no backend needed).
// The access key is public by design (Web3Forms says it is safe in client-side code).
// To use a different key, set VITE_WEB3FORMS_KEY in a .env file.
const WEB3FORMS_KEY = import.meta.env.VITE_WEB3FORMS_KEY || 'abbfc4ae-ec0e-4395-b894-498f9f4ce639'
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

const icons = {
  email: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" aria-hidden="true">
      <rect x="3" y="5" width="18" height="14" rx="2.5" />
      <path d="m4 7 8 6 8-6" />
    </svg>
  ),
  whatsapp: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" aria-hidden="true">
      <path d="M20 11.5a8 8 0 0 1-11.8 7L4 20l1.5-4.1A8 8 0 1 1 20 11.5Z" />
      <path d="M9 10.5c.4 1.6 1.9 3.1 3.5 3.5" strokeLinecap="round" />
    </svg>
  ),
  linkedin: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" aria-hidden="true">
      <rect x="3" y="7" width="18" height="13" rx="2.5" />
      <path d="M9 7V5.5A1.5 1.5 0 0 1 10.5 4h3A1.5 1.5 0 0 1 15 5.5V7M3 12.5h18" />
    </svg>
  ),
  github: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="m8 8-4 4 4 4M16 8l4 4-4 4M13.5 5l-3 14" />
    </svg>
  ),
}

function CopyButton({ value, c }) {
  const [copied, setCopied] = useState(false)
  const copy = async () => {
    try {
      await navigator.clipboard.writeText(value)
      setCopied(true)
      setTimeout(() => setCopied(false), 1800)
    } catch {
      // clipboard blocked: the value is still visible and selectable
    }
  }
  return (
    <button type="button" className="copy-btn" onClick={copy} aria-live="polite">
      {copied ? c.copied : c.copy}
    </button>
  )
}

function Channels({ t }) {
  const c = t.contact
  const rows = [
    { key: 'email', value: links.email, href: `mailto:${links.email}`, copy: links.email },
    { key: 'whatsapp', value: links.phone, href: links.whatsapp, copy: links.phone.replace(/\s/g, '') },
    { key: 'linkedin', value: 'in/m0hamed-salma', href: links.linkedin },
    { key: 'github', value: 'Mohammed-Salma', href: links.github },
  ]
  return (
    <ul className="channels">
      {rows.map((r) => (
        <li key={r.key}>
          <span className="channel-icon">{icons[r.key]}</span>
          <span className="channel-text">
            <span className="channel-label">{c.channels[r.key]}</span>
            <a
              className="channel-value"
              href={r.href}
              dir="ltr"
              {...(r.key === 'email' ? {} : { target: '_blank', rel: 'noreferrer' })}
            >
              {r.value}
            </a>
          </span>
          {r.copy && <CopyButton value={r.copy} c={c} />}
        </li>
      ))}
    </ul>
  )
}

const EMPTY = { name: '', email: '', subject: '', message: '' }

function ContactForm({ t }) {
  const c = t.contact
  const [form, setForm] = useState(EMPTY)
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState('idle') // idle | sending | sent | failed | mailto

  const update = (e) => {
    const { name, value } = e.target
    setForm((f) => ({ ...f, [name]: value }))
    if (errors[name]) setErrors((er) => ({ ...er, [name]: undefined }))
  }

  const validate = () => {
    const er = {}
    if (!form.name.trim()) er.name = c.required
    if (!form.email.trim()) er.email = c.required
    else if (!EMAIL_RE.test(form.email.trim())) er.email = c.badEmail
    if (!form.message.trim()) er.message = c.required
    setErrors(er)
    return Object.keys(er).length === 0
  }

  const submit = async (e) => {
    e.preventDefault()
    if (!validate()) return
    const subject = form.subject.trim() || `Portfolio message from ${form.name.trim()}`

    if (!WEB3FORMS_KEY) {
      const body = `${form.message}\n\n${form.name}\n${form.email}`
      window.location.href = `mailto:${links.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
      setStatus('mailto')
      return
    }

    setStatus('sending')
    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          access_key: WEB3FORMS_KEY,
          subject,
          from_name: 'Portfolio contact form',
          name: form.name.trim(),
          email: form.email.trim(),
          message: form.message.trim(),
          botcheck: e.target.botcheck.checked,
        }),
      })
      const data = await res.json()
      if (!data.success) throw new Error(data.message)
      setStatus('sent')
      setForm(EMPTY)
    } catch {
      setStatus('failed')
    }
  }

  if (status === 'sent') {
    return (
      <div className="form-card form-done" role="status">
        <span className="done-mark" aria-hidden="true">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="m5 12.5 4.5 4.5L19 7.5" /></svg>
        </span>
        <p>{c.sent}</p>
        <button type="button" className="btn btn-ghost" onClick={() => setStatus('idle')}>{c.sendAnother}</button>
      </div>
    )
  }

  const field = (name, label, props = {}, hint) => (
    <div className={`field${errors[name] ? ' has-error' : ''}`}>
      <label htmlFor={`cf-${name}`}>
        {label}
        {hint && <span className="field-hint">{hint}</span>}
      </label>
      {props.rows ? (
        <textarea id={`cf-${name}`} name={name} value={form[name]} onChange={update}
          aria-invalid={!!errors[name]} aria-describedby={errors[name] ? `cf-${name}-err` : undefined} {...props} />
      ) : (
        <input id={`cf-${name}`} name={name} value={form[name]} onChange={update}
          aria-invalid={!!errors[name]} aria-describedby={errors[name] ? `cf-${name}-err` : undefined} {...props} />
      )}
      {errors[name] && <p className="field-error" id={`cf-${name}-err`}>{errors[name]}</p>}
    </div>
  )

  return (
    <form className="form-card" onSubmit={submit} noValidate>
      <h3>{c.formTitle}</h3>
      <div className="field-row">
        {field('name', c.name, { autoComplete: 'name' })}
        {field('email', c.email, { type: 'email', autoComplete: 'email', dir: 'ltr' })}
      </div>
      {field('subject', c.subject, {}, c.subjectHint)}
      {field('message', c.message, { rows: 5, placeholder: c.messageHint })}
      <input type="checkbox" name="botcheck" className="hp" tabIndex={-1} autoComplete="off" aria-hidden="true" />

      {status === 'failed' && (
        <p className="form-note form-note-error" role="alert">
          {c.failed} <a href={`mailto:${links.email}`} dir="ltr">{links.email}</a>
        </p>
      )}
      {status === 'mailto' && <p className="form-note" role="status">{c.mailOpened}</p>}

      <button type="submit" className="btn btn-send" disabled={status === 'sending'}>
        {status === 'sending' ? c.sending : WEB3FORMS_KEY ? c.send : c.openMail}
      </button>
    </form>
  )
}

export default function Contact({ t }) {
  return (
    <>
      <section className="contact" id="contact" aria-labelledby="contact-title">
        <div className="wrap contact-grid">
          <div className="contact-info">
            <h2 id="contact-title">{t.contactTitle}</h2>
            <p className="contact-text">{t.contactText}</p>
            <Channels t={t} />
            <p className="contact-based">{t.contact.based}</p>
          </div>
          <ContactForm t={t} />
        </div>
      </section>
      <footer className="site-footer">
        <div className="wrap footer-inner">
          <span>© {new Date().getFullYear()} {t.hero.name}</span>
          <span>{t.footer}</span>
        </div>
      </footer>
    </>
  )
}
