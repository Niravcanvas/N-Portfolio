'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { X, ZoomIn, ChevronLeft, ChevronRight, Grid3x3, LayoutGrid, Maximize2 } from 'lucide-react';

interface GalleryImage {
  id: number;
  src: string;
  category: 'all' | 'portrait' | 'landscape' | 'abstract';
  title?: string;
}

const images: GalleryImage[] = [
  { id: 1, src: '/images/1.jpg', category: 'portrait', title: 'Image 1' },
  { id: 2, src: '/images/2.jpg', category: 'landscape', title: 'Image 2' },
  { id: 3, src: '/images/3.jpg', category: 'abstract', title: 'Image 3' },
  { id: 4, src: '/images/4.jpg', category: 'portrait', title: 'Image 4' },
  { id: 5, src: '/images/5.jpg', category: 'landscape', title: 'Image 5' },
  { id: 6, src: '/images/6.jpg', category: 'abstract', title: 'Image 6' },
  { id: 7, src: '/images/7.jpg', category: 'portrait', title: 'Image 7' },
  { id: 8, src: '/images/8.jpg', category: 'landscape', title: 'Image 8' },
  { id: 9, src: '/images/9.jpg', category: 'abstract', title: 'Image 9' },
  { id: 10, src: '/images/10.jpg', category: 'portrait', title: 'Image 10' },
  { id: 11, src: '/images/11.jpg', category: 'landscape', title: 'Image 11' },
  { id: 12, src: '/images/12.jpg', category: 'abstract', title: 'Image 12' },
  { id: 13, src: '/images/13.jpg', category: 'portrait', title: 'Image 13' },
];

type LayoutType = 'fixed-grid' | 'masonry' | 'compact';
type FilterType = 'all' | 'portrait' | 'landscape' | 'abstract';

export default function GalleryFixedGrid() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [filter, setFilter] = useState<FilterType>('all');
  const [layout, setLayout] = useState<LayoutType>('masonry');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const filteredImages = images.filter(img => 
    filter === 'all' || img.category === filter
  );

  const openLightbox = (id: number) => {
    setSelectedImage(id);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setSelectedImage(null);
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
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedImage]);

  const currentImageSrc = selectedImage 
    ? images.find(img => img.id === selectedImage)?.src 
    : null;

  const filters: { label: string; value: FilterType }[] = [
    { label: 'All', value: 'all' },
    { label: 'Portrait', value: 'portrait' },
    { label: 'Landscape', value: 'landscape' },
    { label: 'Abstract', value: 'abstract' },
  ];

  if (!mounted) return null;

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="border-b border-white/10 backdrop-blur-sm sticky top-0 z-40 bg-black/95">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold tracking-tight">Gallery</h1>
            <nav className="flex gap-8">
              <a href="/" className="hover:text-gray-400 transition-colors text-sm">
                Home
              </a>
              <a href="/about" className="hover:text-gray-400 transition-colors text-sm">
                About
              </a>
              <a href="/contact" className="hover:text-gray-400 transition-colors text-sm">
                Contact
              </a>
            </nav>
          </div>
        </div>
      </header>

      {/* Controls Bar */}
      <div className="border-b border-white/10 bg-black/50 backdrop-blur-sm sticky top-[73px] z-30">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between flex-wrap gap-4">
            {/* Filters */}
            <div className="flex gap-2">
              {filters.map((f) => (
                <button
                  key={f.value}
                  onClick={() => setFilter(f.value)}
                  className={`px-4 py-2 text-sm border transition-all duration-300 ${
                    filter === f.value
                      ? 'bg-white text-black border-white'
                      : 'bg-transparent text-white border-white/20 hover:border-white/50'
                  }`}
                >
                  {f.label}
                </button>
              ))}
            </div>

            {/* Layout Toggle */}
            <div className="flex gap-2">
              <button
                onClick={() => setLayout('fixed-grid')}
                className={`p-2 border transition-all duration-300 ${
                  layout === 'fixed-grid'
                    ? 'bg-white text-black border-white'
                    : 'bg-transparent text-white border-white/20 hover:border-white/50'
                }`}
                aria-label="Fixed grid layout"
                title="Fixed Grid - Same size tiles"
              >
                <Grid3x3 className="w-5 h-5" />
              </button>
              <button
                onClick={() => setLayout('compact')}
                className={`p-2 border transition-all duration-300 ${
                  layout === 'compact'
                    ? 'bg-white text-black border-white'
                    : 'bg-transparent text-white border-white/20 hover:border-white/50'
                }`}
                aria-label="Compact layout"
                title="Compact - Tight arrangement"
              >
                <LayoutGrid className="w-5 h-5" />
              </button>
              <button
                onClick={() => setLayout('masonry')}
                className={`p-2 border transition-all duration-300 ${
                  layout === 'masonry'
                    ? 'bg-white text-black border-white'
                    : 'bg-transparent text-white border-white/20 hover:border-white/50'
                }`}
                aria-label="Masonry layout"
                title="Masonry - Varied heights"
              >
                <Maximize2 className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Gallery Grid */}
      <main className="max-w-7xl mx-auto px-6 py-12">
        <div className="mb-6 text-sm text-gray-400">
          Showing {filteredImages.length} of {images.length} images
        </div>

        {/* FIXED GRID LAYOUT - All same size */}
        {layout === 'fixed-grid' && (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 auto-rows-auto">
            {filteredImages.map((image) => (
              <div
                key={image.id}
                className="relative aspect-square bg-white/5 overflow-hidden group cursor-pointer border border-white/10 hover:border-white/30 transition-all duration-300"
                onClick={() => openLightbox(image.id)}
              >
                <Image
                  src={image.src}
                  alt={image.title || `Gallery image ${image.id}`}
                  fill
                  className="object-cover grayscale hover:grayscale-0 transition-all duration-500 group-hover:scale-110"
                  sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, (max-width: 1024px) 25vw, 20vw"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300 flex items-center justify-center">
                  <ZoomIn className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 w-8 h-8" />
                </div>
              </div>
            ))}
          </div>
        )}

        {/* COMPACT LAYOUT - Tighter arrangement, same size */}
        {layout === 'compact' && (
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-2 auto-rows-auto">
            {filteredImages.map((image) => (
              <div
                key={image.id}
                className="relative aspect-square bg-white/5 overflow-hidden group cursor-pointer border border-white/10 hover:border-white/30 transition-all duration-300"
                onClick={() => openLightbox(image.id)}
              >
                <Image
                  src={image.src}
                  alt={image.title || `Gallery image ${image.id}`}
                  fill
                  className="object-cover grayscale hover:grayscale-0 transition-all duration-500 group-hover:scale-110"
                  sizes="(max-width: 640px) 33vw, (max-width: 768px) 25vw, (max-width: 1024px) 20vw, 16vw"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300 flex items-center justify-center">
                  <ZoomIn className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 w-6 h-6" />
                </div>
              </div>
            ))}
          </div>
        )}

        {/* MASONRY LAYOUT - Varied heights */}
        {layout === 'masonry' && (
          <div className="columns-2 sm:columns-3 md:columns-4 lg:columns-5 gap-4 space-y-4">
            {filteredImages.map((image, index) => (
              <div
                key={image.id}
                className="relative bg-white/5 overflow-hidden group cursor-pointer border border-white/10 hover:border-white/30 transition-all duration-300 break-inside-avoid"
                onClick={() => openLightbox(image.id)}
              >
                <div className="relative aspect-[3/4]">
                  <Image
                    src={image.src}
                    alt={image.title || `Gallery image ${image.id}`}
                    fill
                    className="object-cover grayscale hover:grayscale-0 transition-all duration-500 group-hover:scale-110"
                    sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, (max-width: 1024px) 25vw, 20vw"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300 flex items-center justify-center">
                    <ZoomIn className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 w-8 h-8" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </main>

      {/* Lightbox Modal */}
      {selectedImage !== null && currentImageSrc && (
        <div className="fixed inset-0 z-50 bg-black/95 backdrop-blur-sm flex items-center justify-center animate-in fade-in duration-300">
          {/* Close Button */}
          <button
            onClick={closeLightbox}
            className="absolute top-6 right-6 w-12 h-12 flex items-center justify-center border border-white/20 hover:border-white hover:bg-white/10 transition-all duration-300 z-50"
            aria-label="Close lightbox"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Previous Button */}
          <button
            onClick={prevImage}
            className="absolute left-6 w-12 h-12 flex items-center justify-center border border-white/20 hover:border-white hover:bg-white/10 transition-all duration-300 z-50"
            aria-label="Previous image"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Next Button */}
          <button
            onClick={nextImage}
            className="absolute right-6 w-12 h-12 flex items-center justify-center border border-white/20 hover:border-white hover:bg-white/10 transition-all duration-300 z-50"
            aria-label="Next image"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Image Container */}
          <div className="relative w-full h-full max-w-6xl max-h-[90vh] mx-auto px-20 py-12 flex items-center justify-center">
            <div className="relative w-full h-full animate-in zoom-in-50 duration-300">
              <Image
                src={currentImageSrc}
                alt={`Gallery image ${selectedImage}`}
                fill
                className="object-contain"
                sizes="90vw"
                priority
              />
            </div>
          </div>

          {/* Image Info & Counter */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-4">
            <div className="px-4 py-2 bg-white/10 border border-white/20 backdrop-blur-sm">
              <span className="text-sm font-mono">
                {filteredImages.findIndex(img => img.id === selectedImage) + 1} / {filteredImages.length}
              </span>
            </div>
            <div className="px-4 py-2 bg-white/10 border border-white/20 backdrop-blur-sm">
              <span className="text-sm">
                {images.find(img => img.id === selectedImage)?.category}
              </span>
            </div>
          </div>

          {/* Keyboard Hint */}
          <div className="absolute top-6 left-6 text-xs text-gray-400">
            <kbd className="px-2 py-1 bg-white/10 border border-white/20 rounded">ESC</kbd> to close
            {' • '}
            <kbd className="px-2 py-1 bg-white/10 border border-white/20 rounded">←</kbd>
            <kbd className="px-2 py-1 bg-white/10 border border-white/20 rounded">→</kbd> to navigate
          </div>
        </div>
      )}

    </div>
  );
}