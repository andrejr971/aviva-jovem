import { useState } from 'react';
import { FiX } from 'react-icons/fi';
import ReactModal from 'react-modal';
import { Container, ModalHeader } from './styles';

if (process.env.NODE_ENV !== 'test') ReactModal.setAppElement('#root');

export function ModalSchedule() {
  const [isOpen, setIsOpen] = useState(true);

  function onCloseModal() {
    setIsOpen(false);
  }

  return (
    <ReactModal
      isOpen={isOpen}
      onRequestClose={onCloseModal}
      overlayClassName="react-modal-overlay-banner"
      className="react-modal-content-banner"
    >
      <ModalHeader>
        <button onClick={onCloseModal}>
          <FiX />
        </button>
      </ModalHeader>
      <Container>
        <img
          src="/assets/images/banner.png"
          alt="Imagem Aviva jovem"
          className="desktop"
        />
        <img
          src="/assets/images/banner.jpeg"
          alt="Imagem Aviva jovem"
          className="mobile"
        />
      </Container>
    </ReactModal>
  );
}
