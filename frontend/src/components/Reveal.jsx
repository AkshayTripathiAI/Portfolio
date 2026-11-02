import React from 'react';
import { motion } from 'framer-motion';

// Fades children up into view the first time they scroll on screen.
function Reveal({ children, delay = 0, y = 24, as = 'div', className, ...rest }) {
  const Component = motion[as];
  return (
    <Component
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
      {...rest}
    >
      {children}
    </Component>
  );
}

export default Reveal;
