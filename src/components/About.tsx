'use client';

export default function About() {
  const skills = [
    { category: 'Frontend', items: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS'] },
    { category: 'Design', items: ['Figma', 'UI/UX Design', 'Photography', 'Web Design'] },
    { category: 'Tools', items: ['Git', 'GitHub', 'Vercel', 'VS Code'] },
  ];

  const stats = [
    { label: 'GitHub Repos', value: '9' },
    { label: 'Contributions', value: '60+' },
    { label: 'Followers', value: '1' },
    { label: 'Following', value: '3' },
  ];

  return (
    <section id="about" className="min-h-screen py-20 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full text-sm text-gray-400 mb-4">
            Get to know me
          </div>
          <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-white to-gray-500 bg-clip-text text-transparent">
            About Me
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {/* About text */}
          <div className="p-8 rounded-3xl bg-white/5 backdrop-blur-md border border-white/10 space-y-4">
            <h3 className="text-2xl font-bold text-white mb-4">My Story</h3>
            <p className="text-gray-400 leading-relaxed">
              I'm a passionate Frontend Developer & UI/UX Designer based in Mumbai, India.
              I specialize in creating beautiful web experiences with modern technologies
              like Next.js, TypeScript, and Tailwind CSS.
            </p>
            <p className="text-gray-400 leading-relaxed">
              My journey combines web development, design, and photography to craft
              stunning user interfaces. I've worked on projects like HackOverflow 4.0
              and various fintech applications, always pushing the boundaries of web design.
            </p>
            <p className="text-gray-400 leading-relaxed">
              When I'm not coding, you can find me exploring new design trends, capturing
              moments through my lens, or contributing to open-source projects on GitHub.
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 gap-4">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="p-6 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 text-center hover:bg-white/10 transition-all hover:scale-105"
              >
                <div className="text-4xl font-bold bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-gray-500">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Skills */}
        <div className="space-y-6">
          <h3 className="text-3xl font-bold text-white text-center mb-8">Skills & Technologies</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {skills.map((skillGroup, index) => (
              <div
                key={index}
                className="p-6 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 hover:bg-white/10 transition-all"
              >
                <h4 className="text-xl font-semibold text-white mb-4">{skillGroup.category}</h4>
                <div className="flex flex-wrap gap-2">
                  {skillGroup.items.map((skill, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-sm text-gray-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}