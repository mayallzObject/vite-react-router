import { ButtonComponent } from '../../atoms/button/button';
import SwitchButton from '../../atoms/switchButton';

import { NavBarProps } from './types';

const NavBar = ({ items, toggleTheme }: NavBarProps) => (
  <nav className="navbar">
    {items.map(({ text, path }) => (
      <ButtonComponent
        key={text}
        to={path}
        className="navbar-item"
        end
      >
        {text}
      </ButtonComponent>
    ))}
    <SwitchButton
      variant="darkmode-toggle"
      onClick={toggleTheme}
      containerStyle="switch-button-container"
      sliderStyle="switch-button-slider"
    />
  </nav>
);

export default NavBar;
