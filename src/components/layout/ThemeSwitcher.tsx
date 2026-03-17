'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { IoColorPaletteOutline } from 'react-icons/io5';
import { useThemeStore } from '@/hooks/useTheme';
import { ThemeName } from '@/types';

interface ThemeOption {
  name: ThemeName;
  label: string;
  color: string;
}

const themeOptions: ThemeOption[] = [
  { name: 'romantic', label: 'Lãng mạn', color: '#d4a0a0' },
  { name: 'rustic', label: 'Mộc mạc', color: '#7d9a6e' },
  { name: 'traditional', label: 'Truyền thống', color: '#c41e3a' },
];

export default function ThemeSwitcher() {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, setTheme } = useThemeStore();

  const handleSelectTheme = (themeName: ThemeName) => {
    setTheme(themeName);
    setIsOpen(false);
  };

  return (
    <div className="fixed bottom-6 left-6 z-50 flex flex-col items-center gap-2">
      {/* Theme option dots */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 10 }}
            transition={{ duration: 0.2 }}
            className="flex flex-col items-center gap-2 rounded-full bg-surface/95 px-2 py-3 shadow-lg backdrop-blur-sm"
          >
            {themeOptions.map((option, index) => (
              <motion.div
                key={option.name}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0 }}
                transition={{ delay: index * 0.05 }}
                className="group relative"
              >
                <button
                  onClick={() => handleSelectTheme(option.name)}
                  className="flex h-8 w-8 items-center justify-center rounded-full transition-transform hover:scale-110"
                  style={{
                    backgroundColor: option.color,
                    boxShadow:
                      theme === option.name
                        ? `0 0 0 2px var(--theme-surface), 0 0 0 4px ${option.color}`
                        : undefined,
                  }}
                  aria-label={`Theme: ${option.label}`}
                />
                {/* Tooltip */}
                <span className="pointer-events-none absolute left-full top-1/2 ml-3 -translate-y-1/2 whitespace-nowrap rounded-md bg-txt px-2 py-1 text-xs text-surface opacity-0 shadow-sm transition-opacity group-hover:opacity-100">
                  {option.label}
                </span>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Toggle button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-white shadow-lg transition-colors hover:bg-primary-dark"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        animate={{ rotate: isOpen ? 180 : 0 }}
        transition={{ duration: 0.3 }}
        aria-label="Chọn theme"
      >
        <IoColorPaletteOutline size={22} />
      </motion.button>
    </div>
  );
}
