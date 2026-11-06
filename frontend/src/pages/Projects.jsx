import React from 'react';
import Reveal from '../components/Reveal';
import ProjectsList from '../components/ProjectsList';
import { socials } from '../data/profile';

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
