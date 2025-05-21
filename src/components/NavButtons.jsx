import toast from 'react-hot-toast';

export default function NavButtons({ setShowSection }) {
  return (
    <div className="flex flex-wrap gap-4 sm:gap-6 mt-6 sm:mt-12 justify-center md:justify-start ml-2 sm:ml-6 md:ml-8">
      {['projects', 'skills', /*'certificates', 'education'  -----"if later want to add the icons uncomment this too if you want"*/].map((section) => (
        <button
          key={section}
          className="bg-neutral-600 hover:bg-neutral-700 text-white font-medium py-3 px-5 sm:px-6 rounded-lg shadow-md transition-all duration-300 transform hover:scale-105"
          onClick={() => setShowSection(section)}
        >
          {section === 'projects' && '🚀 Projects'}
          {section === 'skills' && '🛠️ Skills'}
          {/* if later want to add the icons, uncomment the below lines these are the buttons that will be shown beside the skills and projects buttons in the hero div section
          {section === 'certificates' && '🎖️ Certifications'}
          {section === 'education' && '🎓 Education'}  */}
        </button>
      ))}

      <button
        onClick={() => {
          toast.success('Opening Resume in a new tab...');
          setTimeout(() => {
            window.open('/resume/Onkar_Bobde-Resume.pdf', '_blank');
          }, 1000);
        }}
        className="bg-neutral-500 hover:bg-neutral-600 text-white font-medium py-3 px-6 rounded-lg shadow-md transition-all duration-300 transform hover:scale-105"
      >
        📄 View Resume
      </button>
    </div>
  );
}
