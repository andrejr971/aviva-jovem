import { useAction } from '../../hooks/actions';
import { Button } from '../Button';
import { Modal } from '../Modal';
import { Container } from './styles';

interface IModalShareLocationProps {
  isOpen: boolean;
  onCloseModal: () => void;
}

export function ModalShareLocation({
  isOpen = false,
  onCloseModal,
}: IModalShareLocationProps) {
  const { handleShareLocationFirstDay, handleShareLocationSecondDay } =
    useAction();

  return (
    <Modal isOpen={isOpen} onCloseModal={onCloseModal}>
      <Container>
        <header>
          Sábado <span /> 19h00
        </header>

        <div>28 de Maio de 2022</div>

        <p>
          Rua Nova Esperança, 64 - Jardim São Judas - Vargem Grande Paulista
        </p>

        <Button title="Como chegar" onClick={handleShareLocationFirstDay} />
      </Container>
      <Container>
        <header>
          Domingo <span /> 8h30
        </header>
        <div>29 de Maio de 2022</div>

        <p>
          Rua Esperança, 241 - Jardim Vargem Grande - Vargem Grande Paulista
        </p>

        <Button title="Como chegar" onClick={handleShareLocationSecondDay} />
      </Container>
    </Modal>
  );
}
