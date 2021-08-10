import { ButtonHTMLAttributes, ReactNode } from 'react';
import { Container } from './styles';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  typeButton?: 'primary' | 'secondary';
  children: ReactNode;
  display?: string;
}

export function Button({
  typeButton = 'primary',
  display,
  children,
  ...rest
}: ButtonProps) {
  return (
    <Container typeButton={typeButton} display={display} {...rest}>
      {children}
    </Container>
  );
}
