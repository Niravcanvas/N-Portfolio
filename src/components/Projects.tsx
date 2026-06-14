'use client';

import { useState } from 'react';
import {
  FolderOpen,
  Star,
  Clock,
  Code,
  Palette,
  ExternalLink,
  FileText,
  ChevronDown,
} from 'lucide-react';
import Image from 'next/image';

interface Project {
  id: number;
  title: string;
  description: string;
  tags: string[];
  image: string;
  imageType: 'text' | 'svg' | 'png';
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
  const [activeFolder, setActiveFolder] = useState<
    'all' | 'development' | 'design' | 'favorites'
  >('all');
  const [expandedMobile, setExpandedMobile] = useState<number | null>(null);

  const projects: Project[] = [
    {
      id: 1,
      title: 'IndieAn',
      description:
        'A modern, gamified music-learning platform pairing AI-powered lessons with Trinity College curriculum standards. Stable, responsive front-end build with interactive gamification throughout.',
      tags: [
        'Next.js',
        'TypeScript',
        'Tailwind CSS',
        'Framer Motion',
        'Animations',
        'Responsive Design',
      ],
      image: '/images/Indiean.svg',
      imageType: 'svg',
      link: 'https://www.indiean.com/',
      github: '',
      category: 'development',
      date: 'Dec 20, 2025',
      content:
        'IndieAn website features a stable front-end build with responsive design across all devices. The platform integrates gamification elements to make music learning engaging and interactive, while maintaining professional standards aligned with Trinity College curriculum.',
    },
    {
      id: 3,
      title: 'Seven Vinyl Store',
      description:
        'Full brand identity for a music-and-lifestyle vinyl store — logo, palette, typography, and visual guidelines. Portfolio concept piece.',
      tags: ['Branding', 'Logo Design', 'Visual Identity', 'Music', 'Retail'],
      image: '/images/Sevenvinyl.svg',
      imageType: 'svg',
      link: '#',
      pdf: '/Docs/Seven Vinyl.pdf',
      category: 'favorites',
      date: 'Jan 20, 2026',
      content:
        'Complete brand identity design for Seven Vinyl Store, a music and lifestyle brand. This showcase project demonstrates expertise in brand strategy, logo design, typography, color theory, and visual identity systems. Created exclusively for portfolio purposes. © 2025 Seven Hours. All rights reserved.',
    },
    {
      id: 4,
      title: 'SYNC Fitness App',
      description:
        'UI/UX design for a fitness-tracking app: workout planning, progress and nutrition tracking, and social features, with a focus on engagement.',
      tags: ['Figma', 'UI/UX', 'Mobile Design', 'Fitness'],
      image: '/images/Sync.png',
      imageType: 'png',
      link: '#',
      figma: 'https://www.figma.com/design/PoIDqRCf8VTB9tpuYuqSa7/SYNC--Fitness-',
      category: 'design',
      date: 'Jan 8, 2026',
      content:
        'Complete UI/UX design for a fitness tracking application featuring workout planning, progress tracking, nutrition monitoring, and social features. Designed with a focus on user engagement and accessibility.',
    },
    {
      id: 5,
      title: 'Anders Design Portfolio',
      description:
        'An interior-design portfolio of residential and commercial work — clean layouts, mood boards, and detailed project presentations.',
      tags: ['Figma', 'UI/UX', 'Interior Design', 'Portfolio'],
      image: '/images/Anders.svg',
      imageType: 'svg',
      link: '#',
      figma: 'https://www.figma.com/design/Hd0ugG6oLaIax2aqwsCZGr/Interior',
      category: 'design',
      date: 'Dec 15, 2025',
      content:
        'A sophisticated interior design portfolio showcasing various residential and commercial projects. Features clean layouts, mood boards, and detailed project presentations with emphasis on modern design principles.',
    },
    {
      id: 6,
      title: 'Form & Form',
      description:
        'A complete design system: reusable components, type scale, color palettes, spacing, and design tokens for consistent output.',
      tags: ['Figma', 'Design System', 'UI Components', 'Branding'],
      image: '/images/F&F.svg',
      imageType: 'svg',
      link: '#',
      figma: 'https://www.figma.com/design/mH4P37A5Z39BxvwC9EAJys/F-F?node-id=0-1&t=etwyOv2m1dKCqm8e-1',
      category: 'design',
      date: 'Nov 30, 2025',
      content:
        'A complete design system featuring reusable components, typography scales, color palettes, spacing systems, and design tokens. Built to ensure consistency across all design projects.',
    },
    {
      id: 7,
      title: 'HackOverflow 4.0',
      description:
        'Official site for HackOverflow 4.0, a national-level hackathon by PHCET — responsive layout, scroll animations, and integrated registration.',
      tags: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
      image: '/images/Hackoverflow.png',
      imageType: 'png',
      link: 'https://hackoverflow4.tech',
      github: 'https://github.com/Niravcanvas/Hackoverflow',
      category: 'development',
      date: 'Jan 15, 2026',
      content:
        'Built with stunning animations and modern design. The website features a fully responsive layout, smooth scroll animations, dynamic content sections, and an integrated registration system. Implemented using Next.js 14 with TypeScript for type safety and Framer Motion for fluid animations.',
    },
    {
      id: 8,
      title: 'Cloud Kitchen POS',
      description:
        'A PHP point-of-sale and management system for cloud kitchens: inventory, orders, tables, staff, and sales reporting.',
      tags: [
        'PHP',
        'MySQL',
        'Bootstrap',
        'POS',
        'Restaurant Management',
      ],
      image: 'CK',
      imageType: 'text',
      link: 'https://github.com/Niravcanvas/Cloud-kitchen-POS',
      github: 'https://github.com/Niravcanvas/Cloud-kitchen-POS',
      category: 'development',
      date: 'Dec 28, 2025',
      content:
        'Full-featured POS system with inventory management, order tracking, table management, staff management, sales reporting, and customer management. Designed specifically for cloud kitchens with a focus on efficiency and ease of use.',
    },
    {
      id: 9,
      title: 'AI MCQ Generator',
      description:
        'An AI tool that generates multiple-choice questions from text or documents, exporting to multiple formats with adjustable difficulty.',
      tags: ['Python', 'AI', 'NLP', 'Machine Learning', 'Education'],
      image: 'AI',
      imageType: 'text',
      link: 'https://github.com/Niravcanvas/AI-mcq-Generator',
      github: 'https://github.com/Niravcanvas/AI-mcq-Generator',
      category: 'development',
      date: 'Nov 18, 2025',
      content:
        'Leverages advanced AI algorithms to automatically generate high-quality multiple-choice questions from any text input. Perfect for educators, trainers, and content creators. Supports multiple export formats and customizable difficulty levels.',
    },
  ];

  const filteredProjects = projects.filter(
    (project) => activeFolder === 'all' || project.category === activeFolder
  );

  const currentProject = projects.find((p) => p.id === selectedProject);

  const folders = [
    {
      name: 'All Projects',
      id: 'all' as const,
      icon: <FolderOpen className="w-4 h-4" aria-hidden="true" />,
      count: projects.length,
    },
    {
      name: 'Development',
      id: 'development' as const,
      icon: <Code className="w-4 h-4" aria-hidden="true" />,
      count: projects.filter((p) => p.category === 'development').length,
    },
    {
      name: 'Design',
      id: 'design' as const,
      icon: <Palette className="w-4 h-4" aria-hidden="true" />,
      count: projects.filter((p) => p.category === 'design').length,
    },
    {
      name: 'Favorites',
      id: 'favorites' as const,
      icon: <Star className="w-4 h-4" aria-hidden="true" />,
      count: projects.filter((p) => p.category === 'favorites').length,
    },
  ];

  const handleMobileProjectClick = (projectId: number) => {
    setExpandedMobile(expandedMobile === projectId ? null : projectId);
    setSelectedProject(projectId);
  };

  return (
    <section
      id="projects"
      className="min-h-screen py-16 md:py-20 lg:py-24 bg-white px-4"
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-8 text-center space-y-2 animate-fade-in">
          <div className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-full border border-black/10">
            <span className="text-sm text-gray-600">Notes.app</span>
          </div>
          <h2
            className="font-bold text-black"
            style={{ fontSize: 'var(--text-h2)' }}
          >
            Featured Projects
          </h2>
          <p
            className="text-gray-600"
            style={{ fontSize: 'var(--text-body)' }}
          >
            My work and creative projects
          </p>
        </div>

        {/* Notes Window */}
        <div className="animate-slide-up">
          <div className="bg-white border border-black/10 rounded-xl overflow-hidden">
            {/* Window Header */}
            <div className="bg-gray-50 px-4 py-3 flex items-center justify-between border-b border-black/10">
              <div className="flex items-center gap-3">
                <span className="text-sm text-gray-600">Projects</span>
              </div>
            </div>

            {/* Three Column Layout */}
            <div className="flex md:h-[600px] h-auto max-h-[70vh] md:max-h-none">
              {/* Folders Sidebar - Hidden on mobile */}
              <nav
                className="hidden md:block w-48 bg-gray-50 border-r border-black/10 p-3"
                aria-label="Project categories"
              >
                <div className="text-xs text-gray-500 uppercase tracking-wider mb-3 px-2">
                  Folders
                </div>
                <div className="space-y-1">
                  {folders.map((folder) => (
                    <button
                      key={folder.id}
                      onClick={() => setActiveFolder(folder.id)}
                      className={`w-full flex items-center justify-between px-3 py-2 rounded-lg text-sm transition-colors min-h-[44px] ${
                        activeFolder === folder.id
                          ? 'bg-black text-white'
                          : 'text-gray-600 hover:bg-gray-50'
                      }`}
                      aria-current={
                        activeFolder === folder.id ? 'true' : undefined
                      }
                    >
                      <div className="flex items-center gap-2">
                        {folder.icon}
                        <span>{folder.name}</span>
                      </div>
                      <span className="text-xs text-gray-500">
                        {folder.count}
                      </span>
                    </button>
                  ))}
                </div>
              </nav>

              {/* Notes List */}
              <div className="w-full md:w-64 bg-white border-r border-black/10 overflow-y-auto">
                <div className="p-3 border-b border-black/10">
                  <div className="text-sm font-medium text-black">
                    {filteredProjects.length} Notes
                  </div>
                </div>
                <div className="divide-y divide-black/10">
                  {filteredProjects.map((project) => (
                    <div key={project.id}>
                      {/* Project Header - Always Visible */}
                      <button
                        onClick={() => {
                          handleMobileProjectClick(project.id);
                        }}
                        className={`w-full p-4 text-left transition-colors hover:bg-gray-50 ${
                          selectedProject === project.id ? 'bg-gray-100' : ''
                        }`}
                      >
                        <div className="flex items-start gap-3 mb-2">
                          {project.imageType === 'text' ? (
                            <div className="w-8 h-8 flex items-center justify-center border border-black/10 rounded-md text-xs font-bold text-black flex-shrink-0">{project.image}</div>
                          ) : (
                            <div className="w-8 h-8 relative flex-shrink-0">
                              <Image
                                src={project.image}
                                alt={project.title}
                                fill
                                className="object-contain"
                                sizes="32px"
                              />
                            </div>
                          )}
                          <div className="flex-1 min-w-0">
                            <h4 className="text-sm font-medium text-black truncate mb-1">
                              {project.title}
                            </h4>
                            <p className="text-xs text-gray-600 line-clamp-2">
                              {project.description}
                            </p>
                          </div>
                          <ChevronDown
                            className={`w-4 h-4 text-gray-600 transition-transform md:hidden flex-shrink-0 ${
                              expandedMobile === project.id
                                ? 'rotate-180'
                                : ''
                            }`}
                            aria-hidden="true"
                          />
                        </div>
                        <div className="flex items-center gap-2 text-xs text-gray-500">
                          <Clock className="w-3 h-3" aria-hidden="true" />
                          <span>{project.date}</span>
                        </div>
                      </button>

                      {/* Expandable Content - Mobile Only */}
                      <div
                        className={`md:hidden overflow-hidden transition-all duration-300 ${
                          expandedMobile === project.id
                            ? 'max-h-[2000px] opacity-100'
                            : 'max-h-0 opacity-0'
                        }`}
                      >
                        <div className="px-4 pb-4 space-y-4 border-t border-black/10 pt-4">
                          {/* Tags */}
                          <div className="flex flex-wrap gap-2">
                            {project.tags.map((tag, i) => (
                              <span
                                key={`${project.id}-tag-${i}`}
                                className="px-2 py-1 border border-black/10 rounded-full text-xs text-gray-600"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>

                          {/* Overview */}
                          <div>
                            <h4 className="text-xs font-semibold text-black mb-1">
                              Overview
                            </h4>
                            <p className="text-xs text-gray-600 leading-relaxed">
                              {project.description}
                            </p>
                          </div>

                          {/* Details */}
                          <div>
                            <h4 className="text-xs font-semibold text-black mb-1">
                              Details
                            </h4>
                            <p className="text-xs text-gray-600 leading-relaxed">
                              {project.content}
                            </p>
                          </div>

                          {/* Action Buttons */}
                          <div className="grid grid-cols-2 gap-2">
                            {project.link && project.link !== '#' && (
                              <a
                                href={project.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="px-3 py-2 border border-black/15 rounded-lg text-xs text-black text-center hover:bg-black hover:text-white transition-colors flex items-center justify-center gap-1.5 min-h-[44px]"
                              >
                                <ExternalLink className="w-3 h-3" aria-hidden="true" />
                                Live Demo
                              </a>
                            )}
                            {project.github && (
                              <a
                                href={project.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="px-3 py-2 border border-black/15 rounded-lg text-xs text-black text-center hover:bg-black hover:text-white transition-colors flex items-center justify-center gap-1.5 min-h-[44px]"
                              >
                                <Code className="w-3 h-3" aria-hidden="true" />
                                GitHub
                              </a>
                            )}
                            {project.figma && (
                              <a
                                href={project.figma}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="px-3 py-2 border border-black/15 rounded-lg text-xs text-black text-center hover:bg-black hover:text-white transition-colors flex items-center justify-center gap-1.5 min-h-[44px]"
                              >
                                <Palette className="w-3 h-3" aria-hidden="true" />
                                Figma
                              </a>
                            )}
                            {project.pdf && (
                              <a
                                href={project.pdf}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="px-3 py-2 border border-black/15 rounded-lg text-xs text-black text-center hover:bg-black hover:text-white transition-colors flex items-center justify-center gap-1.5 min-h-[44px]"
                              >
                                <FileText className="w-3 h-3" aria-hidden="true" />
                                View PDF
                              </a>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Note Content - Desktop Only */}
              <div className="hidden md:block flex-1 overflow-y-auto">
                {currentProject ? (
                  <div className="p-6">
                    {/* Note Header */}
                    <div className="mb-6">
                      <div className="flex items-start gap-4 mb-4">
                        {currentProject.imageType === 'text' ? (
                          <div className="w-16 h-16 flex items-center justify-center border border-black/10 rounded-md text-xl font-bold text-black flex-shrink-0">{currentProject.image}</div>
                        ) : (
                          <div className="w-16 h-16 relative flex-shrink-0">
                            <Image
                              src={currentProject.image}
                              alt={currentProject.title}
                              fill
                              className="object-contain"
                              sizes="64px"
                            />
                          </div>
                        )}
                        <div className="flex-1">
                          <h3
                            className="font-bold text-black mb-2"
                            style={{ fontSize: 'var(--text-h3)' }}
                          >
                            {currentProject.title}
                          </h3>
                          <div className="flex items-center gap-2 text-sm text-gray-600 mb-3">
                            <Clock className="w-4 h-4" aria-hidden="true" />
                            <span>{currentProject.date}</span>
                          </div>
                        </div>
                      </div>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-2 mb-4">
                        {currentProject.tags.map((tag, i) => (
                          <span
                            key={`detail-tag-${i}`}
                            className="px-3 py-1 border border-black/10 rounded-full text-xs text-gray-600"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Note Body */}
                    <div className="space-y-4 mb-6">
                      <div>
                        <h4 className="text-sm font-semibold text-black mb-2">
                          Overview
                        </h4>
                        <p
                          className="text-gray-600"
                          style={{
                            lineHeight: 'var(--leading-relaxed)',
                            fontSize: 'var(--text-body)',
                          }}
                        >
                          {currentProject.description}
                        </p>
                      </div>

                      <div>
                        <h4 className="text-sm font-semibold text-black mb-2">
                          Details
                        </h4>
                        <p
                          className="text-gray-600"
                          style={{
                            lineHeight: 'var(--leading-relaxed)',
                            fontSize: 'var(--text-body)',
                          }}
                        >
                          {currentProject.content}
                        </p>
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-3 pt-4 border-t border-black/10">
                      {currentProject.link &&
                        currentProject.link !== '#' && (
                          <a
                            href={currentProject.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex-1 px-4 py-2.5 border border-black/15 rounded-lg text-sm text-black text-center hover:bg-black hover:text-white transition-colors flex items-center justify-center gap-2 min-h-[44px]"
                          >
                            <ExternalLink className="w-4 h-4" aria-hidden="true" />
                            Live Demo
                          </a>
                        )}
                      {currentProject.github && (
                        <a
                          href={currentProject.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 px-4 py-2.5 border border-black/15 rounded-lg text-sm text-black text-center hover:bg-black hover:text-white transition-colors flex items-center justify-center gap-2 min-h-[44px]"
                        >
                          <Code className="w-4 h-4" aria-hidden="true" />
                          GitHub
                        </a>
                      )}
                      {currentProject.figma && (
                        <a
                          href={currentProject.figma}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 px-4 py-2.5 border border-black/15 rounded-lg text-sm text-black text-center hover:bg-black hover:text-white transition-colors flex items-center justify-center gap-2 min-h-[44px]"
                        >
                          <Palette className="w-4 h-4" aria-hidden="true" />
                          Figma
                        </a>
                      )}
                      {currentProject.pdf && (
                        <a
                          href={currentProject.pdf}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 px-4 py-2.5 border border-black/15 rounded-lg text-sm text-black text-center hover:bg-black hover:text-white transition-colors flex items-center justify-center gap-2 min-h-[44px]"
                        >
                          <FileText className="w-4 h-4" aria-hidden="true" />
                          View PDF
                        </a>
                      )}
                    </div>
                  </div>
                ) : (
                  <div className="flex items-center justify-center h-full text-gray-500">
                    <div className="text-center">
                      <FolderOpen
                        className="w-16 h-16 mx-auto mb-4 opacity-50"
                        aria-hidden="true"
                      />
                      <p>Select a note to view</p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}