import { ArrowUp } from 'lucide-react';

export default function FabButtons({ setShowSection, setShowFeedback, showTopBtn, scrollToTop }) {
  return (
    <>
      {/* Feedback Button */}
      <div className="fixed bottom-6 left-6 z-50">
        <button
          className="bg-amber-200 hover:bg-amber-300 text-neutral-800 font-medium py-3 px-6 rounded-full shadow-md transition-all duration-300 transform hover:scale-105 feedback-button"
          onClick={() => setShowFeedback(true)}
        >
          💬 Feedback
        </button>
      </div>

      {/* Let's Connect Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <button
          className="bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-3 px-6 rounded-full shadow-lg transition-all duration-300 transform hover:scale-105 connect-button"
          onClick={() => setShowSection('connect')}
        >
          🤝 Let's Connect
        </button>
      </div>

      {/* Back to Top Button */}
      {showTopBtn && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-30 right- z-50 p-3 bg-gray-600 hover:bg-orange-700 text-white rounded-full shadow-lg transition duration-300"
          aria-label="Scroll to top"
        >
          <ArrowUp size={15} />
        </button>
      )}
    </>
  );
}
