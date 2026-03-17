'use client';

import dynamic from 'next/dynamic';
import { weddingData } from '@/config/wedding-data';

const ThemeSwitcher = dynamic(() => import('@/components/layout/ThemeSwitcher'), { ssr: false });
const ScrollToTop = dynamic(() => import('@/components/layout/ScrollToTop'), { ssr: false });
const MusicToggle = dynamic(() => import('@/components/ui/MusicToggle'), { ssr: false });
const FloatingElements = dynamic(() => import('@/components/ui/FloatingElements'), { ssr: false });

export default function ClientOverlays() {
  return (
    <>
      <FloatingElements />
      <ThemeSwitcher />
      <ScrollToTop />
      {weddingData.backgroundMusic && (
        <MusicToggle src={weddingData.backgroundMusic} />
      )}
    </>
  );
}
