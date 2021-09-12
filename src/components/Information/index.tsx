import { FiCalendar, FiMapPin, FiShare2 } from 'react-icons/fi';
import { useAction } from '../../hooks/actions';
import { Button } from '../Button';
import { Card, Container, GroupButton } from './styles';

export function Information() {
  const { handleShare, handleShareLocation } = useAction();

  return (
    <Container>
      <Card>
        <div>
          <FiCalendar />
        </div>

        <p>18 de Setembro de 2021, às 19h00</p>
      </Card>

      <Card>
        <div>
          <FiMapPin />
        </div>

        <p>Rua Nova Esperança, 64 - Jd. São Judas</p>
      </Card>

      <GroupButton>
        <Button
          type="button"
          typeButton="secondary"
          onClick={handleShare}
          display="true"
        >
          <FiShare2 />
          <span>Compartilhar</span>
        </Button>

        <Button type="button" onClick={handleShareLocation} display="true">
          <FiMapPin />
          <span>Como chegar</span>
        </Button>
      </GroupButton>
    </Container>
  );
}
