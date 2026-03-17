import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { ThemeName } from '@/types';
import { applyTheme } from '@/lib/themes';

interface ThemeStore {
  theme: ThemeName;
  setTheme: (theme: ThemeName) => void;
}

export const useThemeStore = create<ThemeStore>()(
  persist(
    (set) => ({
      theme: 'romantic',
      setTheme: (theme: ThemeName) => {
        applyTheme(theme);
        set({ theme });
      },
    }),
    {
      name: 'wedding-theme',
    }
  )
);
