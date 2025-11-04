import { Link, useParams } from 'react-router-dom';
import { projectsData } from '../data/projectsData.js';

const ProjectDetailPage = () => {
  const { projectId } = useParams();
  const project = projectsData.find((p) => p.id === projectId);

  if (!project) {
    return (
      <div className="text-center py-20">
        <h1 className="text-4xl font-bold">Project Not Found</h1>
        <Link to="/projects" className="text-lg text-[#4A70A9] hover:underline mt-4 inline-block">
          &larr; Back to Projects
        </Link>
      </div>
    );
  }

  return (
    <div className="py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <Link to="/projects" className="text-lg text-[#4A70A9] hover:underline mb-8 inline-block">
          &larr; Back to All Projects
        </Link>

        <h1 className="text-4xl md:text-5xl font-extrabold text-[#000000] mb-4">{project.title}</h1>

        <div className="flex flex-wrap gap-2 mb-8">
          {project.tags.map((tag) => (
            <span key={tag} className="bg-[#8FABD4]/20 text-[#4A70A9] text-sm font-semibold px-3 py-1 rounded-full">
              {tag}
            </span>
          ))}
        </div>

        <div className="text-lg text-[#000000]/90 space-y-6 leading-relaxed">
          {project.longDescription.split('\n').map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>

        <div className="mt-10 flex gap-4">
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#4A70A9] text-[#EFECE3] font-bold py-3 px-6 rounded-lg hover:bg-[#8FABD4] hover:text-[#000000] transition-colors"
          >
            View on GitHub
          </a>
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-transparent text-[#4A70A9] font-bold py-3 px-6 rounded-lg border-2 border-[#4A70A9] hover:bg-[#4A70A9] hover:text-[#EFECE3] transition-colors"
            >
              View Live Demo
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectDetailPage;
