import { motion } from 'framer-motion';
import { Download, Mail, Github, Linkedin } from 'lucide-react';
import { Link } from 'react-router-dom';
import profilePic from '../assets/my pic.jpg';
import toast from 'react-hot-toast';

export default function Hero({ setActiveSection }) {
  const handleResumeClick = () => {
    toast.success('Opening Resume...');
    setTimeout(() => {
      window.open('/resume/Onkar-Bobde.pdf', '_blank');
    }, 500);
  };

  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-20 bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.8 }}
                className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight"
              >
                Hi, I'm{' '}
                <span className="text-blue-600">Onkar</span>
              </motion.h1>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.8 }}
                className="text-xl lg:text-2xl text-gray-600 font-medium"
              >
                Full Stack Developer
              </motion.p>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.8 }}
                className="text-lg text-gray-700 leading-relaxed max-w-lg"
              >
                I build scalable web applications using the MERN stack. 
                Passionate about clean code, modern UI/UX, and DevOps automation.
              </motion.p>
            </div>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="flex flex-wrap gap-4"
            >
              <Link
                to="/projects"
                className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                View Projects
              </Link>
              
              <button
                onClick={handleResumeClick}
                className="bg-gray-800 hover:bg-gray-900 text-white px-8 py-3 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center gap-2"
              >
                <Download className="w-4 h-4" />
                Resume
              </button>
              
              <Link
                to="/contact"
                className="inline-block border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-3 rounded-lg font-medium transition-all duration-300"
              >
                Get In Touch
              </Link>
            </motion.div>

            {/* Quick Navigation */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.8 }}
              className="flex flex-wrap gap-3 pt-4"
            >
              <Link
                to="/about"
                className="text-sm bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300 px-4 py-2 rounded-lg transition-colors font-medium"
              >
                👨💻 About Me
              </Link>
              <Link
                to="/skills"
                className="text-sm bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300 px-4 py-2 rounded-lg transition-colors font-medium"
              >
                🛠️ Skills
              </Link>
              <Link
                to="/certificates"
                className="text-sm bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300 px-4 py-2 rounded-lg transition-colors font-medium"
              >
                🏆 Certificates
              </Link>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 0.8 }}
              className="flex gap-4 pt-4"
            >
              <a
                href="mailto:bobdeonkar17@gmail.com"
                className="p-3 bg-white rounded-full shadow-md hover:shadow-lg transition-all duration-300 text-gray-600 hover:text-blue-600"
                aria-label="Email"
              >
                <Mail className="w-5 h-5" />
              </a>
              <a
                href="https://github.com/Omkys"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-white rounded-full shadow-md hover:shadow-lg transition-all duration-300 text-gray-600 hover:text-gray-900"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/onkar-bobde-770354286/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-white rounded-full shadow-md hover:shadow-lg transition-all duration-300 text-gray-600 hover:text-blue-600"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </motion.div>
          </motion.div>

          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative">
              <div className="w-80 h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden shadow-2xl border-8 border-white">
                <img
                  src={profilePic}
                  alt="Onkar Bobde"
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-blue-100 rounded-full -z-10"></div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-indigo-100 rounded-full -z-10"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}