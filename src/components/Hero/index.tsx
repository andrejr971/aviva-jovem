import { useEffect, useState } from 'react';
import { ReactSVG } from 'react-svg';
import { Button } from '../Button';
import { Header } from '../Header';
import Image from 'next/image';
import {
  BackgroundVideo,
  BorderLeftInfo,
  ButtonStartVideo,
  Container,
  Content,
  ContentInformationDates,
  ContentVideo,
  GroupButton,
  Information,
  InformationDates,
  InfoTheme,
  ThemeEvent,
} from './styles';
import { useAction } from '../../hooks/actions';
import { ModalShareLocation } from '../ModalShareLocation';

export function Hero() {
  const [diffDays, setDiffDays] = useState('');
  const [isOpenModal, setIsOpenModal] = useState(false);

  const { handleShare } = useAction();

  function handleOpenModal() {
    setIsOpenModal(!isOpenModal);
  }

  useEffect(() => {
    const date1 = new Date();
    const date2 = new Date('2022-05-28');
    const timeDiff = Math.abs(date2.getTime() - date1.getTime());
    const days =
      Math.ceil(timeDiff / (1000 * 3600 * 24)) < 0
        ? 0
        : Math.ceil(timeDiff / (1000 * 3600 * 24));

    setDiffDays(`${days} ${days > 1 ? 'dias' : 'dia'}`);
  }, []);

  return (
    <Container>
      <Information className="p-2">
        <div>
          <p>O Aviva Jovem da ADF Vargem Grande Paulista está chegando!!! 🔥</p>
          <span></span>
          <p>Faltam {diffDays}</p>
        </div>
      </Information>

      <Header />

      <Content className="container">
        <InfoTheme className="grid-5">
          <ThemeEvent>
            <h1>Santidade</h1>

            <ReactSVG src="/assets/svg/aviva_jovem.svg" />

            <strong>Daniel 1:1-21</strong>
          </ThemeEvent>

          <GroupButton>
            <Button title="Compartilhar" onClick={handleShare} />
            <Button
              title="Como chegar"
              typeButton="secondary"
              colorWhite
              onClick={handleOpenModal}
            />
          </GroupButton>
        </InfoTheme>

        <div className="grid-1"></div>

        <ContentVideo className="grid-6">
          <ButtonStartVideo>
            <Image src="/assets/images/image01.png" width={624} height={400} />
          </ButtonStartVideo>

          <BackgroundVideo>
            <ReactSVG src="/assets/svg/background-video.svg" />
          </BackgroundVideo>
        </ContentVideo>

        <InformationDates className="grid-12">
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
        </InformationDates>
      </Content>

      <ModalShareLocation isOpen={isOpenModal} onCloseModal={handleOpenModal} />
    </Container>
  );
}
