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
      description:
        'Hardware troubleshooting, network configuration, and system maintenance.',
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
          <path
            fillRule="evenodd"
            d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z"
            clipRule="evenodd"
          />
        </svg>
      ),
      color: '#FFFFFF',
    },
    {
      role: 'UI/UX Design Intern',
      organization: 'IBM SkillsBuild',
      period: '2022',
      type: 'Virtual Internship',
      description:
        'Designed dashboards and product interfaces; applied UX research and interaction-design fundamentals to enterprise use cases.',
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
          <path
            fillRule="evenodd"
            d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z"
            clipRule="evenodd"
          />
        </svg>
      ),
      color: '#D1D5DB',
    },
    {
      role: 'Co-Founder & Creative Director',
      organization: 'Seven Hours Design Studio',
      period: 'Present',
      type: 'Entrepreneurship',
      description:
        'Creative direction and strategy; client projects, brand identities, and creative deliverables.',
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
          <path
            fillRule="evenodd"
            d="M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z"
            clipRule="evenodd"
          />
        </svg>
      ),
      color: '#9CA3AF',
    },
    {
      role: 'Core Creative Head',
      organization: 'Euforia',
      period: '2023-2024',
      type: 'Leadership',
      description:
        'Led creative initiatives and design teams for college events and campaigns.',
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
          <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
        </svg>
      ),
      color: '#6B7280',
    },
  ];

  const achievements: Achievement[] = [
    {
      title: 'ArtStation Community Challenges',
      event: 'Digital Art / Illustration',
      platform: 'ArtStation',
      year: '2023-2024',
      description:
        'Concept illustrations and compositions focused on storytelling and lighting.',
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
          <path
            fillRule="evenodd"
            d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z"
            clipRule="evenodd"
          />
        </svg>
      ),
      color: '#D1D5DB',
    },
    {
      title: 'DeviantArt Online Art Contests',
      event: 'Illustration & Concept Art',
      platform: 'DeviantArt',
      year: '2022-2023',
      description:
        'Original artwork for themed contests; explored abstract forms and styles.',
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
          <path
            fillRule="evenodd"
            d="M4 2a2 2 0 00-2 2v11a3 3 0 106 0V4a2 2 0 00-2-2H4zm1 14a1 1 0 100-2 1 1 0 000 2zm5-1.757l4.9-4.9a2 2 0 000-2.828L13.485 5.1a2 2 0 00-2.828 0L10 5.757v8.486zM16 18H9.071l6-6H16a2 2 0 012 2v2a2 2 0 01-2 2z"
            clipRule="evenodd"
          />
        </svg>
      ),
      color: '#9CA3AF',
    },
    {
      title: 'Daily Drawing Challenges',
      event: 'Freehand & Digital Drawing',
      platform: 'Instagram / Online Community',
      year: 'Ongoing',
      description:
        'Daily sketch prompts shared publicly with peer feedback.',
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
          <path
            fillRule="evenodd"
            d="M17.707 9.293a1 1 0 010 1.414l-7 7a1 1 0 01-1.414 0l-7-7A.997.997 0 012 10V5a3 3 0 013-3h5c.256 0 .512.098.707.293l7 7zM5 6a1 1 0 100-2 1 1 0 000 2z"
            clipRule="evenodd"
          />
        </svg>
      ),
      color: '#6B7280',
    },
  ];

  const allItems: TimelineItem[] = [
    ...experiences.map((exp) => ({
      ...exp,
      category: 'experience' as const,
      sortYear: exp.period === 'Present' ? '2024' : exp.period,
    })),
    ...achievements.map((ach) => ({
      ...ach,
      category: 'achievement' as const,
      sortYear: ach.year.split('-')[0],
    })),
  ].sort((a, b) => b.sortYear.localeCompare(a.sortYear));

  return (
    <section
      id="experience"
      className="min-h-screen bg-white py-16 md:py-20 lg:py-24 px-4"
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-8 text-center space-y-2 animate-fade-in">
          <h2
            className="font-bold text-black"
            style={{ fontSize: 'var(--text-h2)' }}
          >
            Experience & Achievements
          </h2>
          <p
            className="text-gray-600"
            style={{ fontSize: 'var(--text-body)' }}
          >
            My professional journey and accomplishments
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex justify-center gap-3 mb-8 flex-wrap">
          {[
            {
              id: 'timeline',
              label: 'Timeline',
              icon: (
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                    clipRule="evenodd"
                  />
                </svg>
              ),
            },
            {
              id: 'experience',
              label: 'Experience',
              icon: (
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                  <path
                    fillRule="evenodd"
                    d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z"
                    clipRule="evenodd"
                  />
                  <path d="M2 13.692V16a2 2 0 002 2h12a2 2 0 002-2v-2.308A24.974 24.974 0 0110 15c-2.796 0-5.487-.46-8-1.308z" />
                </svg>
              ),
            },
            {
              id: 'achievements',
              label: 'Achievements',
              icon: (
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ),
            },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-6 py-3 rounded-xl font-medium transition-all min-h-[44px] ${
                activeTab === tab.id
                  ? 'bg-black text-white'
                  : 'border border-black/15 text-gray-600 hover:text-black'
              }`}
            >
              <div className="flex items-center gap-2">
                {tab.icon}
                {tab.label}
              </div>
            </button>
          ))}
        </div>

        {/* Content Area */}
        <div className="animate-slide-up">
          {/* Timeline View */}
          {activeTab === 'timeline' && (
            <div className="relative">
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-black/15 hidden md:block" />

              <div className="space-y-8">
                {allItems.map((item, index) => (
                  <div key={index} className="relative pl-0 md:pl-20">
                    <div className="hidden md:block absolute left-6 top-6 w-5 h-5 rounded-full bg-black border-4 border-white" />

                    <div className="bg-white border border-black/10 hover:border-black/30 p-6 rounded-2xl transition-all">
                      <div className="flex flex-col sm:flex-row items-start gap-4">
                        <div className="w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0 bg-gray-50 border border-black/15 text-black">
                          {item.icon}
                        </div>

                        <div className="flex-1">
                          <div className="flex flex-col sm:flex-row items-start justify-between mb-3 gap-2">
                            <div>
                              <h4
                                className="font-bold text-black"
                                style={{ fontSize: 'var(--text-h4)' }}
                              >
                                {item.category === 'experience'
                                  ? item.role
                                  : item.title}
                              </h4>
                              <div className="text-sm text-gray-700 mt-1">
                                {item.category === 'experience'
                                  ? item.organization
                                  : item.event}
                              </div>
                              {item.platform && (
                                <div className="text-xs text-gray-600 mt-1 flex items-center gap-1">
                                  <svg
                                    className="w-3 h-3"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                    aria-hidden="true"
                                  >
                                    <path
                                      fillRule="evenodd"
                                      d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                                      clipRule="evenodd"
                                    />
                                  </svg>
                                  {item.platform}
                                </div>
                              )}
                            </div>
                            <div className="flex flex-row sm:flex-col items-start sm:items-end gap-2">
                              <span className="text-sm text-gray-600">
                                {item.category === 'experience'
                                  ? item.period
                                  : item.year}
                              </span>
                              <span className="text-xs px-3 py-1 rounded-full font-medium bg-white border border-black/10 text-gray-700">
                                {item.category === 'experience'
                                  ? item.type
                                  : 'Achievement'}
                              </span>
                            </div>
                          </div>
                          <p
                            className="text-gray-700"
                            style={{
                              lineHeight: 'var(--leading-relaxed)',
                              fontSize: 'var(--text-body)',
                            }}
                          >
                            {item.description}
                          </p>
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
                  className="bg-white border border-black/10 hover:border-black/30 p-6 rounded-2xl transition-all"
                >
                  <div className="flex flex-col sm:flex-row items-start gap-4">
                    <div className="w-16 h-16 rounded-xl flex items-center justify-center flex-shrink-0 bg-gray-50 border border-black/15 text-black">
                      {exp.icon}
                    </div>

                    <div className="flex-1">
                      <div className="flex flex-col sm:flex-row items-start justify-between mb-3 gap-2">
                        <div>
                          <h4
                            className="font-bold text-black"
                            style={{ fontSize: 'var(--text-h4)' }}
                          >
                            {exp.role}
                          </h4>
                          <div className="text-sm text-gray-700 mt-1">
                            {exp.organization}
                          </div>
                        </div>
                        <div className="flex flex-row sm:flex-col items-start sm:items-end gap-2">
                          <span className="text-sm text-gray-600">
                            {exp.period}
                          </span>
                          <span className="text-xs px-3 py-1 rounded-full font-medium bg-white border border-black/10 text-gray-700">
                            {exp.type}
                          </span>
                        </div>
                      </div>
                      <p
                        className="text-gray-700"
                        style={{
                          lineHeight: 'var(--leading-relaxed)',
                          fontSize: 'var(--text-body)',
                        }}
                      >
                        {exp.description}
                      </p>
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
                  className="bg-white border border-black/10 hover:border-black/30 p-6 rounded-2xl transition-all"
                >
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0 bg-gray-50 border border-black/15 text-black">
                      {achievement.icon}
                    </div>
                    <div className="flex-1">
                      <h4
                        className="font-bold text-black"
                        style={{ fontSize: 'var(--text-h4)' }}
                      >
                        {achievement.title}
                      </h4>
                      <div className="text-sm text-gray-700 mt-1">
                        {achievement.event}
                      </div>
                      {achievement.platform && (
                        <div className="text-xs text-gray-600 mt-1 flex items-center gap-1">
                          <svg
                            className="w-3 h-3"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            aria-hidden="true"
                          >
                            <path
                              fillRule="evenodd"
                              d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                              clipRule="evenodd"
                            />
                          </svg>
                          {achievement.platform}
                        </div>
                      )}
                    </div>
                    <span className="text-xs px-3 py-1 rounded-full font-medium flex-shrink-0 bg-white border border-black/10 text-gray-700">
                      {achievement.year}
                    </span>
                  </div>
                  <p
                    className="text-gray-700"
                    style={{
                      lineHeight: 'var(--leading-relaxed)',
                      fontSize: 'var(--text-body)',
                    }}
                  >
                    {achievement.description}
                  </p>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}