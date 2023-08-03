import { Container } from './styles';
import { CardVolunteersProps } from './types';

export function CardVolunteers({
  children,
  title,
  ...props
}: CardVolunteersProps) {
  return (
    <Container {...props}>
      <strong>{title}</strong>
      {children}
    </Container>
  );
}
