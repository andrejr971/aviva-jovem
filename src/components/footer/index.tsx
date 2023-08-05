import { MapPin, ShareNetwork } from '@phosphor-icons/react';
import {
  Container,
  Content,
  DivInvite,
  GroupButton,
  GroupInvite,
  Info,
  LogoADF,
  SectionCredit,
} from './styles';
import { Card } from '../cards';
import { Button, ButtonIcon } from '../button';
import Image from 'next/image';
import { Modal } from '../modal';
import { ModalShared } from '../modal-shared';
import {
  handleShareLocationFirstDay,
  handleShareLocationSecondDay,
} from '@/utils/links-shared-locations';

export function Footer() {
  return (
    <Container>
      <Content>
        <Info>
          <h3>Serão 2 dias</h3>
          <strong>
            E você é o nosso(a) <span>Convidado(a)</span>!!
          </strong>
        </Info>

        <GroupInvite>
          <DivInvite>
            <Card
              address="Rua Nova Esperança, 64 - Jardim São Judas"
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
              variant="secondary"
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
              variant="secondary"
            />
          </DivInvite>

          <GroupButton>
            <Modal
              buttonTrigger={
                <Button variant="secondary" size="full">
                  Compartilhar
                  <ButtonIcon>
                    <ShareNetwork size={18} />
                  </ButtonIcon>
                </Button>
              }
            >
              <ModalShared />
            </Modal>
          </GroupButton>
        </GroupInvite>
      </Content>

      <LogoADF>
        <Image
          alt="logo Assembleia de Deus ministério do ferreira"
          src="/assets/images/logo-adf.png"
          width={96}
          height={96}
        />

        <div>
          <strong>Assembleia de Deus</strong>
          <span>Ministério do Ferreira</span>
        </div>
      </LogoADF>

      <SectionCredit>
        <p>2019-2023 - Aviva Jovem - Todos os direitos reservados</p>
        <p>
          Desenvolvido por:
          <a href="https://www.andrejr.dev/"> André Junior</a>
        </p>
      </SectionCredit>
    </Container>
  );
}
