'use client';

import { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import { SkipBack, SkipForward, X } from 'lucide-react';

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

  const filteredImages = images.filter(
    (img) => filter === 'all' || img.category === filter
  );

  const openLightbox = useCallback((id: number) => {
    setSelectedImage(id);
    document.body.style.overflow = 'hidden';
  }, []);

  const closeLightbox = useCallback(() => {
    setSelectedImage(null);
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
    <section
      id="gallery"
      className="min-h-screen bg-white overflow-hidden py-16 md:py-20 lg:py-24 px-4"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8 text-center space-y-2">
          <h2
            className="font-bold text-black"
            style={{ fontSize: 'var(--text-h2)' }}
          >
            Gallery
          </h2>
          <p className="text-gray-600" style={{ fontSize: 'var(--text-body)' }}>
            Browse my creative collection
          </p>
        </div>

        {/* Gallery Window */}
        <div className="bg-white border border-black/10 overflow-hidden">
          {/* Navigation Tabs */}
          <div className="px-6 py-3 flex items-center gap-6 border-b border-black/10 overflow-x-auto">
            {playlists.map((playlist) => (
              <button
                key={playlist.id}
                onClick={() => setFilter(playlist.id)}
                className={`text-sm whitespace-nowrap transition-colors pb-2 border-b-2 min-h-[44px] flex items-end ${
                  filter === playlist.id
                    ? 'text-black border-black'
                    : 'text-gray-500 border-transparent hover:text-black'
                }`}
              >
                {playlist.name}
              </button>
            ))}
          </div>

          {/* Main Content */}
          <div className="p-6">
            <div className="mb-8">
              <h3
                className="font-bold text-black mb-4 capitalize"
                style={{ fontSize: 'var(--text-h3)' }}
              >
                Featured {filter === 'all' ? 'Works' : filter}
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                {filteredImages.map((image) => (
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
                    <div className="relative aspect-square bg-white overflow-hidden mb-3 border border-black/10 group-hover:border-black/30 transition-colors">
                      <Image
                        src={image.src}
                        alt={image.title}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 20vw"
                      />
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors flex items-center justify-center">
                        <span className="text-black text-2xl font-light opacity-0 group-hover:opacity-100 transition-opacity">
                          +
                        </span>
                      </div>
                    </div>
                    <h4 className="text-black font-medium mb-1 text-sm">
                      {image.title}
                    </h4>
                    <p className="text-xs text-gray-600">{image.subtitle}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Lightbox - Flat Monochrome Viewer */}
      {selectedImage !== null && currentImage && (
        <div
          className="fixed inset-0 z-50 bg-white text-black flex flex-col overflow-hidden"
          role="dialog"
          aria-modal="true"
          aria-label={`Viewing ${currentImage.title}`}
        >
          {/* Top Bar */}
          <div className="flex items-center justify-end px-6 py-4">
            <button
              onClick={closeLightbox}
              className="flex items-center gap-2 text-black hover:text-gray-600 transition-colors min-h-[44px]"
              aria-label="Close lightbox and return to library"
            >
              <X className="w-5 h-5" aria-hidden="true" />
              <span className="text-sm">Close</span>
            </button>
          </div>

          {/* Image */}
          <div className="flex-1 flex items-center justify-center px-8 py-8">
            <div className="w-full max-w-md aspect-square relative border border-black/10 overflow-hidden">
              <Image
                src={currentImage.src}
                alt={currentImage.title}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 90vw, 500px"
                priority
              />
            </div>
          </div>

          {/* Controls */}
          <div className="px-8 pb-8 max-w-2xl mx-auto w-full">
            {/* Track Info */}
            <div className="text-center mb-6">
              <h2 className="text-2xl font-bold text-black mb-1">
                {currentImage.title}
              </h2>
              <p className="text-gray-600">{currentImage.subtitle}</p>
            </div>

            {/* Position Counter */}
            <div className="flex justify-center text-xs text-gray-500 mb-6">
              <span>
                {filteredImages.findIndex((img) => img.id === selectedImage) +
                  1}{' '}
                / {filteredImages.length}
              </span>
            </div>

            {/* Prev / Next */}
            <div className="flex items-center justify-center gap-12">
              <button
                onClick={prevImage}
                className="text-black hover:text-gray-600 transition-colors min-h-[44px] min-w-[44px] flex items-center justify-center"
                aria-label="Previous image"
              >
                <SkipBack
                  className="w-8 h-8"
                  fill="currentColor"
                  aria-hidden="true"
                />
              </button>

              <button
                onClick={nextImage}
                className="text-black hover:text-gray-600 transition-colors min-h-[44px] min-w-[44px] flex items-center justify-center"
                aria-label="Next image"
              >
                <SkipForward
                  className="w-8 h-8"
                  fill="currentColor"
                  aria-hidden="true"
                />
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
