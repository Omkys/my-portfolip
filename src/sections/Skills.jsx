import { FaReact, FaHtml5, FaCss3Alt, FaJsSquare, FaGitAlt, FaDocker, FaNodeJs, FaGithub } from 'react-icons/fa';
import { SiTailwindcss, SiMongodb, SiExpress, SiZod } from 'react-icons/si';
import { motion } from 'framer-motion';

const frontendSkills = [
  { name: 'React', icon: FaReact, color: 'text-sky-500' },
  { name: 'JavaScript', icon: FaJsSquare, color: 'text-yellow-500' },
  { name: 'HTML5', icon: FaHtml5, color: 'text-orange-500' },
  { name: 'CSS3', icon: FaCss3Alt, color: 'text-blue-500' },
  { name: 'Tailwind CSS', icon: SiTailwindcss, color: 'text-cyan-500' },
];

const backendSkills = [
  { name: 'Node.js', icon: FaNodeJs, color: 'text-green-600' },
  { name: 'Express.js', icon: SiExpress, color: 'text-gray-700' },
  { name: 'MongoDB', icon: SiMongodb, color: 'text-green-600' },
  { name: 'Zod', icon: SiZod, color: 'text-purple-600' },
];

const otherSkills = [
  { name: 'Git', icon: FaGitAlt, color: 'text-red-600' },
  { name: 'GitHub', icon: FaGithub, color: 'text-gray-800' }, // GitHub icon
  { name: 'Docker', icon: FaDocker, color: 'text-blue-600' }, // Docker
  { name: 'Postman', icon: FaGitAlt, color: 'text-orange-600' }, // Postman (using Git icon for now)
];

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const SkillCard = ({ Icon, name, color }) => (
  <motion.div
    className="group bg-white rounded-xl p-5 shadow-md transition-all duration-300 flex flex-col items-center justify-center gap-1"
    variants={fadeIn}
    whileHover={{ scale: 1.05, boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}
  >
    <Icon className={`text-3xl ${color} transition-all duration-300`} />
    <p className="text-sm text-gray-600 font-medium">{name}</p>
  </motion.div>
);

const SkillSection = ({ title, skills }) => (
  <motion.div
    className="bg-neutral-50 rounded-2xl p-6 shadow-lg"
    variants={fadeIn}
  >
    <h3 className="text-lg font-semibold text-neutral-800 text-center mb-6">{title}</h3>
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
      {skills.map((skill, index) => (
        <SkillCard key={index} Icon={skill.icon} name={skill.name} color={skill.color} />
      ))}
    </div>
  </motion.div>
);

export default function Skills() {
  return (
    <motion.section
      id="skills"
      className="max-w-6xl mx-auto px-6 py-2"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ staggerChildren: 0.1 }}
    >
      <motion.h2
        className="text-4xl font-semibold text-center text-neutral-800 mb-12"
        variants={fadeIn}
      >
        Skills & Expertise
      </motion.h2>

      <div className="flex flex-col gap-8">
        <SkillSection title="Frontend Technologies" skills={frontendSkills} />
        <SkillSection title="Backend Technologies" skills={backendSkills} />
        <SkillSection title="Other Tools" skills={otherSkills} />
      </div>
    </motion.section>
  );
}
