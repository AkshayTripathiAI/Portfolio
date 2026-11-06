import React from 'react';
import Reveal from './Reveal';
import { projects } from '../data/profile';
import './ProjectsList.css';

function ProjectsList({ limit, items = projects, demoLabel = 'Live demo' }) {
  const displayedProjects = limit ? items.slice(0, limit) : items;

  return (
    <div className="projects-grid">
      {displayedProjects.map((project, index) => (
        <Reveal key={project.title} delay={(index % 3) * 0.08} className="project-card card">
          <a href={project.demo || project.link} target="_blank" rel="noopener noreferrer" className="project-media" tabIndex={-1} aria-hidden="true">
            <img src={project.image} alt="" loading="lazy" />
          </a>
          <div className="project-body">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            {project.tags && (
              <ul className="project-tags" aria-label="Tech stack">
                {project.tags.map((tag) => <li key={tag}>{tag}</li>)}
              </ul>
            )}
            <div className="project-links">
              {project.demo && (
                <a href={project.demo} target="_blank" rel="noopener noreferrer" className="link-arrow">
                  {demoLabel} <i className="bi bi-box-arrow-up-right" aria-hidden="true" />
                  <span className="visually-hidden"> – {project.title}</span>
                </a>
              )}
              <a href={project.link} target="_blank" rel="noopener noreferrer" className="link-arrow">
                View on GitHub <i className="bi bi-arrow-up-right" aria-hidden="true" />
                <span className="visually-hidden"> – {project.title}</span>
              </a>
            </div>
          </div>
        </Reveal>
      ))}
    </div>
  );
}

export default ProjectsList;
