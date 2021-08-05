import { FiCalendar, FiMapPin, FiShare2 } from 'react-icons/fi';
import { Button } from '../Button';
import { Card, Container, GroupButton } from './styles';

export function Information() {
  return (
    <Container>
      <Card>
        <div>
          <FiCalendar />
        </div>

        <p>18 de Setembro de 2021, às 19h30</p>
      </Card>

      <Card>
        <div>
          <FiMapPin />
        </div>

        <p>Rua Nova Esperança, 64 - Jd. São Juda</p>
      </Card>

      <GroupButton>
        <Button type="button" typeButton="secondary">
          <FiShare2 />
          <span>Compartilhar</span>
        </Button>

        <Button type="button">
          <FiMapPin />
          <span>Como chegar</span>
        </Button>
      </GroupButton>
    </Container>
  );
}
