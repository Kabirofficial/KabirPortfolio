/* eslint-disable no-unused-vars */
import React from "react";
import { motion } from "framer-motion";

const AboutPage = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };
  const skills = [
    "JavaScript (ES6+)",
    "React",
    "Node.js",
    "Express",
    "MongoDB",
    "HTML5",
    "CSS3",
    "Tailwind CSS",
    "Git & GitHub",
    "REST APIs",
    "Python",
    "SQL",
    "PHP",
    "MySQL",
    "GraphQL",
    "Next.js",
    "TypeScript",
    "Figma",
    "Postman",
    "Responsive Design",
  ];

  return (
    <motion.div
      className="bg-black text-white min-h-[calc(100vh-theme(spacing.32))] container mx-auto px-4 sm:px-6 lg:px-8 py-16"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit={{ opacity: 0, transition: { duration: 0.3 } }}
    >
      <motion.h1
        className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-center text-red-500 mb-12"
        variants={itemVariants}
      >
        A Bit About <span className="text-white">Me</span>
      </motion.h1>

      <motion.div className="max-w-3xl mx-auto text-lg text-gray-300 space-y-6 leading-relaxed text-center md:text-left">
        <motion.p variants={itemVariants}>
          Hey there! I'm Kabir. Ever since I first tinkered with a website's
          code (and probably broke something!), I've been hooked on
          understanding how the digital world works. That curiosity is what
          pulled me into{" "}
          <span className="text-red-400 font-semibold">
            Full-Stack Development
          </span>
          . For me, it's the perfect blend of logical problem-solving and
          creative expression – building things that people can actually
          interact with and find useful.
        </motion.p>

        <motion.p variants={itemVariants}>
          I really enjoy the whole process, from sketching out ideas to seeing
          them come alive on screen. Whether I'm crafting a smooth user
          experience on the front-end with tools like{" "}
          <span className="text-white font-medium">React</span> and{" "}
          <span className="text-white font-medium">Tailwind CSS</span>, or
          building the engine that powers it all using{" "}
          <span className="text-white font-medium">Node.js</span> and databases
          like <span className="text-white font-medium">MongoDB</span>, I find
          satisfaction in connecting the dots. Collaboration is key, too – I
          believe the best results come from working together and bouncing ideas
          around.
        </motion.p>

        <motion.p variants={itemVariants}>
          The tech landscape is constantly evolving, which is one of the aspects
          I find most exciting. Staying curious and continuously building new
          skills is not just essential—it's something I genuinely enjoy. Outside
          of tech, I recharge by{" "}
          <span className="text-red-400">
            reading thought-provoking sci-fi, suspense, or mystery novels
          </span>
          . I also stay sharp by{" "}
          <span className="text-red-400">building side projects</span> and{" "}
          <span className="text-red-400">
            exploring game design through strategy-based games
          </span>
          . For me, it's all about maintaining a balance between innovation and
          inspiration.
        </motion.p>
      </motion.div>

      <motion.div className="mt-16 text-center" variants={itemVariants}>
        <h2 className="text-3xl sm:text-4xl font-bold text-red-500 mb-10">
          My Tech <span className="text-white">Toolkit</span>
        </h2>
        <motion.p
          className="text-gray-400 max-w-xl mx-auto mb-10"
          variants={itemVariants}
        >
          Here are some of the main tools and technologies I enjoy working with:
        </motion.p>
        <motion.div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-6 max-w-5xl mx-auto">
          {skills.map((skill) => (
            <motion.div
              key={skill}
              className="bg-gray-900 border border-gray-800 p-4 rounded-lg text-center text-red-400 hover:bg-red-900/30 hover:border-red-700 hover:text-red-300 transition-all duration-200 font-medium shadow-sm"
              variants={itemVariants}
              whileHover={{ scale: 1.05, y: -3 }}
            >
              {skill}
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default AboutPage;
