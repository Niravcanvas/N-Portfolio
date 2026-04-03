'use client';

import { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import {
  Play,
  Pause,
  SkipBack,
  SkipForward,
  Volume2,
  Repeat,
  Shuffle,
  Heart,
  MoreHorizontal,
  ChevronLeft,
} from 'lucide-react';

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
  const [isPlaying, setIsPlaying] = useState(false);



  const filteredImages = images.filter(
    (img) => filter === 'all' || img.category === filter
  );

  const openLightbox = useCallback((id: number) => {
    setSelectedImage(id);
    setIsPlaying(true);
    document.body.style.overflow = 'hidden';
  }, []);

  const closeLightbox = useCallback(() => {
    setSelectedImage(null);
    setIsPlaying(false);
    document.body.style.overflow = 'unset';
  }, []);

  const nextImage = useCallback(() => {
    setSelectedImage((prev) => {
      if (prev === null) return null;
      const currentIndex = filteredImages.findIndex((img) => img.id === prev);
      const nextIndex = (currentIndex + 1) % filteredImages.length;
      return filteredImages[nextIndex].id;
    });
  }, [filteredImages]);

  const prevImage = useCallback(() => {
    setSelectedImage((prev) => {
      if (prev === null) return null;
      const currentIndex = filteredImages.findIndex((img) => img.id === prev);
      const prevIndex =
        (currentIndex - 1 + filteredImages.length) % filteredImages.length;
      return filteredImages[prevIndex].id;
    });
  }, [filteredImages]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedImage === null) return;

      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowRight') nextImage();
      if (e.key === 'ArrowLeft') prevImage();
      if (e.key === ' ') {
        e.preventDefault();
        setIsPlaying((prev) => !prev);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedImage, closeLightbox, nextImage, prevImage]);

  const currentImage = selectedImage
    ? images.find((img) => img.id === selectedImage)
    : null;

  const playlists = [
    { name: 'All Works', id: 'all' as FilterType, count: images.length },
    {
      name: 'Portfolio',
      id: 'portfolio' as FilterType,
      count: images.filter((i) => i.category === 'portfolio').length,
    },
    {
      name: 'Photography',
      id: 'photography' as FilterType,
      count: images.filter((i) => i.category === 'photography').length,
    },
    {
      name: 'Design',
      id: 'design' as FilterType,
      count: images.filter((i) => i.category === 'design').length,
    },
    {
      name: 'Art',
      id: 'art' as FilterType,
      count: images.filter((i) => i.category === 'art').length,
    },
  ];

  return (
    <div className="min-h-screen bg-black relative overflow-hidden py-16 md:py-20 lg:py-24 px-4">
      {/* Floating orbs background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-20 w-72 h-72 bg-white/10 rounded-full blur-3xl animate-pulse" />
        <div
          className="absolute bottom-1/4 -right-20 w-96 h-96 bg-white/5 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: '1s' }}
        />
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-white/5 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: '2s' }}
        />
        <div
          className="absolute top-1/3 right-1/4 w-48 h-48 bg-white/[0.08] rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: '3s' }}
        />
        <div
          className="absolute bottom-1/3 left-1/4 w-56 h-56 bg-white/[0.06] rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: '1.5s' }}
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="mb-8 text-center space-y-2 animate-fade-in">
          <div className="inline-flex items-center gap-2 bg-white/5 backdrop-blur-sm px-4 py-2 rounded-full border border-white/10">
            <div className="flex gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500" />
              <div className="w-3 h-3 rounded-full bg-yellow-500" />
              <div className="w-3 h-3 rounded-full bg-green-500" />
            </div>
            <span className="text-sm text-gray-400 ml-2">Music.app</span>
          </div>
          <h2
            className="font-bold text-white"
            style={{ fontSize: 'var(--text-h2)' }}
          >
            Gallery
          </h2>
          <p className="text-gray-400" style={{ fontSize: 'var(--text-body)' }}>
            Browse my creative collection
          </p>
        </div>

        {/* Music Window */}
        <div className="animate-slide-up">
          <div className="bg-black/90 backdrop-blur-xl border border-white/10 rounded-xl overflow-hidden shadow-2xl">
            {/* Window Header */}
            <div className="bg-white/5 backdrop-blur-sm px-4 py-3 flex items-center justify-between border-b border-white/10">
              <div className="flex items-center gap-3">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500" />
                  <div className="w-3 h-3 rounded-full bg-green-500" />
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
                  className={`text-sm whitespace-nowrap transition-all pb-2 border-b-2 min-h-[44px] flex items-end ${
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
                <h3
                  className="font-bold text-white mb-4 capitalize"
                  style={{ fontSize: 'var(--text-h3)' }}
                >
                  Featured {filter === 'all' ? 'Works' : filter}
                </h3>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                  {filteredImages.slice(0, 5).map((image) => (
                    <div
                      key={image.id}
                      className="group cursor-pointer"
                      onClick={() => openLightbox(image.id)}
                      role="button"
                      tabIndex={0}
                      aria-label={`View ${image.title}`}
                      onKeyDown={(e) => {
                        if (e.key === 'Enter' || e.key === ' ') {
                          e.preventDefault();
                          openLightbox(image.id);
                        }
                      }}
                    >
                      <div className="relative aspect-square bg-white/5 overflow-hidden mb-3 hover:scale-105 transition-transform duration-300 rounded-lg">
                        <Image
                          src={image.src}
                          alt={image.title}
                          fill
                          className="object-cover"
                          sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 20vw"
                        />
                        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                          <div className="w-12 h-12 rounded-full bg-white/90 flex items-center justify-center">
                            <Play
                              className="w-6 h-6 text-black ml-1"
                              fill="black"
                              aria-hidden="true"
                            />
                          </div>
                        </div>
                      </div>
                      <h4 className="text-white font-medium mb-1 text-sm">
                        {image.title}
                      </h4>
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
        <div
          className="fixed inset-0 z-50 bg-black flex flex-col overflow-hidden"
          role="dialog"
          aria-modal="true"
          aria-label={`Viewing ${currentImage.title}`}
        >
          {/* Animated dark grey orbs background */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-1/4 -left-32 w-96 h-96 bg-gray-800/20 rounded-full blur-3xl animate-pulse" />
            <div
              className="absolute bottom-1/3 -right-32 w-[500px] h-[500px] bg-gray-700/15 rounded-full blur-3xl animate-pulse"
              style={{ animationDelay: '1s' }}
            />
            <div
              className="absolute top-1/2 left-1/3 w-80 h-80 bg-gray-600/10 rounded-full blur-3xl animate-pulse"
              style={{ animationDelay: '2s' }}
            />
            <div
              className="absolute bottom-1/4 left-1/4 w-72 h-72 bg-gray-800/15 rounded-full blur-3xl animate-pulse"
              style={{ animationDelay: '1.5s' }}
            />
            <div
              className="absolute top-1/3 right-1/3 w-64 h-64 bg-gray-700/10 rounded-full blur-3xl animate-pulse"
              style={{ animationDelay: '2.5s' }}
            />
          </div>

          {/* Top Bar */}
          <div className="flex items-center justify-between px-6 py-4 relative z-10">
            <button
              onClick={closeLightbox}
              className="flex items-center gap-2 text-white hover:text-gray-400 transition-colors min-h-[44px]"
              aria-label="Close lightbox and return to library"
            >
              <ChevronLeft className="w-5 h-5" aria-hidden="true" />
              <span className="text-sm">Library</span>
            </button>

            <div className="flex items-center gap-4">
              <button
                className="p-2 text-white hover:text-gray-400 transition-colors min-h-[44px] min-w-[44px] flex items-center justify-center"
                aria-label="More options"
              >
                <MoreHorizontal className="w-5 h-5" aria-hidden="true" />
              </button>
            </div>
          </div>

          {/* Album Art */}
          <div className="flex-1 flex items-center justify-center px-8 py-8 relative z-10">
            <div className="w-full max-w-md aspect-square relative shadow-2xl rounded-lg overflow-hidden">
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
              <h2 className="text-2xl font-bold text-white mb-1">
                {currentImage.title}
              </h2>
              <p className="text-gray-400">{currentImage.subtitle}</p>
            </div>

            {/* Progress Bar */}
            <div className="mb-6">
              <div className="h-1 bg-gray-700 rounded-full overflow-hidden mb-2">
                <div className="h-full bg-gray-300 w-1/3" />
              </div>
              <div className="flex justify-between text-xs text-gray-500">
                <span>
                  {filteredImages.findIndex(
                    (img) => img.id === selectedImage
                  ) + 1}
                </span>
                <span>{filteredImages.length}</span>
              </div>
            </div>

            {/* Control Buttons */}
            <div className="flex items-center justify-center gap-8 mb-6">
              <button
                className="text-gray-500 hover:text-gray-300 transition-colors min-h-[44px] min-w-[44px] flex items-center justify-center"
                aria-label="Shuffle"
              >
                <Shuffle className="w-5 h-5" aria-hidden="true" />
              </button>

              <button
                onClick={prevImage}
                className="text-gray-300 hover:text-white transition-colors min-h-[44px] min-w-[44px] flex items-center justify-center"
                aria-label="Previous image"
              >
                <SkipBack
                  className="w-8 h-8"
                  fill="currentColor"
                  aria-hidden="true"
                />
              </button>

              <button
                onClick={() => setIsPlaying(!isPlaying)}
                className="w-16 h-16 rounded-full bg-gray-200 hover:bg-white hover:scale-105 transition-all flex items-center justify-center"
                aria-label={isPlaying ? 'Pause' : 'Play'}
              >
                {isPlaying ? (
                  <Pause
                    className="w-8 h-8 text-black"
                    fill="black"
                    aria-hidden="true"
                  />
                ) : (
                  <Play
                    className="w-8 h-8 text-black ml-1"
                    fill="black"
                    aria-hidden="true"
                  />
                )}
              </button>

              <button
                onClick={nextImage}
                className="text-gray-300 hover:text-white transition-colors min-h-[44px] min-w-[44px] flex items-center justify-center"
                aria-label="Next image"
              >
                <SkipForward
                  className="w-8 h-8"
                  fill="currentColor"
                  aria-hidden="true"
                />
              </button>

              <button
                className="text-gray-500 hover:text-gray-300 transition-colors min-h-[44px] min-w-[44px] flex items-center justify-center"
                aria-label="Repeat"
              >
                <Repeat className="w-5 h-5" aria-hidden="true" />
              </button>
            </div>

            {/* Volume & Additional Controls */}
            <div className="flex items-center justify-between">
              <button
                className="text-gray-500 hover:text-gray-300 transition-colors min-h-[44px] min-w-[44px] flex items-center justify-center"
                aria-label="Like"
              >
                <Heart className="w-5 h-5" aria-hidden="true" />
              </button>

              <div className="flex items-center gap-3 flex-1 max-w-xs mx-8">
                <Volume2
                  className="w-5 h-5 text-gray-500"
                  aria-hidden="true"
                />
                <div className="flex-1 h-1 bg-gray-700 rounded-full overflow-hidden">
                  <div className="h-full bg-gray-300 w-2/3" />
                </div>
              </div>

              <button
                className="text-gray-500 hover:text-gray-300 transition-colors min-h-[44px] min-w-[44px] flex items-center justify-center"
                aria-label="More options"
              >
                <MoreHorizontal className="w-5 h-5" aria-hidden="true" />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}