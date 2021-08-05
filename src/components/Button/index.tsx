import { ButtonHTMLAttributes, ReactNode } from 'react';
import { Container } from './styles';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  typeButton?: 'primary' | 'secondary';
  children: ReactNode;
}

export function Button({
  typeButton = 'secondary',
  children,
  ...rest
}: ButtonProps) {
  return (
    <Container typeButton={typeButton} {...rest}>
      {children}
    </Container>
  );
}
