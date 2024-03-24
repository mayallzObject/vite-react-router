export interface NavigationItem {
  text: string;
  path: string;
}

export interface NavBarProps {
  items: NavigationItem[];
  toggleTheme: () => void;
}
