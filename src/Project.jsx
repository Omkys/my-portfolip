// Projects.jsx
import { FaExternalLinkAlt } from 'react-icons/fa';

function Projects() {
  return (
    <div className="max-w-3xl w-full">
      <h2 className="text-3xl font-semibold text-gray-800 mb-6">Projects</h2>

      <div className="space-y-6">
        {/* === Project 1 === */}
        <div className="bg-white rounded-xl shadow-md p-6">
          <h3 className="text-xl font-semibold text-gray-900">College Event Management System</h3>
          <p className="text-gray-700 mt-2 mb-4">
            A full-stack MERN web app that allows students to view, register, and get notified about college events. Admins can manage event listings and participant data.
          </p>
          <a 
            href="https://github.com/your-github/college-event-management" // 👈 Replace link
            target="_blank"
            className="inline-flex items-center text-blue-600 hover:underline"
          >
            View Project <FaExternalLinkAlt className="ml-2" />
          </a>
        </div>

        {/* === Project 2 === */}
        <div className="bg-white rounded-xl shadow-md p-6">
          <h3 className="text-xl font-semibold text-gray-900">MERN TODO App</h3>
          <p className="text-gray-700 mt-2 mb-4">
            A simple yet powerful TODO app using React, Node.js, Express, MongoDB, and Zod for validation. Features CRUD, filter, and live updates.
          </p>
          <a 
            href="https://github.com/Omkys/TODO-app" // 👈 Replace link
            target="_blank"
            className="inline-flex items-center text-blue-600 hover:underline"
          >
            View Project <FaExternalLinkAlt className="ml-2" />
          </a>
        </div>

        {/* === Project 3 === */}
        <div className="bg-white rounded-xl shadow-md p-6">
          <h3 className="text-xl font-semibold text-gray-900">Personal Blog Platform</h3>
          <p className="text-gray-700 mt-2 mb-4">
            A blogging website where users can create, edit, and delete posts. Built with Node.js, Express, and styled with Tailwind CSS.
          </p>
          <a 
            href="https://github.com/your-github/personal-blog" // 👈 Replace link
            target="_blank"
            className="inline-flex items-center text-blue-600 hover:underline"
          >
            View Project <FaExternalLinkAlt className="ml-2" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Projects;
