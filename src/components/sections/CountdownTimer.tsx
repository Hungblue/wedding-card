'use client';

import { useEffect, useRef, useState } from 'react';
import AnimatedSection from '@/components/ui/AnimatedSection';
import Divider from '@/components/ui/Divider';
import { weddingData } from '@/config/wedding-data';
import { useCountdown } from '@/hooks/useCountdown';
import { formatDate } from '@/lib/utils';

const { couple } = weddingData;

interface FlipUnitProps {
  value: number;
  label: string;
}

function FlipUnit({ value, label }: FlipUnitProps) {
  const prevValueRef = useRef<number>(value);
  const [flipping, setFlipping] = useState(false);

  useEffect(() => {
    if (prevValueRef.current !== value) {
      setFlipping(true);
      prevValueRef.current = value;

      const timer = setTimeout(() => {
        setFlipping(false);
      }, 600);

      return () => clearTimeout(timer);
    }
  }, [value]);

  return (
    <div className="flex flex-col items-center gap-2">
      <div className="flip-card">
        <div
          className={`flip-card-inner rounded-xl border border-border bg-surface px-4 py-5 shadow-lg sm:px-6 sm:py-6 md:px-8 md:py-7${
            flipping ? ' flipping' : ''
          }`}
        >
          <span className="font-serif text-4xl font-bold text-primary md:text-5xl">
            {String(value).padStart(2, '0')}
          </span>
        </div>
      </div>
      <span className="font-body text-xs font-medium uppercase tracking-widest text-txt-light sm:text-sm">
        {label}
      </span>
    </div>
  );
}

export default function CountdownTimer() {
  const { days, hours, minutes, seconds } = useCountdown(couple.weddingDate);

  return (
    <section id="countdown" className="relative overflow-hidden bg-bg-alt py-20 sm:py-28">
      {/* Subtle pattern overlay */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background: `radial-gradient(
            ellipse at 50% 0%,
            color-mix(in srgb, var(--theme-primary) 6%, transparent) 0%,
            transparent 60%
          ),
          radial-gradient(
            ellipse at 50% 100%,
            color-mix(in srgb, var(--theme-secondary) 5%, transparent) 0%,
            transparent 60%
          )`,
        }}
      />

      <div className="relative mx-auto max-w-4xl px-4 sm:px-6">
        {/* Section header */}
        <AnimatedSection className="mb-14 text-center">
          <p className="font-body mb-3 text-xs font-medium uppercase tracking-[0.3em] text-txt-muted">
            Save The Date
          </p>
          <h2 className="font-serif text-3xl font-bold text-txt sm:text-4xl md:text-5xl">
            Đếm Ngược
          </h2>
          <Divider className="py-6" />
          <p className="font-body mx-auto max-w-md text-sm leading-relaxed text-txt-light sm:text-base">
            Đếm ngược đến ngày trọng đại của chúng mình
          </p>
        </AnimatedSection>

        {/* Countdown boxes */}
        <AnimatedSection delay={0.2} className="flex items-center justify-center gap-3 sm:gap-5 md:gap-8">
          <FlipUnit value={days} label="Ngày" />
          <span className="font-serif mt-[-1.5rem] text-2xl text-primary-dark md:text-3xl">:</span>
          <FlipUnit value={hours} label="Giờ" />
          <span className="font-serif mt-[-1.5rem] text-2xl text-primary-dark md:text-3xl">:</span>
          <FlipUnit value={minutes} label="Phút" />
          <span className="font-serif mt-[-1.5rem] text-2xl text-primary-dark md:text-3xl">:</span>
          <FlipUnit value={seconds} label="Giây" />
        </AnimatedSection>

        {/* Wedding date display */}
        <AnimatedSection delay={0.4} className="mt-12 text-center">
          <div className="inline-flex items-center gap-3 rounded-full border border-border bg-surface px-6 py-3 shadow-sm">
            <svg
              className="h-4 w-4 text-primary"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
              <line x1="16" y1="2" x2="16" y2="6" />
              <line x1="8" y1="2" x2="8" y2="6" />
              <line x1="3" y1="10" x2="21" y2="10" />
            </svg>
            <span className="font-serif text-sm font-medium text-txt sm:text-base">
              {formatDate(couple.weddingDate)}
            </span>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
