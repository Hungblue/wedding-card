import { ThemeColors, ThemeName } from '@/types';

export const themes: Record<ThemeName, ThemeColors> = {
  romantic: {
    primary: '#d4a0a0',
    primaryLight: '#f0d4d4',
    primaryDark: '#b07878',
    secondary: '#c9a96e',
    secondaryLight: '#e8d5a8',
    accent: '#e8c4c4',
    background: '#fdf8f8',
    backgroundAlt: '#fff5f5',
    surface: '#ffffff',
    text: '#4a3333',
    textLight: '#6b5555',
    textMuted: '#9a8888',
    border: '#f0d4d4',
    overlay: 'rgba(212, 160, 160, 0.1)',
    gradient: 'linear-gradient(135deg, #fdf8f8 0%, #fff0f0 50%, #fdf8f8 100%)',
    gradientAlt: 'linear-gradient(135deg, #d4a0a0 0%, #c9a96e 100%)',
    floatingElement: 'hearts',
  },
  rustic: {
    primary: '#7d9a6e',
    primaryLight: '#c5d5b5',
    primaryDark: '#5a7a4a',
    secondary: '#c4a97d',
    secondaryLight: '#e5d5b8',
    accent: '#a8c490',
    background: '#faf8f5',
    backgroundAlt: '#f5f0e8',
    surface: '#ffffff',
    text: '#3a3a2e',
    textLight: '#5a5a4e',
    textMuted: '#8a8a7e',
    border: '#e0d8c8',
    overlay: 'rgba(125, 154, 110, 0.1)',
    gradient: 'linear-gradient(135deg, #faf8f5 0%, #f0ede5 50%, #faf8f5 100%)',
    gradientAlt: 'linear-gradient(135deg, #7d9a6e 0%, #c4a97d 100%)',
    floatingElement: 'petals',
  },
  traditional: {
    primary: '#c41e3a',
    primaryLight: '#e8a0a0',
    primaryDark: '#8b0000',
    secondary: '#d4a017',
    secondaryLight: '#f0d060',
    accent: '#ff6b6b',
    background: '#fffaf5',
    backgroundAlt: '#fff5ee',
    surface: '#ffffff',
    text: '#3a1a1a',
    textLight: '#5a3333',
    textMuted: '#8a6666',
    border: '#f0d0c0',
    overlay: 'rgba(196, 30, 58, 0.1)',
    gradient: 'linear-gradient(135deg, #fffaf5 0%, #fff0e8 50%, #fffaf5 100%)',
    gradientAlt: 'linear-gradient(135deg, #c41e3a 0%, #d4a017 100%)',
    floatingElement: 'sparkles',
  },
};

export function applyTheme(themeName: ThemeName) {
  const theme = themes[themeName];
  const root = document.documentElement;

  Object.entries(theme).forEach(([key, value]) => {
    if (key === 'floatingElement') return;
    const cssVar = `--theme-${key.replace(/([A-Z])/g, '-$1').toLowerCase()}`;
    root.style.setProperty(cssVar, value);
  });

  root.setAttribute('data-theme', themeName);
}
