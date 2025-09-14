import { Heart, Mail, Github, Linkedin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          {/* Brand */}
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-2">
              Onkar Bobde
            </h3>
            <p className="text-gray-400 text-sm">
              Full Stack Developer
            </p>
          </div>

          {/* Social Links */}
          <div className="flex justify-center gap-4">
            <a
              href="mailto:bobdeonkar17@gmail.com"
              className="w-10 h-10 bg-gray-800 hover:bg-blue-600 rounded-lg flex items-center justify-center transition-colors group"
              aria-label="Email"
            >
              <Mail className="w-5 h-5 group-hover:scale-110 transition-transform" />
            </a>
            <a
              href="https://github.com/Omkys"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 bg-gray-800 hover:bg-gray-700 rounded-lg flex items-center justify-center transition-colors group"
              aria-label="GitHub"
            >
              <Github className="w-5 h-5 group-hover:scale-110 transition-transform" />
            </a>
            <a
              href="https://www.linkedin.com/in/onkar-bobde-770354286/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 bg-gray-800 hover:bg-blue-600 rounded-lg flex items-center justify-center transition-colors group"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5 group-hover:scale-110 transition-transform" />
            </a>
          </div>

          {/* Copyright */}
          <div className="text-center md:text-right">
            <p className="text-gray-400 text-sm">
              &copy; {new Date().getFullYear()} All rights reserved
            </p>
            <p className="text-gray-500 text-xs mt-1 flex items-center justify-center md:justify-end gap-1">
              Made with <Heart className="w-3 h-3 text-red-500" /> using React
            </p>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 mt-8 pt-6 text-center">
          <p className="text-gray-500 text-sm">
            "Code is like humor. When you have to explain it, it's bad." - Cory House
          </p>
        </div>
      </div>
    </footer>
  );
}
