'use client';

import { useEffect, useState } from 'react';

export default function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 20,
        y: (e.clientY / window.innerHeight) * 20,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated grid background */}
      <div className="absolute inset-0 overflow-hidden">
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px',
            transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)`,
            transition: 'transform 0.3s ease-out',
          }}
        />
        
        {/* Floating orbs */}
        <div className="absolute top-1/4 -left-20 w-72 h-72 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-white/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-white/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-20 relative z-10 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Text content */}
          <div className="space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 backdrop-blur-sm border border-white/10">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
              </span>
              <span className="text-sm text-gray-300">Available for work</span>
            </div>

            {/* Main heading */}
            <div className="space-y-4">
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-tight">
                <span className="block text-white">Hi, I'm</span>
                <span className="block bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent">
                  Nirav
                </span>
              </h1>
              
              <div className="flex flex-wrap gap-2">
                <span className="px-4 py-2 rounded-lg bg-white/5 backdrop-blur-sm border border-white/10 text-gray-300 text-sm">
                  Frontend Developer
                </span>
                <span className="px-4 py-2 rounded-lg bg-white/5 backdrop-blur-sm border border-white/10 text-gray-300 text-sm">
                  UI/UX Designer
                </span>
                <span className="px-4 py-2 rounded-lg bg-white/5 backdrop-blur-sm border border-white/10 text-gray-300 text-sm">
                  Photographer
                </span>
              </div>
            </div>

            {/* Description */}
            <p className="text-lg text-gray-400 leading-relaxed max-w-xl">
              I craft beautiful web experiences with modern technologies. 
              Specializing in <span className="text-white font-medium">Next.js</span>, <span className="text-white font-medium">TypeScript</span>, and <span className="text-white font-medium">Tailwind CSS</span>. 
              Based in Mumbai, India.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 pt-4">
              <button 
                onClick={() => scrollToSection('projects')}
                className="group px-8 py-4 bg-white text-black rounded-xl font-medium hover:bg-gray-200 transition-all hover:scale-105 flex items-center gap-2"
              >
                View My Work
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="px-8 py-4 bg-white/5 backdrop-blur-sm border border-white/20 rounded-xl text-white hover:bg-white/10 transition-all hover:scale-105"
              >
                Get in Touch
              </button>
            </div>

            {/* Social links */}
            <div className="flex gap-4 pt-8">
              <a
                href="https://github.com/Niravcanvas"
                target="_blank"
                rel="noopener noreferrer"
                className="group p-3 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all hover:scale-110"
              >
                <svg className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                </svg>
              </a>
              <a
                href="#"
                className="group p-3 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all hover:scale-110"
              >
                <svg className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              <a
                href="#"
                className="group p-3 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all hover:scale-110"
              >
                <svg className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Right side - Visual element */}
          <div className="relative lg:block hidden">
            {/* Decorative elements */}
            <div className="absolute -top-8 -left-8 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-8 -right-8 w-80 h-80 bg-white/10 rounded-full blur-3xl"></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-white/5 rounded-full blur-2xl"></div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="flex flex-col items-center gap-2">
          <span className="text-xs text-gray-500">Scroll</span>
          <svg className="w-6 h-6 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </section>
  );
}