'use client';

import { useRef, useState, useEffect, useCallback } from 'react';
import { IoMusicalNotes } from 'react-icons/io5';

interface MusicToggleProps {
  src: string;
}

export default function MusicToggle({ src }: MusicToggleProps) {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const audio = new Audio(src);
    audio.loop = true;
    audio.volume = 0.3;
    audioRef.current = audio;

    return () => {
      audio.pause();
      audio.src = '';
    };
  }, [src]);

  const toggle = useCallback(() => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isPlaying) {
      audio.pause();
      setIsPlaying(false);
    } else {
      audio.play().then(() => {
        setIsPlaying(true);
      }).catch(() => {
        // Autoplay blocked by browser; user interaction needed
        setIsPlaying(false);
      });
    }
  }, [isPlaying]);

  return (
    <button
      onClick={toggle}
      className="fixed bottom-6 right-6 z-50 flex h-12 w-12 items-center justify-center rounded-full bg-primary text-white shadow-lg transition-transform hover:scale-110 active:scale-95"
      aria-label={isPlaying ? 'Pause background music' : 'Play background music'}
    >
      <IoMusicalNotes
        size={22}
        className={isPlaying ? 'animate-spin' : ''}
        style={isPlaying ? { animationDuration: '2s' } : undefined}
      />
    </button>
  );
}
