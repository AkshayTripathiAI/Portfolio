import React from 'react';
import Reveal from './Reveal';
import { skillCategories } from '../data/profile';
import './SkillsList.css';

function SkillIcon({ skill }) {
  if (skill.Icon) {
    const { Icon } = skill;
    return <Icon className="skill-icon" style={{ color: skill.color }} aria-hidden="true" />;
  }
  return <i className={`bi ${skill.bi} skill-icon skill-icon-bi`} aria-hidden="true" />;
}

function SkillsList() {
  return (
    <div className="skill-categories">
      {skillCategories.map((group, index) => (
        <Reveal key={group.category} delay={index * 0.05} className="skill-category card">
          <h3>{group.category}</h3>
          <ul className="skill-items">
            {group.skills.map((skill) => (
              <li key={skill.name} className="skill-item">
                <SkillIcon skill={skill} />
                <span>{skill.name}</span>
              </li>
            ))}
          </ul>
        </Reveal>
      ))}
    </div>
  );
}

export default SkillsList;
