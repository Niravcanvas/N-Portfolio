'use client';
import { JSX, useState } from 'react';

interface Experience {
  role: string;
  organization: string;
  period: string;
  type: string;
  description: string;
  icon: JSX.Element;
  color: string;
}

interface Achievement {
  title: string;
  event: string;
  platform?: string;
  year: string;
  description: string;
  icon: JSX.Element;
  color: string;
}

interface TimelineItem extends Partial<Experience>, Partial<Achievement> {
  category: 'experience' | 'achievement';
  sortYear: string;
}

export default function Achievements() {
  const [activeTab, setActiveTab] = useState('timeline');

  const experiences: Experience[] = [
    {
      role: 'Hardware and Networking Intern',
      organization: 'Quasco',
      period: '2023',
      type: 'Internship',
      description: 'Gained hands-on experience in hardware troubleshooting, network configuration, and system maintenance.',
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
        </svg>
      ),
      color: '#FFFFFF'
    },
    {
      role: 'UI/UX Design Intern',
      organization: 'IBM SkillsBuild',
      period: '2022',
      type: 'Virtual Internship',
      description: 'Designed dashboards and product interfaces for business use cases. Applied UX research principles and interaction design fundamentals. Delivered structured design solutions aligned with enterprise needs.',
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
        </svg>
      ),
      color: '#D1D5DB'
    },
    {
      role: 'Co-Founder & Creative Director',
      organization: 'Seven Hours Design Studio',
      period: 'Present',
      type: 'Entrepreneurship',
      description: 'Leading creative direction and strategic vision for a design studio. Managing client projects, brand identities, and creative deliverables.',
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z" clipRule="evenodd" />
        </svg>
      ),
      color: '#9CA3AF'
    },
    {
      role: 'Core Creative Head',
      organization: 'Euforia',
      period: '2023-2024',
      type: 'Leadership',
      description: 'Led creative initiatives and managed design teams for college events and campaigns. Oversaw visual branding and promotional materials.',
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
          <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
        </svg>
      ),
      color: '#6B7280'
    },
  ];

  const achievements: Achievement[] = [
    {
      title: 'ArtStation Community Challenges',
      event: 'Digital Art / Illustration',
      platform: 'ArtStation',
      year: '2023-2024',
      description: 'Participated in community-driven digital art challenges. Created concept illustrations and visual compositions. Focused on storytelling, lighting, and composition.',
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
        </svg>
      ),
      color: '#D1D5DB'
    },
    {
      title: 'DeviantArt Online Art Contests',
      event: 'Illustration & Concept Art',
      platform: 'DeviantArt',
      year: '2022-2023',
      description: 'Submitted original artwork for themed online contests. Explored creative concepts, abstract forms, and visual styles. Engaged with a global creative community.',
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M4 2a2 2 0 00-2 2v11a3 3 0 106 0V4a2 2 0 00-2-2H4zm1 14a1 1 0 100-2 1 1 0 000 2zm5-1.757l4.9-4.9a2 2 0 000-2.828L13.485 5.1a2 2 0 00-2.828 0L10 5.757v8.486zM16 18H9.071l6-6H16a2 2 0 012 2v2a2 2 0 01-2 2z" clipRule="evenodd" />
        </svg>
      ),
      color: '#9CA3AF'
    },
    {
      title: 'Daily Drawing Challenges',
      event: 'Freehand & Digital Drawing',
      platform: 'Instagram / Online Community',
      year: 'Ongoing',
      description: 'Participated in online drawing challenges and daily sketch prompts. Shared creative work publicly and received peer feedback.',
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M17.707 9.293a1 1 0 010 1.414l-7 7a1 1 0 01-1.414 0l-7-7A.997.997 0 012 10V5a3 3 0 013-3h5c.256 0 .512.098.707.293l7 7zM5 6a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
        </svg>
      ),
      color: '#6B7280'
    },
  ];

  const allItems: TimelineItem[] = [
    ...experiences.map(exp => ({ 
      ...exp, 
      category: 'experience' as const, 
      sortYear: exp.period === 'Present' ? '2024' : exp.period 
    })),
    ...achievements.map(ach => ({ 
      ...ach, 
      category: 'achievement' as const, 
      sortYear: ach.year.split('-')[0] 
    }))
  ].sort((a, b) => b.sortYear.localeCompare(a.sortYear));

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
        {/* Keynote-style Header */}
        <div className="mb-8 text-center space-y-2 animate-fade-in">
          <div className="inline-flex items-center gap-2 bg-white/5 backdrop-blur-sm px-4 py-2 rounded-full border border-white/10">
            <div className="flex gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500 hover:bg-red-400 transition-colors cursor-pointer"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500 hover:bg-yellow-400 transition-colors cursor-pointer"></div>
              <div className="w-3 h-3 rounded-full bg-green-500 hover:bg-green-400 transition-colors cursor-pointer"></div>
            </div>
            <span className="text-sm text-gray-400 ml-2">Keynote.app</span>
          </div>
          <h2 className="text-4xl font-bold text-white">
            Experience & Achievements
          </h2>
          <p className="text-gray-400">My professional journey and accomplishments</p>
        </div>

        {/* Tab Navigation - Keynote Style */}
        <div className="flex justify-center gap-3 mb-8">
          <button
            onClick={() => setActiveTab('timeline')}
            className={`px-6 py-3 rounded-xl font-medium transition-all ${
              activeTab === 'timeline'
                ? 'bg-gradient-to-r from-gray-600 to-gray-500 text-white shadow-lg shadow-gray-500/30'
                : 'bg-white/5 backdrop-blur-sm text-gray-400 hover:bg-white/10 border border-white/10'
            }`}
          >
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
              </svg>
              Timeline
            </div>
          </button>
          <button
            onClick={() => setActiveTab('experience')}
            className={`px-6 py-3 rounded-xl font-medium transition-all ${
              activeTab === 'experience'
                ? 'bg-gradient-to-r from-gray-600 to-gray-500 text-white shadow-lg shadow-gray-500/30'
                : 'bg-white/5 backdrop-blur-sm text-gray-400 hover:bg-white/10 border border-white/10'
            }`}
          >
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z" clipRule="evenodd" />
                <path d="M2 13.692V16a2 2 0 002 2h12a2 2 0 002-2v-2.308A24.974 24.974 0 0110 15c-2.796 0-5.487-.46-8-1.308z" />
              </svg>
              Experience
            </div>
          </button>
          <button
            onClick={() => setActiveTab('achievements')}
            className={`px-6 py-3 rounded-xl font-medium transition-all ${
              activeTab === 'achievements'
                ? 'bg-gradient-to-r from-gray-600 to-gray-500 text-white shadow-lg shadow-gray-500/30'
                : 'bg-white/5 backdrop-blur-sm text-gray-400 hover:bg-white/10 border border-white/10'
            }`}
          >
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              Achievements
            </div>
          </button>
        </div>

        {/* Content Area */}
        <div className="animate-slide-up">
          {/* Timeline View */}
          {activeTab === 'timeline' && (
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-gray-400 via-gray-500 to-gray-600 hidden md:block"></div>

              <div className="space-y-8">
                {allItems.map((item, index) => (
                  <div key={index} className="relative pl-0 md:pl-20">
                    {/* Timeline Dot */}
                    <div 
                      className="hidden md:block absolute left-6 top-6 w-5 h-5 rounded-full border-4 border-black"
                      style={{ backgroundColor: item.color }}
                    ></div>

                    {/* Card */}
                    <div 
                      className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl p-6 rounded-2xl border border-white/20 hover:border-white/40 transition-all hover:scale-[1.02] shadow-xl"
                      style={{ animationDelay: `${index * 100}ms` }}
                    >
                      <div className="flex items-start gap-4">
                        {/* Icon */}
                        <div 
                          className="w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg"
                          style={{ 
                            backgroundColor: `${item.color}30`,
                            border: `2px solid ${item.color}60`,
                            boxShadow: `0 0 20px ${item.color}30`,
                            color: item.color
                          }}
                        >
                          {item.icon}
                        </div>

                        {/* Content */}
                        <div className="flex-1">
                          <div className="flex items-start justify-between mb-3">
                            <div>
                              <h4 className="text-lg font-bold text-white">
                                {item.category === 'experience' ? item.role : item.title}
                              </h4>
                              <div className="text-sm text-gray-300 mt-1">
                                {item.category === 'experience' ? item.organization : item.event}
                              </div>
                              {item.platform && (
                                <div className="text-xs text-gray-400 mt-1 flex items-center gap-1">
                                  <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                                  </svg>
                                  {item.platform}
                                </div>
                              )}
                            </div>
                            <div className="flex flex-col items-end gap-2">
                              <span className="text-sm text-gray-400">
                                {item.category === 'experience' ? item.period : item.year}
                              </span>
                              <span 
                                className="text-xs px-3 py-1 rounded-full font-medium bg-white/10 text-gray-300"
                              >
                                {item.category === 'experience' ? item.type : 'Achievement'}
                              </span>
                            </div>
                          </div>
                          <p className="text-gray-300 leading-relaxed">{item.description}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Experience Grid View */}
          {activeTab === 'experience' && (
            <div className="space-y-6">
              {experiences.map((exp, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl p-6 rounded-2xl border border-white/20 hover:border-white/40 transition-all hover:scale-[1.02] shadow-xl"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="flex items-start gap-4">
                    <div 
                      className="w-16 h-16 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg"
                      style={{ 
                        backgroundColor: `${exp.color}30`,
                        border: `2px solid ${exp.color}60`,
                        boxShadow: `0 0 20px ${exp.color}30`,
                        color: exp.color
                      }}
                    >
                      {exp.icon}
                    </div>
                    
                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-3">
                        <div>
                          <h4 className="text-xl font-bold text-white">{exp.role}</h4>
                          <div className="text-sm text-gray-300 mt-1">{exp.organization}</div>
                        </div>
                        <div className="flex flex-col items-end gap-2">
                          <span className="text-sm text-gray-400">{exp.period}</span>
                          <span className="text-xs px-3 py-1 rounded-full font-medium bg-white/10 text-gray-300">
                            {exp.type}
                          </span>
                        </div>
                      </div>
                      <p className="text-gray-300 leading-relaxed">{exp.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Achievements Grid View */}
          {activeTab === 'achievements' && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {achievements.map((achievement, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl p-6 rounded-2xl border border-white/20 hover:border-white/40 transition-all hover:scale-[1.02] shadow-xl"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="flex items-start gap-4 mb-4">
                    <div 
                      className="w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg"
                      style={{ 
                        backgroundColor: `${achievement.color}30`,
                        border: `2px solid ${achievement.color}60`,
                        boxShadow: `0 0 20px ${achievement.color}30`,
                        color: achievement.color
                      }}
                    >
                      {achievement.icon}
                    </div>
                    <div className="flex-1">
                      <h4 className="text-lg font-bold text-white">{achievement.title}</h4>
                      <div className="text-sm text-gray-300 mt-1">{achievement.event}</div>
                      {achievement.platform && (
                        <div className="text-xs text-gray-400 mt-1 flex items-center gap-1">
                          <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                          </svg>
                          {achievement.platform}
                        </div>
                      )}
                    </div>
                    <span className="text-xs px-3 py-1 rounded-full font-medium flex-shrink-0 bg-white/10 text-gray-300">
                      {achievement.year}
                    </span>
                  </div>
                  <p className="text-gray-300 leading-relaxed">{achievement.description}</p>
                </div>
              ))}
            </div>
          )}
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
    </div>
  );
}