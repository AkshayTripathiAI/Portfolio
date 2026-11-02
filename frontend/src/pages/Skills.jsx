import React from 'react';
import { motion } from 'framer-motion';
import Reveal from '../components/Reveal';
import SectionHeading from '../components/SectionHeading';
import SkillsList from '../components/SkillsList';
import { proficiency } from '../data/profile';
import './Skills.css';

function Skills() {
  return (
    <>
      <section className="page-intro">
        <div className="container">
          <Reveal>
            <span className="eyebrow">Skills</span>
            <h1>My toolkit</h1>
            <p>The languages, frameworks and infrastructure I use to design, train and ship AI-powered systems.</p>
          </Reveal>
        </div>
      </section>

      <section className="section-tight">
        <div className="container">
          <SkillsList />
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeading eyebrow="Depth" title="Where I'm strongest">
            A self-assessment of the tools I use most often in production.
          </SectionHeading>
          <Reveal className="proficiency card">
            {proficiency.map((skill, index) => (
              <div key={skill.name} className="proficiency-row">
                <div className="proficiency-label">
                  <span>{skill.name}</span>
                  <span className="muted">{skill.level}%</span>
                </div>
                <div
                  className="proficiency-track"
                  role="progressbar"
                  aria-label={skill.name}
                  aria-valuenow={skill.level}
                  aria-valuemin={0}
                  aria-valuemax={100}
                >
                  <motion.div
                    className="proficiency-fill"
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 1, delay: (index % 2) * 0.1, ease: [0.22, 1, 0.36, 1] }}
                  />
                </div>
              </div>
            ))}
          </Reveal>
        </div>
      </section>
    </>
  );
}

export default Skills;
