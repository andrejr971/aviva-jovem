import Image from 'next/image';
import { Container, Content, GroupButton, GroupCard, Info } from './styles';
import { Card } from '../cards';
import { MapPin, ShareNetwork } from '@phosphor-icons/react';
import { Button, ButtonIcon } from '../button';
import {
  handleShareLocationFirstDay,
  handleShareLocationSecondDay,
  sharedWithWhasapp,
} from '@/utils/links-shared-locations';
import { Modal } from '../modal';
import { ModalShared } from '../modal-shared';

export function SectionInvite() {
  return (
    <Container>
      <Image
        alt="background section"
        src="/assets/images/gallery/background-section.png"
        width={1920}
        height={822}
      />

      <Content>
        <Info>
          <h3>Serão 2 dias</h3>
          <strong>
            E você é o nosso(a) <span>Convidado(a)</span>!!
          </strong>
        </Info>

        <GroupCard>
          <Card
            address="Rua Nova Esperança, 64 - Vila São Judas Tadeu"
            button={{
              children: (
                <>
                  Como chegar <MapPin size={24} />
                </>
              ),
              onClick: handleShareLocationFirstDay,
            }}
            date="09"
            header="Sábado às 18h30"
            monthAndYear="de Setembro de 2023"
          />
          <Card
            address="Rua Esperança, 241 - Jardim Vargem Grande"
            button={{
              children: (
                <>
                  Como chegar <MapPin size={24} />
                </>
              ),
              onClick: handleShareLocationSecondDay,
            }}
            date="10"
            header="Domingo às 08h30"
            monthAndYear="de Setembro de 2023"
          />
        </GroupCard>

        <GroupButton>
          <Button variant="secondary" size="full" onClick={sharedWithWhasapp}>
            Compartilhar
            <ButtonIcon>
              <ShareNetwork size={18} />
            </ButtonIcon>
          </Button>
        </GroupButton>
      </Content>
    </Container>
  );
}
