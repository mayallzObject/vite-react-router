import { createContext } from 'react';

interface IThemeContext {
  theme: string | null;
  toggleTheme: () => void;
}

export const ThemeContext = createContext<IThemeContext>({
  theme: null,
  toggleTheme: () => void {},
});
