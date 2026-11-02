import React from 'react';
import Reveal from '../components/Reveal';
import SectionHeading from '../components/SectionHeading';
import { blogPosts, socials, videos } from '../data/profile';
import './Blog.css';

function Blog() {
  const linkedin = socials.find((s) => s.label === 'LinkedIn');

  return (
    <>
      <section className="page-intro">
        <div className="container">
          <Reveal>
            <span className="eyebrow">Blog</span>
            <h1>Videos & writing</h1>
            <p>Talks, walkthroughs and notes on building with LLMs and backend systems.</p>
          </Reveal>
        </div>
      </section>

      <section className="section-tight">
        <div className="container">
          <SectionHeading eyebrow="Watch" title="Featured videos" />
          <div className="video-grid">
            {videos.map((video, index) => (
              <Reveal key={video.id} delay={index * 0.08} className="video-card card">
                <iframe
                  src={`https://www.youtube-nocookie.com/embed/${video.id}`}
                  title={video.title}
                  loading="lazy"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeading eyebrow="Read" title="Articles" />
          {blogPosts.length ? (
            <div className="post-grid">
              {blogPosts.map((post, index) => (
                <Reveal key={post.link} delay={index * 0.08} className="post-card card">
                  {post.date && <span className="post-date">{post.date}</span>}
                  <h3>{post.title}</h3>
                  <p>{post.description}</p>
                  <a href={post.link} target="_blank" rel="noopener noreferrer" className="link-arrow">
                    Read article <i className="bi bi-arrow-up-right" aria-hidden="true" />
                  </a>
                </Reveal>
              ))}
            </div>
          ) : (
            <Reveal className="post-empty card">
              <span className="icon-badge">
                <i className="bi bi-pencil-square" aria-hidden="true" />
              </span>
              <div>
                <h3>Articles are on the way</h3>
                <p className="muted">
                  I'm writing up lessons from building RAG and agentic systems in production. Follow along on LinkedIn to
                  catch them first.
                </p>
              </div>
              {linkedin && (
                <a href={linkedin.href} target="_blank" rel="noopener noreferrer" className="btn btn-ghost">
                  <i className="bi bi-linkedin" aria-hidden="true" /> Follow
                </a>
              )}
            </Reveal>
          )}
        </div>
      </section>
    </>
  );
}

export default Blog;
