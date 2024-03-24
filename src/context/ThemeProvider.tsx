import { useState, useLayoutEffect, ReactNode } from 'react';

import { ThemeContext } from './ThemeContext';

interface ThemeProviderProps {
  children: ReactNode;
}

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
  const [theme, setTheme] = useState<string | null>(
    () => localStorage.getItem('theme') || ''
  );

  useLayoutEffect(() => {
    localStorage.setItem('theme', theme || '');
    if (theme === 'light') {
      document?.getElementById('root')?.classList.add('light');
      document?.getElementById('root')?.classList.remove('dark');
    } else {
      document?.getElementById('root')?.classList.add('dark');
      document?.getElementById('root')?.classList.remove('light');
    }
  }, [theme]);

  const toggleTheme = () =>
    setTheme((theme) => (theme === 'light' ? 'dark' : 'light'));

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
