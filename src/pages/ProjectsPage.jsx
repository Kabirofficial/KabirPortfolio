import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { projectsData } from "../data/projectsData";
import SEO from "../components/SEO";

const ProjectsPage = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = [
    { id: "All", label: "All Work" },
    { id: "AI & ML", label: "AI & ML" },
    { id: "Web Dev", label: "Systems" },
    { id: "Research", label: "Research" },
  ];

  const filteredProjects = projectsData.filter((project) => {
    if (activeCategory === "All") return true;
    if (activeCategory === "Research") return project.tags.includes("Research Paper");
    if (activeCategory === "Web Dev")
      return (
        project.tags.includes("React") ||
        project.tags.includes("Web App") ||
        project.tags.includes("Portfolio")
      );
    return (
      project.tags.includes("AI") ||
      project.tags.includes("ML") ||
      project.tags.includes("Data Science")
    );
  });

  return (
    <div className="min-h-screen bg-white text-black font-black uppercase pt-24 md:pt-32 pb-20">
      <SEO title="Projects" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        
        
        <div className="md:hidden flex flex-col border-b border-black pb-8 mb-12 whitespace-normal">
          <h1 className="text-6xl mb-8">
            The Works.
          </h1>
          <div className="flex overflow-x-auto pb-4 gap-3 no-scrollbar -mx-6 px-6">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`
                  px-5 py-2 border text-[10px] tracking-widest transition-all duration-300 whitespace-nowrap
                  ${activeCategory === category.id
                    ? "bg-black text-white border-black"
                    : "bg-white text-black border-black hover:bg-[#891A20] hover:text-white hover:border-[#891A20]"
                  }
                `}
              >
                {category.label}
              </button>
            ))}
          </div>
        </div>

        
        <div className="hidden md:flex flex-col border-b border-black pb-12 mb-20 whitespace-normal">
          <h1 className="text-massive mb-12">
            The Works.
          </h1>
          <div className="flex overflow-x-auto pb-4 gap-4 no-scrollbar">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`
                  px-6 py-2 border text-xs tracking-widest transition-all duration-300 whitespace-nowrap
                  ${activeCategory === category.id
                    ? "bg-black text-white border-black"
                    : "bg-white text-black border-black hover:bg-[#891A20] hover:text-white hover:border-[#891A20]"
                  }
                `}
              >
                {category.label}
              </button>
            ))}
          </div>
        </div>

        
        <div className="flex flex-col border-t border-black">
          {filteredProjects.map((project, index) => (
            <Link
              key={project.id}
              to={`/projects/${project.id}`}
              className="group border-b border-black py-8 md:py-16 hover:bg-[#891A20] hover:text-white transition-all duration-500 overflow-hidden relative"
            >
              
              <div className="md:hidden flex flex-col gap-4 pointer-events-none relative z-10 px-4">
                  <span className="text-[10px] tracking-[0.3em] opacity-60">
                      {project.tags[0]} — 0{index + 1}
                  </span>
                  <h2 className="text-4xl tracking-tighter leading-none mb-4">
                      {project.title}
                  </h2>
                  <div className="text-xl tracking-tighter text-[#891A20] group-hover:text-white">
                      VIEW PROJECT →
                  </div>
              </div>

              
              <div className="hidden md:flex flex-row items-center justify-between pointer-events-none relative z-10 px-6">
                <div className="flex flex-col gap-4">
                    <span className="text-sm tracking-[0.3em] opacity-60">
                        {project.tags[0]} — 0{index + 1}
                    </span>
                    <h2 className="text-6xl lg:text-7xl tracking-tighter leading-none">
                        {project.title}
                    </h2>
                </div>
                <div className="text-5xl lg:text-6xl tracking-tighter transition-transform duration-500 group-hover:translate-x-12">
                    VIEW →
                </div>
              </div>
              
              
              <div className="hidden md:block absolute top-1/2 left-0 -translate-y-1/2 text-[15vw] opacity-[0.03] select-none group-hover:opacity-10 transition-opacity">
                {project.id}
              </div>
            </Link>
          ))}
        </div>

        
        {filteredProjects.length === 0 && (
          <div className="text-center py-32 md:py-40 border-b border-black">
            <p className="text-xl md:text-2xl opacity-60">Nothing found in this sector.</p>
            <button onClick={() => setActiveCategory("All")} className="text-[#891A20] mt-4 hover:underline">Reset System</button>
          </div>
        )}

        
        <div className="mt-24 md:mt-40 border border-black p-8 md:p-20 flex flex-col items-center gap-8 md:gap-12 text-center">
          <h2 className="text-3xl md:text-6xl tracking-tighter">Ready to initiate?</h2>
          <Link to="/contact" className="text-xl md:text-4xl px-8 py-5 md:px-12 md:py-6 bg-black text-white hover:bg-[#891A20] transition-colors leading-none pt-6 md:pt-8">
            START_COLLAB_
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProjectsPage;
