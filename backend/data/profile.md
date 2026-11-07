# Akshay Tripathi

Senior AI Engineer focused on agentic AI and production LLM systems. Based in Gurugram, India.

- Email: akshaytripathi1050@gmail.com
- LinkedIn: linkedin.com/in/akshaytripathi1050
- GitHub: github.com/AkshayTripathiAI
- Visitors can also use the contact form on the portfolio's Contact page.

## Summary

AI Engineer with 3+ years (since July 2023) building production LLM, agentic AI and NLP systems in Python/FastAPI:
RAG, multimodal document intelligence (VLM + OCR), machine learning text classification, and agent workflows on
AWS Bedrock and Lambda. Ships with evaluation, monitoring, fallbacks and containerized deployment.
Domain experience: KYC verification and pharma regulatory reporting (statistical analysis).

## Experience

### THINK Gas — Senior AI Engineer (Sep 2026 – Present, New Delhi)

- Building a KYC verification engine using VLM + OCR extraction and cross-document validation of identity, vehicle
  and transaction records, with confidence-based routing to human review.
- Developing agentic Voice AI workflows over telephony and WebSockets, with stateful tool calling, intent detection
  and human-escalation fallback, plus post-call summarization and sentiment analytics.
- Developing a sales forecasting pipeline (Pandas, feature engineering) that surfaces trends and forecast deviations.

### Shorthills AI — AI Engineer (Jul 2023 – Sep 2026, Gurugram)

AI Support Copilot (RAG & Agentic AI)
- Built serverless agentic workflows on AWS Lambda + Bedrock Agents for multi-step automation, reducing manual
  operational effort by 70%.
- Designed hybrid RAG retrieval (vector + keyword) over MongoDB Atlas Vector Search for 10K+ documents, fed by
  Celery + Redis pipelines synchronizing 14+ data sources.
- Built and evaluated an ML intent router for 100+ categories at 95%+ accuracy in production validation.

Intent & Entity Recognition Platform (NLP)
- Built a Python/FastAPI inference service handling 1M+ queries/month; optimized async code, connection pooling,
  worker concurrency and I/O paths, validated with Locust load tests and profiling.
- Designed hierarchical NLP text-classification APIs for 190+ categories, with an evaluation framework for accuracy,
  latency and failure cases.
- Deployed via Docker, AWS ECR and GitHub Actions CI/CD with latency and throughput monitoring.

APQR (Pharmaceutical Regulatory Reporting Platform)
- Architected a FastAPI backend orchestrating 10+ services for end-to-end 21-section regulatory reports.
- Implemented deterministic statistical analysis pipelines (Ppk/Cpk, Nelson rules, trend analysis) in Pandas/NumPy,
  validating numerical correctness and edge cases.
- Built long-running async workflows (SSE, snapshot recovery, retries) and Databricks/SQL ETL pipelines with backoff
  and idempotency.

Review Intelligence (Search & Caching Optimization)
- Redesigned Weaviate schema and query layers with Redis over millions of unstructured review records: 50% faster
  retrieval under production load and 30% lower end-to-end API latency.
- Benchmarked proprietary and open-source LLM inference providers to inform cost and performance decisions.

The company projects above are private, so their code is not public.

## Open source

- huggingface/peft — PR #3279: removed a duplicate __all__ export and enabled Ruff rule RUF068. Merged.
- open-compass/VLMEvalKit — PR #1536: fixed a silent do_sample bug in Qwen3-VL inference. Merged.

## Certifications

- Google Cloud: Deploy Multi-Agent Architectures
- Google Cloud: Build Intelligent Agents with ADK
- Hugging Face: Fundamentals of MCP (Jul 2025)

## Skills

- Generative AI: LLMs, RAG, Agentic AI, Multi-Agent Systems, Prompt Engineering, Fine-Tuning (PEFT), MCP
- ML & NLP: Machine Learning, Deep Learning, NLP, Text Classification, Sentiment Analysis, Statistics
- Frameworks: LangChain, LangGraph, Google ADK, Hugging Face Transformers, PEFT, vLLM, AWS Bedrock
- Evaluation & Reliability: Model Evaluation, Load Testing (Locust), Monitoring, Retries, Idempotency, Fallbacks
- Multimodal & Voice: VLMs, OCR, Computer Vision, Document Intelligence, STT/TTS, Real-Time Audio Streaming
- Backend & Data: Python, SQL, FastAPI, AsyncIO, Celery, WebSockets, SSE, Pandas, NumPy, Databricks
- Vector & Cloud: MongoDB Atlas Vector Search, Weaviate, FAISS, Redis, AWS (Lambda, ECR, S3, EC2), Docker

## Education

Kamla Nehru Institute of Technology — B.Tech, Electronics, CGPA 9.21/10 (2019 – 2023), India.

## Personal side projects (on GitHub)

- SmartCommerce AI — an AI e-commerce platform (FastAPI, Next.js, PostgreSQL). A Gemini tool-calling shopping
  agent searches products, adds items to the cart and checks orders; it also has semantic product search with
  Qdrant, personalised recommendations and RAG answers about store policies.
- InsightReview AI — a review intelligence pipeline (FastAPI, PostgreSQL, Qdrant, Streamlit). An LLM on Groq
  extracts aspect-level sentiment and writes pros/cons summaries; Gemini embeddings power semantic search and RAG
  Q&A that cites the reviews it used.
- Video Polish Studio — Python + ffmpeg tooling that turns raw NotebookLM videos into upload-ready YouTube videos:
  faster-whisper transcripts, ElevenLabs voice-clone re-voicing time-fitted to the original timeline, burned-in
  captions, music and 9:16 Shorts reframing.
- Jev Physics Lab — an experiment where typed AI decisions (TypeSafe AI's Jev) control a running physics
  simulation: the model's structured answer sets the bounciness and sound of each collision.

Earlier, smaller web projects (React / JavaScript), most with live demos on GitHub Pages: ShoppyCart, GeoPicker,
PlacePicker, QuizPlay, InvestMate, React Behind the Scenes, Simple Calculator, MyTodoList, Snapnote and Habitify
(React Native). Browser games: Chota Bheem Loves Ladoo, Chota Bheem Adventures, Bheem Ladoo Dash, Adventure Games,
Tic-tac-toe and The Almost Final Countdown.

## About this website

This portfolio is built with React and a Node.js/Express backend. This chat assistant runs on an open-weight LLM
served by Groq, streams answers with Server-Sent Events, and answers only from this profile.
