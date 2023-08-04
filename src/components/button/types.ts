import { ButtonHTMLAttributes, ReactNode } from 'react';

export type VariantButton = 'primary' | 'secondary' | 'tertiary';

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode;
  variant?: VariantButton;
  size?: 'full' | 'medium' | 'small';
};

export type ButtonComponentsProps = {
  children: ReactNode;
};
