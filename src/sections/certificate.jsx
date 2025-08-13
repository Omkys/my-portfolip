import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Award, ExternalLink, Calendar, CheckCircle, Star } from 'lucide-react';

const certificates = [
  {
    title: "AWS Cloud Fundamentals",
    issuer: "Amazon Web Services",
    date: "2024",
    credentialId: "e3e1d99f-42ce-486a-b352-6c39e04c9092",
    skills: ["AWS Support", "AWS Cloud", "AWS Core Services", "Cloud Computing"],
    verified: true,
    link: "https://www.credly.com/badges/e3e1d99f-42ce-486a-b352-6c39e04c9092/public_url"
  },
  {
    title: "React Developer Certification",
    issuer: "Meta",
    date: "2023",
    credentialId: "META-67890",
    skills: ["React", "JavaScript", "Frontend"],
    verified: true,
    link: "https://www.credly.com/users/onkar-bobde.fe3f30b9"
  },
  {
    title: "Node.js Application Development",
    issuer: "IBM",
    date: "2023",
    credentialId: "IBM-54321",
    skills: ["Node.js", "Express", "Backend"],
    verified: true,
    link: "https://www.credly.com/users/onkar-bobde.fe3f30b9"
  },
  {
    title: "AWS Cloud Practitioner",
    issuer: "Amazon Web Services",
    date: "2024",
    credentialId: "AWS-98765",
    skills: ["AWS", "Cloud Computing", "DevOps"],
    verified: true,
    link: "https://www.credly.com/users/onkar-bobde.fe3f30b9"
  }
];

const Certificate = ({ setActiveSection }) => {
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
            Certificates & Achievements
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Professional certifications and achievements that validate my expertise and commitment to continuous learning.
          </p>
        </motion.div>

        {/* Certificates Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {certificates.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-2xl border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow duration-300"
            >
              {/* Certificate Header */}
              <div className="relative h-40 bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center">
                <Award className="w-12 h-12 text-blue-400" />
                
                {/* Verified Badge */}
                <div className="absolute top-4 right-4">
                  <div className="bg-green-500 text-white p-1.5 rounded-full">
                    <CheckCircle className="w-3 h-3" />
                  </div>
                </div>
                
                {/* Year Badge */}
                <div className="absolute bottom-4 left-4">
                  <span className="bg-white/90 text-gray-700 px-3 py-1 rounded-full text-sm font-medium">
                    {cert.date}
                  </span>
                </div>
              </div>

              {/* Certificate Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {cert.title}
                </h3>
                <p className="text-gray-600 font-medium mb-4">
                  {cert.issuer}
                </p>

                {/* Skills */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {cert.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="bg-blue-100 text-blue-700 text-sm px-3 py-1 rounded-full font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                {/* Action Button */}
                <a
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors"
                >
                  <ExternalLink className="w-4 h-4" />
                  View Certificate
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Credly Profile CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="text-center"
        >
          <div className="bg-white rounded-2xl p-8 border border-gray-200">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              View Complete Portfolio
            </h3>
            <p className="text-gray-600 mb-8 max-w-lg mx-auto">
              Explore my complete certification portfolio on Credly with verified digital badges and credentials.
            </p>
            <a
              href="https://www.credly.com/users/onkar-bobde.fe3f30b9"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-orange-600 hover:bg-orange-700 text-white px-8 py-4 rounded-lg font-medium transition-colors"
            >
              <Award className="w-5 h-5" />
              Visit Credly Profile
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Certificate;
