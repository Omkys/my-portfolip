import { FaExternalLinkAlt } from 'react-icons/fa';
import { motion } from 'framer-motion';

const fadeUpVariant = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

const projects = [
  {
    title: 'College Event Management System',
    description:
      'A full-stack MERN web app that allows students to view, register, and get notified about college events. Admins can manage event listings and participant data.',
    link: 'https://github.com/your-github/college-event-management',
    tech: ['MERN', 'JWT', 'Zod'],
  },
  {
    title: 'MERN TODO App',
    description:
      'A simple yet powerful TODO app using React, Node.js, Express, MongoDB, and Zod for validation. Features CRUD, filter, and live updates.',
    link: 'https://github.com/Omkys/TODO-app',
    tech: ['MERN', 'Zod'],
  },
  {
    title: 'Personal Blog Platform',
    description:
      'A blogging website where users can create, edit, and delete posts. Built with Node.js, Express, and styled with Tailwind CSS.',
    link: 'https://github.com/your-github/personal-blog',
    tech: ['Node.js', 'Express', 'Tailwind'],
  },
  {
    title: 'Paytm Clone',
    description:
      'A full-stack app that mimics the functionality of the popular payment app Paytm, including payment functionality and user authentication.',
    link: 'https://github.com/your-github/paytm-clone',
    tech: ['MERN', 'JWT'],
  },
  
];

function Projects() {
  return (
    <motion.div
      className="max-w-6xl w-full mx-auto px-4"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ staggerChildren: 0.2 }}
    >
      <motion.h2
        className="text-4xl font-bold text-neutral-800 mb-12 text-center"
        variants={fadeUpVariant}
        transition={{ duration: 0.6 }}
      >
        Projects
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="bg-white rounded-2xl shadow-md p-6 transition-transform cursor-pointer"
            variants={fadeUpVariant}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ scale: 1.05, rotate: 0.5 }}
            whileTap={{ scale: 0.98 }}
          >
            <h3 className="text-xl font-semibold text-gray-900">{project.title}</h3>
            <p className="text-gray-700 mt-2 mb-4">{project.description}</p>

            {/* Tech Tags */}
            <div className="flex flex-wrap gap-2 mb-4">
              {project.tech.map((tag, i) => (
                <span
                  key={i}
                  className="text-xs px-2 py-1 bg-blue-100 text-blue-600 rounded-full font-medium"
                >
                  {tag}
                </span>
              ))}
            </div>

            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors"
            >
              View Project <FaExternalLinkAlt className="ml-2" />
            </a>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}

export default Projects;
