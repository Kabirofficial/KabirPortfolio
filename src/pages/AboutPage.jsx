
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import GlassCard from "../components/ui/GlassCard";
import Button from "../components/ui/Button";
import Timeline from "../components/Timeline";
import { experience } from "../data/experience";
import SEO from "../components/SEO";
import { Icons } from "../components/ui/Icons";

const AboutPage = () => {
  return (
    <div className="min-h-screen py-24 px-6 relative bg-white dark:bg-slate-950 transition-colors duration-300">
      <SEO title="About Me" description="Learn more about Kabir Thayani, an AI/ML Engineer and Full Stack Developer." />

      {/* Background Ambience */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-20 -left-20 w-[600px] h-[600px] bg-blue-500/5 rounded-full blur-[100px]" />
        <div className="absolute bottom-20 -right-20 w-[500px] h-[500px] bg-violet-500/5 rounded-full blur-[100px]" />
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold tracking-tighter text-slate-900 dark:text-white mb-6">
            About Me.
          </h1>
          <div className="h-1.5 w-24 bg-gradient-to-r from-blue-500 to-violet-500 rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-8 space-y-12">

            {/* Intro */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="prose prose-lg dark:prose-invert text-slate-600 dark:text-slate-400 leading-relaxed"
            >
              <p className="text-xl text-slate-900 dark:text-white font-medium">
                Hello! I&apos;m Kabir.
              </p>
              <p>
                A passionate <span className="text-slate-900 dark:text-white font-semibold">AI/ML Engineer</span> and Python Developer crafting intelligent, scalable solutions.
                My journey is fueled by a desire to turn raw data into compelling stories and actionable insights.
              </p>
              <p>
                From data preprocessing to model deployment, I thrive on the end-to-end ML lifecycle. Whether it&apos;s building deep learning
                models or optimizing classical algorithms, I love transforming complex theory into production-grade systems.
              </p>
            </motion.div>

            {/* Timeline */}
            <div>
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-2 flex items-center gap-3">
                <span className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-lg text-blue-600 dark:text-blue-400">
                  <Icons.Briefcase className="w-5 h-5" />
                </span>
                Experience
              </h2>
              <Timeline items={experience} />
            </div>

          </div>

          {/* Sidebar */}
          <div className="lg:col-span-4 flex flex-col gap-6">
            <GlassCard className="p-6">
              <h3 className="text-sm font-bold text-blue-600 dark:text-blue-400 uppercase tracking-wide mb-4 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></span>
                Quick Summary
              </h3>
              <ul className="space-y-4">
                {[
                  "AI/ML Engineer (Deep Learning & NLP)",
                  "Full Stack Developer (React, Python)",
                  "Published Researcher (IJERT)",
                  "Open Source Contributor"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm font-medium text-slate-700 dark:text-slate-300">
                    <div className="mt-1 w-1.5 h-1.5 rounded-full bg-slate-300 dark:bg-slate-700" />
                    {item}
                  </li>
                ))}
              </ul>
            </GlassCard>

            <GlassCard className="p-6">
              <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-4">
                Connect
              </h3>
              <p className="text-slate-600 dark:text-slate-400 text-sm mb-6">
                Open to new opportunities and interesting projects.
              </p>
              <Button
                href="mailto:thayanikabir.official@gmail.com"
                variant="primary"
                className="w-full justify-center"
                icon={<Icons.Mail className="w-4 h-4" />}
              >
                Get in Touch
              </Button>
            </GlassCard>

            <div className="grid grid-cols-2 gap-3">
              {[
                { label: "Skills", to: "/skills", icon: <Icons.Code className="w-4 h-4" /> },
                { label: "Education", to: "/education", icon: <Icons.FileText className="w-4 h-4" /> }
              ].map((link) => (
                <Link key={link.to} to={link.to}>
                  <GlassCard className="p-4 flex flex-col items-center justify-center gap-2 hover:bg-slate-50 dark:hover:bg-slate-900 transition-colors cursor-pointer text-center" hoverEffect={true}>
                    <div className="text-slate-500 dark:text-slate-400">{link.icon}</div>
                    <span className="text-sm font-bold text-slate-900 dark:text-white">{link.label}</span>
                  </GlassCard>
                </Link>
              ))}
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
