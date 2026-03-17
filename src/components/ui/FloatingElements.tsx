'use client';

import { useState, useEffect } from 'react';
import { useThemeStore } from '@/hooks/useTheme';
import { themes } from '@/lib/themes';

function Heart({ size, style }: { size: number; style: React.CSSProperties }) {
  return (
    <div
      className="animate-float absolute pointer-events-none"
      style={style}
    >
      <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="var(--theme-primary-light)"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
      </svg>
    </div>
  );
}

function Petal({ size, style, rotation }: { size: number; style: React.CSSProperties; rotation: number }) {
  return (
    <div
      className="animate-float-slow absolute pointer-events-none"
      style={style}
    >
      <div
        style={{
          width: size,
          height: size * 1.4,
          background: 'var(--theme-primary-light)',
          borderRadius: '50% 0 50% 0',
          opacity: 0.6,
          transform: `rotate(${rotation}deg)`,
        }}
      />
    </div>
  );
}

function Sparkle({ size, style }: { size: number; style: React.CSSProperties }) {
  return (
    <div
      className="animate-sparkle absolute pointer-events-none"
      style={style}
    >
      <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="var(--theme-secondary)"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M12 0l2.5 9.5L24 12l-9.5 2.5L12 24l-2.5-9.5L0 12l9.5-2.5z" />
      </svg>
    </div>
  );
}

interface FloatingItem {
  id: number;
  x: number;
  y: number;
  size: number;
  delay: number;
  opacity: number;
  rotation: number;
}

export default function FloatingElements() {
  const theme = useThemeStore((state) => state.theme);
  const floatingType = themes[theme].floatingElement;
  const [items, setItems] = useState<FloatingItem[]>([]);

  useEffect(() => {
    setItems(
      Array.from({ length: 15 }, (_, i) => ({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: 8 + Math.random() * 16,
        delay: Math.random() * 5,
        opacity: 0.15 + Math.random() * 0.35,
        rotation: Math.random() * 360,
      }))
    );
  }, []);

  if (items.length === 0) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      {items.map((item) => {
        const style: React.CSSProperties = {
          left: `${item.x}%`,
          top: `${item.y}%`,
          opacity: item.opacity,
          animationDelay: `${item.delay}s`,
        };

        switch (floatingType) {
          case 'hearts':
            return <Heart key={item.id} size={item.size} style={style} />;
          case 'petals':
            return <Petal key={item.id} size={item.size} style={style} rotation={item.rotation} />;
          case 'sparkles':
            return <Sparkle key={item.id} size={item.size} style={style} />;
          default:
            return null;
        }
      })}
    </div>
  );
}
