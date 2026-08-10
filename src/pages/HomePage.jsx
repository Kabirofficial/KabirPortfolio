import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import SEO from "../components/SEO";
import { projectsData } from "../data/projectsData";

const roles = ["AI/ML Engineer", "Python Developer", "Researcher", "Builder"];

const HomePage = () => {
  const [roleIdx, setRoleIdx] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setRoleIdx(i => (i + 1) % roles.length), 2600);
    return () => clearInterval(t);
  }, []);

  const featured = projectsData.filter(p =>
    ["anisystem", "rag-bot", "nanoray-v2"].includes(p.id)
  );

  const stats = [
    { value: "14+", label: "Projects Built" },
    { value: "2",   label: "Research Papers" },
    { value: "1+",  label: "Year Experience" },
  ];

  const focusAreas = [
    {
      icon: <img src="/icon_ai.png" alt="AI Icon" className="w-12 h-12 rounded-xl object-cover shadow-sm mb-4" />,
      title: "AI & Machine Learning",
      desc: "I build and fine-tune models: classifiers, recommenders, RAG pipelines, and LLM-based agents. PyTorch and Transformers are my daily tools.",
    },
    {
      icon: <img src="/icon_research.png" alt="Research Icon" className="w-12 h-12 rounded-xl object-cover shadow-sm mb-4" />,
      title: "AI Research",
      desc: "I write and publish research papers. My recent work focuses on knowledge distillation and making large models run efficiently on constrained hardware.",
    },
    {
      icon: <img src="/icon_backend.png" alt="Backend Icon" className="w-12 h-12 rounded-xl object-cover shadow-sm mb-4" />,
      title: "Backend & APIs",
      desc: "I build the infrastructure AI needs: REST APIs with FastAPI, data pipelines, automation tools, and integrations that make systems work end-to-end.",
    },
  ];

  return (
    <div className="min-h-screen pt-20">
      <SEO title="AI/ML Engineer" />

      <section className="max-w-7xl mx-auto px-6 md:px-12 pt-16 md:pt-24 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-indigo-50 dark:bg-indigo-900/20 border border-indigo-100 dark:border-indigo-800/40 mb-8">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-[11px] font-semibold text-indigo-700 dark:text-indigo-300 font-mono tracking-wide">
                Open to opportunities · Remote / India
              </span>
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-[#0F172A] dark:text-white mb-4 leading-[1.05]">
              Hi, I&apos;m{" "}
              <span className="gradient-text">Kabir.</span>
            </h1>

            <div className="text-2xl md:text-3xl font-semibold text-slate-400 dark:text-slate-500 mb-6 h-10 overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.span
                  key={roleIdx}
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -20, opacity: 0 }}
                  transition={{ duration: 0.25 }}
                  className="block"
                >
                  {roles[roleIdx]}
                </motion.span>
              </AnimatePresence>
            </div>

            <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed mb-10 max-w-xl">
              I build AI systems, train models, and write code that actually solves problems.
              A CS student from Gujarat who got hooked on machine learning and never looked back.
              Currently deep into research on knowledge distillation and edge AI.
            </p>

            <div className="flex flex-wrap gap-3">
              <Link to="/projects" className="btn-primary">
                See my work
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
                </svg>
              </Link>
              <Link to="/contact" className="btn-secondary">
                Get in touch
              </Link>
            </div>

            <div className="flex flex-wrap gap-2 mt-8">
              {["Python", "PyTorch", "LangChain", "FastAPI", "React"].map(t => (
                <span key={t} className="pill">{t}</span>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col gap-4"
          >
            <div className="card p-7 relative overflow-hidden">
              <div className="dot-grid absolute inset-0 opacity-60 dark:opacity-30 pointer-events-none" />
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-4">
                  <img src="/icon.png" alt="Kabir Logo" className="w-10 h-10 rounded-xl object-cover shadow-sm" />
                  <div>
                    <div className="font-bold text-[#0F172A] dark:text-white text-sm">Kabir Thayani</div>
                    <div className="text-xs text-slate-400 dark:text-slate-500 font-mono">Gujarat, India</div>
                  </div>
                </div>
                <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                  I started coding to solve my own problems. First an anime tracker, then a cancer detection model, now research papers.
                  I love the craft of building things that actually work in the real world.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-4">
              {stats.map(({ value, label }) => (
                <div key={label} className="card p-5 text-center">
                  <div className="text-2xl font-bold gradient-text mb-1">{value}</div>
                  <div className="text-xs text-slate-500 dark:text-slate-400 font-medium leading-tight">{label}</div>
                </div>
              ))}
            </div>

            <div className="card p-6 border-l-4 border-indigo-500 rounded-l-none!">
              <div className="text-[10px] font-mono font-semibold text-indigo-500 uppercase tracking-widest mb-2">Currently working on</div>
              <div className="text-sm font-semibold text-[#0F172A] dark:text-white">Knowledge Distillation Research</div>
              <div className="text-xs text-slate-500 dark:text-slate-400 mt-1">Exploring contrastive expansion in asymmetric cross-modal distillation</div>
            </div>
          </motion.div>

        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 md:px-12 py-16 border-t border-[#E2E8F0] dark:border-[#21262D]">
        <div className="flex justify-between items-end mb-10">
          <div>
            <p className="text-xs font-mono font-semibold text-indigo-500 uppercase tracking-widest mb-2">Selected Work</p>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0F172A] dark:text-white tracking-tight">Things I&apos;ve built</h2>
          </div>
          <Link to="/projects" className="text-sm font-semibold text-slate-400 dark:text-slate-500 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors hidden md:block">
            View all {projectsData.length} projects →
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {featured.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
            >
              <Link to={`/projects/${project.id}`} className="block h-full">
                <div className="card p-6 h-full flex flex-col gap-4 group cursor-pointer">
                  <div className="flex items-start justify-between">
                    <div className="w-9 h-9 rounded-lg bg-indigo-50 dark:bg-indigo-900/20 flex items-center justify-center">
                      <svg className="w-4 h-4 text-indigo-600 dark:text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"/>
                      </svg>
                    </div>
                    <svg className="w-4 h-4 text-slate-300 dark:text-slate-600 group-hover:text-indigo-500 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 17L17 7M17 7H7M17 7v10"/>
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-[#0F172A] dark:text-white mb-2 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors text-sm leading-snug">
                      {project.title}
                    </h3>
                    <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                      {project.description.length > 100 ? project.description.slice(0, 100) + "..." : project.description}
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-1.5 mt-auto pt-2">
                    {project.tags.slice(0, 3).map(tag => (
                      <span key={tag} className="pill" style={{ fontSize: "10px", padding: "0.15rem 0.5rem" }}>{tag}</span>
                    ))}
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        <div className="mt-6 md:hidden">
          <Link to="/projects" className="text-sm font-semibold text-indigo-600 dark:text-indigo-400">
            View all {projectsData.length} projects →
          </Link>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 md:px-12 py-16 border-t border-[#E2E8F0] dark:border-[#21262D]">
        <div className="mb-10">
          <p className="text-xs font-mono font-semibold text-indigo-500 uppercase tracking-widest mb-2">What I do</p>
          <h2 className="text-3xl md:text-4xl font-bold text-[#0F172A] dark:text-white tracking-tight">My focus areas</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {focusAreas.map(({ icon, title, desc }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="card p-7"
            >
              <div>{icon}</div>
              <h3 className="font-bold text-[#0F172A] dark:text-white mb-2">{title}</h3>
              <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">{desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 md:px-12 py-16 border-t border-[#E2E8F0] dark:border-[#21262D]">
        <div className="card p-10 md:p-16 text-center relative overflow-hidden">
          <div className="dot-grid absolute inset-0 opacity-40 dark:opacity-20 pointer-events-none" />
          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0F172A] dark:text-white tracking-tight mb-4">
              Want to work together?
            </h2>
            <p className="text-slate-500 dark:text-slate-400 max-w-md mx-auto mb-8 leading-relaxed">
              I&apos;m always open to new projects, research collaborations, or just a good conversation about AI. Drop me a message.
            </p>
            <div className="flex justify-center gap-3 flex-wrap">
              <Link to="/contact" className="btn-primary">
                Say hello →
              </Link>
              <a href="/KabirThayani.pdf" download className="btn-secondary">
                Download CV
              </a>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default HomePage;
