export const projectsData = [
  {
    id: "breast-cancer-detection",
    title: "Breast Cancer Detection",
    description:
      "My first step into Machine Learning — a predictive model for early breast cancer detection using Python and Flask.",
    longDescription:
      "This project marked the beginning of my ML journey. I built a breast cancer prediction model using Scikit-learn and Logistic Regression. The model analyzes patient data to classify whether a case is malignant or benign. Deployed with Flask for an interactive web interface. Key learnings: data preprocessing, feature scaling, and model deployment using real-world datasets.",
    tags: ["Python", "Flask", "Scikit-learn", "Data Science", "ML"],
    githubUrl: "https://github.com/Kabirofficial/breastcancerdetection-ML",
    liveUrl: null,
  },
  {
    id: "movie-recommendation-system",
    title: "Movie Recommendation System",
    description:
      "An ML-powered movie recommender using TF-IDF and cosine similarity to suggest movies based on user preference.",
    longDescription:
      "Using the TMDB dataset, I developed a movie recommendation system that combines movie overviews, genres, cast, crew, and keywords into weighted tags. Applied TF-IDF vectorization and cosine similarity to generate meaningful recommendations. This project deepened my understanding of feature engineering, NLP preprocessing, and similarity metrics. Planned improvements include semantic embeddings and a web UI for interaction.",
    tags: ["Python", "Pandas", "Scikit-learn", "NLP", "Flask"],
    githubUrl: "https://github.com/Kabirofficial/movie-recommender-system",
    liveUrl: null,
  },
  {
    id: "spam-classifier",
    title: "Spam Message Classifier",
    description:
      "A text classification model that detects whether a message is Spam or Not Spam (Ham).",
    longDescription:
      "Developed a spam message detection system using multiple algorithms — Naive Bayes (GaussianNB, MultinomialNB, BernoulliNB) and Logistic Regression — to compare model performance. Focused on text preprocessing (stopword removal, TF-IDF vectorization) and model evaluation through precision, recall, and confusion matrix analysis. Outcome: a fully functional spam filter for real-world text inputs.",
    tags: [
      "Python",
      "NLP",
      "Scikit-learn",
      "Naive Bayes",
      "Logistic Regression",
    ],
    githubUrl: "#",
    liveUrl: null,
  },
  {
    id: "rag-bot",
    title: "JinggStack AI Bot (RAG Chatbot)",
    description:
      "An intelligent chatbot that answers document-based questions using Retrieval-Augmented Generation (RAG).",
    longDescription:
      "Built a Retrieval-Augmented Generation (RAG) chatbot with Flask, LangChain, and AI embeddings. The bot retrieves context-relevant document chunks using FAISS and combines them with LLM responses for accurate, citation-backed answers. It’s scalable, context-aware, and continuously learns from new data. This project strengthened my understanding of vector databases, NLP, and real-world LLM applications.",
    tags: ["Python", "LangChain", "Flask", "FAISS", "RAG", "LLMs"],
    githubUrl: "https://github.com/Kabirofficial/jinggstack-RAG",
    liveUrl: null,
  },
  {
    id: "syllaby",
    title: "Syllaby – AI Study Planner",
    description:
      "An AI-powered personal study planner that adapts to your learning style and academic schedule.",
    longDescription:
      "Created Syllaby, an AI-driven study planner designed for students. It generates adaptive learning schedules, smart flashcards, and progress-tracking dashboards. Built with React, TailwindCSS, FastAPI, and PostgreSQL. Integrated local LLMs (Gemma 1:2B via Ollama) for personalized content generation. Syllaby demonstrates how AI can make education more efficient and personalized.",
    tags: [
      "React",
      "Python",
      "FastAPI",
      "PostgreSQL",
      "TailwindCSS",
      "Ollama",
      "AI",
    ],
    githubUrl: "#",
    liveUrl: null,
  },
  {
    id: "ai-automation-suite",
    title: "AI Automation Tools for Business",
    description:
      "A suite of AI-powered automation tools that streamline workflows for HR, email, and marketing teams.",
    longDescription:
      "Developed a set of intelligent automation tools: Email Responder, Email Summarizer, AI HR Job Posting & Evaluation, and Meta Lead Extractor. Each tool leverages NLP and API integration to automate repetitive workflows, from candidate evaluation to daily email summaries. These projects focus on real-world AI deployment, data extraction, and task automation for productivity optimization.",
    tags: ["Python", "AI Automation", "APIs", "NLP", "Productivity Tools"],
    githubUrl: "#",
    liveUrl: null,
  },
  {
    id: "snfilmz-portfolio",
    title: "SnFilmz Portfolio Website",
    description:
      "A professional portfolio website for SnFilmz showcasing creative reel and photography projects.",
    longDescription:
      "Designed and developed a responsive, visually engaging website for SnFilmz using the MERN stack. Features include media galleries, project portfolios, contact integration, and a modern UI emphasizing creative storytelling. This project highlights frontend design, performance optimization, and client collaboration for real-world deployment.",
    tags: [
      "React",
      "Node.js",
      "Express",
      "MongoDB",
      "TailwindCSS",
      "Portfolio",
    ],
    githubUrl: "#",
    liveUrl: "https://snfilmz.vercel.app/",
  },
  {
    id: "civiclens",
    title: "CivicLens – AI Pothole Detection & Reporting System",
    description:
      "An AI-powered system that detects road potholes and helps report them with location data for smarter city maintenance.",
    longDescription:
      "CivicLens is an AI-based road monitoring system designed to identify potholes from images and assist in reporting them with relevant location information. The system focuses on reducing duplicate complaints and improving visibility for road maintenance authorities. This project highlights the application of computer vision in solving real-world urban infrastructure problems and demonstrates end-to-end AI system thinking.",
    tags: ["Python", "Computer Vision", "AI", "Object Detection", "Smart City"],
    githubUrl: "https://github.com/Kabirofficial/CivicLens",
    liveUrl: null,
  },
  {
    id: "ai-resume-screening",
    title: "AI Resume Screening System (ATS + RAG)",
    description:
      "An AI-powered resume screening system that analyzes and ranks resumes using semantic understanding.",
    longDescription:
      "This project is an AI-driven resume screening system that processes PDF and DOCX resumes and evaluates them based on job requirements. It uses document embeddings and a Retrieval-Augmented Generation (RAG) approach to understand candidate profiles beyond keyword matching. The system helps shortlist candidates more effectively by providing structured and meaningful insights from resumes.",
    tags: ["Python", "NLP", "RAG", "ChromaDB", "AI"],
    githubUrl: "#",
    liveUrl: null,
  },
  {
    id: "helmet-detection",
    title: "Helmet / No-Helmet Detection System",
    description:
      "A computer vision system that detects whether a rider is wearing a helmet or not from images or video.",
    longDescription:
      "This project focuses on using computer vision to classify riders as wearing a helmet or not. The system analyzes visual input and identifies helmet usage, which can be applied to traffic safety monitoring and rule enforcement scenarios. The project demonstrates the practical use of object detection techniques and image-based classification for real-world safety applications.",
    tags: [
      "Python",
      "Computer Vision",
      "Deep Learning",
      "Object Detection",
      "AI",
    ],
    githubUrl: "#",
    liveUrl: null,
  },
  {
    id: "yumyard",
    title: "YumYard – Recipe Sharing MERN App",
    description:
      "A full-stack recipe sharing platform where users can create, browse, and share recipes.",
    longDescription:
      "YumYard is a MERN stack web application built for food enthusiasts to share and discover recipes. Users can create accounts, post recipes with images and ingredients, and explore dishes shared by others. The project focuses on full-stack development, database design, and building user-friendly interfaces for content-driven applications.",
    tags: ["MongoDB", "Express", "React", "Node.js", "MERN", "Web App"],
    githubUrl: "#",
    liveUrl: null,
  },
];
