import React from 'react';
import { Link } from 'react-router-dom';
import Reveal from '../components/Reveal';
import SectionHeading from '../components/SectionHeading';
import { certifications, education, experience, openSource } from '../data/profile';
import { formatDuration, monthsSince, splitMetrics } from '../utils/experience';
import './Portfolio.css';

const monthYear = (date) => date.toLocaleDateString('en-US', { month: 'short', year: 'numeric' });

function WithMetrics({ text }) {
  return splitMetrics(text).map((part, i) =>
    part.metric ? <strong key={i} className="metric">{part.text}</strong> : <React.Fragment key={i}>{part.text}</React.Fragment>
  );
}

function StackChips({ stack }) {
  return (
    <ul className="chip-list" aria-label="Technologies">
      {stack.map((tech) => (
        <li key={tech} className="chip">
          {tech}
        </li>
      ))}
    </ul>
  );
}

function Points({ points }) {
  return (
    <ul className="timeline-points">
      {points.map((point) => (
        <li key={point}>
          <WithMetrics text={point} />
        </li>
      ))}
    </ul>
  );
}

function Portfolio() {
  return (
    <>
      <section className="page-intro">
        <div className="container">
          <Reveal>
            <span className="eyebrow">Experience</span>
            <h1>Shipping GenAI to production</h1>
            <p>Highlights from the systems I've designed and built: agents, retrieval, document intelligence and the backends that serve them.</p>
          </Reveal>
        </div>
      </section>

      <section className="section-tight">
        <div className="container">
          {experience.map((job) => (
            <div key={`${job.company}-${job.role}`} className="job">
              <Reveal className="job-header card">
                <span className="icon-badge">
                  <i className="bi bi-briefcase" aria-hidden="true" />
                </span>
                <div>
                  <h2>{job.role}</h2>
                  <p className="job-company">
                    {job.company}
                    {job.location && <span className="job-location"> · {job.location}</span>}
                  </p>
                </div>
                <div className="job-dates">
                  <span>
                    {monthYear(job.start)} – {job.end ? monthYear(job.end) : 'Present'}
                  </span>
                  <span className="chip">{formatDuration(monthsSince(job.start, job.end || new Date()))}</span>
                </div>
              </Reveal>

              {job.points && (
                <Reveal className="job-summary card">
                  {job.stack && <StackChips stack={job.stack} />}
                  <Points points={job.points} />
                </Reveal>
              )}

              {job.projects && (
                <ol className="timeline">
                  {job.projects.map((project, index) => (
                    <Reveal as="li" key={project.name} delay={index * 0.05} className="timeline-item">
                      <span className="timeline-dot" aria-hidden="true" />
                      <article className="timeline-card card">
                        <header>
                          <h3>
                            {project.name}
                            <span className="timeline-subtitle"> · {project.subtitle}</span>
                          </h3>
                          <StackChips stack={project.stack} />
                        </header>
                        <Points points={project.points} />
                      </article>
                    </Reveal>
                  ))}
                </ol>
              )}
            </div>
          ))}

          <Reveal className="experience-footer">
            <p className="muted">These are private company projects, so the code isn't public.</p>
            <div className="btn-row">
              <Link to="/resume" className="btn btn-ghost">
                <i className="bi bi-file-earmark-text" aria-hidden="true" /> View resume
              </Link>
              <Link to="/contact" className="btn btn-primary">
                Get in touch <i className="bi bi-arrow-right" aria-hidden="true" />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeading eyebrow="Open source" title="Merged contributions">
            Fixes contributed upstream to the libraries I use every day.
          </SectionHeading>
          <div className="extras-grid">
            {openSource.map((item, index) => (
              <Reveal key={item.link} delay={index * 0.08}>
                <a href={item.link} target="_blank" rel="noopener noreferrer" className="extra-card card">
                  <span className="icon-badge">
                    <i className="bi bi-git" aria-hidden="true" />
                  </span>
                  <span className="extra-body">
                    <span className="extra-title">
                      {item.repo} <span className="muted">· {item.title}</span>
                    </span>
                    <span className="muted">{item.text}</span>
                    <span className="chip extra-chip">
                      <i className="bi bi-check2-circle" aria-hidden="true" />&nbsp;Merged
                    </span>
                  </span>
                </a>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-tight">
        <div className="container extras-columns">
          <div>
            <SectionHeading eyebrow="Learning" title="Certifications" />
            <ul className="extras-list">
              {certifications.map((cert, index) => (
                <Reveal as="li" key={cert.title} delay={index * 0.06} className="extra-card card">
                  <span className="icon-badge">
                    <i className="bi bi-award" aria-hidden="true" />
                  </span>
                  <span className="extra-body">
                    <span className="extra-title">{cert.title}</span>
                    <span className="muted">
                      {cert.issuer}
                      {cert.date && ` · ${cert.date}`}
                    </span>
                  </span>
                </Reveal>
              ))}
            </ul>
          </div>

          <div>
            <SectionHeading eyebrow="Education" title="Background" />
            <Reveal className="extra-card card">
              <span className="icon-badge">
                <i className="bi bi-mortarboard" aria-hidden="true" />
              </span>
              <span className="extra-body">
                <span className="extra-title">{education.school}</span>
                <span className="muted">{education.degree}</span>
                <span className="muted">
                  {education.years} · <strong className="metric">{education.grade}</strong>
                </span>
              </span>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}

export default Portfolio;
