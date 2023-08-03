import { Container, Description, Information } from './styles';
import { Button } from '@/components/button';
import { CardProps } from './types';

export function Card({
  address,
  button,
  date,
  header,
  monthAndYear,
}: CardProps) {
  return (
    <Container>
      <Description>
        <Information>
          <p>{header}</p>

          <div>
            <strong>{date}</strong>
            <span>{monthAndYear}</span>
          </div>

          <p>{address}</p>
        </Information>

        <Button variant="secondary" onClick={button.onClick}>
          {button.children}
        </Button>
      </Description>
    </Container>
  );
}
