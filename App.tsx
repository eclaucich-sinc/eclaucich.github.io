import React, { useState, useEffect } from 'react';
import { 
  Mail, MapPin, Download, ExternalLink, Menu, X, Github, Linkedin, 
  GraduationCap, FlaskConical, FileText, Briefcase, Presentation, Languages as LanguagesIcon, Cpu
} from 'lucide-react';
import { SectionHeader } from './components/SectionHeader';
import { InfoItem } from './components/InfoItem';
import { PublicationItem } from './components/PublicationItem';
import {
  PERSONAL_INFO,
  EDUCATION,
  RESEARCH_EXPERIENCE,
  INDUSTRY_EXPERIENCE,
  TEACHING_EXPERIENCE,
  PUBLICATIONS,
  LANGUAGES
} from './constants';

const SocialIcon = ({ name, ...props }) => {
  if (name === 'Github') return <Github {...props} />;
  if (name === 'Linkedin') return <Linkedin {...props} />;
  return <ExternalLink {...props} />;
};

const App: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('about');

  // Handle scroll spy for active navigation state
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['education', 'research', 'publications', 'industry', 'teaching'];
      const scrollPosition = window.scrollY + 100;

      const currentSection = sections.find(id => {
        const element = document.getElementById(id);
        if (!element) return false;
        return element.offsetTop <= scrollPosition && (element.offsetTop + element.offsetHeight) > scrollPosition;
      });

      if (currentSection) {
        setActiveSection(currentSection);
      } else if (window.scrollY < 200) {
        setActiveSection('about');
      }
    };
    
    // Animate sections on scroll
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-fade-in-up');
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.animated-section').forEach(el => {
        observer.observe(el);
    });


    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      observer.disconnect();
    };
  }, []);

  const navLinks = [
    { id: 'education', label: 'Education' },
    { id: 'research', label: 'Research' },
    { id: 'publications', label: 'Publications' },
    { id: 'industry', label: 'Industry' },
    { id: 'teaching', label: 'Teaching' },
  ];

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-lg z-50 border-b border-slate-200/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <a href="#" className="font-bold text-lg text-primary tracking-tight">E. Claucich</a>
            
            <div className="flex items-center gap-4">
              {/* Desktop Nav */}
              <div className="hidden md:flex space-x-8">
                {navLinks.map((link) => (
                  <a
                    key={link.id}
                    href={`#${link.id}`}
                    className={`text-sm font-medium transition-colors duration-200 border-b-2 ${
                      activeSection === link.id ? 'text-primary border-primary' : 'text-secondary hover:text-dark border-transparent'
                    }`}
                  >
                    {link.label}
                  </a>
                ))}
              </div>

              <a href="/Estanislao_Claucich_CV.pdf" target="_blank" rel="noopener noreferrer" className="hidden md:inline-flex items-center gap-2 bg-primary text-white px-3 py-1.5 rounded-md hover:bg-indigo-700 transition-colors text-xs font-medium shadow-sm">
                <Download size={14} />
                <span>CV</span>
              </a>

              {/* Mobile Menu Button */}
              <div className="md:hidden">
                <button
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                  className="text-secondary hover:text-dark p-2"
                  aria-expanded={isMenuOpen}
                  aria-controls="mobile-menu"
                >
                  <span className="sr-only">Open main menu</span>
                  {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Nav Drawer */}
        {isMenuOpen && (
          <div id="mobile-menu" className="md:hidden bg-white border-b border-gray-100 absolute w-full px-4 py-4 shadow-lg">
            <div className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <a
                  key={link.id}
                  href={`#${link.id}`}
                  className="text-base font-medium text-secondary hover:text-primary"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <div className="pt-4 mt-2 border-t border-slate-100">
                <a href="/Estanislao_Claucich_CV.pdf" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-primary text-white px-4 py-2 rounded-md hover:bg-indigo-700 transition-colors text-sm font-medium shadow-sm w-full justify-center">
                    <Download size={16} />
                    Download CV
                </a>
              </div>
            </div>
          </div>
        )}
      </nav>

      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
        
        {/* Hero / Header Section */}
        <section id="about" className="mb-20 pt-8 animated-section bg-white p-8 rounded-xl shadow-sm border border-slate-200/50">
          <div className="flex flex-col md:flex-row gap-8 items-start">
            <div className="flex-1">
              <h1 className="text-4xl md:text-5xl font-extrabold text-dark tracking-tight mb-4">
                {PERSONAL_INFO.name}
              </h1>
              <p className="text-xl text-primary font-medium mb-6">
                {PERSONAL_INFO.title}
              </p>
              
              <div className="flex flex-col space-y-2 mb-6 text-secondary">
                <a href={`mailto:${PERSONAL_INFO.email}`} className="flex items-center gap-2 hover:text-primary transition-colors w-fit">
                  <Mail size={18} />
                  <span>{PERSONAL_INFO.email}</span>
                </a>
                <a href={PERSONAL_INFO.location_url} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-primary transition-colors w-fit">
                  <MapPin size={18} />
                  <span>{PERSONAL_INFO.location}</span>
                </a>
              </div>

              <p className="text-secondary leading-relaxed max-w-2xl mb-8">
                {PERSONAL_INFO.bio}
              </p>

              <div className="flex items-center gap-4">
                <div className="flex gap-1">
                  {PERSONAL_INFO.socials.map(social => (
                    <a key={social.name} href={social.url} target="_blank" rel="noopener noreferrer" aria-label={social.name} className="p-2 text-secondary hover:text-primary bg-slate-100 hover:bg-slate-200 rounded-full transition-all duration-200">
                       <SocialIcon name={social.icon} size={20} />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Education Section */}
        <section id="education" className="mb-20 scroll-mt-24 animated-section" style={{animationDelay: '100ms'}}>
          <SectionHeader title="Education" icon={<GraduationCap className="w-6 h-6 text-primary" />} />
          <div className="space-y-2">
            {EDUCATION.map((edu) => (
              <InfoItem
                key={edu.id}
                title={edu.degree}
                subtitle={edu.institution}
                location={edu.location}
                period={edu.period}
                details={edu.details}
                advisors={edu.advisors}
              />
            ))}
          </div>
        </section>

        {/* Research Experience Section */}
        <section id="research" className="mb-20 scroll-mt-24 animated-section" style={{animationDelay: '200ms'}}>
          <SectionHeader title="Research Experience" icon={<FlaskConical className="w-6 h-6 text-primary" />} />
          <div className="space-y-2">
            {RESEARCH_EXPERIENCE.map((exp) => (
              <InfoItem
                key={exp.id}
                title={exp.role}
                subtitle={exp.institution}
                location={exp.location}
                period={exp.period}
                description={exp.description}
                advisors={exp.advisors}
              />
            ))}
          </div>
        </section>

        {/* Publications Section */}
        <section id="publications" className="mb-20 scroll-mt-24 animated-section" style={{animationDelay: '300ms'}}>
          <SectionHeader title="Selected Publications" icon={<FileText className="w-6 h-6 text-primary" />} />
          <div className="space-y-2">
            {PUBLICATIONS.map((pub) => (
              <PublicationItem key={pub.id} pub={pub} />
            ))}
          </div>
        </section>

        {/* Industry Experience Section */}
        <section id="industry" className="mb-20 scroll-mt-24 animated-section" style={{animationDelay: '400ms'}}>
          <SectionHeader title="Industry Experience" icon={<Briefcase className="w-6 h-6 text-primary" />} />
          <div className="space-y-2">
            {INDUSTRY_EXPERIENCE.map((exp) => (
              <InfoItem
                key={exp.id}
                title={exp.role}
                subtitle={exp.institution}
                location={exp.location}
                period={exp.period}
                description={exp.description}
                technologies={exp.technologies}
              />
            ))}
          </div>
        </section>

        {/* Teaching Section */}
        <section id="teaching" className="mb-20 scroll-mt-24 animated-section" style={{animationDelay: '500ms'}}>
          <SectionHeader title="Teaching Experience" icon={<Presentation className="w-6 h-6 text-primary" />} />
          <div className="space-y-2">
            {TEACHING_EXPERIENCE.map((exp) => (
              <InfoItem
                key={exp.id}
                title={exp.role}
                subtitle={exp.institution}
                location={exp.location}
                period={exp.period}
                description={exp.description}
                technologies={exp.technologies}
              />
            ))}
          </div>
        </section>

        {/* Languages & Skills Grid */}
        <section id="skills" className="mb-20 scroll-mt-24 animated-section" style={{animationDelay: '600ms'}}>
           <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
             <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200/50">
                <SectionHeader title="Languages" icon={<LanguagesIcon className="w-6 h-6 text-primary" />} />
                <div className="space-y-4">
                  {LANGUAGES.map((lang) => (
                    <div key={lang.language} className="flex justify-between items-center border-b border-gray-100 pb-2">
                      <span className="font-medium text-dark">{lang.language}</span>
                      <span className="text-sm text-secondary">{lang.level}</span>
                    </div>
                  ))}
                </div>
             </div>
             <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200/50">
                <SectionHeader title="Core Technologies" icon={<Cpu className="w-6 h-6 text-primary" />} />
                <div className="flex flex-wrap gap-2">
                   {['Python', 'Deep Learning', 'Computer Vision', 'React', 'NodeJS', 'MongoDB', 'JavaScript', 'Java', 'Machine Learning'].map(skill => (
                     <span key={skill} className="px-3 py-1.5 bg-slate-100 text-secondary text-sm rounded-md font-medium border border-slate-200">
                       {skill}
                     </span>
                   ))}
                </div>
             </div>
           </div>
        </section>

      </main>

      <footer className="bg-white border-t border-slate-200/50 py-12">
        <div className="max-w-4xl mx-auto px-4 text-center text-secondary text-sm">
          <p>&copy; {new Date().getFullYear()} Estanislao Claucich. All rights reserved.</p>
          <p className="mt-2">Built with React & Tailwind CSS.</p>
        </div>
      </footer>
    </div>
  );
};

export default App;