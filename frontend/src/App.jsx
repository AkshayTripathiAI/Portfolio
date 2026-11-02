import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { MotionConfig } from 'framer-motion';
import Layout from './components/Layout';
import Home from './pages/Home';
import Portfolio from './pages/Portfolio';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import Skills from './pages/Skills';
import Projects from './pages/Projects';
import Resume from './pages/Resume';
import NotFound from './pages/NotFound';

function App() {
  return (
    // Respect the OS "reduce motion" setting for every animation in the app.
    <MotionConfig reducedMotion="user">
      <Router>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/experience" element={<Portfolio />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </Router>
    </MotionConfig>
  );
}

export default App;
