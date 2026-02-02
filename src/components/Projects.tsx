'use client';

import { useState } from 'react';
import { FolderOpen, Star, Clock, Code, Palette, Settings, ExternalLink, FileText } from 'lucide-react';
import Image from 'next/image';

interface Project {
  id: number;
  title: string;
  description: string;
  tags: string[];
  image: string;
  imageType: 'emoji' | 'svg' | 'png';
  link: string;
  github?: string;
  figma?: string;
  pdf?: string;
  category: 'development' | 'design' | 'favorites';
  date: string;
  content: string;
}

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<number>(1);
  const [activeFolder, setActiveFolder] = useState<'all' | 'development' | 'design' | 'favorites'>('all');

  const projects: Project[] = [
    {
      id: 1,
      title: 'IndieAn',
      description: 'IndieAn is a modern, gamified music learning platform that combines AI-powered lessons with Trinity College curriculum standards.',
      tags: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Animations','Tailwind CSS', 'Responsive Design'],
      image: '/images/Indiean.svg',
      imageType: 'svg',
      link: 'https://www.indiean.com/',
      github: '',
      category: 'development',
      date: 'Dec 20, 2025',
      content: 'IndieAn website features a stable front-end build with responsive design across all devices. The platform integrates gamification elements to make music learning engaging and interactive, while maintaining professional standards aligned with Trinity College curriculum.'
    },
    {
      id: 2,
      title: 'Maharashtra Chemists Association',
      description: 'The Maharashtra State Chemists and Druggists Association (MSCDA) is an apex body representing nearly 75,000 chemists & druggists across Maharashtra.',
      tags: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Glassmorphism', 'MongoDB', 'Vercel'],
      image: '/images/MSCDA.svg',
      imageType: 'svg',
      link: 'https://mscda.vercel.app',
      github: '',
      category: 'development',
      date: 'November 10, 2025',
      content: 'A comprehensive web solution featuring custom CMS integration, member portal, news & updates section, event management system, VPS deployment, and admin dashboard. Built with modern technologies to serve thousands of members efficiently.'
    },
    {
      id: 3,
      title: 'Seven Vinyl Store',
      description: 'Sample brand design concept for a music and lifestyle vinyl record store. Complete brand identity including logo, color palette, and visual guidelines.',
      tags: ['Branding', 'Logo Design', 'Visual Identity', 'Music', 'Retail'],
      image: '/images/Sevenvinyl.svg',
      imageType: 'svg',
      link: '#',
      pdf: '/Docs/Seven Vinyl.pdf',
      category: 'favorites',
      date: 'Jan 20, 2026',
      content: 'Complete brand identity design for Seven Vinyl Store, a music and lifestyle brand. This showcase project demonstrates expertise in brand strategy, logo design, typography, color theory, and visual identity systems. Created exclusively for portfolio purposes. © 2025 Seven Hours. All rights reserved.'
    },
    {
      id: 4,
      title: 'SYNC Fitness App',
      description: 'Modern fitness tracking application with workout planning, progress monitoring, and personalized fitness goals.',
      tags: ['Figma', 'UI/UX', 'Mobile Design', 'Fitness'],
      image: '/images/Sync.png',
      imageType: 'png',
      link: '#',
      figma: 'https://www.figma.com/design/PoIDqRCf8VTB9tpuYuqSa7/SYNC--Fitness-',
      category: 'design',
      date: 'Jan 8, 2026',
      content: 'Complete UI/UX design for a fitness tracking application featuring workout planning, progress tracking, nutrition monitoring, and social features. Designed with a focus on user engagement and accessibility.'
    },
    {
      id: 5,
      title: 'Anders Design Portfolio',
      description: 'Elegant interior design showcase featuring modern minimalist aesthetics and spatial planning.',
      tags: ['Figma', 'UI/UX', 'Interior Design', 'Portfolio'],
      image: '/images/Anders.svg',
      imageType: 'svg',
      link: '#',
      figma: 'https://www.figma.com/design/Hd0ugG6oLaIax2aqwsCZGr/Interior',
      category: 'design',
      date: 'Dec 15, 2025',
      content: 'A sophisticated interior design portfolio showcasing various residential and commercial projects. Features clean layouts, mood boards, and detailed project presentations with emphasis on modern design principles.'
    },
    {
      id: 6,
      title: 'Form & Form',
      description: 'Sample Brand Design for a Design Agency specializing in modern, minimalist aesthetics and user-centric design solutions.',
      tags: ['Figma', 'Design System', 'UI Components', 'Branding'],
      image: '/images/F&F.svg',
      imageType: 'svg',
      link: '#',
      figma: 'https://www.figma.com/design/mH4P37A5Z39BxvwC9EAJys/F-F?node-id=0-1&t=etwyOv2m1dKCqm8e-1',
      category: 'design',
      date: 'Nov 30, 2025',
      content: 'A complete design system featuring reusable components, typography scales, color palettes, spacing systems, and design tokens. Built to ensure consistency across all design projects.'
    },
    {
      id: 7,
      title: 'HackOverflow 4.0',
      description: 'Official website for HackOverflow 4.0 - A national-level hackathon by PHCET.',
      tags: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
      image: '/images/Hackoverflow.png',
      imageType: 'png',
      link: 'https://hackoverflow4.tech',
      github: 'https://github.com/Niravcanvas/Hackoverflow',
      category: 'development',
      date: 'Jan 15, 2026',
      content: 'Built with stunning animations and modern design. The website features a fully responsive layout, smooth scroll animations, dynamic content sections, and an integrated registration system. Implemented using Next.js 14 with TypeScript for type safety and Framer Motion for fluid animations.'
    },
    {
      id: 8,
      title: 'Cloud Kitchen POS',
      description: 'A comprehensive PHP-based Point of Sale (POS) and management system designed for cloud kitchens and restaurants. Built with a clean, professional architecture following industry best practices.',
      tags: ['PHP', 'MySQL', 'Bootstrap', 'POS', 'Restaurant Management'],
      image: '🍽️',
      imageType: 'emoji',
      link: 'https://github.com/Niravcanvas/Cloud-kitchen-POS',
      github: 'https://github.com/Niravcanvas/Cloud-kitchen-POS',
      category: 'development',
      date: 'Dec 28, 2025',
      content: 'Full-featured POS system with inventory management, order tracking, table management, staff management, sales reporting, and customer management. Designed specifically for cloud kitchens with a focus on efficiency and ease of use.'
    },
    {
      id: 9,
      title: 'AI MCQ Generator',
      description: 'An AI-powered tool to generate multiple-choice questions (MCQs) from text or documents. This project uses AI APIs to parse input content and produce MCQs in various formats including HTML, TXT, and more.',
      tags: ['Python', 'AI', 'NLP', 'Machine Learning', 'Education'],
      image: '🤖',
      imageType: 'emoji',
      link: 'https://github.com/Niravcanvas/AI-mcq-Generator',
      github: 'https://github.com/Niravcanvas/AI-mcq-Generator',
      category: 'development',
      date: 'Nov 18, 2025',
      content: 'Leverages advanced AI algorithms to automatically generate high-quality multiple-choice questions from any text input. Perfect for educators, trainers, and content creators. Supports multiple export formats and customizable difficulty levels.'
    },
  ];

  const filteredProjects = projects.filter(project => 
    activeFolder === 'all' || project.category === activeFolder
  );

  const currentProject = projects.find(p => p.id === selectedProject);

  const folders = [
    { name: 'All Projects', id: 'all' as const, icon: <FolderOpen className="w-4 h-4" />, count: projects.length },
    { name: 'Development', id: 'development' as const, icon: <Code className="w-4 h-4" />, count: projects.filter(p => p.category === 'development').length },
    { name: 'Design', id: 'design' as const, icon: <Palette className="w-4 h-4" />, count: projects.filter(p => p.category === 'design').length },
    { name: 'Favorites', id: 'favorites' as const, icon: <Star className="w-4 h-4" />, count: projects.filter(p => p.category === 'favorites').length },
  ];

  return (
    <section id="projects" className="min-h-screen py-20 relative overflow-hidden px-4">
      {/* Floating orbs background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-20 w-72 h-72 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-white/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-white/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/3 right-1/4 w-48 h-48 bg-white/8 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '3s' }}></div>
        <div className="absolute bottom-1/3 left-1/4 w-56 h-56 bg-white/6 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1.5s' }}></div>
      </div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <div className="mb-8 text-center space-y-2 animate-fade-in">
          <div className="inline-flex items-center gap-2 bg-white/5 backdrop-blur-sm px-4 py-2 rounded-full border border-white/10">
            <div className="flex gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500 hover:bg-red-400 transition-colors cursor-pointer"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500 hover:bg-yellow-400 transition-colors cursor-pointer"></div>
              <div className="w-3 h-3 rounded-full bg-green-500 hover:bg-green-400 transition-colors cursor-pointer"></div>
            </div>
            <span className="text-sm text-gray-400 ml-2">Notes.app</span>
          </div>
          <h2 className="text-4xl font-bold text-white">
            Featured Projects
          </h2>
          <p className="text-gray-400">My work and creative projects</p>
        </div>

        {/* Notes Window */}
        <div className="animate-slide-up">
          <div className="bg-black/90 backdrop-blur-xl border border-white/10 rounded-xl overflow-hidden shadow-2xl">
            {/* Window Header */}
            <div className="bg-white/5 backdrop-blur-sm px-4 py-3 flex items-center justify-between border-b border-white/10">
              <div className="flex items-center gap-3">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                <span className="text-sm text-gray-400">Projects</span>
              </div>
              <div className="flex items-center gap-2">
                <button className="p-1.5 text-gray-400 hover:text-white transition-colors">
                  <Settings className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Three Column Layout */}
            <div className="flex h-[600px]">
              {/* Folders Sidebar */}
              <div className="w-48 bg-white/5 border-r border-white/10 p-3">
                <div className="text-xs text-gray-500 uppercase tracking-wider mb-3 px-2">Folders</div>
                <div className="space-y-1">
                  {folders.map((folder) => (
                    <button
                      key={folder.id}
                      onClick={() => setActiveFolder(folder.id)}
                      className={`w-full flex items-center justify-between px-3 py-2 rounded-lg text-sm transition-all ${
                        activeFolder === folder.id
                          ? 'bg-white/10 text-white'
                          : 'text-gray-400 hover:bg-white/5'
                      }`}
                    >
                      <div className="flex items-center gap-2">
                        {folder.icon}
                        <span>{folder.name}</span>
                      </div>
                      <span className="text-xs text-gray-500">{folder.count}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Notes List */}
              <div className="w-64 bg-white/5 border-r border-white/10 overflow-y-auto">
                <div className="p-3 border-b border-white/10">
                  <div className="text-sm font-medium text-white">{filteredProjects.length} Notes</div>
                </div>
                <div className="divide-y divide-white/10">
                  {filteredProjects.map((project) => (
                    <button
                      key={project.id}
                      onClick={() => setSelectedProject(project.id)}
                      className={`w-full p-4 text-left transition-all hover:bg-white/5 ${
                        selectedProject === project.id ? 'bg-white/10' : ''
                      }`}
                    >
                      <div className="flex items-start gap-3 mb-2">
                        {project.imageType === 'emoji' ? (
                          <span className="text-2xl">{project.image}</span>
                        ) : (
                          <div className="w-8 h-8 relative flex-shrink-0">
                            <Image
                              src={project.image}
                              alt={project.title}
                              fill
                              className="object-contain"
                            />
                          </div>
                        )}
                        <div className="flex-1 min-w-0">
                          <h4 className="text-sm font-medium text-white truncate mb-1">{project.title}</h4>
                          <p className="text-xs text-gray-400 line-clamp-2">{project.description}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-2 text-xs text-gray-500">
                        <Clock className="w-3 h-3" />
                        <span>{project.date}</span>
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Note Content */}
              <div className="flex-1 overflow-y-auto">
                {currentProject ? (
                  <div className="p-6">
                    {/* Note Header */}
                    <div className="mb-6">
                      <div className="flex items-start gap-4 mb-4">
                        {currentProject.imageType === 'emoji' ? (
                          <span className="text-5xl">{currentProject.image}</span>
                        ) : (
                          <div className="w-16 h-16 relative flex-shrink-0">
                            <Image
                              src={currentProject.image}
                              alt={currentProject.title}
                              fill
                              className="object-contain"
                            />
                          </div>
                        )}
                        <div className="flex-1">
                          <h3 className="text-2xl font-bold text-white mb-2">{currentProject.title}</h3>
                          <div className="flex items-center gap-2 text-sm text-gray-400 mb-3">
                            <Clock className="w-4 h-4" />
                            <span>{currentProject.date}</span>
                          </div>
                        </div>
                      </div>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-2 mb-4">
                        {currentProject.tags.map((tag, i) => (
                          <span
                            key={i}
                            className="px-3 py-1 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full text-xs text-gray-300"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Note Body */}
                    <div className="space-y-4 mb-6">
                      <div>
                        <h4 className="text-sm font-semibold text-gray-300 mb-2">Overview</h4>
                        <p className="text-gray-400 leading-relaxed">{currentProject.description}</p>
                      </div>

                      <div>
                        <h4 className="text-sm font-semibold text-gray-300 mb-2">Details</h4>
                        <p className="text-gray-400 leading-relaxed">{currentProject.content}</p>
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-3 pt-4 border-t border-white/10">
                      {currentProject.link && currentProject.link !== '#' && (
                        <a
                          href={currentProject.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 px-4 py-2.5 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg text-sm text-white text-center hover:bg-white/20 transition-all flex items-center justify-center gap-2"
                        >
                          <ExternalLink className="w-4 h-4" />
                          Live Demo
                        </a>
                      )}
                      {currentProject.github && (
                        <a
                          href={currentProject.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 px-4 py-2.5 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg text-sm text-white text-center hover:bg-white/20 transition-all flex items-center justify-center gap-2"
                        >
                          <Code className="w-4 h-4" />
                          GitHub
                        </a>
                      )}
                      {currentProject.figma && (
                        <a
                          href={currentProject.figma}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 px-4 py-2.5 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg text-sm text-white text-center hover:bg-white/20 transition-all flex items-center justify-center gap-2"
                        >
                          <Palette className="w-4 h-4" />
                          Figma
                        </a>
                      )}
                      {currentProject.pdf && (
                        <a
                          href={currentProject.pdf}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 px-4 py-2.5 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg text-sm text-white text-center hover:bg-white/20 transition-all flex items-center justify-center gap-2"
                        >
                          <FileText className="w-4 h-4" />
                          View PDF
                        </a>
                      )}
                    </div>
                  </div>
                ) : (
                  <div className="flex items-center justify-center h-full text-gray-500">
                    <div className="text-center">
                      <FolderOpen className="w-16 h-16 mx-auto mb-4 opacity-50" />
                      <p>Select a note to view</p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
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
    </section>
  );
}