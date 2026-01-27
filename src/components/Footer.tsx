'use client';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    Navigation: ['Home', 'About', 'Projects', 'Contact'],
    Social: ['GitHub', 'LinkedIn', 'Twitter', 'Instagram'],
    Resources: ['Blog', 'Resume', 'Newsletter', 'Uses'],
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
              Portfolio
            </h3>
            <p className="text-gray-500 text-sm">
              Building digital experiences that make a difference.
            </p>
            <div className="flex gap-3">
              {['G', 'L', 'T', 'I'].map((letter, index) => (
                <a
                  key={index}
                  href="#"
                  className="w-10 h-10 flex items-center justify-center rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 text-gray-400 hover:text-white hover:bg-white/10 transition-all"
                >
                  {letter}
                </a>
              ))}
            </div>
          </div>

          {/* Footer Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="text-white font-semibold mb-4">{category}</h4>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-gray-500 hover:text-white transition-colors text-sm"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Newsletter */}
        <div className="p-6 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 mb-12">
          <div className="max-w-2xl mx-auto text-center space-y-4">
            <h4 className="text-xl font-bold text-white">Stay Updated</h4>
            <p className="text-gray-500 text-sm">
              Subscribe to my newsletter for the latest updates and insights.
            </p>
            <div className="flex gap-2 max-w-md mx-auto">
              <input
                type="email"
                placeholder="your@email.com"
                className="flex-1 px-4 py-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-white/30 transition-all"
              />
              <button className="px-6 py-2 bg-white text-black rounded-xl font-medium hover:bg-gray-200 transition-all">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-500 text-sm">
              © {currentYear} John Doe. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm">
              <a href="#" className="text-gray-500 hover:text-white transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-500 hover:text-white transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-gray-500 hover:text-white transition-colors">
                Sitemap
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}