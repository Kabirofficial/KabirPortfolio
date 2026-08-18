import React from 'react';
import { motion } from 'framer-motion';
import { skills } from '../data/skills';
import SEO from '../components/SEO';

const TechStackPage = () => {
  return (
    <section id="stack" className="min-h-screen flex items-center relative px-6 md:px-24 py-24">
      <SEO title="Tech Stack" description="System capabilities and technical skills." />
      <div className="max-w-6xl w-full z-10 flex flex-col gap-16 mx-auto">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col gap-2"
        >
          <h3 className="terminal-text text-os-green">TECH_STACK</h3>
          <h2 className="text-4xl md:text-5xl font-bold">System Capabilities</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skills.map((category, i) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="flex flex-col gap-6"
            >
              <h4 className="font-mono text-sm text-white border-b border-os-border/50 pb-2">
                &gt; {category.title.toUpperCase()}
              </h4>

              <div className="flex flex-wrap gap-3">
                {category.items.map((item, j) => (
                  <motion.div
                    key={item}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: (i * 0.1) + (j * 0.05) }}
                    className="os-glass px-3 py-1.5 border border-os-border text-xs font-mono text-os-text-primary hover:border-os-green hover:text-os-green transition-colors cursor-default"
                  >
                    {item}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default TechStackPage;
