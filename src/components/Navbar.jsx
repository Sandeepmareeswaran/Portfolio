import React, { useState, useEffect } from 'react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      const sections = ['hero', 'about', 'techstack', 'skills', 'projects', 'achievements', 'contact'];
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: 'hero', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'techstack', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'achievements', label: 'Achievements' },
    { id: 'contact', label: 'Contact' },
  ];

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'py-3' : 'py-5'
          }`}
        style={{
          backgroundColor: isScrolled ? 'rgba(0, 0, 0, 0.8)' : 'transparent',
          backdropFilter: isScrolled ? 'blur(20px)' : 'none',
          borderBottom: isScrolled ? '1px solid rgba(255,255,255,0.08)' : 'none',
        }}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          {/* Logo */}
          <button
            onClick={() => scrollToSection('hero')}
            className="text-xl font-bold tracking-tight"
          >
            <span
              className="bg-clip-text text-transparent"
              style={{
                background: 'linear-gradient(to bottom, #a779f1ff, #5A3A92)',
                WebkitBackgroundClip: 'text'
              }}
            >
              SANDEEP
            </span>
            <span className="text-[#ff8e38]">.</span>
          </button>

          {/* Navigation Links - Desktop */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className={`text-sm font-medium transition-all duration-300 relative group ${activeSection === link.id
                  ? 'text-white'
                  : 'text-gray-400 hover:text-white'
                  }`}
              >
                {link.label}
                {/* Hover indicator similar to Hero social links */}
                <span className={`absolute -bottom-1 left-0 w-full h-[2px] transition-transform duration-300 origin-left ${activeSection === link.id ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}`}
                  style={{ background: 'linear-gradient(90deg, #a779f1, #ff8e38)' }}></span>
              </button>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:block relative group">
            <div
              className="absolute inset-[-1px] rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
              style={{
                background: 'linear-gradient(135deg, #a779f1ff, #5A3A92, #ff8e38ff, #9b4b05ff)'
              }}
            />
            <a
              href="#contact"
              className="relative block px-6 py-2 text-sm font-medium rounded-lg transition-all duration-300 text-white bg-black/50 border border-white/10 hover:border-transparent"
            >
              Let's Talk
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-gray-400 hover:text-white transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 z-40 md:hidden flex flex-col items-center justify-center gap-6"
          style={{ backgroundColor: 'rgba(0, 0, 0, 0.95)' }}
        >
          <button
            className="absolute top-4 right-4 p-2 text-gray-400"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollToSection(link.id)}
              className={`text-xl font-medium ${activeSection === link.id ? 'text-white' : 'text-gray-500'
                }`}
            >
              {link.label}
            </button>
          ))}
        </div>
      )}
    </>
  );
}
