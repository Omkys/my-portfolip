import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  FaReact, 
  FaHtml5, 
  FaCss3Alt, 
  FaJsSquare, 
  FaGitAlt, 
  FaDocker, 
  FaNodeJs, 
  FaGithub 
} from 'react-icons/fa';
import { 
  SiTailwindcss, 
  SiMongodb, 
  SiExpress, 
  SiZod,
  SiPostman
} from 'react-icons/si';

const skillCategories = [
  {
    title: 'Frontend Development',
    skills: [
      { name: 'React', icon: FaReact, color: 'text-blue-500', level: 90 },
      { name: 'JavaScript', icon: FaJsSquare, color: 'text-yellow-500', level: 85 },
      { name: 'HTML5', icon: FaHtml5, color: 'text-orange-500', level: 95 },
      { name: 'CSS3', icon: FaCss3Alt, color: 'text-blue-600', level: 90 },
      { name: 'Tailwind CSS', icon: SiTailwindcss, color: 'text-cyan-500', level: 88 }
    ]
  },
  {
    title: 'Backend Development',
    skills: [
      { name: 'Node.js', icon: FaNodeJs, color: 'text-green-600', level: 85 },
      { name: 'Express.js', icon: SiExpress, color: 'text-gray-700', level: 80 },
      { name: 'MongoDB', icon: SiMongodb, color: 'text-green-600', level: 82 },
      { name: 'Zod', icon: SiZod, color: 'text-purple-600', level: 75 }
    ]
  },
  {
    title: 'Tools & Technologies',
    skills: [
      { name: 'Git', icon: FaGitAlt, color: 'text-red-600', level: 85 },
      { name: 'GitHub', icon: FaGithub, color: 'text-gray-800', level: 90 },
      { name: 'Docker', icon: FaDocker, color: 'text-blue-600', level: 70 },
      { name: 'Postman', icon: SiPostman, color: 'text-orange-600', level: 85 }
    ]
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3
    }
  }
};

const categoryVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      staggerChildren: 0.1
    }
  }
};

const skillVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5
    }
  }
};

export default function Skills({ setActiveSection }) {
  return (
    <section className="min-h-screen py-16 px-4 bg-gray-50">
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
            Skills & Expertise
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Technologies and tools I use to build modern, scalable applications.
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              className="bg-white rounded-2xl p-8 border border-gray-200 hover:shadow-lg transition-shadow duration-300"
            >
              <div className="text-center mb-8">
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <span className="text-xl">
                    {categoryIndex === 0 ? '🎨' : categoryIndex === 1 ? '⚙️' : '🛠️'}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-gray-900">
                  {category.title}
                </h3>
              </div>
              
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="flex items-center gap-3">
                    <skill.icon className={`text-lg ${skill.color}`} />
                    <span className="font-medium text-gray-800">{skill.name}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Learning Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="bg-white rounded-2xl p-8 border border-gray-200"
        >
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Currently Learning
            </h3>
            <p className="text-gray-600">
              Expanding my expertise with these emerging technologies
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {[
              { name: 'TypeScript', icon: '📘' },
              { name: 'Next.js', icon: '⚡' },
              { name: 'AWS', icon: '☁️' },
              { name: 'GraphQL', icon: '🔗' },
              { name: 'Redis', icon: '🔴' },
              { name: 'PostgreSQL', icon: '🐘' }
            ].map((tech, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-lg p-4 text-center hover:bg-blue-50 transition-colors"
              >
                <div className="text-2xl mb-2">{tech.icon}</div>
                <span className="text-sm font-medium text-gray-700">
                  {tech.name}
                </span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}