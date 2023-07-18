import { MapPin, ShareNetwork } from '@phosphor-icons/react';
import { Button, ButtonIcon } from '../button';
import { LogoAvivaIcon } from '../svgs';
import { Container, Content, GroupButtons } from './styles';
import MediaMatch from '../media-match';

export function Header() {
  return (
    <Container>
      <Content>
        <LogoAvivaIcon />

        <MediaMatch greater="medium">
          <GroupButtons>
            <Button variant="tertiary">Como chegar</Button>

            <Button>
              Compartilhar
              <ButtonIcon>
                <ShareNetwork size={18} />
              </ButtonIcon>
            </Button>
          </GroupButtons>
        </MediaMatch>

        <MediaMatch less="medium">
          <GroupButtons>
            <Button variant="tertiary" size="small">
              <MapPin size={18} />
            </Button>

            <Button size="small" variant="secondary">
              <ButtonIcon>
                <ShareNetwork size={18} />
              </ButtonIcon>
            </Button>
          </GroupButtons>
        </MediaMatch>
      </Content>
    </Container>
  );
}
