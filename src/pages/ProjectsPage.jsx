import { Link } from 'react-router-dom';
import { projectsData } from '../data/projectsData.js';

const ProjectsPage = () => {
  return (
    <div className="py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-extrabold text-[#000000] text-center mb-12">My Projects</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project) => (
            <Link to={`/projects/${project.id}`} key={project.id} className="block group">
              <div className="bg-[#EFECE3] border-2 border-[#8FABD4] rounded-lg shadow-lg p-6 flex flex-col h-full group-hover:border-[#4A70A9] group-hover:scale-105 transition-all duration-300">
                <h2 className="text-2xl font-bold text-[#4A70A9] mb-3">{project.title}</h2>
                <p className="text-[#000000]/80 grow mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="bg-[#8FABD4]/20 text-[#4A70A9] text-sm font-semibold px-3 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectsPage;
