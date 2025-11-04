import { experience } from '../data/experience.js';

const ExperiencePage = () => {
  return (
    <div className="py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-extrabold text-[#000000] text-center mb-12">Work Experience</h1>
        <div className="relative border-l-2 border-[#8FABD4] pl-8 space-y-12">
          {experience.map((item, index) => (
            <div key={index} className="relative">
              <div className="absolute -left-[42px] top-1 w-4 h-4 bg-[#4A70A9] rounded-full border-4 border-[#EFECE3]"></div>
              <p className="text-sm font-semibold text-[#4A70A9]">{item.period}</p>
              <h3 className="text-2xl font-bold text-[#000000] mt-1">{item.role}</h3>
              <h4 className="text-xl font-medium text-[#000000]/70 mb-2">{item.company}</h4>
              <p className="text-lg text-[#000000]/80 leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExperiencePage;
