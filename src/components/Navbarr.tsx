import { useState, useEffect } from "react";

const Navbarr = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about-me', 'projects'];
      const scrollPosition = window.scrollY + 100; // offset for navbar

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;

          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActive = (path: string) => activeSection === path;

  return (
    <nav className="fixed top-0 left-0 w-full z-50 glass border-b border-white/10 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <a href="#home" className="text-xl font-bold text-white font-['Fira Code'] tracking-tighter">
              <span className="text-indigo-500">&lt;</span>
              DB
              <span className="text-indigo-500">/&gt;</span>
            </a>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <a
                href="#home"
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300 font-['Fira Code'] ${
                  isActive('home') ? 'text-indigo-400 bg-white/5' : 'text-slate-300 hover:text-white hover:bg-white/10'
                }`}
              >
                _home
              </a>
              <a
                href="#projects"
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300 font-['Fira Code'] ${
                  isActive('projects') ? 'text-indigo-400 bg-white/5' : 'text-slate-300 hover:text-white hover:bg-white/10'
                }`}
              >
                _projects
              </a>
              <a
                href="#about-me"
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300 font-['Fira Code'] ${
                  isActive('about-me') ? 'text-indigo-400 bg-white/5' : 'text-slate-300 hover:text-white hover:bg-white/10'
                }`}
              >
                _about
              </a>
              <a
                href="https://wa.me/5548991602597"
                target="_blank"
                rel="noreferrer"
                className="ml-4 px-4 py-2 border border-indigo-500 text-indigo-400 rounded-md text-sm font-medium hover:bg-indigo-500 hover:text-white transition-all duration-300 font-['Fira Code'] shadow-[0_0_15px_rgba(99,102,241,0.2)] hover:shadow-[0_0_20px_rgba(99,102,241,0.5)]"
              >
                contact-me
              </a>
            </div>
          </div>
          
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              type="button"
              className="glass inline-flex items-center justify-center p-2 rounded-md text-slate-400 hover:text-white hover:bg-white/10 focus:outline-none"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {!isMenuOpen ? (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`md:hidden transition-all duration-300 ease-in-out ${isMenuOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`} id="mobile-menu">
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 glass border-t border-white/10">
          <a
            href="#home"
            className={`block px-3 py-2 rounded-md text-base font-medium font-['Fira Code'] ${
              isActive('home') ? 'text-indigo-400 bg-white/10' : 'text-slate-300 hover:text-white hover:bg-white/5'
            }`}
            onClick={() => setIsMenuOpen(false)}
          >
            _home
          </a>
          <a
            href="#projects"
            className={`block px-3 py-2 rounded-md text-base font-medium font-['Fira Code'] ${
              isActive('projects') ? 'text-indigo-400 bg-white/10' : 'text-slate-300 hover:text-white hover:bg-white/5'
            }`}
            onClick={() => setIsMenuOpen(false)}
          >
            _projects
          </a>
          <a
            href="#about-me"
            className={`block px-3 py-2 rounded-md text-base font-medium font-['Fira Code'] ${
              isActive('about-me') ? 'text-indigo-400 bg-white/10' : 'text-slate-300 hover:text-white hover:bg-white/5'
            }`}
            onClick={() => setIsMenuOpen(false)}
          >
            _about
          </a>
          <a
            href="https://wa.me/5548991602597"
            target="_blank"
            rel="noreferrer"
            className="block w-full text-center mt-4 px-4 py-2 border border-indigo-500 text-indigo-400 rounded-md text-base font-medium hover:bg-indigo-500 hover:text-white transition-colors duration-300 font-['Fira Code']"
          >
            contact-me
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbarr;
