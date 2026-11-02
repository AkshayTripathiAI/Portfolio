import React, { useState } from 'react';
import { API_URL } from '../config';
import './ContactForm.css';

const EMPTY_FORM = { name: '', email: '', message: '', company: '' };

function ContactForm() {
  const [formData, setFormData] = useState(EMPTY_FORM);
  const [status, setStatus] = useState({ state: 'idle', message: '' });
  const [fieldErrors, setFieldErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (fieldErrors[name]) setFieldErrors((prev) => ({ ...prev, [name]: undefined }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ state: 'sending', message: '' });
    setFieldErrors({});

    try {
      const response = await fetch(`${API_URL}/api/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      const data = await response.json().catch(() => ({}));

      if (!response.ok) {
        setFieldErrors(data.fields || {});
        throw new Error(data.error || 'Failed to send the message.');
      }

      setStatus({ state: 'success', message: "Thanks! Your message is on its way. I'll get back to you soon." });
      setFormData(EMPTY_FORM);
    } catch (error) {
      const message = error instanceof TypeError ? 'Network error. Please check your connection and try again.' : error.message;
      setStatus({ state: 'error', message });
    }
  };

  const sending = status.state === 'sending';

  return (
    <form className="contact-form card" onSubmit={handleSubmit}>
      <div className="form-row">
        <div className="form-field">
          <label htmlFor="contact-name">Name</label>
          <input
            id="contact-name"
            type="text"
            name="name"
            placeholder="Your name"
            autoComplete="name"
            maxLength={100}
            value={formData.name}
            onChange={handleChange}
            aria-invalid={Boolean(fieldErrors.name)}
            required
          />
          {fieldErrors.name && <span className="field-error">{fieldErrors.name}</span>}
        </div>
        <div className="form-field">
          <label htmlFor="contact-email">Email</label>
          <input
            id="contact-email"
            type="email"
            name="email"
            placeholder="you@example.com"
            autoComplete="email"
            maxLength={254}
            value={formData.email}
            onChange={handleChange}
            aria-invalid={Boolean(fieldErrors.email)}
            required
          />
          {fieldErrors.email && <span className="field-error">{fieldErrors.email}</span>}
        </div>
      </div>

      <div className="form-field">
        <label htmlFor="contact-message">Message</label>
        <textarea
          id="contact-message"
          name="message"
          rows={6}
          placeholder="Tell me about your project, role or idea…"
          maxLength={5000}
          value={formData.message}
          onChange={handleChange}
          aria-invalid={Boolean(fieldErrors.message)}
          required
        />
        {fieldErrors.message && <span className="field-error">{fieldErrors.message}</span>}
      </div>

      {/* Honeypot: hidden from people, filled in by bots. */}
      <div className="form-honeypot" aria-hidden="true">
        <label htmlFor="contact-company">Company</label>
        <input id="contact-company" type="text" name="company" tabIndex={-1} autoComplete="off" value={formData.company} onChange={handleChange} />
      </div>

      <button type="submit" className="btn btn-primary form-submit" disabled={sending}>
        {sending ? (
          <>
            <span className="spinner" aria-hidden="true" /> Sending…
          </>
        ) : (
          <>
            Send message <i className="bi bi-send" aria-hidden="true" />
          </>
        )}
      </button>

      <p className={`form-status form-status-${status.state}`} role="status" aria-live="polite">
        {status.message}
      </p>
    </form>
  );
}

export default ContactForm;
