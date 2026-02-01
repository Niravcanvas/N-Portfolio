'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { X, ChevronLeft, ChevronRight, Play, Pause, SkipBack, SkipForward, Volume2, Repeat, Shuffle, Heart, MoreHorizontal } from 'lucide-react';

interface GalleryImage {
  id: number;
  src: string;
  category: 'all' | 'portfolio' | 'photography' | 'design' | 'art';
  title: string;
  subtitle?: string;
  year?: string;
}

const images: GalleryImage[] = [
  { id: 1, src: '/images/1.jpg', category: 'portfolio', title: 'Project Alpha', subtitle: 'Web Design', year: '2024' },
  { id: 2, src: '/images/2.jpg', category: 'photography', title: 'Urban Landscapes', subtitle: 'Photography Series', year: '2024' },
  { id: 3, src: '/images/3.jpg', category: 'design', title: 'Brand Identity', subtitle: 'Visual Design', year: '2023' },
  { id: 4, src: '/images/4.jpg', category: 'art', title: 'Digital Art', subtitle: 'Illustration', year: '2024' },
  { id: 5, src: '/images/5.jpg', category: 'portfolio', title: 'Project Beta', subtitle: 'UI/UX Design', year: '2024' },
  { id: 6, src: '/images/6.jpg', category: 'photography', title: 'Portraits', subtitle: 'Photography Series', year: '2023' },
  { id: 7, src: '/images/7.jpg', category: 'design', title: 'Poster Design', subtitle: 'Print Design', year: '2024' },
  { id: 8, src: '/images/8.jpg', category: 'art', title: 'Abstract Work', subtitle: 'Digital Art', year: '2023' },
  { id: 9, src: '/images/9.jpg', category: 'portfolio', title: 'Project Gamma', subtitle: 'Full Stack Dev', year: '2024' },
  { id: 10, src: '/images/10.jpg', category: 'photography', title: 'Nature', subtitle: 'Photography', year: '2024' },
  { id: 11, src: '/images/11.jpg', category: 'design', title: 'Logo Design', subtitle: 'Branding', year: '2023' },
  { id: 12, src: '/images/12.jpg', category: 'art', title: 'Concept Art', subtitle: 'Illustration', year: '2024' },
  { id: 13, src: '/images/13.jpg', category: 'portfolio', title: 'Project Delta', subtitle: 'Mobile App', year: '2024' },
];

type FilterType = 'all' | 'portfolio' | 'photography' | 'design' | 'art';

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [filter, setFilter] = useState<FilterType>('all');
  const [mounted, setMounted] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const filteredImages = images.filter(img => 
    filter === 'all' || img.category === filter
  );

  const openLightbox = (id: number) => {
    setSelectedImage(id);
    setIsPlaying(true);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setSelectedImage(null);
    setIsPlaying(false);
    document.body.style.overflow = 'unset';
  };

  const nextImage = () => {
    if (selectedImage === null) return;
    const currentIndex = filteredImages.findIndex(img => img.id === selectedImage);
    const nextIndex = (currentIndex + 1) % filteredImages.length;
    setSelectedImage(filteredImages[nextIndex].id);
  };

  const prevImage = () => {
    if (selectedImage === null) return;
    const currentIndex = filteredImages.findIndex(img => img.id === selectedImage);
    const prevIndex = (currentIndex - 1 + filteredImages.length) % filteredImages.length;
    setSelectedImage(filteredImages[prevIndex].id);
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedImage === null) return;
      
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowRight') nextImage();
      if (e.key === 'ArrowLeft') prevImage();
      if (e.key === ' ') {
        e.preventDefault();
        setIsPlaying(!isPlaying);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedImage, isPlaying]);

  const currentImage = selectedImage 
    ? images.find(img => img.id === selectedImage)
    : null;

  const playlists = [
    { name: 'All Works', id: 'all' as FilterType, count: images.length },
    { name: 'Portfolio', id: 'portfolio' as FilterType, count: images.filter(i => i.category === 'portfolio').length },
    { name: 'Photography', id: 'photography' as FilterType, count: images.filter(i => i.category === 'photography').length },
    { name: 'Design', id: 'design' as FilterType, count: images.filter(i => i.category === 'design').length },
    { name: 'Art', id: 'art' as FilterType, count: images.filter(i => i.category === 'art').length },
  ];

  if (!mounted) return null;

  return (
    <div className="min-h-screen bg-black relative overflow-hidden py-20 px-4">
      {/* Floating orbs background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-20 w-72 h-72 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-white/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-white/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/3 right-1/4 w-48 h-48 bg-white/8 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '3s' }}></div>
        <div className="absolute bottom-1/3 left-1/4 w-56 h-56 bg-white/6 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1.5s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="mb-8 text-center space-y-2 animate-fade-in">
          <div className="inline-flex items-center gap-2 bg-white/5 backdrop-blur-sm px-4 py-2 rounded-full border border-white/10">
            <div className="flex gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500 hover:bg-red-400 transition-colors cursor-pointer"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500 hover:bg-yellow-400 transition-colors cursor-pointer"></div>
              <div className="w-3 h-3 rounded-full bg-green-500 hover:bg-green-400 transition-colors cursor-pointer"></div>
            </div>
            <span className="text-sm text-gray-400 ml-2">Music.app</span>
          </div>
          <h2 className="text-4xl font-bold text-white">
            Gallery
          </h2>
          <p className="text-gray-400">Browse my creative collection</p>
        </div>

        {/* Music Window */}
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
                <span className="text-sm text-gray-400">Library</span>
              </div>
            </div>

            {/* Navigation Tabs */}
            <div className="bg-white/5 backdrop-blur-sm px-6 py-3 flex items-center gap-6 border-b border-white/10 overflow-x-auto">
              {playlists.map((playlist) => (
                <button
                  key={playlist.id}
                  onClick={() => setFilter(playlist.id)}
                  className={`text-sm whitespace-nowrap transition-all pb-2 border-b-2 ${
                    filter === playlist.id
                      ? 'text-white border-white'
                      : 'text-gray-400 border-transparent hover:text-gray-300'
                  }`}
                >
                  {playlist.name}
                </button>
              ))}
            </div>

            {/* Main Content */}
            <div className="p-6">
              {/* Featured/Hero Section - Show only 5 items */}
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-white mb-4 capitalize">Featured {filter === 'all' ? 'Works' : filter}</h3>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                  {filteredImages.slice(0, 5).map((image) => (
                    <div
                      key={image.id}
                      className="group cursor-pointer"
                      onClick={() => openLightbox(image.id)}
                    >
                      <div className="relative aspect-square bg-white/5 overflow-hidden mb-3 hover:scale-105 transition-transform duration-300">
                        <Image
                          src={image.src}
                          alt={image.title}
                          fill
                          className="object-cover"
                          sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 20vw"
                        />
                        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                          <div className="w-12 h-12 rounded-full bg-white/90 flex items-center justify-center">
                            <Play className="w-6 h-6 text-black ml-1" fill="black" />
                          </div>
                        </div>
                      </div>
                      <h4 className="text-white font-medium mb-1 text-sm">{image.title}</h4>
                      <p className="text-xs text-gray-400">{image.subtitle}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Now Playing - Apple Music Style - Monochrome */}
      {selectedImage !== null && currentImage && (
        <div className="fixed inset-0 z-50 bg-black flex flex-col animate-in fade-in duration-300 overflow-hidden">
          {/* Animated dark grey orbs background */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-1/4 -left-32 w-96 h-96 bg-gray-800/20 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-1/3 -right-32 w-[500px] h-[500px] bg-gray-700/15 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
            <div className="absolute top-1/2 left-1/3 w-80 h-80 bg-gray-600/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
            <div className="absolute bottom-1/4 left-1/4 w-72 h-72 bg-gray-800/15 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1.5s' }}></div>
            <div className="absolute top-1/3 right-1/3 w-64 h-64 bg-gray-700/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2.5s' }}></div>
          </div>

          {/* Top Bar */}
          <div className="flex items-center justify-between px-6 py-4 relative z-10">
            <button
              onClick={closeLightbox}
              className="flex items-center gap-2 text-white hover:text-gray-400 transition-colors"
            >
              <ChevronLeft className="w-5 h-5" />
              <span className="text-sm">Library</span>
            </button>

            <div className="flex items-center gap-4">
              <button className="p-2 text-white hover:text-gray-400 transition-colors">
                <MoreHorizontal className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Album Art */}
          <div className="flex-1 flex items-center justify-center px-8 py-8 relative z-10">
            <div className="w-full max-w-md aspect-square relative shadow-2xl">
              <Image
                src={currentImage.src}
                alt={currentImage.title}
                fill
                className="object-cover grayscale"
                sizes="(max-width: 768px) 90vw, 500px"
                priority
              />
            </div>
          </div>

          {/* Player Controls */}
          <div className="px-8 pb-8 max-w-2xl mx-auto w-full relative z-10">
            {/* Track Info */}
            <div className="text-center mb-6">
              <h2 className="text-2xl font-bold text-white mb-1">{currentImage.title}</h2>
              <p className="text-gray-400">{currentImage.subtitle}</p>
            </div>

            {/* Progress Bar */}
            <div className="mb-6">
              <div className="h-1 bg-gray-700 rounded-full overflow-hidden mb-2">
                <div className="h-full bg-gray-300 w-1/3"></div>
              </div>
              <div className="flex justify-between text-xs text-gray-500">
                <span>{filteredImages.findIndex(img => img.id === selectedImage) + 1}</span>
                <span>{filteredImages.length}</span>
              </div>
            </div>

            {/* Control Buttons */}
            <div className="flex items-center justify-center gap-8 mb-6">
              <button className="text-gray-500 hover:text-gray-300 transition-colors">
                <Shuffle className="w-5 h-5" />
              </button>
              
              <button 
                onClick={prevImage}
                className="text-gray-300 hover:text-white transition-colors"
              >
                <SkipBack className="w-8 h-8" fill="currentColor" />
              </button>

              <button
                onClick={() => setIsPlaying(!isPlaying)}
                className="w-16 h-16 rounded-full bg-gray-200 hover:bg-white hover:scale-105 transition-all flex items-center justify-center"
              >
                {isPlaying ? (
                  <Pause className="w-8 h-8 text-black" fill="black" />
                ) : (
                  <Play className="w-8 h-8 text-black ml-1" fill="black" />
                )}
              </button>

              <button 
                onClick={nextImage}
                className="text-gray-300 hover:text-white transition-colors"
              >
                <SkipForward className="w-8 h-8" fill="currentColor" />
              </button>

              <button className="text-gray-500 hover:text-gray-300 transition-colors">
                <Repeat className="w-5 h-5" />
              </button>
            </div>

            {/* Volume & Additional Controls */}
            <div className="flex items-center justify-between">
              <button className="text-gray-500 hover:text-gray-300 transition-colors">
                <Heart className="w-5 h-5" />
              </button>

              <div className="flex items-center gap-3 flex-1 max-w-xs mx-8">
                <Volume2 className="w-5 h-5 text-gray-500" />
                <div className="flex-1 h-1 bg-gray-700 rounded-full overflow-hidden">
                  <div className="h-full bg-gray-300 w-2/3"></div>
                </div>
              </div>

              <button className="text-gray-500 hover:text-gray-300 transition-colors">
                <MoreHorizontal className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      )}

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