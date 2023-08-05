import { MapPin, ShareNetwork } from '@phosphor-icons/react';
import { Button, ButtonIcon } from '../button';
import { LogoAvivaIcon } from '../svgs';
import { Container, Content, GroupButtons } from './styles';
import MediaMatch from '../media-match';
import { Modal } from '../modal';
import { ModalShareLocation } from '../modal-share-location';
import { ModalShared } from '../modal-shared';

export function Header() {
  return (
    <Container>
      <Content>
        <LogoAvivaIcon />

        <MediaMatch greater="medium">
          <GroupButtons>
            <Modal
              buttonTrigger={<Button variant="tertiary">Como chegar</Button>}
            >
              <ModalShareLocation />
            </Modal>

            <Modal
              buttonTrigger={
                <Button>
                  Compartilhar
                  <ButtonIcon>
                    <ShareNetwork size={18} />
                  </ButtonIcon>
                </Button>
              }
            >
              <ModalShared />
            </Modal>
          </GroupButtons>
        </MediaMatch>

        <MediaMatch less="medium">
          <GroupButtons>
            <Modal
              buttonTrigger={
                <Button variant="tertiary" size="small">
                  <MapPin size={18} />
                </Button>
              }
            >
              <ModalShareLocation />
            </Modal>

            <Modal
              buttonTrigger={
                <Button size="small" variant="secondary">
                  <ButtonIcon>
                    <ShareNetwork size={18} />
                  </ButtonIcon>
                </Button>
              }
            >
              <ModalShared />
            </Modal>
          </GroupButtons>
        </MediaMatch>
      </Content>
    </Container>
  );
}
