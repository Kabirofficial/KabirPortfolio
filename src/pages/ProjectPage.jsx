/* eslint-disable no-unused-vars */
import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import netfliximg from "../assets/webimg/netflix.jpeg";
import nikebrandpageimg from "../assets/webimg/nikebrandpage.jpeg";
import riotimg from "../assets/webimg/riot.jpeg";
import dicegameimg from "../assets/webimg/dicegame.jpeg";
import spotifyimg from "../assets/webimg/spotify.jpeg";
import primevideoimg from "../assets/webimg/primevideo.jpeg";
import jsprojectsimg from "../assets/webimg/jsminiproject.png";
import futuristicportfolioimg from "../assets/webimg/futuristicportfolio.png";
import yumyardImg from "../assets/webimg/YumYard.png";

const projectsData = [
  {
    id: 1,
    title: "Kabir's Futuristic Portfolio",
    description:
      "A cyberpunk-themed portfolio website with 3D elements, animations, and responsive design to showcase skills and projects.",
    technologies: [
      "HTML5",
      "CSS3 (SCSS)",
      "JavaScript",
      "Three.js",
      "Formspree",
    ],
    imageUrl: futuristicportfolioimg,
    repoUrl: "https://github.com/Kabirofficial/kabir-futuristic-portfolio",
  },
  {
    id: 2,
    title: "Netflix Clone",
    description:
      "A frontend clone of Netflix with a responsive layout, styled cards, and hover interactions.",
    technologies: ["HTML", "CSS"],
    imageUrl: netfliximg,
    repoUrl: "https://github.com/Kabirofficial/Netflix-clone",
  },
  {
    id: 3,
    title: "Nike Brand Page",
    description:
      "A product-based brand landing page inspired by Nike, featuring scroll effects and clean animations.",
    technologies: ["React", "Tailwind CSS"],
    imageUrl: nikebrandpageimg,
    repoUrl: "https://github.com/Kabirofficial/nike-brand-page",
  },
  {
    id: 4,
    title: "Riot Clone",
    description:
      "Riot Games-inspired UI clone using HTML, CSS, and JavaScript to replicate the website layout.",
    technologies: ["HTML", "CSS", "JavaScript"],
    imageUrl: riotimg,
    repoUrl: "https://github.com/Kabirofficial/riot-clone",
  },
  {
    id: 5,
    title: "Dice Game",
    description:
      "A simple dice rolling game built in React to explore useState and game logic handling.",
    technologies: ["React", "CSS"],
    imageUrl: dicegameimg,
    repoUrl: "https://github.com/Kabirofficial/DiceGame",
  },
  {
    id: 6,
    title: "JavaScript Mini Projects",
    description:
      "A series of small projects built using JavaScript like weather app, QR generator, calculator, and more.",
    technologies: ["HTML", "CSS", "JavaScript"],
    imageUrl: jsprojectsimg,
    repoUrl: "https://github.com/Kabirofficial/JavaScript-Small-Projects",
  },
  {
    id: 7,
    title: "Spotify Clone",
    description:
      "A frontend Spotify UI clone featuring stylish song cards, animated controls, and responsive layout.",
    technologies: ["HTML", "CSS", "JavaScript"],
    imageUrl: spotifyimg,
    repoUrl: "https://github.com/Kabirofficial/spotify-clone",
  },
  {
    id: 8,
    title: "Prime Video Clone",
    description:
      "A responsive frontend Amazon Prime Video homepage clone with custom layout and hover effects.",
    technologies: ["HTML", "CSS", "JavaScript"],
    imageUrl: primevideoimg,
    repoUrl: "https://github.com/Kabirofficial/Prime-Video-Frontend-Clone-",
  },
  {
    id: 9,
    title: "YumYard - Recipe Web App",
    description:
      "A modern and interactive recipe app built with React. Features include adding, viewing, favoriting, and deleting recipes. Supports dark mode and profile dropdown.",
    technologies: ["MERN", "Tailwind CSS", "JavaScript", "localStorage"],
    imageUrl: yumyardImg,
  }
];

const ProjectsPage = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <motion.div
      className="bg-black text-white min-h-[calc(100vh-theme(spacing.32))] container mx-auto px-4 sm:px-6 lg:px-8 py-16"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      exit={{ opacity: 0, transition: { duration: 0.3 } }}
    >
      <motion.h1
        className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-center text-red-500 mb-12"
        variants={itemVariants}
      >
        My <span className="text-white">Projects</span>
      </motion.h1>

      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10"
        variants={containerVariants}
      >
        {projectsData.map((project) => (
          <motion.div
            key={project.id}
            className="bg-gray-900 border border-gray-800 rounded-lg overflow-hidden shadow-lg flex flex-col hover:border-red-700 transition-colors duration-300"
            variants={itemVariants}
            whileHover={{ y: -5 }}
          >
            {project.imageUrl && (
              <img
                src={project.imageUrl}
                alt={`${project.title} screenshot`}
                className="w-full h-64 object-contain bg-black"
              />
            )}

            <div className="p-6 flex flex-col flex-grow">
              <h3 className="text-xl font-semibold text-red-500 mb-2">
                {project.title}
              </h3>
              <p className="text-gray-300 text-sm mb-4 flex-grow">
                {project.description}
              </p>

              <div className="mb-4">
                <p className="text-xs text-red-400 font-semibold mb-2">
                  Technologies Used:
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="bg-gray-700 text-gray-200 px-2 py-1 rounded-md text-xs"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-auto pt-4 border-t border-gray-700 flex justify-end space-x-4">
                {project.repoUrl && (
                  <motion.a
                    href={project.repoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-red-400 hover:text-white transition-colors duration-200 flex items-center space-x-1 text-sm"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    aria-label={`${project.title} GitHub Repository`}
                  >
                    <FaGithub />
                    <span>Code</span>
                  </motion.a>
                )}
                {project.liveUrl && (
                  <motion.a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-red-400 hover:text-white transition-colors duration-200 flex items-center space-x-1 text-sm"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    aria-label={`${project.title} Live Demo`}
                  >
                    <FaExternalLinkAlt />
                    <span>Live Demo</span>
                  </motion.a>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default ProjectsPage;
