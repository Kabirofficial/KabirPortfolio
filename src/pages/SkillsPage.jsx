import { skills } from '../data/skills.js';

const SkillsPage = () => {
  return (
    <div className="py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-extrabold text-[#000000] text-center mb-12">Technical Skills</h1>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 text-center">
          {skills.map((skill) => (
            <div
              key={skill}
              className="bg-[#EFECE3] border-2 border-[#8FABD4] rounded-lg p-4 text-[#4A70A9] font-semibold text-lg hover:bg-[#8FABD4]/20 transition-colors"
            >
              {skill}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SkillsPage;
