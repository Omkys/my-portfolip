import About from '../components/About';
import Projects from '../sections/Project';
import Skills from '../sections/Skills';
import Certificate from '../sections/certificate';
import Education from '../sections/Education';
import Connect from '../sections/Connect';
import Contactme from '../sections/Contactme';

export default function SectionRenderer({ showSection, setActiveSection }) {
  return (
    <div className="w-full">
      {showSection === 'about' && <About setActiveSection={setActiveSection} />}
      {showSection === 'projects' && <Projects setActiveSection={setActiveSection} />}
      {showSection === 'skills' && <Skills setActiveSection={setActiveSection} />}
      {showSection === 'certificates' && <Certificate setActiveSection={setActiveSection} />}
      {showSection === 'education' && <Education setActiveSection={setActiveSection} />}
      {showSection === 'contactme' && <Contactme setActiveSection={setActiveSection} />}
    </div>
  );
}
