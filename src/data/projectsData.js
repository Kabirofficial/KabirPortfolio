export const projectsData = [
  {
    id: 'breast-cancer-detection',
    title: 'Breast Cancer Detection',
    description:
      'My first step into Machine Learning — a predictive model for early breast cancer detection using Python and Flask.',
    longDescription:
      'This project marked the beginning of my ML journey. I built a breast cancer prediction model using Scikit-learn and Logistic Regression. The model analyzes patient data to classify whether a case is malignant or benign. Deployed with Flask for an interactive web interface. Key learnings: data preprocessing, feature scaling, and model deployment using real-world datasets.',
    tags: ['Python', 'Flask', 'Scikit-learn', 'Data Science', 'ML'],
    githubUrl: 'https://github.com/Kabirofficial/breastcancerdetection-ML',
    liveUrl: null,
  },
  {
    id: 'movie-recommendation-system',
    title: 'Movie Recommendation System',
    description:
      'An ML-powered movie recommender using TF-IDF and cosine similarity to suggest movies based on user preference.',
    longDescription:
      'Using the TMDB dataset, I developed a movie recommendation system that combines movie overviews, genres, cast, crew, and keywords into weighted tags. Applied TF-IDF vectorization and cosine similarity to generate meaningful recommendations. This project deepened my understanding of feature engineering, NLP preprocessing, and similarity metrics. Planned improvements include semantic embeddings and a web UI for interaction.',
    tags: ['Python', 'Pandas', 'Scikit-learn', 'NLP', 'Flask'],
    githubUrl: 'https://github.com/Kabirofficial/movie-recommender-system',
    liveUrl: null,
  },
  {
    id: 'spam-classifier',
    title: 'Spam Message Classifier',
    description: 'A text classification model that detects whether a message is Spam or Not Spam (Ham).',
    longDescription:
      'Developed a spam message detection system using multiple algorithms — Naive Bayes (GaussianNB, MultinomialNB, BernoulliNB) and Logistic Regression — to compare model performance. Focused on text preprocessing (stopword removal, TF-IDF vectorization) and model evaluation through precision, recall, and confusion matrix analysis. Outcome: a fully functional spam filter for real-world text inputs.',
    tags: ['Python', 'NLP', 'Scikit-learn', 'Naive Bayes', 'Logistic Regression'],
    githubUrl: '#',
    liveUrl: null,
  },
  {
    id: 'rag-bot',
    title: 'JinggStack AI Bot (RAG Chatbot)',
    description:
      'An intelligent chatbot that answers document-based questions using Retrieval-Augmented Generation (RAG).',
    longDescription:
      'Built a Retrieval-Augmented Generation (RAG) chatbot with Flask, LangChain, and AI embeddings. The bot retrieves context-relevant document chunks using FAISS and combines them with LLM responses for accurate, citation-backed answers. It’s scalable, context-aware, and continuously learns from new data. This project strengthened my understanding of vector databases, NLP, and real-world LLM applications.',
    tags: ['Python', 'LangChain', 'Flask', 'FAISS', 'RAG', 'LLMs'],
    githubUrl: 'https://github.com/Kabirofficial/jinggstack-RAG',
    liveUrl: null,
  },
  {
    id: 'syllaby',
    title: 'Syllaby – AI Study Planner',
    description: 'An AI-powered personal study planner that adapts to your learning style and academic schedule.',
    longDescription:
      'Created Syllaby, an AI-driven study planner designed for students. It generates adaptive learning schedules, smart flashcards, and progress-tracking dashboards. Built with React, TailwindCSS, FastAPI, and PostgreSQL. Integrated local LLMs (Gemma 1:2B via Ollama) for personalized content generation. Syllaby demonstrates how AI can make education more efficient and personalized.',
    tags: ['React', 'Python', 'FastAPI', 'PostgreSQL', 'TailwindCSS', 'Ollama', 'AI'],
    githubUrl: '#',
    liveUrl: null,
  },
  {
    id: 'ai-automation-suite',
    title: 'AI Automation Tools for Business',
    description: 'A suite of AI-powered automation tools that streamline workflows for HR, email, and marketing teams.',
    longDescription:
      'Developed a set of intelligent automation tools: Email Responder, Email Summarizer, AI HR Job Posting & Evaluation, and Meta Lead Extractor. Each tool leverages NLP and API integration to automate repetitive workflows, from candidate evaluation to daily email summaries. These projects focus on real-world AI deployment, data extraction, and task automation for productivity optimization.',
    tags: ['Python', 'AI Automation', 'APIs', 'NLP', 'Productivity Tools'],
    githubUrl: '#',
    liveUrl: null,
  },
  {
    id: 'snfilmz-portfolio',
    title: 'SnFilmz Portfolio Website',
    description: 'A professional portfolio website for SnFilmz showcasing creative reel and photography projects.',
    longDescription:
      'Designed and developed a responsive, visually engaging website for SnFilmz using the MERN stack. Features include media galleries, project portfolios, contact integration, and a modern UI emphasizing creative storytelling. This project highlights frontend design, performance optimization, and client collaboration for real-world deployment.',
    tags: ['React', 'Node.js', 'Express', 'MongoDB', 'TailwindCSS', 'Portfolio'],
    githubUrl: '#',
    liveUrl: 'https://snfilmz.vercel.app/',
  },
];
