/* eslint-disable no-unused-vars */
import React from 'react';
import { motion } from 'framer-motion';
import { FaCode, FaServer, FaPalette, FaMobileAlt, FaRocket } from 'react-icons/fa';

const servicesData = [
  {
    id: 1,
    title: "Front-End Development",
    description: "Building responsive and interactive user interfaces using React.js, Tailwind CSS, and modern UI libraries.",
    icon: <FaCode className="text-red-500 text-4xl mb-4" />,
  },
  {
    id: 2,
    title: "Back-End Development",
    description: "Creating scalable server-side logic, REST APIs, and database integration using Node.js, Express, and MongoDB/MySQL.",
    icon: <FaServer className="text-red-500 text-4xl mb-4" />,
  },
  {
    id: 3,
    title: "Full-Stack Development",
    description: "Delivering complete web apps by combining efficient backend systems with powerful frontend interfaces.",
    icon: <FaMobileAlt className="text-red-500 text-4xl mb-4" />,
  },
  {
    id: 4,
    title: "Logo Design & Branding",
    description: "Designing clean and minimal logos to give your brand a distinct and professional visual identity.",
    icon: <FaPalette className="text-red-500 text-4xl mb-4" />,
  },
  {
    id: 5,
    title: "API Integration & Testing",
    description: "Implementing and testing third-party and custom APIs to ensure seamless integration and robust functionality.",
    icon: <FaRocket className="text-red-500 text-4xl mb-4" />,
  },
];

const ServicesPage = () => {
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
    hidden: { opacity: 0, y: 25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: 'easeOut' },
    },
  };

  return (
    <motion.div
      className="bg-black text-white min-h-[calc(100vh-theme(spacing.32))] container mx-auto px-4 sm:px-6 lg:px-8 py-16"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit={{ opacity: 0, transition: { duration: 0.3 } }}
    >
      <motion.h1
        className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-center text-red-500 mb-6"
        variants={itemVariants}
      >
        Services <span className="text-white">I Offer</span>
      </motion.h1>

      <motion.p
        className="text-lg text-center text-gray-300 max-w-2xl mx-auto mb-12"
        variants={itemVariants}
      >
        Leveraging my skills and experience, I offer a range of services to help
        bring your digital projects to life. Let's build something great together!
      </motion.p>

      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        {servicesData.map((service) => (
          <motion.div
            key={service.id}
            className="bg-gray-900 border border-gray-800 rounded-lg p-6 text-center flex flex-col items-center hover:border-red-700 transition-colors duration-300 shadow-md"
            variants={itemVariants}
            whileHover={{ y: -5 }}
          >
            {service.icon}
            <h3 className="text-xl font-semibold text-white mb-3">
              {service.title}
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              {service.description}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default ServicesPage;
