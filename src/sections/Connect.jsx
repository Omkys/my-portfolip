import { FaLinkedin, FaInstagram, FaGithub } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6'; 
import credlyLogo from '../assets/credly.png'; // Ensure you have the correct path to your image
import { MdEmail } from "react-icons/md";

function Connect() {
  return (
    <div className="bg-white rounded-xl shadow-lg p-8 max-w-4xl w-full mx-auto text-center space-y-8">
      <h2 className="text-3xl font-semibold text-gray-900">Let's Connect!</h2>
      <p className="text-gray-600">Reach out on these platforms:</p>

      <div className="flex flex-wrap justify-center gap-6">
        {/* Gmail */}
        <a
          href="mailto:bobdeonkar17@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 bg-pink-200 text-gray-800 py-3 px-6 rounded-lg transition-all duration-300 ease-in-out hover:bg-pink-300 hover:scale-105 hover:shadow-lg"
          aria-label="Connect via Gmail"
        >
          <MdEmail size={24} /> <span className="text-lg font-medium">Gmail</span>
        </a>

        {/* LinkedIn */}
        <a
          href="https://linkedin.com/in/your-linkedin"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 bg-indigo-200 text-indigo-800 py-3 px-6 rounded-lg transition-all duration-300 ease-in-out hover:bg-indigo-300 hover:scale-105 hover:shadow-lg"
          aria-label="Connect via LinkedIn"
        >
          <FaLinkedin size={24} /> <span className="text-lg font-medium">LinkedIn</span>
        </a>

        {/* Instagram */}
        <a
          href="https://www.instagram.com/omkyy_s?igsh=MTdia3BtdHcwajZ6dQ=="
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 bg-pink-300 text-gray-800 py-3 px-6 rounded-lg transition-all duration-300 ease-in-out hover:bg-pink-400 hover:scale-105 hover:shadow-lg"
          aria-label="Connect via Instagram"
        >
          <FaInstagram size={24} /> <span className="text-lg font-medium">Instagram</span>
        </a>

        {/* X (Twitter) */}
        <a
          href="https://x.com/OnkarBobde?t=3CUQyiV21cxS0R4Ldb1t0g&s=08"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 bg-sky-200 text-sky-800 py-3 px-6 rounded-lg transition-all duration-300 ease-in-out hover:bg-sky-300 hover:scale-105 hover:shadow-lg"
          aria-label="Connect via Twitter"
        >
          <FaXTwitter size={24} /> <span className="text-lg font-medium">X (Twitter)</span>
        </a>

        {/* GitHub */}
        <a
          href="https://github.com/Omkys"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 bg-gray-300 text-gray-800 py-3 px-6 rounded-lg transition-all duration-300 ease-in-out hover:bg-gray-400 hover:scale-105 hover:shadow-lg"
          aria-label="Connect via GitHub"
        >
          <FaGithub size={24} /> <span className="text-lg font-medium">GitHub</span>
        </a>

        {/* Credly */}
        <a
          href="http://credly.com/users/onkar-bobde.fe3f30b9"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 bg-orange-200 text-orange-800 py-3 px-6 rounded-lg transition-all duration-300 ease-in-out hover:bg-orange-300 hover:scale-105 hover:shadow-lg"
          aria-label="Connect via Credly"
        >
          <img src={credlyLogo} alt="Credly by Pearson" className="h-7 w-auto" />
          <span className="text-lg font-medium">Credly</span>
        </a>
      </div>
    </div>
  );
}

export default Connect;
