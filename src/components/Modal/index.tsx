import { ReactNode } from 'react';
import { FiX } from 'react-icons/fi';
import ReactModal from 'react-modal';
import { ModalHeader } from './styles';

interface ModalProps {
  isOpen: boolean;
  onCloseModal: () => void;
  children: ReactNode;
}

if (process.env.NODE_ENV !== 'test') ReactModal.setAppElement('#root');

export function Modal({ isOpen, onCloseModal, children }: ModalProps) {
  return (
    <ReactModal
      isOpen={isOpen}
      onRequestClose={onCloseModal}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <ModalHeader>
        <button onClick={onCloseModal}>
          <FiX />
        </button>
      </ModalHeader>
      {children}
    </ReactModal>
  );
}
