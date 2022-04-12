import { useState } from 'react';
import { useAction } from '../../hooks/actions';
import { Button } from '../Button';
import { ModalShareLocation } from '../ModalShareLocation';
import {
  Container,
  ContentInformationDates,
  DivLogos,
  DivThanks,
  GroupButton,
} from './styles';

export function Footer() {
  const [isOpenModal, setIsOpenModal] = useState(false);

  const { handleShare } = useAction();

  function handleOpenModal() {
    setIsOpenModal(!isOpenModal);
  }

  return (
    <Container>
      <div className="container">
        <DivLogos className="grid-4">
          <img src="/assets/svg/aviva_jovem2.svg" alt="logo aviva jovem" />
          <img src="/assets/svg/ADF.svg" alt="logo ADF" />
        </DivLogos>
        <ContentInformationDates className="grid-4">
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

        <ContentInformationDates className="grid-4">
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

        <div className="grid-8">
          <GroupButton>
            <Button title="Compartilhar" onClick={handleShare} />
            <Button
              title="Como chegar"
              typeButton="secondary"
              colorWhite
              onClick={handleOpenModal}
            />
          </GroupButton>
        </div>
      </div>

      <DivThanks>
        <p>2019-2022 - Aviva Jovem - Todos os direitos reservados</p>
        <p>
          Desenvolvido por:{' '}
          <a href="https://andrejr.dev" target="blank">
            André Junior
          </a>
        </p>
      </DivThanks>

      <ModalShareLocation isOpen={isOpenModal} onCloseModal={handleOpenModal} />
    </Container>
  );
}
