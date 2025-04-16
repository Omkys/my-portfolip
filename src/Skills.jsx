import { FaReact, FaNodeJs, FaDatabase, FaHtml5, FaCss3Alt, FaGithub, FaDocker } from 'react-icons/fa';
import { SiTailwindcss, SiJavascript, SiMongodb, SiDocker } from 'react-icons/si';

function Skills() {
  return (
    <section className="py-12 bg-blue-100 text-gray-800">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-900 mb-6">My Skills</h2>

        {/* Skill Categories */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          
          {/* Frontend Skills */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold mb-4">Frontend</h3>
            <div className="flex flex-wrap justify-start gap-6">
              <div className="flex items-center gap-2">
                <FaHtml5 className="text-orange-500 text-3xl" />
                <span className="font-medium">HTML5</span>
              </div>
              <div className="flex items-center gap-2">
                <FaCss3Alt className="text-blue-500 text-3xl" />
                <span className="font-medium">CSS3</span>
              </div>
              <div className="flex items-center gap-2">
                <SiTailwindcss className="text-teal-400 text-3xl" />
                <span className="font-medium">Tailwind CSS</span>
              </div>
              <div className="flex items-center gap-2">
                <FaReact className="text-blue-600 text-3xl" />
                <span className="font-medium">React</span>
              </div>
              <div className="flex items-center gap-2">
                <SiJavascript className="text-yellow-400 text-3xl" />
                <span className="font-medium">JavaScript</span>
              </div>
            </div>
          </div>

          {/* Backend Skills */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold mb-4">Backend</h3>
            <div className="flex flex-wrap justify-start gap-6">
              <FaNodeJs className="text-green-500 text-3xl" />
              <span className="font-medium">Node.js</span>
            </div>
            <div className="flex items-center gap-2">
              <SiMongodb className="text-green-700 text-3xl" />
              <span className="font-medium">MongoDB</span>
            </div>
            <div className="flex items-center gap-2">
              <FaGithub className="text-gray-900 text-3xl" />
              <span className="font-medium">Git/GitHub</span>
            </div>
            <div className="flex items-center gap-2">
              <FaDocker className="text-blue-500 text-3xl" />
              <span className="font-medium">Docker</span>
            </div>
          </div>

          {/* Tools & Other Skills */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold mb-4">Tools & Other Skills</h3>
            <div className="flex flex-wrap justify-start gap-6">
              <div className="flex items-center gap-2">
                <FaDatabase className="text-red-500 text-3xl" />
                <span className="font-medium">SQL</span>
              </div>
              <div className="flex items-center gap-2">
                <SiDocker className="text-blue-400 text-3xl" />
                <span className="font-medium">Docker</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
