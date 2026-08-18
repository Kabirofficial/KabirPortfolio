import React from 'react';
import { motion } from 'framer-motion';
import { experience } from '../data/experience';
import { education } from '../data/education';
import SEO from '../components/SEO';

const JourneyPage = () => {
  const combinedJourney = [
    ...experience.map(item => ({ ...item, type: 'WORK' })),
    ...education.map(item => ({
      ...item,
      role: item.degree,
      company: item.school,
      type: 'EDUCATION'
    }))
  ];

  return (
    <section id="journey" className="min-h-screen flex items-center relative px-6 md:px-24 py-24">
      <SEO title="Journey" description="Execution timeline of experience and education." />
      <div className="max-w-4xl w-full z-10 flex flex-col gap-16 mx-auto">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col gap-2 text-center"
        >
          <h3 className="terminal-text text-os-indigo">SYS_LOG</h3>
          <h2 className="text-4xl md:text-5xl font-bold">Execution Timeline</h2>
        </motion.div>

        <div className="flex flex-col relative border-l border-os-border/50 pl-6 ml-4 md:ml-0 md:pl-8">
          {combinedJourney.map((entry, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ delay: i * 0.1 }}
              className="relative mb-12 last:mb-0 group"
            >
              {/* Timeline dot */}
              <div className="absolute w-3 h-3 bg-os-bg border border-os-cyan rounded-full -left-[1.95rem] md:-left-[2.45rem] top-1.5 group-hover:bg-os-cyan transition-colors" />

              <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4 mb-2">
                <span className="text-xs font-mono text-os-cyan bg-os-cyan/10 px-2 py-1 rounded inline-block w-fit">
                  {entry.period}
                </span>
                <span className="text-[10px] font-mono opacity-50 tracking-widest uppercase">
                  TYPE: {entry.type}
                </span>
              </div>

              <h4 className="text-xl font-bold text-white mb-1">{entry.role}</h4>
              <h5 className="text-sm text-os-text-secondary font-mono mb-4">{entry.company}</h5>

              <p className="text-sm text-os-text-primary leading-relaxed">
                {entry.description}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default JourneyPage;
