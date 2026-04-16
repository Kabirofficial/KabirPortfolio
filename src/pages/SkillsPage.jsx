import { motion } from "framer-motion";
import { skills } from "../data/skills";
import SEO from "../components/SEO";

const SkillsPage = () => {
  return (
    <div className="min-h-screen bg-white text-black font-black uppercase pt-32 pb-20">
      <SEO title="Skills" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="border-b border-black pb-12 mb-20"
        >
          <h1 className="text-[12vw] md:text-[8vw] leading-none tracking-tighter mb-4">
            Intelligence.
          </h1>
          <p className="text-xl md:text-2xl opacity-60 lowercase font-medium tracking-tight">
             A matrix of technical proficiencies across the stack.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0 border-t border-l border-black">
          {skills.map((category, index) => (
            <div
              key={index}
              className="group border-r border-b border-black p-10 hover:bg-[#891A20] hover:text-white transition-all duration-500"
            >
              <span className="text-xs md:text-sm tracking-[0.3em] opacity-40 mb-12 block group-hover:text-white">
                 ID: 0{index + 1} 
              </span>
              <h3 className="text-2xl md:text-3xl tracking-tighter mb-12">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-x-6 gap-y-4">
                {category.items.map((skill, i) => (
                  <span
                    key={i}
                    className="text-xs md:text-sm tracking-widest opacity-80 font-medium group-hover:opacity-100"
                  >
                    {skill}_
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

         <div className="mt-40 border border-black p-12 md:p-20 flex flex-col items-center gap-12 text-center">
          <h2 className="text-4xl md:text-6xl tracking-tighter">System is ready.</h2>
          <a href="/projects" className="text-2xl md:text-4xl px-12 py-6 bg-black text-white hover:bg-black transition-colors leading-none pt-8">
            VIEW_WORKS_
          </a>
        </div>
      </div>
    </div>
  );
};

export default SkillsPage;
