'use client';

import { useState, useEffect, useCallback } from 'react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Active section highlighting via IntersectionObserver
  useEffect(() => {
    const sections = ['hero', 'about', 'projects', 'contact'];
    const observers: IntersectionObserver[] = [];

    sections.forEach((sectionId) => {
      const el = document.getElementById(sectionId);
      if (!el) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveSection(sectionId);
          }
        },
        { threshold: 0.3, rootMargin: '-80px 0px 0px 0px' }
      );

      observer.observe(el);
      observers.push(observer);
    });

    return () => {
      observers.forEach((obs) => obs.disconnect());
    };
  }, []);

  // Close mobile menu on escape
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isMobileMenuOpen]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  const scrollToSection = useCallback((id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsMobileMenuOpen(false);
  }, []);

  const handleResumeClick = () => {
    window.open('/Docs/N-Resume.pdf', '_blank');
  };

  const navItems = ['About', 'Projects', 'Contact'];

  return (
    <nav
      role="navigation"
      aria-label="Main navigation"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-black/20 backdrop-blur-md -webkit-backdrop-blur-md border-b border-white/10'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <button
            onClick={() => scrollToSection('hero')}
            className="text-2xl font-bold bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent hover:from-gray-300 hover:to-white transition-all"
            aria-label="Go to top"
          >
            Nirav.
          </button>

          {/* Desktop nav links */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className={`transition-colors relative group min-h-[44px] flex items-center ${
                  activeSection === item.toLowerCase()
                    ? 'text-white'
                    : 'text-gray-300 hover:text-white'
                }`}
                aria-current={
                  activeSection === item.toLowerCase() ? 'true' : undefined
                }
              >
                {item}
                <span
                  className={`absolute -bottom-1 left-0 h-0.5 bg-white transition-all duration-300 ${
                    activeSection === item.toLowerCase()
                      ? 'w-full'
                      : 'w-0 group-hover:w-full'
                  }`}
                />
              </button>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={handleResumeClick}
              className="px-6 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-white hover:bg-white/20 transition-all min-h-[44px]"
              aria-label="Open resume PDF"
            >
              Resume
            </button>

            {/* Mobile hamburger button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden flex flex-col items-center justify-center w-11 h-11 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all"
              aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={isMobileMenuOpen}
            >
              <span
                className={`block w-5 h-0.5 bg-white transition-all duration-300 ${
                  isMobileMenuOpen
                    ? 'rotate-45 translate-y-[3px]'
                    : ''
                }`}
              />
              <span
                className={`block w-5 h-0.5 bg-white mt-1 transition-all duration-300 ${
                  isMobileMenuOpen ? 'opacity-0' : ''
                }`}
              />
              <span
                className={`block w-5 h-0.5 bg-white mt-1 transition-all duration-300 ${
                  isMobileMenuOpen
                    ? '-rotate-45 -translate-y-[5px]'
                    : ''
                }`}
              />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu overlay */}
      <div
        className={`md:hidden fixed inset-0 top-0 bg-black/95 backdrop-blur-xl transition-all duration-300 ${
          isMobileMenuOpen
            ? 'opacity-100 pointer-events-auto'
            : 'opacity-0 pointer-events-none'
        }`}
        style={{ zIndex: -1 }}
      >
        <div className="flex flex-col items-center justify-center h-full gap-8">
          {navItems.map((item) => (
            <button
              key={item}
              onClick={() => scrollToSection(item.toLowerCase())}
              className={`text-2xl font-medium transition-colors min-h-[44px] px-6 py-2 ${
                activeSection === item.toLowerCase()
                  ? 'text-white'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              {item}
            </button>
          ))}
          <button
            onClick={handleResumeClick}
            className="mt-4 px-8 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-white hover:bg-white/20 transition-all min-h-[44px]"
            aria-label="Open resume PDF"
          >
            Resume
          </button>
        </div>
      </div>
    </nav>
  );
}