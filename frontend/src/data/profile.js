import { SiPython, SiFastapi, SiDjango, SiMongodb, SiMysql, SiPostgresql, SiRedis, SiDocker, SiLinux, SiGithub, SiCelery, SiJavascript, SiHtml5, SiCss3 } from 'react-icons/si';
import { TbBrandCpp } from 'react-icons/tb';

import profilePic from '../assets/akshay-tripathi.png';
import placePicker from '../assets/place-picker.png';
import quizPlay from '../assets/quiz-play.png';
import shoppyCart from '../assets/shoppy-cart.png';
import ticTacToe from '../assets/tic-tac-toe.png';
import investMate from '../assets/invest-mate.png';
import habitify from '../assets/habitify.png';
import snapNotes from '../assets/snap-notes.png';

export const profile = {
  name: 'Akshay Tripathi',
  role: 'Software Development Engineer',
  headline: 'Generative AI + Backend Specialist',
  tagline: 'I build production-grade RAG systems, agentic AI workflows and fine-tuned LLM pipelines, backed by fast and reliable Python services.',
  email: 'akshaytripathi1050@gmail.com',
  photo: profilePic,
  company: 'Shorthills AI',
  // Experience shown across the site is computed from this date, so it never goes stale.
  careerStart: new Date(2023, 6, 1), // July 2023
  resumeDriveId: '1EWYOtsccVPaKPQei4E-mTXGlCa4FxJ_A',
};

export const socials = [
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/akshaytripathi1050/', icon: 'bi-linkedin' },
  { label: 'GitHub', href: 'https://github.com/akshaytripathi0331', icon: 'bi-github' },
  { label: 'X', href: 'https://x.com/Akshay_1050', icon: 'bi-twitter-x' },
  { label: 'Instagram', href: 'https://www.instagram.com/akshay.tripathi__/', icon: 'bi-instagram' },
];

export const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/portfolio', label: 'Experience' },
  { to: '/projects', label: 'Projects' },
  { to: '/skills', label: 'Skills' },
  { to: '/blog', label: 'Blog' },
  { to: '/resume', label: 'Resume' },
];

export const highlights = [
  { value: '10L+', label: 'Queries / month on intent platform' },
  { value: '190+', label: 'Hierarchical intents designed' },
  { value: '70%', label: 'Manual effort cut by agentic AI' },
];

export const focusAreas = [
  { icon: 'bi-search', title: 'RAG & Hybrid Search', text: 'Vector + keyword retrieval on MongoDB Atlas and Weaviate, tuned for accuracy and speed.' },
  { icon: 'bi-diagram-3', title: 'Agentic AI', text: 'Multi-step agents and orchestrators with AWS Action Groups, Lambda and LangChain.' },
  { icon: 'bi-sliders', title: 'LLM Fine-tuning', text: 'Domain-specific Llama 3 fine-tunes, synthetic data generation and vLLM inference.' },
  { icon: 'bi-hdd-stack', title: 'Backend Engineering', text: 'Dockerised FastAPI services with Celery + Redis pipelines built to scale.' },
];

export const experience = [
  {
    role: 'Software Development Engineer',
    company: 'Shorthills AI',
    start: new Date(2023, 6, 1),
    projects: [
      {
        name: 'Agent Assist',
        subtitle: 'Agentic RAG System',
        stack: ['MongoDB Atlas', 'FastAPI', 'Celery', 'Redis', 'Llama 3', 'AWS'],
        points: [
          'Built hybrid RAG using MongoDB Atlas Vector Search with keyword scoring for improved retrieval accuracy',
          'Developed intent engine with 100+ intents achieving 95%+ accuracy during UAT phase',
          'Implemented RapidFuzz fallback classifier reducing fallback queries by 40%+',
          'Designed Celery + Redis async pipelines processing 14+ knowledge sources',
          'Dockerized FastAPI services with embeddings pipeline and Llama-3 inference optimization',
          'Created AWS agentic orchestrator using Action Groups + Lambda, reducing manual effort by 70%',
        ],
      },
      {
        name: 'GetHelp',
        subtitle: 'Intent & Entity Platform',
        stack: ['Llama 3-8B', 'Fine-tuning', 'Multi-label classification'],
        points: [
          'Engineered multi-intent classification system handling 10L+ queries per month',
          'Designed 190+ hierarchical intents with multi-label inference capabilities',
          'Fine-tuned Llama 3-8B Instruct model for domain-specific intent recognition',
          'Generated and validated 15k+ synthetic training samples for model improvement',
        ],
      },
      {
        name: 'BestViewsReviews',
        subtitle: 'Review Intelligence System',
        stack: ['Weaviate', 'Redis', 'Llama 3', 'vLLM'],
        points: [
          'Automated extraction of experience-rich review snippets from user-generated content',
          'Implemented hybrid RAG using Weaviate v4 + Redis for efficient retrieval',
          'Fine-tuned Llama 3 8B on 10k+ samples achieving +25% accuracy improvement',
          'Optimized inference pipeline using vLLM reducing latency by 30%',
          'Enhanced Weaviate hybrid search achieving 50% faster retrieval speeds',
        ],
      },
      {
        name: 'Genysis',
        subtitle: 'Genetic History Assistant',
        stack: ['RAG', 'Prompt design', 'PedigreeJS'],
        points: [
          'Reduced genetic consultation time by 20–30 minutes through intelligent automation',
          'Built lightweight RAG system with smart chunking for medical documentation',
          'Designed prompt flows for structured patient interview guidance',
          'Integrated PedigreeJS for interactive family-tree diagram generation',
        ],
      },
    ],
  },
];

export const projects = [
  { title: 'PlacePicker', description: 'A location picker app using the Google Maps API.', link: 'https://github.com/AkshayTripathi0331/PlacePicker', image: placePicker },
  { title: 'QuizPlay', description: 'A quiz application built for fun learning experiences.', link: 'https://github.com/AkshayTripathi0331/QuizPlay', image: quizPlay },
  { title: 'ShoppyCart', description: 'E-commerce platform with a smooth user experience.', link: 'https://github.com/AkshayTripathi0331/ShoppyCart', image: shoppyCart },
  { title: 'InvestMate', description: 'An app to track and manage your investments.', link: 'https://github.com/AkshayTripathi0331/InvestMate', image: investMate },
  { title: 'Habitify', description: 'A habit tracking app with a clean UI.', link: 'https://github.com/AkshayTripathi0331/Habitify', image: habitify },
  { title: 'Snapnote', description: 'Take quick notes and keep them organised.', link: 'https://github.com/AkshayTripathi0331/Snapnote', image: snapNotes },
  { title: 'Tic-tac-toe', description: 'The classic game, built with vanilla JavaScript.', link: 'https://github.com/AkshayTripathi0331/Tic-tak-toe', image: ticTacToe },
];

// Each skill uses either a brand icon component (`Icon`) or a Bootstrap icon class (`bi`).
// Brand colours are lightened where the official colour is unreadable on the dark background.
export const skillCategories = [
  {
    category: 'Generative AI',
    skills: [
      { name: 'RAG', bi: 'bi-robot' },
      { name: 'Hybrid Search', bi: 'bi-search' },
      { name: 'Agentic AI', bi: 'bi-diagram-3-fill' },
      { name: 'Prompt Engineering', bi: 'bi-chat-dots-fill' },
      { name: 'LLM Fine-tuning (Llama 3)', bi: 'bi-sliders' },
      { name: 'Hugging Face', bi: 'bi-emoji-smile-fill' },
      { name: 'vLLM', bi: 'bi-lightning-charge-fill' },
      { name: 'LangChain', bi: 'bi-link-45deg' },
      { name: 'Vanna AI', bi: 'bi-chat-left-text-fill' },
    ],
  },
  {
    category: 'Backend',
    skills: [
      { name: 'FastAPI', Icon: SiFastapi, color: '#05998b' },
      { name: 'Django', Icon: SiDjango, color: '#44b78b' },
      { name: 'REST APIs', bi: 'bi-arrow-left-right' },
    ],
  },
  {
    category: 'Databases & Infra',
    skills: [
      { name: 'MongoDB', Icon: SiMongodb, color: '#47a248' },
      { name: 'MySQL', Icon: SiMysql, color: '#5d9bd1' },
      { name: 'PostgreSQL', Icon: SiPostgresql, color: '#6b9bd1' },
      { name: 'Redis', Icon: SiRedis, color: '#ff5a4f' },
      { name: 'Weaviate', bi: 'bi-database-fill-gear' },
    ],
  },
  {
    category: 'Languages',
    skills: [
      { name: 'Python', Icon: SiPython, color: '#5a9fd4' },
      { name: 'C++', Icon: TbBrandCpp, color: '#659ad2' },
      { name: 'JavaScript', Icon: SiJavascript, color: '#f7df1e' },
      { name: 'HTML', Icon: SiHtml5, color: '#e34f26' },
      { name: 'CSS', Icon: SiCss3, color: '#3d8fd6' },
    ],
  },
  {
    category: 'Tools',
    skills: [
      { name: 'Docker', Icon: SiDocker, color: '#2496ed' },
      { name: 'Linux', Icon: SiLinux, color: '#fcc624' },
      { name: 'Git / GitHub', Icon: SiGithub, color: '#e6edf3' },
      { name: 'Celery', Icon: SiCelery, color: '#8fc045' },
      { name: 'VS Code', bi: 'bi-code-square' },
      { name: 'Cursor', bi: 'bi-cursor-fill' },
    ],
  },
];

export const proficiency = [
  { name: 'Python', level: 90 },
  { name: 'RAG Systems', level: 90 },
  { name: 'Prompt Engineering', level: 90 },
  { name: 'FastAPI', level: 85 },
  { name: 'LLM Fine-tuning', level: 85 },
  { name: 'LangChain', level: 85 },
  { name: 'Docker', level: 85 },
  { name: 'MongoDB', level: 80 },
  { name: 'Weaviate', level: 80 },
  { name: 'Celery', level: 80 },
  { name: 'vLLM', level: 80 },
  { name: 'Redis', level: 75 },
];

export const videos = [
  { id: 'aJAu4U_zzxE', title: 'Featured video 1' },
  { id: 'RN3bZLPAGkY', title: 'Featured video 2' },
];

// Add articles here as { title, description, link, date } once they are published.
export const blogPosts = [];
