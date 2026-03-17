'use client';

import { PiHeartStraightFill } from 'react-icons/pi';
import { HiArrowUp } from 'react-icons/hi';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-border bg-bg-alt py-8">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-4 px-4 sm:px-6 lg:px-8">
        {/* Scroll to top button */}
        <button
          onClick={scrollToTop}
          className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-surface text-primary transition-colors hover:bg-primary hover:text-white"
          aria-label="Về đầu trang"
        >
          <HiArrowUp size={18} />
        </button>

        {/* Hashtag */}
        <p className="font-script text-2xl text-primary">#TuanHaWedding</p>

        {/* Made with love */}
        <p className="flex items-center gap-1.5 text-sm text-txt-muted">
          Made with
          <PiHeartStraightFill className="text-primary" />
        </p>

        {/* Copyright */}
        <p className="text-xs text-txt-muted" suppressHydrationWarning>
          &copy; {new Date().getFullYear()} All rights reserved.
        </p>
      </div>
    </footer>
  );
}
