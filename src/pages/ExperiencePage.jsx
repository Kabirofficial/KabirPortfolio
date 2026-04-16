import { motion } from "framer-motion";
import { experience } from "../data/experience";
import SEO from "../components/SEO";
import Timeline from "../components/Timeline";

const ExperiencePage = () => {
  return (
    <div className="min-h-screen bg-white text-black font-black uppercase pt-24 md:pt-32 pb-20">
      <SEO title="Experience" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden border-b border-black pb-8 mb-12"
        >
          <h1 className="text-6xl mb-4 text-wrap">
            The <br/> Chronicle.
          </h1>
          <p className="text-lg opacity-60 lowercase font-medium tracking-tight">
            A linear progression of systems, intelligence, and large-scale engineering.
          </p>
        </motion.div>

        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="hidden md:block border-b border-black pb-12 mb-20"
        >
          <h1 className="text-huge mb-4">
            The Chronicle.
          </h1>
          <p className="text-xl md:text-2xl opacity-60 lowercase font-medium tracking-tight">
            A linear progression of systems, intelligence, and large-scale engineering.
          </p>
        </motion.div>

        
        <div className="border-t border-black pt-12 md:pt-20">
             <Timeline items={experience} />
        </div>

        
        
        <div className="md:hidden mt-24 border border-black p-8 flex flex-col items-center gap-8 text-center bg-white relative z-10">
          <h2 className="text-3xl tracking-tighter">Looking for intelligence?</h2>
          <a href="mailto:thayanikabir.official@gmail.com" className="text-xl px-6 py-4 bg-black text-white hover:bg-[#891A20] transition-colors leading-none pt-5">
            HIRE_KABIR_
          </a>
        </div>

        
        <div className="hidden md:flex mt-40 border border-black p-20 flex-col items-center gap-12 text-center bg-white relative z-10">
          <h2 className="text-4xl md:text-6xl tracking-tighter">Looking for intelligence?</h2>
          <a href="mailto:thayanikabir.official@gmail.com" className="text-2xl md:text-4xl px-12 py-6 bg-black text-white hover:bg-[#891A20] transition-colors leading-none pt-8">
            HIRE_KABIR_
          </a>
        </div>

      </div>
    </div>
  );
};

export default ExperiencePage;
