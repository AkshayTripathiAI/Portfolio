import React from 'react';
import Reveal from './Reveal';

function SectionHeading({ eyebrow, title, children, action }) {
  return (
    <Reveal className={`section-heading${action ? ' section-heading-row' : ''}`}>
      <div>
        {eyebrow && <span className="eyebrow">{eyebrow}</span>}
        <h2>{title}</h2>
        {children && <p>{children}</p>}
      </div>
      {action}
    </Reveal>
  );
}

export default SectionHeading;
