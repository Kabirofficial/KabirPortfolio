import { Link } from 'react-router-dom';
import logo from '/profile.webp';
const HomePage = () => {
  return (
    <div className="flex items-center justify-center py-12 px-4">
      <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
        <div className="text-center md:text-left">
          <h1 className="text-5xl md:text-7xl font-extrabold text-[#000000] tracking-tight">Kabir Thayani</h1>
          <h2 className="mt-4 text-2xl md:text-3xl text-[#4A70A9]">AI/ML Engineer & Python Developer</h2>
          <p className="mt-6 max-w-xl text-lg text-[#000000]/80 mx-auto md:mx-0">
            I specialize in building intelligent applications and scalable backend systems. With a passion for
            data-driven solutions, I transform complex problems into elegant, efficient code.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <Link
              to="/projects"
              className="bg-[#4A70A9] text-[#EFECE3] font-bold py-3 px-8 rounded-lg text-lg hover:bg-[#8FABD4] hover:text-[#000000] transition-all duration-300"
            >
              View My Projects
            </Link>
            <Link
              to="/contact"
              className="bg-transparent text-[#4A70A9] font-bold py-3 px-8 rounded-lg text-lg border-2 border-[#4A70A9] hover:bg-[#4A70A9] hover:text-[#EFECE3] transition-all duration-300"
            >
              Get In Touch
            </Link>
          </div>
        </div>
        <div className="flex justify-center md:justify-end">
          <img
            src={logo}
            alt="Kabir Singh"
            className="w-64 h-64 md:w-96 md:h-96 rounded-full object-cover shadow-2xl border-8 border-[#8FABD4]/50"
          />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
