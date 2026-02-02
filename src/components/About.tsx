'use client';
import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';

export default function About() {
  const [terminalInput, setTerminalInput] = useState('');
  const [terminalHistory, setTerminalHistory] = useState<Array<{command: string, output: React.ReactElement | string}>>([]);
  const [currentView, setCurrentView] = useState('finder');
  const [activeSection, setActiveSection] = useState('about');
  const [snakeGame, setSnakeGame] = useState<{active: boolean, score: number}>({ active: false, score: 0 });
  const [secretsFound, setSecretsFound] = useState<string[]>([]);
  const [commandHistory, setCommandHistory] = useState<string[]>([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const terminalEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const skills = [
    { 
      category: 'Technical Skills', 
      items: ['Time Management', 'Critical Thinking', 'Hardware Hobbyist', 'Server Configuration'], 
      icon: '⚙' 
    },
    { 
      category: 'Creative Skills', 
      items: ['Photography', 'Painting', 'Sketching', 'Modeling', 'Ramp'], 
      icon: '🎨' 
    },
    { 
      category: 'Soft Skills', 
      items: ['Teamwork', 'Leadership', 'Communication', 'Problem Solving'], 
      icon: '🤝' 
    },
  ];

  const languages = [
    { name: 'HTML', color: '#E34F26' },
    { name: 'CSS', color: '#1572B6' },
    { name: 'JavaScript', color: '#F7DF1E' },
    { name: 'TypeScript', color: '#3178C6' },
    { name: 'Python', color: '#3776AB' },
    { name: 'Java', color: '#007396' },
    { name: 'C', color: '#A8B9CC' },
    { name: 'C++', color: '#00599C' },
    { name: 'PHP', color: '#777BB4' },
    { name: 'SQL', color: '#4479A1' },
  ];

  const libraries = [
    { name: 'Next.js', color: '#af8080' },
    { name: 'React', color: '#61DAFB' },
    { name: 'Node.js', color: '#339933' },
    { name: 'Flask', color: '#729e76' },
    { name: 'Tailwind CSS', color: '#06B6D4' },
    { name: 'MongoDB', color: '#47A248' },
    { name: 'Docker', color: '#2496ED' },
    { name: 'Git', color: '#F05032' },
    { name: 'Nginx', color: '#009639' },
    { name: 'Ngrok', color: '#4a4971' },
    { name: 'Coolify', color: '#6B21A8' },
    { name: 'Express.js', color: '#7e75c3' },
    { name: 'Bootstrap', color: '#7952B3' },
    { name: 'jQuery', color: '#0769AD' },
  ];

  const software = [
    { name: 'Figma', color: '#F24E1E' },
    { name: 'Illustrator', color: '#FF9A00' },
    { name: 'Photoshop', color: '#31A8FF' },
    { name: 'Lightroom', color: '#31A8FF' },
    { name: 'After Effects', color: '#9999FF' },
    { name: 'Blender', color: '#F5792A' },
    { name: 'Affinity', color: '#1B72BE' },
    { name: 'Inkscape', color: '#e7caca' },
    { name: 'VS Code', color: '#007ACC' },
    { name: 'Xcode', color: '#147EFB' },
  ];

  const education = [
  {
    degree: "Bachelor’s in Computer Science & Engineering",
    institution: "CSMU (Autonomous)",
    period: "2024 – Present",
    description:
      "Currently pursuing undergraduate studies with a focus on computer science fundamentals, software development, and modern computing practices."
  },
  {
    degree: "Diploma in Computer Engineering",
    institution: "Pillai HOC College of Engineering & Technology",
    period: "2021 – 2024",
    description:
      "Completed a diploma program covering core computer engineering concepts, programming fundamentals, and practical application development."
  },
  {
    degree: "UI/UX Design Certification",
    institution: "Google UX Design (Online)",
    period: "2023",
    description:
      "Hands-on training in user research, wireframing, prototyping, and designing user-centered digital experiences."
  },
  {
    degree: "Advanced Visual & Interaction Design",
    institution: "Coursera / Online Learning",
    period: "2022",
    description:
      "Focused on visual hierarchy, interaction patterns, accessibility, and creating polished digital interfaces."
  },
  {
    degree: "Creative Design & Branding Program",
    institution: "Udemy / Online Learning",
    period: "2022",
    description:
      "Explored design fundamentals, branding principles, layout systems, and creative problem-solving for digital products."
  },
  {
    degree: "Web Development Bootcamp",
    institution: "Self-taught & Online Courses",
    period: "2019 – Present",
    description:
      "Continuous hands-on learning in frontend development, modern web workflows, and building real-world web applications."
  },
  {
    degree: "Secondary & Higher Secondary Education (State Board)",
    institution: "St. Joseph High School",
    period: "2010 – 2021",
    description:
      "Completed schooling under the State Board curriculum, building a strong academic foundation."
  },
  {
    degree: "IELTS Academic",
    institution: "British Council / IDP",
    period: "2024",
    description:
      "Achieved an overall band score of 7.1, demonstrating strong English language proficiency."
  }
];

  const commands = {
    help: () => (
      <div className="space-y-2">
        <div className="text-green-400">Available commands:</div>
        <div className="ml-4 space-y-1 text-gray-300">
          <div><span className="text-blue-400">about</span> - Display about information</div>
          <div><span className="text-blue-400">education</span> - Show educational background</div>
          <div><span className="text-blue-400">skills</span> - List technical skills</div>
          <div><span className="text-blue-400">languages</span> - View programming languages</div>
          <div><span className="text-blue-400">libraries</span> - View frameworks and libraries</div>
          <div><span className="text-blue-400">software</span> - View software tools</div>
          <div><span className="text-blue-400">contact</span> - Get contact information</div>
          <div><span className="text-blue-400">clear</span> - Clear terminal</div>
          <div><span className="text-blue-400">ls</span> - List directory contents</div>
          <div className="text-gray-500 text-xs mt-2">Hint: Try some hidden commands... 🎮</div>
        </div>
      </div>
    ),
    about: () => (
      <div className="space-y-2 text-gray-300">
        <div className="text-green-400 font-semibold">▸ About Me</div>
        <div className="ml-4">
          <p>I'm a passionate Frontend Developer & UI/UX Designer based in Mumbai, India.</p>
          <p className="mt-2">I specialize in creating beautiful web experiences with modern technologies like Next.js, TypeScript, and Tailwind CSS.</p>
          <p className="mt-2">My journey combines web development, design, and photography to craft stunning user interfaces.</p>
        </div>
      </div>
    ),
    education: () => (
      <div className="space-y-2 text-gray-300">
        <div className="text-green-400 font-semibold">▸ Education</div>
        <div className="ml-4 space-y-3">
          {education.map((edu, index) => (
            <div key={index}>
              <div className="text-blue-400">{edu.degree}</div>
              <div className="text-sm text-gray-400">{edu.institution} • {edu.period}</div>
              <div className="text-sm text-gray-500 mt-1">{edu.description}</div>
            </div>
          ))}
        </div>
      </div>
    ),
    skills: () => (
      <div className="space-y-2 text-gray-300">
        <div className="text-green-400 font-semibold">▸ Skills & Technologies</div>
        <div className="ml-4 space-y-2">
          {skills.map((skillGroup, index) => (
            <div key={index}>
              <div className="text-blue-400">{skillGroup.icon} {skillGroup.category}:</div>
              <div className="ml-4 text-sm">{skillGroup.items.join(', ')}</div>
            </div>
          ))}
        </div>
      </div>
    ),
    languages: () => (
      <div className="space-y-2 text-gray-300">
        <div className="text-green-400 font-semibold">▸ Programming Languages</div>
        <div className="ml-4 text-sm">
          {languages.map(lang => lang.name).join(', ')}
        </div>
      </div>
    ),
    libraries: () => (
      <div className="space-y-2 text-gray-300">
        <div className="text-green-400 font-semibold">▸ Frameworks & Libraries</div>
        <div className="ml-4 text-sm">
          {libraries.map(lib => lib.name).join(', ')}
        </div>
      </div>
    ),
    software: () => (
      <div className="space-y-2 text-gray-300">
        <div className="text-green-400 font-semibold">▸ Software Tools</div>
        <div className="ml-4 text-sm">
          {software.map(s => s.name).join(', ')}
        </div>
      </div>
    ),
    contact: () => (
      <div className="space-y-2 text-gray-300">
        <div className="text-green-400 font-semibold">▸ Contact Information</div>
        <div className="ml-4 space-y-1">
          <div>▸ Location: Mumbai, India</div>
          <div>▸ GitHub: github.com/yourusername</div>
          <div>▸ Email: your.email@example.com</div>
        </div>
      </div>
    ),
    ls: () => (
      <div className="space-y-1 text-gray-300">
        <div className="text-blue-400">▸ about/</div>
        <div className="text-blue-400">▸ education/</div>
        <div className="text-blue-400">▸ skills/</div>
        <div className="text-blue-400">▸ languages/</div>
        <div className="text-blue-400">▸ libraries/</div>
        <div className="text-blue-400">▸ software/</div>
        <div className="text-green-400">▸ README.md</div>
        <div className="text-gray-500 text-xs mt-2">▸ .secret/</div>
      </div>
    ),
    // Easter Eggs
    secret: () => {
      if (!secretsFound.includes('secret')) {
        setSecretsFound(prev => [...prev, 'secret']);
      }
      return (
        <div className="space-y-2 text-gray-300">
          <div className="text-yellow-400">🎉 Secret Found! ({secretsFound.length + 1}/5)</div>
          <div className="ml-4">
            <p className="text-green-400">"Code is like humor. When you have to explain it, it's bad." - Cory House</p>
            <p className="text-gray-500 text-sm mt-2">Try: matrix, coffee, joke, game</p>
          </div>
        </div>
      );
    },
    matrix: () => {
      if (!secretsFound.includes('matrix')) {
        setSecretsFound(prev => [...prev, 'matrix']);
      }
      return (
        <div className="text-green-400 font-mono">
          <div className="animate-pulse">Wake up, Neo...</div>
          <div className="mt-2">The Matrix has you...</div>
          <div className="mt-2">Follow the white rabbit. 🐰</div>
          <div className="text-gray-500 text-sm mt-3">Secret {secretsFound.length + 1}/5 unlocked!</div>
        </div>
      );
    },
    coffee: () => {
      if (!secretsFound.includes('coffee')) {
        setSecretsFound(prev => [...prev, 'coffee']);
      }
      return (
        <div className="text-gray-300">
          <div className="text-yellow-600">☕</div>
          <div className="mt-2">Brewing coffee...</div>
          <div className="mt-1">████████████ 100%</div>
          <div className="mt-2 text-green-400">Coffee ready! Productivity +50%</div>
          <div className="text-gray-500 text-sm mt-3">Secret {secretsFound.length + 1}/5 unlocked!</div>
        </div>
      );
    },
    joke: () => {
      if (!secretsFound.includes('joke')) {
        setSecretsFound(prev => [...prev, 'joke']);
      }
      const jokes = [
        "Why do programmers prefer dark mode? Because light attracts bugs! 🐛",
        "How many programmers does it take to change a light bulb? None. It's a hardware problem! 💡",
        "Why did the developer go broke? Because he used up all his cache! 💰",
        "What's a programmer's favorite hangout? The Foo Bar! 🍺"
      ];
      const randomJoke = jokes[Math.floor(Math.random() * jokes.length)];
      return (
        <div className="text-gray-300">
          <div className="text-blue-400">😄 Random Developer Joke:</div>
          <div className="ml-4 mt-2">{randomJoke}</div>
          <div className="text-gray-500 text-sm mt-3">Secret {secretsFound.length + 1}/5 unlocked!</div>
        </div>
      );
    },
    game: () => {
      if (!secretsFound.includes('game')) {
        setSecretsFound(prev => [...prev, 'game']);
      }
      return (
        <div className="text-gray-300">
          <div className="text-green-400 font-semibold">🎮 Number Guessing Game</div>
          <div className="ml-4 mt-2">
            <p>I'm thinking of a number between 1 and 100...</p>
            <p className="mt-2 text-yellow-400">Try typing: guess 42</p>
            <p className="text-gray-500 text-sm mt-2">(Replace 42 with your guess)</p>
          </div>
          <div className="text-gray-500 text-sm mt-3">Secret {secretsFound.length + 1}/5 unlocked!</div>
        </div>
      );
    },
    guess: (num?: string) => {
      const secretNumber = 73; // The best number according to Sheldon Cooper
      if (!num) {
        return <span className="text-red-400">Usage: guess [number]</span>;
      }
      const guess = parseInt(num);
      if (isNaN(guess)) {
        return <span className="text-red-400">Please enter a valid number!</span>;
      }
      if (guess === secretNumber) {
        return (
          <div className="text-green-400">
            <div>🎉 Congratulations! You guessed it!</div>
            <div className="mt-2">The number was {secretNumber}!</div>
            <div className="text-gray-400 text-sm mt-2">(Fun fact: 73 is Sheldon Cooper's favorite number!)</div>
          </div>
        );
      } else if (guess < secretNumber) {
        return <span className="text-yellow-400">📈 Higher! Try a bigger number.</span>;
      } else {
        return <span className="text-yellow-400">📉 Lower! Try a smaller number.</span>;
      }
    },
    sudo: () => (
      <div className="text-red-400">
        <div>Nice try! 😏</div>
        <div className="mt-2">But you don't have sudo privileges here...</div>
        <div className="text-gray-500 text-sm mt-2">This incident will be reported. (Just kidding!)</div>
      </div>
    ),
    whoami: () => (
      <div className="text-gray-300">
        <div>nirav@portfolio</div>
        <div className="text-gray-500 text-sm mt-2">A passionate developer exploring the digital world</div>
      </div>
    ),
    date: () => (
      <div className="text-gray-300">{new Date().toString()}</div>
    ),
    secrets: () => (
      <div className="text-gray-300">
        <div className="text-blue-400">🔍 Secrets Found: {secretsFound.length}/5</div>
        <div className="ml-4 mt-2 space-y-1">
          {secretsFound.map((secret, index) => (
            <div key={index} className="text-green-400">✓ {secret}</div>
          ))}
          {secretsFound.length < 5 && (
            <div className="text-gray-500 text-sm mt-2">
              Keep exploring to find all secrets! 🕵️
            </div>
          )}
          {secretsFound.length === 5 && (
            <div className="text-yellow-400 mt-2">
              🎊 Amazing! You found all the secrets! You're a true explorer! 🎊
            </div>
          )}
        </div>
      </div>
    ),
  };

  const handleCommand = (cmd: string) => {
    const parts = cmd.trim().toLowerCase().replace(/^\//, '').split(' ');
    const mainCmd = parts[0];
    const args = parts.slice(1);
    
    if (mainCmd === 'clear') {
      setTerminalHistory([]);
      return;
    }

    let output;
    
    // Handle commands with arguments
    if (mainCmd === 'guess' && args.length > 0) {
      output = commands.guess(args[0]);
    } else if (commands[mainCmd as keyof typeof commands]) {
      output = commands[mainCmd as keyof typeof commands]();
    } else {
      output = <span className="text-red-400">Command not found: {cmd}. Type 'help' for available commands.</span>;
    }

    setTerminalHistory(prev => [...prev, { command: cmd, output }]);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (terminalInput.trim()) {
      handleCommand(terminalInput);
      setCommandHistory(prev => [...prev, terminalInput]);
      setHistoryIndex(-1);
      setTerminalInput('');
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (commandHistory.length === 0) return;
      
      const newIndex = historyIndex === -1 
        ? commandHistory.length - 1 
        : Math.max(0, historyIndex - 1);
      
      setHistoryIndex(newIndex);
      setTerminalInput(commandHistory[newIndex]);
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (historyIndex === -1) return;
      
      const newIndex = historyIndex + 1;
      
      if (newIndex >= commandHistory.length) {
        setHistoryIndex(-1);
        setTerminalInput('');
      } else {
        setHistoryIndex(newIndex);
        setTerminalInput(commandHistory[newIndex]);
      }
    }
  };

  useEffect(() => {
    if (currentView === 'terminal' && terminalHistory.length > 0) {
      terminalEndRef.current?.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }
  }, [terminalHistory, currentView]);

  useEffect(() => {
    if (currentView === 'terminal') {
      inputRef.current?.focus();
    }
  }, [currentView]);

  const renderFinderContent = () => {
    switch (activeSection) {
      case 'about':
        return (
          <div className="flex flex-col lg:flex-row gap-8 items-start">
            {/* Text Content */}
            <div className="flex-1">
              <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                <span className="text-3xl">▸</span> My Story
              </h3>
              <div className="space-y-4 text-gray-300 leading-relaxed">
                <p>I’m a Frontend Developer & UI/UX Designer based in Mumbai, India, focused on building refined, high-performance web experiences using modern frontend technologies.</p>
                <p>I work at the intersection of engineering, design, and visual creativity to deliver intuitive, scalable, and visually engaging interfaces. My approach blends clean architecture with thoughtful design to create digital products that support real business goals.</p>
                <p>Nirav stays inspired by evolving design trends, explores photography as a creative outlet, and actively contributes to open-source projects on GitHub.</p>
              </div>
            </div>

            {/* Photo Booth Stack - Hidden on mobile, visible on lg+ screens */}
            <div className="hidden lg:block relative w-64 h-80 flex-shrink-0">
              <div className="absolute inset-0 flex items-center justify-center">
                {/* Photo 1 - Bottom */}
                <div 
                  className="absolute w-56 h-72 bg-white/5 backdrop-blur-sm border border-white/20 rounded-lg overflow-hidden shadow-2xl transform rotate-[-3deg] hover:rotate-0 transition-all duration-300 hover:scale-105 hover:z-30"
                  style={{ zIndex: 1 }}
                >
                  <Image
                    src="/images/N1.jpg"
                    alt="Photo 1"
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Photo 2 - Middle */}
                <div 
                  className="absolute w-56 h-72 bg-white/5 backdrop-blur-sm border border-white/20 rounded-lg overflow-hidden shadow-2xl transform rotate-[2deg] hover:rotate-0 transition-all duration-300 hover:scale-105 hover:z-30"
                  style={{ zIndex: 2 }}
                >
                  <Image
                    src="/images/N2.jpg"
                    alt="Photo 2"
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Photo 3 - Top */}
                <div 
                  className="absolute w-56 h-72 bg-white/5 backdrop-blur-sm border border-white/20 rounded-lg overflow-hidden shadow-2xl transform rotate-[-1deg] hover:rotate-0 transition-all duration-300 hover:scale-105 hover:z-30"
                  style={{ zIndex: 3 }}
                >
                  <Image
                    src="/images/N3.jpg"
                    alt="Photo 3"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        );

      case 'education':
        return (
          <div>
            <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
              <span className="text-3xl">▸</span> Education
            </h3>
            <div className="space-y-6">
              {education.map((edu, index) => (
                <div
                  key={index}
                  className="bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-white/10 hover:border-white/30 transition-all"
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  <h4 className="text-xl font-semibold text-white mb-2">{edu.degree}</h4>
                  <div className="text-sm text-gray-400 mb-3">{edu.institution} • {edu.period}</div>
                  <p className="text-gray-300">{edu.description}</p>
                </div>
              ))}
            </div>
          </div>
        );

      case 'skills':
        return (
          <div>
            <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
              <span className="text-3xl">▸</span> Skills & Technologies
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {skills.map((skillGroup, index) => (
                <div
                  key={index}
                  className="bg-white/5 backdrop-blur-sm p-5 rounded-xl border border-white/10 hover:border-white/30 transition-all hover:scale-105"
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  <div className="text-2xl mb-2">{skillGroup.icon}</div>
                  <h4 className="text-lg font-semibold text-white mb-3">{skillGroup.category}</h4>
                  <div className="flex flex-wrap gap-2">
                    {skillGroup.items.map((skill, i) => (
                      <span
                        key={i}
                        className="text-xs px-2 py-1 bg-white/10 rounded-md text-gray-300 hover:bg-white/20 transition-colors"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        );

      case 'languages':
        return (
          <div>
            <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
              <span className="text-3xl">▸</span> Programming Languages
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {languages.map((lang, index) => (
                <div
                  key={index}
                  className="bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-white/10 hover:border-white/30 transition-all hover:scale-105 flex flex-col items-center justify-center gap-3 group"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <div 
                    className="w-16 h-16 rounded-lg flex items-center justify-center text-3xl font-bold transition-all group-hover:scale-110"
                    style={{ 
                      backgroundColor: `${lang.color}20`, 
                      color: lang.color,
                      border: `2px solid ${lang.color}40`
                    }}
                  >
                    {lang.name === 'C++' ? 'C++' : 
                     lang.name === 'C#' ? 'C#' : 
                     lang.name.substring(0, 2).toUpperCase()}
                  </div>
                  <span className="text-sm text-gray-300 text-center font-medium">{lang.name}</span>
                </div>
              ))}
            </div>
          </div>
        );

      case 'libraries':
        return (
          <div>
            <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
              <span className="text-3xl">▸</span> Frameworks & Libraries
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {libraries.map((lib, index) => (
                <div
                  key={index}
                  className="bg-white/5 backdrop-blur-sm p-5 rounded-xl border border-white/10 hover:border-white/30 transition-all hover:scale-105 flex flex-col items-center justify-center gap-3 group"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <div 
                    className="w-16 h-16 rounded-lg flex items-center justify-center text-2xl font-bold transition-all group-hover:scale-110"
                    style={{ 
                      backgroundColor: `${lib.color}20`, 
                      color: lib.color,
                      border: `2px solid ${lib.color}40`
                    }}
                  >
                    {lib.name.includes('.') ? lib.name.split('.')[0].substring(0, 2).toUpperCase() : 
                     lib.name.substring(0, 2).toUpperCase()}
                  </div>
                  <span className="text-sm text-gray-300 text-center font-medium">{lib.name}</span>
                </div>
              ))}
            </div>
          </div>
        );

      case 'software':
        return (
          <div>
            <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
              <span className="text-3xl">▸</span> Software Tools
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
              {software.map((tool, index) => (
                <div
                  key={index}
                  className="bg-white/5 backdrop-blur-sm p-5 rounded-xl border border-white/10 hover:border-white/30 transition-all hover:scale-105 flex flex-col items-center justify-center gap-3 group"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <div 
                    className="w-16 h-16 rounded-lg flex items-center justify-center text-2xl font-bold transition-all group-hover:scale-110"
                    style={{ 
                      backgroundColor: `${tool.color}20`, 
                      color: tool.color,
                      border: `2px solid ${tool.color}40`
                    }}
                  >
                    {tool.name === 'VS Code' ? 'VS' : 
                     tool.name.substring(0, 2).toUpperCase()}
                  </div>
                  <span className="text-sm text-gray-300 text-center font-medium">{tool.name}</span>
                </div>
              ))}
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-black py-20 px-4 relative overflow-hidden">
      {/* Floating orbs background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-20 w-72 h-72 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-white/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-white/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/3 right-1/4 w-48 h-48 bg-white/8 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '3s' }}></div>
        <div className="absolute bottom-1/3 left-1/4 w-56 h-56 bg-white/6 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1.5s' }}></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* macOS Window Controls */}
        <div className="mb-8 text-center space-y-2 animate-fade-in">
          <div className="inline-flex items-center gap-2 bg-white/5 backdrop-blur-sm px-4 py-2 rounded-full border border-white/10">
            <div className="flex gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500 hover:bg-red-400 transition-colors cursor-pointer"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500 hover:bg-yellow-400 transition-colors cursor-pointer"></div>
              <div className="w-3 h-3 rounded-full bg-green-500 hover:bg-green-400 transition-colors cursor-pointer"></div>
            </div>
            <span className="text-sm text-gray-400 ml-2">About.app</span>
          </div>
          <h2 className="text-5xl font-bold text-white">
            Get to know me
          </h2>
        </div>

        {/* View Switcher */}
        <div className="flex justify-center gap-4 mb-6">
          <button
            onClick={() => setCurrentView('finder')}
            className={`px-6 py-2 rounded-xl font-medium transition-all ${
              currentView === 'finder'
                ? 'bg-white text-black shadow-lg shadow-white/20'
                : 'bg-white/5 backdrop-blur-sm text-gray-400 hover:bg-white/10 border border-white/10'
            }`}
          >
            ▸ Finder
          </button>
          <button
            onClick={() => setCurrentView('terminal')}
            className={`px-6 py-2 rounded-xl font-medium transition-all ${
              currentView === 'terminal'
                ? 'bg-white text-black shadow-lg shadow-white/20'
                : 'bg-white/5 backdrop-blur-sm text-gray-400 hover:bg-white/10 border border-white/10'
            }`}
          >
            ▸ Terminal
          </button>
        </div>

        {/* Finder View */}
        {currentView === 'finder' && (
          <div className="animate-slide-up">
            {/* macOS Window */}
            <div className="bg-black/90 backdrop-blur-xl border border-white/10 rounded-xl overflow-hidden shadow-2xl">
              {/* Window Header */}
              <div className="bg-white/5 backdrop-blur-sm px-4 py-3 flex items-center justify-between border-b border-white/10">
                <div className="flex items-center gap-3">
                  <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  </div>
                  <span className="text-sm text-gray-400">About Me</span>
                </div>
                <div className="text-xs text-gray-500">If you are a developer, you can switch to Terminal</div>
              </div>

              {/* Sidebar + Content */}
              <div className="flex">
                {/* Sidebar */}
                <div className="w-48 bg-white/5 p-4 space-y-2 border-r border-white/10">
                  <div className="text-xs text-gray-500 uppercase tracking-wider mb-3">Favorites</div>
                  <div className="space-y-1">
                    <div
                      onClick={() => setActiveSection('about')}
                      className={`flex items-center gap-2 px-3 py-2 rounded-lg text-sm cursor-pointer transition-all ${
                        activeSection === 'about'
                          ? 'bg-white/10 text-white'
                          : 'hover:bg-white/5 text-gray-400'
                      }`}
                    >
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z" clipRule="evenodd" />
                      </svg>
                      About
                    </div>
                    <div
                      onClick={() => setActiveSection('education')}
                      className={`flex items-center gap-2 px-3 py-2 rounded-lg text-sm cursor-pointer transition-all ${
                        activeSection === 'education'
                          ? 'bg-white/10 text-white'
                          : 'hover:bg-white/5 text-gray-400'
                      }`}
                    >
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
                      </svg>
                      Education
                    </div>
                    <div
                      onClick={() => setActiveSection('skills')}
                      className={`flex items-center gap-2 px-3 py-2 rounded-lg text-sm cursor-pointer transition-all ${
                        activeSection === 'skills'
                          ? 'bg-white/10 text-white'
                          : 'hover:bg-white/5 text-gray-400'
                      }`}
                    >
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
                      </svg>
                      Skills
                    </div>
                    <div
                      onClick={() => setActiveSection('languages')}
                      className={`flex items-center gap-2 px-3 py-2 rounded-lg text-sm cursor-pointer transition-all ${
                        activeSection === 'languages'
                          ? 'bg-white/10 text-white'
                          : 'hover:bg-white/5 text-gray-400'
                      }`}
                    >
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                      Languages
                    </div>
                    <div
                      onClick={() => setActiveSection('libraries')}
                      className={`flex items-center gap-2 px-3 py-2 rounded-lg text-sm cursor-pointer transition-all ${
                        activeSection === 'libraries'
                          ? 'bg-white/10 text-white'
                          : 'hover:bg-white/5 text-gray-400'
                      }`}
                    >
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M7 3a1 1 0 000 2h6a1 1 0 100-2H7zM4 7a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1zM2 11a2 2 0 012-2h12a2 2 0 012 2v4a2 2 0 01-2 2H4a2 2 0 01-2-2v-4z" />
                      </svg>
                      Libraries
                    </div>
                    <div
                      onClick={() => setActiveSection('software')}
                      className={`flex items-center gap-2 px-3 py-2 rounded-lg text-sm cursor-pointer transition-all ${
                        activeSection === 'software'
                          ? 'bg-white/10 text-white'
                          : 'hover:bg-white/5 text-gray-400'
                      }`}
                    >
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M2 5a2 2 0 012-2h12a2 2 0 012 2v10a2 2 0 01-2 2H4a2 2 0 01-2-2V5zm3.293 1.293a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 01-1.414-1.414L7.586 10 5.293 7.707a1 1 0 010-1.414zM11 12a1 1 0 100 2h3a1 1 0 100-2h-3z" clipRule="evenodd" />
                      </svg>
                      Software
                    </div>
                  </div>
                </div>

                {/* Main Content */}
                <div className="flex-1 p-8">
                  {renderFinderContent()}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Terminal View */}
        {currentView === 'terminal' && (
          <div className="animate-slide-up">
            <div className="bg-black/90 backdrop-blur-xl border border-white/10 rounded-xl overflow-hidden shadow-2xl font-mono">
              {/* Terminal Header */}
              <div className="bg-white/5 backdrop-blur-sm px-4 py-3 flex items-center justify-between border-b border-white/10">
                <div className="flex items-center gap-3">
                  <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  </div>
                  <span className="text-sm text-gray-400">Terminal — bash — 80x24</span>
                </div>
              </div>

              {/* Terminal Content */}
              <div className="p-6 h-[600px] overflow-y-auto overflow-x-hidden">
                {/* Welcome Message */}
                <div className="mb-4 text-green-400">
                  <div>Welcome to Portfolio Terminal v1.0.0</div>
                  <div className="text-gray-400">Type 'help' to see available commands.</div>
                  <div className="text-gray-500 text-sm mt-2">Last login: {new Date().toLocaleString()}</div>
                </div>

                {/* Command History */}
                {terminalHistory.map((entry, index) => (
                  <div key={index} className="mb-4">
                    <div className="flex items-center gap-2 text-blue-400">
                      <span className="text-green-400">➜</span>
                      <span className="text-purple-400">~</span>
                      <span>{entry.command}</span>
                    </div>
                    <div className="mt-2 ml-4">{entry.output}</div>
                  </div>
                ))}

                {/* Current Input */}
                <form onSubmit={handleSubmit} className="flex items-center gap-2">
                  <span className="text-green-400">➜</span>
                  <span className="text-purple-400">~</span>
                  <input
                    ref={inputRef}
                    type="text"
                    value={terminalInput}
                    onChange={(e) => setTerminalInput(e.target.value)}
                    onKeyDown={handleKeyDown}
                    className="flex-1 bg-transparent outline-none text-white caret-green-400"
                    autoFocus
                    spellCheck={false}
                  />
                  <span className="animate-pulse text-green-400">▊</span>
                </form>

                <div ref={terminalEndRef} />
              </div>
            </div>

            {/* Quick Commands */}
            <div className="mt-6 flex flex-wrap gap-2 justify-center">
              {Object.keys(commands).filter(cmd => cmd !== 'ls' && cmd !== 'guess').map((cmd) => (
                <button
                  key={cmd}
                  onClick={() => {
                    setTerminalInput(cmd);
                    handleCommand(cmd);
                    setTerminalInput('');
                  }}
                  className="px-3 py-1 text-xs bg-white/5 backdrop-blur-sm hover:bg-white/10 text-gray-300 rounded-lg border border-white/10 transition-all"
                >
                  /{cmd}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>

      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slide-up {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in {
          animation: fade-in 0.6s ease-out;
        }

        .animate-slide-up {
          animation: slide-up 0.5s ease-out;
        }
      `}</style>
    </div>
  );
}