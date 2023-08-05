import { ForwardRefRenderFunction, forwardRef } from 'react';
import { Container, ContainerIcon } from './styles';
import { ButtonComponentsProps, ButtonProps } from './types';

const ButtonComponent: ForwardRefRenderFunction<null, ButtonProps> = (
  { children, variant = 'primary', size = 'full', ...props },
  ref,
) => {
  return (
    <Container variant={variant} size={size} ref={ref} {...props}>
      {children}
    </Container>
  );
};

export function ButtonIcon({ children }: ButtonComponentsProps) {
  return <ContainerIcon>{children}</ContainerIcon>;
}

export const Button = forwardRef(ButtonComponent);
