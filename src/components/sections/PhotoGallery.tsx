'use client';

import { useCallback, useState } from 'react';
import Image from 'next/image';
import AnimatedSection from '@/components/ui/AnimatedSection';
import Divider from '@/components/ui/Divider';
import Lightbox from '@/components/ui/Lightbox';
import { weddingData } from '@/config/wedding-data';

const { gallery } = weddingData;

export default function PhotoGallery() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openLightbox = (index: number) => {
    setCurrentIndex(index);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
  };

  const goToPrev = useCallback(() => {
    setCurrentIndex((prev) => (prev === 0 ? gallery.length - 1 : prev - 1));
  }, []);

  const goToNext = useCallback(() => {
    setCurrentIndex((prev) => (prev === gallery.length - 1 ? 0 : prev + 1));
  }, []);

  return (
    <section id="gallery" className="relative bg-bg py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* Section header */}
        <AnimatedSection className="mb-16 text-center">
          <p className="font-body mb-3 text-xs font-medium uppercase tracking-[0.3em] text-txt-muted">
            Our Moments
          </p>
          <h2 className="font-serif text-3xl font-bold text-txt sm:text-4xl md:text-5xl">
            Album Ảnh
          </h2>
          <Divider className="py-6" />
          <p className="font-body mx-auto max-w-md text-sm leading-relaxed text-txt-light sm:text-base">
            Những khoảnh khắc đáng nhớ trên hành trình tình yêu của chúng mình
          </p>
        </AnimatedSection>

        {/* Photo grid */}
        <div className="grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-3 lg:gap-5">
          {gallery.map((imagePath, index) => (
            <AnimatedSection
              key={index}
              delay={0.05 * index}
              direction="up"
            >
              <button
                type="button"
                className="group relative block w-full cursor-pointer overflow-hidden rounded-xl focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
                onClick={() => openLightbox(index)}
                aria-label={`Xem ảnh ${index + 1}`}
              >
                {/* Real image */}
                <div className="relative aspect-[3/4] w-full overflow-hidden">
                  <Image
                    src={imagePath}
                    alt={`Ảnh cưới ${index + 1}`}
                    fill
                    className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                    sizes="(max-width: 640px) 50vw, (max-width: 768px) 50vw, 33vw"
                  />
                </div>

                {/* Hover overlay */}
                <div className="absolute inset-0 flex items-center justify-center bg-black/0 transition-colors duration-300 group-hover:bg-black/30">
                  <div className="scale-0 transform rounded-full bg-white/90 p-3 shadow-lg transition-transform duration-300 group-hover:scale-100">
                    <svg
                      className="h-5 w-5 text-primary-dark"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <circle cx="11" cy="11" r="8" />
                      <line x1="21" y1="21" x2="16.65" y2="16.65" />
                      <line x1="11" y1="8" x2="11" y2="14" />
                      <line x1="8" y1="11" x2="14" y2="11" />
                    </svg>
                  </div>
                </div>
              </button>
            </AnimatedSection>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightboxOpen && (
        <Lightbox
          images={gallery}
          currentIndex={currentIndex}
          onClose={closeLightbox}
          onPrev={goToPrev}
          onNext={goToNext}
        />
      )}
    </section>
  );
}
