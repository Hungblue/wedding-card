'use client';

import { useEffect } from 'react';
import { useThemeStore } from '@/hooks/useTheme';
import { applyTheme } from '@/lib/themes';

export default function ThemeProvider({ children }: { children: React.ReactNode }) {
  const theme = useThemeStore((state) => state.theme);

  useEffect(() => {
    applyTheme(theme);
  }, [theme]);

  return <>{children}</>;
}
