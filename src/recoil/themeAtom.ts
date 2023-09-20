import { atom } from 'recoil';

export type Theme = 'LIGHT' | 'DARK';

export const getTheme = (): Theme => {
  const theme = localStorage.getItem('theme');

  if (theme === 'DARK') {
    return 'DARK';
  }

  return 'LIGHT';
};

export const themeMode = atom<Theme>({
  key: 'themeMode',
  default: getTheme(),
});
