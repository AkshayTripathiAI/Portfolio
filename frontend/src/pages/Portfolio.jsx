import React from 'react';
import { Link } from 'react-router-dom';
import Reveal from '../components/Reveal';
import { experience } from '../data/profile';
import { formatDuration, monthsSince, splitMetrics } from '../utils/experience';
import './Portfolio.css';

const monthYear = (date) => date.toLocaleDateString('en-US', { month: 'short', year: 'numeric' });

function WithMetrics({ text }) {
  return splitMetrics(text).map((part, i) =>
    part.metric ? <strong key={i} className="metric">{part.text}</strong> : <React.Fragment key={i}>{part.text}</React.Fragment>
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
            <p>Highlights from the systems I've designed and built: retrieval, agents, fine-tuned models and the backends that serve them.</p>
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
                  <p className="job-company">{job.company}</p>
                </div>
                <div className="job-dates">
                  <span>
                    {monthYear(job.start)} – {job.end ? monthYear(job.end) : 'Present'}
                  </span>
                  <span className="chip">{formatDuration(monthsSince(job.start, job.end || new Date()))}</span>
                </div>
              </Reveal>

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
                        <ul className="chip-list" aria-label="Technologies">
                          {project.stack.map((tech) => (
                            <li key={tech} className="chip">
                              {tech}
                            </li>
                          ))}
                        </ul>
                      </header>
                      <ul className="timeline-points">
                        {project.points.map((point) => (
                          <li key={point}>
                            <WithMetrics text={point} />
                          </li>
                        ))}
                      </ul>
                    </article>
                  </Reveal>
                ))}
              </ol>
            </div>
          ))}

          <Reveal className="experience-footer">
            <p className="muted">All of the above are private company projects, so the code isn't public.</p>
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
    </>
  );
}

export default Portfolio;
