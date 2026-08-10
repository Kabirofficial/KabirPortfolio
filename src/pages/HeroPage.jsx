import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import SEO from '../components/SEO';

const ScrambleText = ({ text, className }) => {
  const [displayText, setDisplayText] = useState('');
  
  useEffect(() => {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()';
    let iteration = 0;
    let interval = null;
    
    interval = setInterval(() => {
      setDisplayText(text.split('').map((letter, index) => {
        if (index < iteration) {
          return text[index];
        }
        if (text[index] === ' ') return ' ';
        return chars[Math.floor(Math.random() * chars.length)];
      }).join(''));
      
      if (iteration >= text.length) {
        clearInterval(interval);
      }
      
      iteration += 1 / 3; 
    }, 30);
    
    return () => clearInterval(interval);
  }, [text]);

  return <span className={className}>{displayText}</span>;
};

const HeroPage = () => {
  const navigate = useNavigate();
  const [showHint, setShowHint] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowHint(false);
    }, 5000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative px-6 md:px-24">
      <SEO title="Home" description="Kabir Thayani | AI / ML Researcher" />
      <div className="max-w-4xl w-full z-10 flex flex-col gap-6 relative">
        
        <AnimatePresence>
          {showHint && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="absolute -top-16 right-0 os-glass px-4 py-2 text-[10px] font-mono text-os-cyan border-os-cyan/30"
            >
              PRO TIP: USE KEYS [1-8] TO NAVIGATE MODULES
            </motion.div>
          )}
        </AnimatePresence>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex flex-col gap-2"
        >
          <div className="flex items-center gap-4">
            <span className="w-2 h-2 rounded-full bg-os-green animate-pulse" />
            <span className="terminal-text text-os-green">SYSTEM ONLINE</span>
          </div>
          
          <h1 className="text-5xl md:text-8xl font-bold tracking-tighter mt-4 text-white">
            <ScrambleText text="KABIR THAYANI" />
          </h1>
          
          <h2 className="text-xl md:text-2xl text-os-cyan font-mono tracking-wider mt-2">
            <ScrambleText text="AI / ML RESEARCHER" />
          </h2>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-wrap gap-4 mt-8"
        >
          <button className="btn-os btn-os-primary" onClick={() => navigate('/research')}>
            [ EXPLORE RESEARCH ]
          </button>
          <button className="btn-os" onClick={() => navigate('/projects')}>
            [ VIEW PROJECTS ]
          </button>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-12 flex gap-4 text-xs font-mono text-os-text-secondary"
        >
          <span>{"// COMPUTER VISION"}</span>
          <span>{"// EFFICIENT AI"}</span>
          <span>{"// DEEP LEARNING"}</span>
        </motion.div>
        
      </div>
    </section>
  );
};

export default HeroPage;
