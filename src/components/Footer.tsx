'use client';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="relative overflow-hidden border-t border-white/10">
      {/* Background decoration */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto px-6 py-16 relative z-10">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
              Nirav.
            </h3>
            <p className="text-gray-500 text-sm">
              Crafting beautiful web experiences with modern technologies.
            </p>
            <div className="flex gap-3">
              <a
                href="https://github.com/Niravcanvas"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 text-gray-400 hover:text-white hover:bg-white/10 transition-all"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                </svg>
              </a>
              <a
                href="https://www.linkedin.com/in/nirav-thakur-9b5892225/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 text-gray-400 hover:text-white hover:bg-white/10 transition-all"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z"/>
                </svg>
              </a>
              <a
                href="https://www.figma.com/@Niravcanvas"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 text-gray-400 hover:text-white hover:bg-white/10 transition-all"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M15.852 8.981h-4.588V0h4.588c2.476 0 4.49 2.014 4.49 4.49s-2.014 4.491-4.49 4.491zM12.735 7.51h3.117c1.665 0 3.019-1.355 3.019-3.019s-1.355-3.019-3.019-3.019h-3.117V7.51zm0 1.471H8.148c-2.476 0-4.49-2.014-4.49-4.49S5.672 0 8.148 0h4.588v8.981zm-4.587-7.51c-1.665 0-3.019 1.355-3.019 3.019s1.354 3.02 3.019 3.02h3.117V1.471H8.148zm4.587 15.019H8.148c-2.476 0-4.49-2.014-4.49-4.49s2.014-4.49 4.49-4.49h4.588v8.98zM8.148 8.981c-1.665 0-3.019 1.355-3.019 3.019s1.355 3.019 3.019 3.019h3.117V8.981H8.148zM8.172 24c-2.489 0-4.515-2.014-4.515-4.49s2.014-4.49 4.49-4.49h4.588v4.441c0 2.503-2.047 4.539-4.563 4.539zm-.024-7.51a3.023 3.023 0 0 0-3.019 3.019c0 1.665 1.365 3.019 3.044 3.019 1.705 0 3.093-1.376 3.093-3.068v-2.97H8.148zm7.704 0h-.098c-2.476 0-4.49-2.014-4.49-4.49s2.014-4.49 4.49-4.49h.098c2.476 0 4.49 2.014 4.49 4.49s-2.014 4.49-4.49 4.49zm-.097-7.509c-1.665 0-3.019 1.355-3.019 3.019s1.355 3.019 3.019 3.019h.098c1.665 0 3.019-1.355 3.019-3.019s-1.355-3.019-3.019-3.019h-.098z"/>
                </svg>
              </a>
              <a
                href="https://www.instagram.com/blurrredcanvas/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 text-gray-400 hover:text-white hover:bg-white/10 transition-all"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
                </svg>
              </a>
              <a
                href="https://www.behance.net/Niravcanvas"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 text-gray-400 hover:text-white hover:bg-white/10 transition-all"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22 7h-7v-2h7v2zm1.726 10c-.442 1.297-2.029 3-5.101 3-3.074 0-5.564-1.729-5.564-5.675 0-3.91 2.325-5.92 5.466-5.92 3.082 0 4.964 1.782 5.375 4.426.078.506.109 1.188.095 2.14h-8.027c.13 3.211 3.483 3.312 4.588 2.029h3.168zm-7.686-4h4.965c-.105-1.547-1.136-2.219-2.477-2.219-1.466 0-2.277.768-2.488 2.219zm-9.574 6.988h-6.466v-14.967h6.953c5.476.081 5.58 5.444 2.72 6.906 3.461 1.26 3.577 8.061-3.207 8.061zm-3.466-8.988h3.584c2.508 0 2.906-3-.312-3h-3.272v3zm3.391 3h-3.391v3.016h3.341c3.055 0 2.868-3.016.05-3.016z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-white font-semibold mb-4">Navigation</h4>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => scrollToSection('hero')}
                  className="text-gray-500 hover:text-white transition-colors text-sm"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('about')}
                  className="text-gray-500 hover:text-white transition-colors text-sm"
                >
                  About
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('projects')}
                  className="text-gray-500 hover:text-white transition-colors text-sm"
                >
                  Projects
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('contact')}
                  className="text-gray-500 hover:text-white transition-colors text-sm"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-white font-semibold mb-4">Social</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="https://github.com/Niravcanvas"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-500 hover:text-white transition-colors text-sm"
                >
                  GitHub
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/nirav-thakur-9b5892225/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-500 hover:text-white transition-colors text-sm"
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  href="https://www.figma.com/@Niravcanvas"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-500 hover:text-white transition-colors text-sm"
                >
                  Figma
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/blurrredcanvas/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-500 hover:text-white transition-colors text-sm"
                >
                  Instagram
                </a>
              </li>
              <li>
                <a
                  href="https://in.pinterest.com/blurredoutframes/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-500 hover:text-white transition-colors text-sm"
                >
                  Pinterest
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold mb-4">Contact</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="mailto:niravthakur@icloud.com"
                  className="text-gray-500 hover:text-white transition-colors text-sm"
                >
                  niravthakur@icloud.com
                </a>
              </li>
              <li>
                <a
                  href="tel:+919653472213"
                  className="text-gray-500 hover:text-white transition-colors text-sm"
                >
                  +91 9653472213
                </a>
              </li>
              <li>
                <span className="text-gray-500 text-sm">
                  Mumbai, India
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-500 text-sm">
              © {currentYear} Nirav. Crafted with passion.
            </p>
            <div className="flex gap-6 text-sm">
              <span className="text-gray-500">
                Mumbai, India
              </span>
              <span className="text-gray-500">•</span>
              <span className="text-gray-500">
                Frontend Developer
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}