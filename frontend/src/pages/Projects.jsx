import React from 'react';
import Reveal from '../components/Reveal';
import ProjectsList from '../components/ProjectsList';
import { socials, earlierProjects, games } from '../data/profile';

function Projects() {
  const github = socials.find((s) => s.label === 'GitHub');

  return (
    <>
      <section className="page-intro">
        <div className="container">
          <Reveal>
            <span className="eyebrow">Projects</span>
            <h1>Things I've built</h1>
            <p>AI projects I've built outside work: agents, RAG, LLM pipelines and speech tooling. The source for each one is on GitHub.</p>
          </Reveal>
        </div>
      </section>

      <section className="section-tight">
        <div className="container">
          <ProjectsList />

          <Reveal className="earlier-projects">
            <h2>Browser games</h2>
            <p>Small games I made while learning JavaScript and React; most are playable right here. The Chhota Bheem ones are non-commercial fan games; the characters belong to their owners.</p>
          </Reveal>
          <ProjectsList items={games} demoLabel="Play now" />

          <Reveal className="earlier-projects">
            <h2>Earlier web projects</h2>
            <p>Smaller React and JavaScript apps from when I was building frontend skills. Most run live in your browser.</p>
            <ul className="earlier-grid">
              {earlierProjects.map((project) => (
                <li key={project.title} className="earlier-card">
                  {project.image && (
                    <a href={project.demo || project.link} target="_blank" rel="noopener noreferrer" className="earlier-thumb" tabIndex={-1} aria-hidden="true">
                      <img src={project.image} alt="" loading="lazy" />
                    </a>
                  )}
                  <span className="earlier-title">{project.title}</span>
                  <span className="earlier-desc">{project.description}</span>
                  <span className="earlier-links">
                    {project.demo && (
                      <a href={project.demo} target="_blank" rel="noopener noreferrer">
                        Live demo <i className="bi bi-box-arrow-up-right" aria-hidden="true" />
                        <span className="visually-hidden"> – {project.title}</span>
                      </a>
                    )}
                    <a href={project.link} target="_blank" rel="noopener noreferrer">
                      Code <i className="bi bi-github" aria-hidden="true" />
                      <span className="visually-hidden"> – {project.title} on GitHub</span>
                    </a>
                  </span>
                </li>
              ))}
            </ul>
          </Reveal>
          {github && (
            <Reveal className="cta-band" style={{ marginTop: 56 }}>
              <h2>Want to see more code?</h2>
              <p>Everything else I'm tinkering with lives on my GitHub profile.</p>
              <div className="btn-row">
                <a href={github.href} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                  <i className="bi bi-github" aria-hidden="true" /> Visit GitHub
                </a>
              </div>
            </Reveal>
          )}
        </div>
      </section>
    </>
  );
}

export default Projects;
