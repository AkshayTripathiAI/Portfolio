import {
  SiPython, SiFastapi, SiMongodb, SiRedis, SiDocker, SiCelery, SiLangchain, SiHuggingface,
  SiPandas, SiNumpy, SiDatabricks, SiAmazonwebservices, SiGooglecloud, SiOpencv,
} from 'react-icons/si';

import profilePic from '../assets/akshay-tripathi.png';
import smartCommerce from '../assets/smartcommerce-ai.webp';
import insightReview from '../assets/insightreview-ai.webp';
import videoPolish from '../assets/video-polish-studio.webp';
import jevPhysicsLab from '../assets/jev-physics-lab.webp';

const GITHUB = 'https://github.com/AkshayTripathiAI';

export const profile = {
  name: 'Akshay Tripathi',
  role: 'Senior AI Engineer',
  headline: 'Agentic AI · Production LLM Systems',
  tagline: 'I build production LLM, agentic AI and NLP systems in Python: RAG, multimodal document intelligence, voice agents and ML classification, shipped with evaluation, monitoring and fallbacks.',
  email: 'akshaytripathi1050@gmail.com',
  location: 'Gurugram, India',
  photo: profilePic,
  company: 'THINK Gas',
  // Experience shown across the site is computed from this date, so it never goes stale.
  careerStart: new Date(2023, 6, 1), // July 2023
  resumeDriveId: '1k0mGwIT8D9iVz03CX-jcrHxcOQKjGDFV',
};

export const socials = [
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/akshaytripathi1050/', icon: 'bi-linkedin' },
  { label: 'GitHub', href: GITHUB, icon: 'bi-github' },
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
  { value: '1M+', label: 'Queries / month on NLP inference service' },
  { value: '95%+', label: 'Intent routing accuracy in production' },
  { value: '70%', label: 'Manual effort cut by agentic workflows' },
];

export const focusAreas = [
  { icon: 'bi-diagram-3', title: 'Agentic AI & Voice', text: 'Multi-step agents on AWS Bedrock, Lambda and LangGraph, plus real-time voice agents with tool calling and human escalation.' },
  { icon: 'bi-search', title: 'RAG & Search', text: 'Hybrid vector + keyword retrieval on MongoDB Atlas, Weaviate and FAISS, tuned for accuracy and latency.' },
  { icon: 'bi-file-earmark-text', title: 'Document Intelligence', text: 'VLM + OCR extraction with cross-document validation and confidence-based routing to human review.' },
  { icon: 'bi-speedometer2', title: 'Production ML Systems', text: 'Async FastAPI services with load testing, evaluation, monitoring and Docker + CI/CD deployment.' },
];

// A job has either `points` (single body of work) or `projects` (several named projects).
export const experience = [
  {
    role: 'Senior AI Engineer',
    company: 'THINK Gas',
    location: 'New Delhi',
    start: new Date(2026, 8, 1),
    points: [
      'Building a KYC verification engine using VLM + OCR extraction and cross-document validation of identity, vehicle and transaction records, with confidence-based routing to human review',
      'Developing agentic Voice AI workflows over telephony and WebSockets, with stateful tool calling, intent detection and human-escalation fallback, plus post-call summarization and sentiment analytics',
      'Developing a sales forecasting pipeline (Pandas, feature engineering) that surfaces trends and forecast deviations',
    ],
    stack: ['VLM', 'OCR', 'Voice AI', 'WebSockets', 'Tool calling', 'Pandas'],
  },
  {
    role: 'AI Engineer',
    company: 'Shorthills AI',
    location: 'Gurugram',
    start: new Date(2023, 6, 1),
    end: new Date(2026, 8, 1),
    projects: [
      {
        name: 'AI Support Copilot',
        subtitle: 'RAG & Agentic AI',
        stack: ['AWS Bedrock Agents', 'Lambda', 'MongoDB Atlas', 'Celery', 'Redis'],
        points: [
          'Built serverless agentic workflows on AWS Lambda + Bedrock Agents for multi-step automation, reducing manual operational effort by 70%',
          'Designed hybrid RAG retrieval (vector + keyword) over MongoDB Atlas Vector Search for 10K+ documents, fed by Celery + Redis pipelines synchronizing 14+ data sources',
          'Built and evaluated an ML intent router for 100+ categories at 95%+ accuracy in production validation',
        ],
      },
      {
        name: 'Intent & Entity Recognition Platform',
        subtitle: 'NLP',
        stack: ['FastAPI', 'AsyncIO', 'Locust', 'Docker', 'AWS ECR', 'GitHub Actions'],
        points: [
          'Built a Python/FastAPI inference service handling 1M+ queries/month; optimized async code, connection pooling, worker concurrency and I/O paths, validated with Locust load tests and profiling',
          'Designed hierarchical NLP text-classification APIs for 190+ categories, with an evaluation framework for accuracy, latency and failure cases',
          'Deployed via Docker, AWS ECR and GitHub Actions CI/CD with latency and throughput monitoring',
        ],
      },
      {
        name: 'APQR',
        subtitle: 'Pharmaceutical Regulatory Reporting Platform',
        stack: ['FastAPI', 'Pandas', 'NumPy', 'SSE', 'Databricks', 'SQL'],
        points: [
          'Architected a FastAPI backend orchestrating 10+ services for end-to-end 21-section regulatory reports',
          'Implemented deterministic statistical analysis pipelines (Ppk/Cpk, Nelson rules, trend analysis) in Pandas/NumPy, validating numerical correctness and edge cases',
          'Built long-running async workflows (SSE, snapshot recovery, retries) and Databricks/SQL ETL pipelines with backoff and idempotency',
        ],
      },
      {
        name: 'Review Intelligence',
        subtitle: 'Search & Caching Optimization',
        stack: ['Weaviate', 'Redis', 'LLM benchmarking'],
        points: [
          'Redesigned Weaviate schema and query layers with Redis over millions of unstructured review records: 50% faster retrieval under production load and 30% lower end-to-end API latency',
          'Benchmarked proprietary and open-source LLM inference providers to inform cost and performance decisions',
        ],
      },
    ],
  },
];

export const openSource = [
  {
    repo: 'huggingface/peft',
    title: 'PR #3279',
    text: 'Removed a duplicate __all__ export and enabled Ruff rule RUF068.',
    link: 'https://github.com/huggingface/peft/pull/3279',
  },
  {
    repo: 'open-compass/VLMEvalKit',
    title: 'PR #1536',
    text: 'Fixed a silent do_sample bug in Qwen3-VL inference.',
    link: 'https://github.com/open-compass/VLMEvalKit/pull/1536',
  },
];

export const certifications = [
  { issuer: 'Google Cloud', title: 'Deploy Multi-Agent Architectures' },
  { issuer: 'Google Cloud', title: 'Build Intelligent Agents with ADK' },
  { issuer: 'Hugging Face', title: 'Fundamentals of MCP', date: 'Jul 2025' },
];

export const education = {
  school: 'Kamla Nehru Institute of Technology',
  degree: 'B.Tech, Electronics',
  grade: 'CGPA 9.21/10',
  years: '2019 – 2023',
};

// `demo` (optional) adds a "Live demo" link next to the GitHub link.
export const projects = [
  {
    title: 'SmartCommerce AI',
    description: 'E-commerce platform with a Gemini tool-calling shopping agent that searches, adds to cart and checks orders, plus semantic search, recommendations and RAG over store policies.',
    tags: ['FastAPI', 'Next.js', 'Gemini', 'Qdrant', 'PostgreSQL'],
    link: `${GITHUB}/SmartCommerce_AI`,
    image: smartCommerce,
  },
  {
    title: 'InsightReview AI',
    description: 'Review intelligence pipeline: LLM aspect-based sentiment, AI pros/cons summaries, semantic search and cited RAG Q&A, with a Streamlit dashboard.',
    tags: ['FastAPI', 'Groq', 'Gemini embeddings', 'Qdrant', 'Streamlit'],
    link: `${GITHUB}/insight-review-ai`,
    image: insightReview,
  },
  {
    title: 'Video Polish Studio',
    description: 'Turns raw NotebookLM videos into upload-ready YouTube videos: Whisper transcripts, ElevenLabs voice-clone re-voicing time-fitted to the timeline, captions and Shorts reframing.',
    tags: ['Python', 'faster-whisper', 'ElevenLabs', 'ffmpeg'],
    link: `${GITHUB}/video-polish-studio`,
    image: videoPolish,
  },
  {
    title: 'Jev Physics Lab',
    description: 'Experiment where typed AI decisions drive a live physics simulation: each collision is described to the model, and its structured answer sets the restitution and sound.',
    tags: ['Python', 'Structured outputs', 'NumPy', 'Matplotlib'],
    link: `${GITHUB}/jev-physics-lab`,
    image: jevPhysicsLab,
  },
];

// Smaller web apps from before the AI work. Shown as a compact list on the Projects page only.
export const earlierProjects = [
  { title: 'Habitify', description: 'Habit tracker built with React Native, Expo and Redux Toolkit.', link: `${GITHUB}/Habitify` },
  { title: 'Snapnote', description: 'Note-taking app built with React and Material UI icons.', link: `${GITHUB}/Snapnote` },
  { title: 'PlacePicker', description: 'Pick and save places, sorted by distance from your location.', link: `${GITHUB}/PlacePicker` },
  { title: 'ShoppyCart', description: 'Shopping cart with global state via React Context.', link: `${GITHUB}/ShoppyCart` },
  { title: 'QuizPlay', description: 'Timed quiz app built with React.', link: `${GITHUB}/QuizPlay` },
  { title: 'InvestMate', description: 'Investment growth calculator built with React.', link: `${GITHUB}/InvestMate` },
  { title: 'Tic-tac-toe', description: 'Two-player tic-tac-toe in React.', link: `${GITHUB}/Tic-tak-toe` },
];

// Each skill uses either a brand icon component (`Icon`) or a Bootstrap icon class (`bi`).
// Brand colours are lightened where the official colour is unreadable on the dark background.
export const skillCategories = [
  {
    category: 'Generative AI',
    skills: [
      { name: 'LLMs', bi: 'bi-cpu-fill' },
      { name: 'RAG', bi: 'bi-robot' },
      { name: 'Agentic AI', bi: 'bi-diagram-3-fill' },
      { name: 'Multi-Agent Systems', bi: 'bi-people-fill' },
      { name: 'Prompt Engineering', bi: 'bi-chat-dots-fill' },
      { name: 'Fine-Tuning (PEFT)', bi: 'bi-sliders' },
      { name: 'MCP', bi: 'bi-plug-fill' },
    ],
  },
  {
    category: 'Frameworks',
    skills: [
      { name: 'LangChain', Icon: SiLangchain, color: '#4fb39b' },
      { name: 'LangGraph', bi: 'bi-bezier2' },
      { name: 'Google ADK', Icon: SiGooglecloud, color: '#6ea8fe' },
      { name: 'HF Transformers', Icon: SiHuggingface, color: '#ffd21e' },
      { name: 'PEFT', bi: 'bi-sliders2' },
      { name: 'vLLM', bi: 'bi-lightning-charge-fill' },
      { name: 'AWS Bedrock', Icon: SiAmazonwebservices, color: '#ff9900' },
    ],
  },
  {
    category: 'ML & NLP',
    skills: [
      { name: 'Machine Learning', bi: 'bi-graph-up' },
      { name: 'Deep Learning', bi: 'bi-layers-fill' },
      { name: 'NLP', bi: 'bi-translate' },
      { name: 'Text Classification', bi: 'bi-tags-fill' },
      { name: 'Sentiment Analysis', bi: 'bi-emoji-smile-fill' },
      { name: 'Statistics', bi: 'bi-bar-chart-fill' },
    ],
  },
  {
    category: 'Multimodal & Voice',
    skills: [
      { name: 'VLMs', bi: 'bi-eye-fill' },
      { name: 'OCR', bi: 'bi-file-earmark-text-fill' },
      { name: 'Computer Vision', Icon: SiOpencv, color: '#6fb1fc' },
      { name: 'Document Intelligence', bi: 'bi-file-earmark-check-fill' },
      { name: 'STT / TTS', bi: 'bi-mic-fill' },
      { name: 'Real-Time Audio', bi: 'bi-soundwave' },
    ],
  },
  {
    category: 'Backend & Data',
    skills: [
      { name: 'Python', Icon: SiPython, color: '#5a9fd4' },
      { name: 'SQL', bi: 'bi-database-fill' },
      { name: 'FastAPI', Icon: SiFastapi, color: '#05998b' },
      { name: 'AsyncIO', bi: 'bi-arrow-repeat' },
      { name: 'Celery', Icon: SiCelery, color: '#8fc045' },
      { name: 'WebSockets', bi: 'bi-broadcast' },
      { name: 'SSE', bi: 'bi-reception-4' },
      { name: 'Pandas', Icon: SiPandas, color: '#b8a6ff' },
      { name: 'NumPy', Icon: SiNumpy, color: '#4dabcf' },
      { name: 'Databricks', Icon: SiDatabricks, color: '#ff5a3c' },
    ],
  },
  {
    category: 'Vector & Cloud',
    skills: [
      { name: 'MongoDB Atlas Vector Search', Icon: SiMongodb, color: '#47a248' },
      { name: 'Weaviate', bi: 'bi-database-fill-gear' },
      { name: 'FAISS', bi: 'bi-grid-3x3-gap-fill' },
      { name: 'Redis', Icon: SiRedis, color: '#ff5a4f' },
      { name: 'AWS (Lambda, ECR, S3, EC2)', Icon: SiAmazonwebservices, color: '#ff9900' },
      { name: 'Docker', Icon: SiDocker, color: '#2496ed' },
    ],
  },
  {
    category: 'Evaluation & Reliability',
    skills: [
      { name: 'Model Evaluation', bi: 'bi-clipboard-data-fill' },
      { name: 'Load Testing (Locust)', bi: 'bi-speedometer' },
      { name: 'Monitoring', bi: 'bi-activity' },
      { name: 'Retries', bi: 'bi-arrow-clockwise' },
      { name: 'Idempotency', bi: 'bi-shield-check' },
      { name: 'Fallbacks', bi: 'bi-signpost-split-fill' },
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
