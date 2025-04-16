import { FaLinkedin, FaInstagram, FaGithub } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6'; // X icon
import credlyLogo from './assets/credly.png'; // Assuming the Credly logo is saved here

function Connect() {
  return (
    <div className="bg-white rounded-xl shadow-md p-8 max-w-3xl w-full text-center space-y-6">
      <h2 className="text-2xl font-semibold text-gray-900">Let's Connect!</h2>
      <p className="text-gray-700">Reach out on these platforms:</p>

      <div className="flex flex-wrap justify-center gap-4">
        {/* LinkedIn */}
        <a
          href="https://linkedin.com/in/your-linkedin"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 bg-blue-500 text-white py-2 px-4 rounded-lg transition-all duration-300 ease-in-out hover:bg-blue-700 hover:scale-105"
        >
          <FaLinkedin /> LinkedIn
        </a>

        {/* Instagram */}
        <a
          href="https://www.instagram.com/omkyy_s?igsh=MTdia3BtdHcwajZ6dQ=="
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 bg-gradient-to-r from-pink-500 to-pink-400 text-white py-2 px-4 rounded-lg transition-all duration-300 ease-in-out hover:from-pink-600 hover:to-pink-500 hover:scale-105"
        >
          <FaInstagram /> Instagram
        </a>

        {/* X (Twitter) - Bordered Style */}
        <a
          href="https://twitter.com/your-xhttps://x.com/OnkarBobde?t=3CUQyiV21cxS0R4Ldb1t0g&s=08"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 border-2 border-gray-900 text-gray-900 py-2 px-4 rounded-lg transition-all duration-300 ease-in-out hover:bg-gray-900 hover:text-white hover:scale-105"
        >
          <FaXTwitter /> X (Twitter)
        </a>

        {/* GitHub */}
        <a
          href="https://github.com/Omkys"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 bg-gray-800 text-white py-2 px-4 rounded-lg transition-all duration-300 ease-in-out hover:bg-black hover:scale-105"
        >
          <FaGithub /> GitHub
        </a>
{/* Credly - Bordered Style */}
<a
  href="http://credly.com/users/onkar-bobde.fe3f30b9"
  target="_blank"
  rel="noopener noreferrer"
  className="flex items-center gap-2 border-2 border-orange-500 text-orange-500 py-2 px-4 rounded-lg transition-all duration-300 ease-in-out hover:bg-orange-500 hover:text-white hover:scale-105"
>
  <img src={credlyLogo} alt="Credly by Pearson" className="h-6 w-auto" />
  Credly
</a>


      </div>
    </div>
  );
}

export default Connect;
