import React from 'react';
import Reveal from '../components/Reveal';
import ContactForm from '../components/ContactForm';
import SocialLinks from '../components/SocialLinks';
import { profile } from '../data/profile';
import './Contact.css';

function Contact() {
  return (
    <>
      <section className="page-intro">
        <div className="container">
          <Reveal>
            <span className="eyebrow">Contact</span>
            <h1>Let's build something together</h1>
            <p>Have a role, project or question in mind? Send a message and I'll get back to you as soon as I can.</p>
          </Reveal>
        </div>
      </section>

      <section className="section-tight">
        <div className="container contact-grid">
          <Reveal className="contact-info">
            <a href={`mailto:${profile.email}`} className="contact-method card">
              <span className="icon-badge">
                <i className="bi bi-envelope" aria-hidden="true" />
              </span>
              <span>
                <span className="contact-method-label">Email</span>
                <span className="contact-method-value">{profile.email}</span>
              </span>
            </a>
            <div className="contact-method card">
              <span className="icon-badge">
                <i className="bi bi-briefcase" aria-hidden="true" />
              </span>
              <span>
                <span className="contact-method-label">Currently</span>
                <span className="contact-method-value">
                  {profile.role} @ {profile.company}
                </span>
              </span>
            </div>
            <div className="contact-method card">
              <span className="icon-badge">
                <i className="bi bi-geo-alt" aria-hidden="true" />
              </span>
              <span>
                <span className="contact-method-label">Based in</span>
                <span className="contact-method-value">{profile.location}</span>
              </span>
            </div>
            <div className="contact-social">
              <h2>Find me online</h2>
              <SocialLinks />
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <ContactForm />
          </Reveal>
        </div>
      </section>
    </>
  );
}

export default Contact;
