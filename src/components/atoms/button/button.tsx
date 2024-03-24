import { NavLink } from 'react-router-dom';
import { ButtonUnionType, isPropsForNavLinkElement } from './types';

export const ButtonComponent = (props: ButtonUnionType) => {
  if (isPropsForNavLinkElement(props)) {
    return <NavLink {...props} />;
  } else {
    return <button {...props} />;
  }
};
ButtonComponent.displayName = 'Button';
