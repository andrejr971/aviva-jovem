import { Container, ContainerIcon } from './styles';
import { ButtonComponentsProps, ButtonProps } from './types';

export function Button({
  children,
  variant = 'primary',
  size = 'full',
  ...props
}: ButtonProps) {
  return (
    <Container variant={variant} size={size} {...props}>
      {children}
    </Container>
  );
}

export function ButtonIcon({ children }: ButtonComponentsProps) {
  return <ContainerIcon>{children}</ContainerIcon>;
}
