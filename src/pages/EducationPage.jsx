import { motion } from "framer-motion";
import { education } from "../data/education";
import SEO from "../components/SEO";

const EducationPage = () => {
  return (
    <div className="min-h-screen bg-white text-black font-black uppercase pt-32 pb-20">
      <SEO title="Education" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="border-b border-black pb-12 mb-20"
        >
          <h1 className="text-huge mb-4">
            The Foundation.
          </h1>
          <p className="text-xl md:text-2xl opacity-60 lowercase font-medium tracking-tight">
             Scholastic milestones in computer engineering and quantitative logic.
          </p>
        </motion.div>

        <div className="flex flex-col border-t border-black">
          {education.map((item, index) => (
            <div
              key={index}
              className="group border-b border-black py-16 md:py-24 grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 hover:bg-black hover:text-white transition-all duration-500 overflow-hidden"
            >
              <div className="lg:col-span-1 text-xs md:text-sm tracking-[0.3em] text-[#891A20] font-black">
                0{index + 1}
              </div>
              <div className="lg:col-span-7 flex flex-col gap-6">
                <h2 className="text-3xl md:text-5xl lg:text-7xl tracking-tighter leading-none">
                  {item.school}
                </h2>
                <h3 className="text-xl md:text-3xl opacity-60 lowercase font-medium">
                   {item.degree}
                </h3>
                <p className="mt-8 text-sm md:text-lg opacity-80 normal-case font-medium leading-relaxed max-w-3xl">
                    {item.description}
                </p>
              </div>
              <div className="lg:col-span-4 flex flex-col items-start lg:items-end justify-between text-right gap-8">
                 <span className="text-xs md:text-sm tracking-[0.2em] font-black">
                   {item.period}
                 </span>
                 <div className="text-6xl md:text-8xl lg:text-9xl tracking-tighter opacity-10 group-hover:opacity-20 transition-opacity">
                    EDU.
                 </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EducationPage;
