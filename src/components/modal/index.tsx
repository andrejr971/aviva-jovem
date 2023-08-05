import * as Dialog from '@radix-ui/react-dialog';
import { Container, Content, Overlay } from './styles';
import { useState } from 'react';
import { ModalProps } from './types';

export function Modal({ buttonTrigger, children }: ModalProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Dialog.Root open={isOpen} onOpenChange={setIsOpen}>
      <Dialog.Trigger asChild>{buttonTrigger}</Dialog.Trigger>
      <Dialog.Portal>
        <Overlay className={isOpen ? 'open' : 'close'} />
        <Container className={isOpen ? 'open' : 'close'}>
          <Content>{children}</Content>
        </Container>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
