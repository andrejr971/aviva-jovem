import { ButtonHTMLAttributes } from 'react';
import { Container } from './styles';

interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  title: string;
  typeButton?: 'primary' | 'secondary';
  colorWhite?: boolean;
}

export function Button({
  title,
  typeButton = 'primary',
  colorWhite,
  ...rest
}: IButtonProps) {
  return (
    <Container typeButton={typeButton} colorWhite={colorWhite} {...rest}>
      {title}
    </Container>
  );
}
