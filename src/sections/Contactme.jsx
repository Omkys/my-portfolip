import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, CheckCircle, Github, Linkedin } from 'lucide-react';
import { Link } from 'react-router-dom';
import toast from 'react-hot-toast';

export default function ContactMe({ setActiveSection }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const response = await fetch('https://formspree.io/f/xpwpnekg', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitted(true);
        setFormData({ name: '', email: '', message: '' });
        toast.success('Message sent successfully!');
      } else {
        toast.error('Failed to send message. Please try again.');
      }
    } catch (err) {
      console.error(err);
      toast.error('Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-24 px-4 bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      {/* Back Button */}
      <div className="max-w-6xl mx-auto mb-8">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-gray-600 hover:text-blue-600 transition-colors font-medium"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Back to Home
        </Link>
      </div>
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="inline-flex items-center gap-2 bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-medium mb-6"
          >
            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
            Let's Connect
          </motion.div>
          <h2 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Get In <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Touch</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Ready to collaborate on your next project? Let's discuss how we can 
            bring your ideas to life with modern web technologies.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            <div className="bg-white rounded-3xl p-8 shadow-lg border border-gray-100">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Let's Start a Conversation</h3>
              
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                    <Mail className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Email</p>
                    <a href="mailto:bobdeonkar17@gmail.com" className="text-blue-600 hover:text-blue-700 transition-colors">
                      bobdeonkar17@gmail.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-purple-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Location</p>
                    <p className="text-gray-600">Available for remote work</p>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="mt-8 pt-6 border-t border-gray-100">
                <p className="font-semibold text-gray-900 mb-4">Connect with me</p>
                <div className="flex gap-4">
                  <a
                    href="https://github.com/Omkys"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-gray-100 hover:bg-gray-200 rounded-xl flex items-center justify-center transition-colors group"
                  >
                    <Github className="w-6 h-6 text-gray-600 group-hover:text-gray-900" />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/onkar-bobde-770354286/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-blue-100 hover:bg-blue-200 rounded-xl flex items-center justify-center transition-colors group"
                  >
                    <Linkedin className="w-6 h-6 text-blue-600 group-hover:text-blue-700" />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="bg-white rounded-3xl p-8 shadow-lg border border-gray-100"
          >
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
                className="text-center py-12"
              >
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle className="w-10 h-10 text-green-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Message Sent!</h3>
                <p className="text-gray-600 mb-6">
                  Thank you for reaching out. I'll get back to you within 24 hours.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl font-semibold transition-colors"
                >
                  Send Another Message
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Send me a message</h3>
                
                {/* Form Fields */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="relative">
                    <input
                      type="text"
                      name="name"
                      id="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="peer w-full border-2 border-gray-200 rounded-xl px-4 pt-6 pb-2 placeholder-transparent focus:outline-none focus:border-blue-500 transition-colors"
                      placeholder="Your Name"
                    />
                    <label
                      htmlFor="name"
                      className="absolute left-4 top-2 text-sm text-gray-500 transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:top-2 peer-focus:text-sm peer-focus:text-blue-600"
                    >
                      Your Name
                    </label>
                  </div>
                  
                  <div className="relative">
                    <input
                      type="email"
                      name="email"
                      id="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="peer w-full border-2 border-gray-200 rounded-xl px-4 pt-6 pb-2 placeholder-transparent focus:outline-none focus:border-blue-500 transition-colors"
                      placeholder="Your Email"
                    />
                    <label
                      htmlFor="email"
                      className="absolute left-4 top-2 text-sm text-gray-500 transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:top-2 peer-focus:text-sm peer-focus:text-blue-600"
                    >
                      Your Email
                    </label>
                  </div>
                </div>

                <div className="relative">
                  <textarea
                    name="message"
                    id="message"
                    required
                    rows="5"
                    value={formData.message}
                    onChange={handleChange}
                    className="peer w-full border-2 border-gray-200 rounded-xl px-4 pt-6 pb-2 placeholder-transparent focus:outline-none focus:border-blue-500 transition-colors resize-none"
                    placeholder="Your Message"
                  ></textarea>
                  <label
                    htmlFor="message"
                    className="absolute left-4 top-2 text-sm text-gray-500 transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:top-2 peer-focus:text-sm peer-focus:text-blue-600"
                  >
                    Your Message
                  </label>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 disabled:from-gray-400 disabled:to-gray-500 text-white font-semibold py-4 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 disabled:scale-100 shadow-lg flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
