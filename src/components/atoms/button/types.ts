import { ComponentPropsWithoutRef } from 'react';
import { NavLinkProps } from 'react-router-dom';

export interface ButtonComponentProps
  extends ComponentPropsWithoutRef<'button'> {
  icon?: string;
}
export interface NavLinkButtonProps extends NavLinkProps {
  icon?: string;
}
export type ButtonUnionType =
  | ButtonComponentProps
  | NavLinkButtonProps;

export function isPropsForNavLinkElement(
  props: ButtonUnionType
): props is NavLinkButtonProps {
  return 'to' in props;
}
