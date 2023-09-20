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
  }, ['DARK', 'LIGHT', setTheme, theme]);

  return (
    <div onClick={handleChangeTheme}>
      <input type='checkbox' id='toggleBtn' />
      <label htmlFor='toggleBtn' />
      {theme === 'LIGHT' ? 'light' : 'dark'}
    </div>
  );
}

// display: flex;
// justify-content: center;
// align-items: center;

// border: 2px solid black
// color: var(--yellow);
// border-radius: 15px;
// font-size: 2rem;
// cursor: pointer;
// transition: all 0.15s ease-in-out;
