import { motion } from 'framer-motion';
import { ExternalLink, Github, Calendar, Code, Star } from 'lucide-react';
import { Link } from 'react-router-dom';

const projects = [
  {
    id: 1,
    title: 'College Event Management System',
    description: 'Full-stack MERN application for college event management with real-time notifications, user registration, and comprehensive admin dashboard.',
    technologies: ['React', 'Node.js', 'MongoDB', 'Express', 'JWT'],
    github: 'https://github.com/Omkys/Eventhub',
    demo: 'https://eventhub-neon.vercel.app/',
    image: '/api/placeholder/600/400',
    featured: true,
    year: '2024'
  },
  {
    id: 2,
    title: 'Advanced TODO Application',
    description: 'Task management platform with CRUD operations, priority systems, and user authentication. Built with modern React patterns.',
    technologies: ['React', 'Node.js', 'MongoDB', 'Express', 'Zod'],
    github: 'https://github.com/Omkys/TODO-app',
    demo: 'https://todo-app.vercel.app',
    image: '/api/placeholder/600/400',
    year: '2024'
  },
  {
    id: 3,
    title: 'Digital Payment Platform',
    description: 'Secure payment application with wallet management, transaction history, and encrypted payment processing.',
    technologies: ['React', 'Node.js', 'MongoDB', 'Express', 'JWT'],
    github: 'https://github.com/Omkys/payment-platform',
    demo: 'https://payment-app.vercel.app',
    image: '/api/placeholder/600/400',
    year: '2023'
  },
  {
    id: 4,
    title: 'Personal Blog Platform',
    description: 'Content management system with rich text editing, responsive design, and SEO optimization features.',
    technologies: ['Node.js', 'Express', 'MongoDB', 'Tailwind CSS'],
    github: 'https://github.com/Omkys/blog-platform',
    demo: 'https://blog-platform.vercel.app',
    image: '/api/placeholder/600/400',
    year: '2023'
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
};

export default function Projects({ setActiveSection }) {
  return (
    <section className="min-h-screen py-16 px-4 bg-white">
      {/* Back Button */}
      <div className="max-w-6xl mx-auto mb-8">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-gray-600 hover:text-blue-600 transition-colors font-medium"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Back to Home
        </Link>
      </div>

      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            My Projects
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            A collection of projects showcasing my skills in full-stack development, 
            modern web technologies, and problem-solving.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="space-y-12">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`group relative bg-white rounded-2xl border border-gray-200 overflow-hidden hover:shadow-xl transition-all duration-500 ${
                project.featured ? 'ring-2 ring-blue-500 ring-opacity-20' : ''
              }`}
            >
              <div className="grid md:grid-cols-2 gap-0">
                {/* Project Image */}
                <div className="relative h-64 md:h-80 bg-gradient-to-br from-blue-50 to-indigo-100 overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Code className="w-16 h-16 text-blue-300" />
                  </div>
                  
                  {/* Project Number */}
                  <div className="absolute top-4 left-4">
                    <span className="bg-white/90 text-gray-700 px-3 py-1 rounded-full text-sm font-bold">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                  </div>
                  
                  {/* Featured Badge */}
                  {project.featured && (
                    <div className="absolute top-4 right-4">
                      <div className="flex items-center gap-1 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                        <Star className="w-3 h-3" />
                        Featured
                      </div>
                    </div>
                  )}
                  
                  {/* Year */}
                  <div className="absolute bottom-4 left-4">
                    <div className="flex items-center gap-1 bg-white/90 text-gray-700 px-3 py-1 rounded-full text-sm font-medium">
                      <Calendar className="w-3 h-3" />
                      {project.year}
                    </div>
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-8 md:p-10 flex flex-col justify-center">
                  <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
                    {project.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {project.description}
                  </p>
                  
                  {/* Technologies */}
                  <div className="mb-8">
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  {/* Action Buttons */}
                  <div className="flex flex-col sm:flex-row gap-3">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 bg-gray-900 hover:bg-gray-800 text-white px-6 py-3 rounded-lg font-medium transition-colors"
                    >
                      <Github className="w-4 h-4" />
                      View Code
                    </a>
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors"
                    >
                      <ExternalLink className="w-4 h-4" />
                      Live Demo
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* GitHub CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="text-center mt-16 pt-12 border-t border-gray-200"
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Want to see more?
          </h3>
          <p className="text-gray-600 mb-8 max-w-lg mx-auto">
            Check out my GitHub profile for more projects and open source contributions.
          </p>
          <a
            href="https://github.com/Omkys"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-gray-900 hover:bg-gray-800 text-white px-8 py-4 rounded-lg font-medium transition-colors"
          >
            <Github className="w-5 h-5" />
            View GitHub Profile
          </a>
        </motion.div>
      </div>
    </section>
  );
}