import { ArrowSquareOut } from '@phosphor-icons/react';
import { Button, ButtonIcon } from '../button';
import {
  handleShareLocationFirstDay,
  handleShareLocationSecondDay,
} from '@/utils/links-shared-locations';
import { Container, Location, Separator } from './styles';

export function ModalShareLocation() {
  return (
    <Container>
      <Location>
        <header>
          Sábado <span /> 18h30
        </header>

        <div>09 de Setembro de 2023</div>

        <p>
          Rua Nova Esperança, 64 - Vila São Judas Tadeu - Vargem Grande Paulista
        </p>

        <Button variant="secondary" onClick={handleShareLocationFirstDay}>
          Como chegar
          <ButtonIcon>
            <ArrowSquareOut size={24} />
          </ButtonIcon>
        </Button>
      </Location>

      <Separator />

      <Location>
        <header>
          Domingo <span /> 8h30
        </header>
        <div>10 de Setembro de 2023</div>

        <p>
          Rua Esperança, 241 - Jardim Vargem Grande - Vargem Grande Paulista
        </p>

        <Button variant="secondary" onClick={handleShareLocationSecondDay}>
          Como chegar
          <ButtonIcon>
            <ArrowSquareOut size={24} />
          </ButtonIcon>
        </Button>
      </Location>
    </Container>
  );
}
