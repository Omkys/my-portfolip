// Projects.jsx
import { FaExternalLinkAlt } from 'react-icons/fa';
import { motion } from 'framer-motion';
function Projects() {
  const fadeUpVariant = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.div 
      className="max-w-3xl w-full"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ staggerChildren: 0.2 }}
    >
      <motion.h2 
        className="text-3xl font-semibold text-gray-800 mb-6"
        variants={fadeUpVariant}
        transition={{ duration: 0.5 }}
      >
        Projects
      </motion.h2>

      <div className="space-y-6">
        {/* === Project 1 === */}
        <motion.div 
          className="bg-white rounded-xl shadow-md p-6"
          variants={fadeUpVariant}
          transition={{ duration: 0.5 }}
        >
          <h3 className="text-xl font-semibold text-gray-900">College Event Management System</h3>
          <p className="text-gray-700 mt-2 mb-4">
            A full-stack MERN web app that allows students to view, register, and get notified about college events. Admins can manage event listings and participant data.
          </p>
          <a 
            href="https://github.com/your-github/college-event-management" 
            target="_blank"
            className="inline-flex items-center text-blue-600 hover:underline"
          >
            View Project <FaExternalLinkAlt className="ml-2" />
          </a>
        </motion.div>

        {/* === Project 2 === */}
        <motion.div 
          className="bg-white rounded-xl shadow-md p-6"
          variants={fadeUpVariant}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <h3 className="text-xl font-semibold text-gray-900">MERN TODO App</h3>
          <p className="text-gray-700 mt-2 mb-4">
            A simple yet powerful TODO app using React, Node.js, Express, MongoDB, and Zod for validation. Features CRUD, filter, and live updates.
          </p>
          <a 
            href="https://github.com/Omkys/TODO-app" 
            target="_blank"
            className="inline-flex items-center text-blue-600 hover:underline"
          >
            View Project <FaExternalLinkAlt className="ml-2" />
          </a>
        </motion.div>

        {/* === Project 3 === */}
        <motion.div 
          className="bg-white rounded-xl shadow-md p-6"
          variants={fadeUpVariant}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h3 className="text-xl font-semibold text-gray-900">Personal Blog Platform</h3>
          <p className="text-gray-700 mt-2 mb-4">
            A blogging website where users can create, edit, and delete posts. Built with Node.js, Express, and styled with Tailwind CSS.
          </p>
          <a 
            href="https://github.com/your-github/personal-blog" 
            target="_blank"
            className="inline-flex items-center text-blue-600 hover:underline"
          >
            View Project <FaExternalLinkAlt className="ml-2" />
          </a>
        </motion.div>
      </div>
    </motion.div>
  );
}

export default Projects;
