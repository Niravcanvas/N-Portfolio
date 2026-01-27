'use client';

export default function Projects() {
  const projects = [
    {
      title: 'HackOverflow 4.0',
      description: 'Official website for HackOverflow 4.0 - A national-level hackathon by PHCET. Built with stunning animations and modern design.',
      tags: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
      image: '🚀',
      link: 'https://github.com/Niravcanvas/Hackoverflow',
      github: 'https://github.com/Niravcanvas/Hackoverflow',
    },
    {
      title: 'Fintech Expense Tracker',
      description: 'A modern, premium fintech expense tracker featuring stunning glassmorphism UI, real-time analytics, and intelligent money insights.',
      tags: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Glassmorphism'],
      image: '💰',
      link: 'https://github.com/Niravcanvas/Fintech',
      github: 'https://github.com/Niravcanvas/Fintech',
    },
    {
      title: 'Coming Soon - HO 4.0',
      description: 'Official Coming Soon page for HackOverflow 4.0 - Pre-launch landing page displayed before the main website went live.',
      tags: ['HTML', 'CSS', 'JavaScript', 'Animations'],
      image: '⏳',
      link: 'https://github.com/Niravcanvas/Coming-soon-HO-4.0',
      github: 'https://github.com/Niravcanvas/Coming-soon-HO-4.0',
    },
    {
      title: 'Attendance System',
      description: 'Python-based attendance management system for efficient tracking and reporting.',
      tags: ['Python', 'Flask', 'SQLite', 'Bootstrap'],
      image: '📋',
      link: 'https://github.com/Niravcanvas/attendance-system',
      github: 'https://github.com/Niravcanvas/attendance-system',
    },
    {
      title: 'Animated Clock',
      description: 'Beautiful animated clock interface with smooth animations and modern design.',
      tags: ['HTML', 'CSS', 'JavaScript', 'Animations'],
      image: '🕐',
      link: 'https://github.com/Niravcanvas/Clock',
      github: 'https://github.com/Niravcanvas/Clock',
    },
    {
      title: 'UI/UX Design Portfolio',
      description: 'Collection of UI/UX designs, web design projects, and photography showcasing creative work.',
      tags: ['Figma', 'UI/UX', 'Web Design', 'Photography'],
      image: '🎨',
      link: '#',
      github: '#',
    },
  ];

  return (
    <section id="projects" className="min-h-screen py-20 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full text-sm text-gray-400 mb-4">
            My Work
          </div>
          <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-white to-gray-500 bg-clip-text text-transparent mb-4">
            Featured Projects
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto">
            A selection of projects I've worked on, showcasing my skills and passion for development.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group p-6 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 hover:bg-white/10 transition-all duration-300 hover:scale-105"
            >
              {/* Project Icon */}
              <div className="w-16 h-16 mb-4 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center text-4xl">
                {project.image}
              </div>

              {/* Project Title */}
              <h3 className="text-xl font-bold text-white mb-2 group-hover:text-gray-200 transition-colors">
                {project.title}
              </h3>

              {/* Project Description */}
              <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                {project.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="px-2 py-1 bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg text-xs text-gray-400"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Links */}
              <div className="flex gap-3 pt-4 border-t border-white/10">
                <a
                  href={project.link}
                  className="flex-1 px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg text-sm text-white text-center hover:bg-white/20 transition-all"
                >
                  Live Demo
                </a>
                <a
                  href={project.github}
                  className="flex-1 px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg text-sm text-white text-center hover:bg-white/20 transition-all"
                >
                  GitHub
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* View More */}
        <div className="text-center mt-12">
          <button className="px-8 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-white hover:bg-white/20 transition-all hover:scale-105">
            View All Projects
          </button>
        </div>
      </div>
    </section>
  );
}