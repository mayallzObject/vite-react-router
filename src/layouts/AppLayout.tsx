import NavBar from '../components/molecules/app_navbar/navbar';
import AppContent from '../components/molecules/app_content/content';
import AppFooter from '../components/molecules/app_footer/footer';

import { useTheme } from '../context/useTheme';

import { navBarItems } from '../components/molecules/app_navbar/items';

const AppLayout = () => {
  const { toggleTheme } = useTheme();

  return (
    <div id="app">
      <NavBar items={navBarItems} toggleTheme={toggleTheme} />
      <AppContent />
      <AppFooter />
    </div>
  );
};

export default AppLayout;
