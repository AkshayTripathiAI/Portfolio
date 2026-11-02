import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Reveal from '../components/Reveal';
import SectionHeading from '../components/SectionHeading';
import SkillsList from '../components/SkillsList';
import ProjectsList from '../components/ProjectsList';
import SocialLinks from '../components/SocialLinks';
import { focusAreas, highlights, profile } from '../data/profile';
import { monthsSince, yearsLabel } from '../utils/experience';
import './Home.css';

const heroItem = {
  hidden: { opacity: 0, y: 24 },
  visible: (i) => ({ opacity: 1, y: 0, transition: { duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] } }),
};

function Home() {
  const years = yearsLabel(monthsSince(profile.careerStart));
  const stats = [{ value: years, label: 'Years building AI products' }, ...highlights];

  return (
    <>
      {/* Hero */}
      <section className="hero">
        <div className="container hero-grid">
          <motion.div className="hero-copy" initial="hidden" animate="visible">
            <motion.span className="hero-badge" variants={heroItem} custom={0}>
              <span className="hero-badge-dot" aria-hidden="true" />
              {profile.role} @ {profile.company}
            </motion.span>
            <motion.h1 variants={heroItem} custom={1}>
              {profile.name}
            </motion.h1>
            <motion.p className="hero-headline gradient-text" variants={heroItem} custom={2}>
              {profile.headline}
            </motion.p>
            <motion.p className="hero-tagline" variants={heroItem} custom={3}>
              {profile.tagline}
            </motion.p>
            <motion.div className="btn-row" variants={heroItem} custom={4}>
              <Link to="/projects" className="btn btn-primary">
                View my work <i className="bi bi-arrow-right" aria-hidden="true" />
              </Link>
              <Link to="/resume" className="btn btn-ghost">
                <i className="bi bi-file-earmark-text" aria-hidden="true" /> Resume
              </Link>
            </motion.div>
            <motion.div variants={heroItem} custom={5}>
              <SocialLinks className="hero-socials" />
            </motion.div>
          </motion.div>

          <motion.div
            className="hero-visual"
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="hero-photo-ring">
              <img src={profile.photo} alt={profile.name} className="hero-photo" />
            </div>
            <div className="hero-float hero-float-top">
              <i className="bi bi-stars" aria-hidden="true" />
              <span>Agents · RAG · Voice AI</span>
            </div>
            <div className="hero-float hero-float-bottom">
              <strong>{years}</strong>
              <span>years of experience</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="section-tight">
        <div className="container">
          <div className="stats-grid">
            {stats.map((stat, index) => (
              <Reveal key={stat.label} delay={index * 0.08} className="stat card">
                <strong className="gradient-text">{stat.value}</strong>
                <span>{stat.label}</span>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="section">
        <div className="container about-grid">
          <div>
            <SectionHeading eyebrow="About me" title="Turning LLMs into products people rely on" />
            <Reveal className="about-text">
              <p>
                I'm a {profile.role} at {profile.company} with <span className="metric">{years} years</span> of
                experience building production LLM, agentic AI and NLP systems in Python and FastAPI.
              </p>
              <p>
                Right now I'm building a KYC verification engine with VLM + OCR and agentic voice AI over telephony.
                Before that, at Shorthills AI, I shipped serverless agents on AWS Bedrock, hybrid RAG over MongoDB Atlas
                and an NLP inference service handling <span className="metric">1M+</span> queries a month.
              </p>
              <p>
                I care about the unglamorous parts that make AI dependable: evaluation, monitoring, fallbacks and
                containerised deployment. I also contribute fixes upstream to Hugging Face PEFT and VLMEvalKit.
              </p>
              <Link to="/portfolio" className="link-arrow">
                See my experience <i className="bi bi-arrow-right" aria-hidden="true" />
              </Link>
            </Reveal>
          </div>

          <div className="focus-grid">
            {focusAreas.map((area, index) => (
              <Reveal key={area.title} delay={index * 0.08} className="focus-card card">
                <span className="icon-badge">
                  <i className={`bi ${area.icon}`} aria-hidden="true" />
                </span>
                <h3>{area.title}</h3>
                <p>{area.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Skills */}
      <section className="section">
        <div className="container">
          <SectionHeading
            eyebrow="Toolkit"
            title="Skills & technologies"
            action={
              <Link to="/skills" className="link-arrow">
                All skills <i className="bi bi-arrow-right" aria-hidden="true" />
              </Link>
            }
          >
            The stack I use to take AI features from prototype to production.
          </SectionHeading>
          <SkillsList />
        </div>
      </section>

      {/* Projects */}
      <section className="section">
        <div className="container">
          <SectionHeading
            eyebrow="Side projects"
            title="Things I've built"
            action={
              <Link to="/projects" className="link-arrow">
                View all projects <i className="bi bi-arrow-right" aria-hidden="true" />
              </Link>
            }
          />
          <ProjectsList limit={3} />
        </div>
      </section>

      {/* Call to action */}
      <section className="section">
        <div className="container">
          <Reveal className="cta-band">
            <h2>Have an AI idea worth building?</h2>
            <p>I'm always happy to talk about agents, RAG, document intelligence or production ML systems.</p>
            <div className="btn-row">
              <Link to="/contact" className="btn btn-primary">
                Get in touch <i className="bi bi-arrow-right" aria-hidden="true" />
              </Link>
              <a href={`mailto:${profile.email}`} className="btn btn-ghost">
                <i className="bi bi-envelope" aria-hidden="true" /> Email me
              </a>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}

export default Home;
