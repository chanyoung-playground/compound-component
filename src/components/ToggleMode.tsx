import { useCallback } from 'react';
import { useRecoilState } from 'recoil';
import { Theme, themeMode } from '../recoil/themeAtom';

export default function ToggleMode() {
  const [theme, setTheme] = useRecoilState<Theme>(themeMode);

  const handleChangeTheme = useCallback((): void => {
    if (theme === 'DARK') {
      localStorage.setItem('theme', 'LIGHT');
      setTheme('LIGHT');
      return;
    }

    localStorage.setItem('theme', 'DARK');
    setTheme('DARK');
  }, [setTheme, theme]);

  return (
    <div onClick={handleChangeTheme}>
      <input type='checkbox' id='toggleBtn' />
      <label htmlFor='toggleBtn' />
      {theme === 'LIGHT' ? 'light' : 'dark'}
    </div>
  );
}
