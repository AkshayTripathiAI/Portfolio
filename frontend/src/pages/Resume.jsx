import React from 'react';
import Reveal from '../components/Reveal';
import { profile } from '../data/profile';
import './Resume.css';

function Resume() {
  const previewUrl = `https://drive.google.com/file/d/${profile.resumeDriveId}/preview`;
  const viewUrl = `https://drive.google.com/file/d/${profile.resumeDriveId}/view`;
  const downloadUrl = `https://drive.google.com/uc?export=download&id=${profile.resumeDriveId}`;

  return (
    <>
      <section className="page-intro">
        <div className="container resume-intro">
          <Reveal>
            <span className="eyebrow">Resume</span>
            <h1>My resume</h1>
            <p>A one-page summary of my experience, skills and impact.</p>
          </Reveal>
          <Reveal delay={0.1} className="btn-row">
            <a href={downloadUrl} className="btn btn-primary">
              <i className="bi bi-download" aria-hidden="true" /> Download PDF
            </a>
            <a href={viewUrl} target="_blank" rel="noopener noreferrer" className="btn btn-ghost">
              <i className="bi bi-box-arrow-up-right" aria-hidden="true" /> Open in new tab
            </a>
          </Reveal>
        </div>
      </section>

      <section className="section-tight">
        <div className="container">
          <Reveal className="resume-frame card">
            <iframe src={previewUrl} title={`${profile.name} resume`} loading="lazy" />
          </Reveal>
        </div>
      </section>
    </>
  );
}

export default Resume;
