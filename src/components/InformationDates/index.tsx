import { useState } from 'react';
import { useAction } from '../../hooks/actions';
import { Button } from '../Button';
import { ModalShareLocation } from '../ModalShareLocation';
import {
  BorderLeftInfo,
  Container,
  Content,
  ContentInformationDates,
  GroupButton,
} from './styles';

export function InformationDates() {
  const [isOpenModal, setIsOpenModal] = useState(false);

  const { handleShare } = useAction();

  function handleOpenModal() {
    setIsOpenModal(!isOpenModal);
  }

  return (
    <Container>
      <Content>
        <ContentInformationDates>
          <h2>Serão 2 dias</h2>
        </ContentInformationDates>

        <BorderLeftInfo />

        <ContentInformationDates>
          <p className="info">
            Sábado
            <span></span>
            19h00
          </p>

          <div>
            <strong>28</strong>
            <p>de Maio de 2022</p>
          </div>

          <p>Rua Nova Esperança, 64 - Jardim São Judas</p>
        </ContentInformationDates>

        <BorderLeftInfo />

        <ContentInformationDates>
          <p className="info">
            Domingo
            <span></span>
            08h30
          </p>

          <div>
            <strong>29</strong>
            <p>de Maio de 2022</p>
          </div>

          <p>Rua Esperança, 241 - Jardim Vargem Grande</p>
        </ContentInformationDates>
      </Content>

      <GroupButton>
        <Button title="Compartilhar" onClick={handleShare} />
        <Button
          title="Como chegar"
          typeButton="secondary"
          colorWhite
          onClick={handleOpenModal}
        />
      </GroupButton>

      <ModalShareLocation isOpen={isOpenModal} onCloseModal={handleOpenModal} />
    </Container>
  );
}
