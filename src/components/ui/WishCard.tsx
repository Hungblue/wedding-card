'use client';

import { useState, useEffect } from 'react';
import AnimatedSection from '@/components/ui/AnimatedSection';
import { Wish } from '@/types';
import { PiQuotesBold } from 'react-icons/pi';

function formatRelativeTime(timestamp: number): string {
  const now = Date.now();
  const diff = now - timestamp;
  const seconds = Math.floor(diff / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);

  if (seconds < 60) return 'vừa xong';
  if (minutes < 60) return `${minutes} phút trước`;
  if (hours < 24) return `${hours} giờ trước`;
  if (days < 30) return `${days} ngày trước`;
  return new Date(timestamp).toLocaleDateString('vi-VN');
}

export default function WishCard({ wish, index }: { wish: Wish; index: number }) {
  const [relativeTime, setRelativeTime] = useState('');

  useEffect(() => {
    setRelativeTime(formatRelativeTime(wish.timestamp));
  }, [wish.timestamp]);

  return (
    <AnimatedSection delay={0.08 * Math.min(index, 6)} direction="up">
      <div className="group relative h-full rounded-2xl border border-border bg-surface p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg sm:p-8">
        <div
          className="absolute right-4 top-4 opacity-10 transition-opacity duration-300 group-hover:opacity-20"
          style={{ color: 'var(--theme-primary)' }}
        >
          <PiQuotesBold className="text-4xl" />
        </div>

        <p className="font-body mb-4 text-sm leading-relaxed text-txt-light sm:text-base">
          &ldquo;{wish.message}&rdquo;
        </p>

        <div className="mb-3 h-[1px] w-10 bg-gradient-to-r from-primary-light to-transparent" />

        <div className="flex items-center justify-between">
          <p className="font-serif text-sm font-semibold text-txt sm:text-base">
            {wish.name}
          </p>
          {relativeTime && (
            <span className="font-body text-xs text-txt-muted">
              {relativeTime}
            </span>
          )}
        </div>
      </div>
    </AnimatedSection>
  );
}
