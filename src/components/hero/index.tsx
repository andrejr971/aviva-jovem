import { CountAlert } from '../count-alert';
import {
  BackgroundVideo,
  Container,
  Content,
  ContentCards,
  ContentTitle,
  Ellipse,
  EllipseBottom,
  MoreInformation,
  Reference,
  Subtitle,
  Title,
} from './styles';
import { CaretDown, MapPin } from '@phosphor-icons/react';
import MediaMatch from '../media-match';
import { CardWithImage } from '../cards';
import {
  handleShareLocationFirstDay,
  handleShareLocationSecondDay,
} from '@/utils/links-shared-locations';

export function Hero() {
  return (
    <Container>
      <CountAlert />

      <Content>
        <ContentTitle>
          <Title>
            E <span>não vos conformeis</span> com este <span>mundo</span>
          </Title>
          <Subtitle>
            mas transformai-vos pela renovação do vosso entendimento, para que
            experimenteis qual seja a boa, agradável e perfeita vontade de Deus
          </Subtitle>
          <Reference>Romanos 12.2</Reference>
        </ContentTitle>

        <ContentCards>
          <CardWithImage
            alt="Imagem jovem adorando"
            imageUrl="/assets/images/gallery/hero/hero-1.png"
            description={{
              address: 'Rua Nova Esperança, 64 - Vila São Judas Tadeu',
              button: {
                children: (
                  <>
                    Como chegar <MapPin size={24} />
                  </>
                ),
                onClick: handleShareLocationFirstDay,
              },
              date: '09',
              header: 'Sábado às 18h30',
              monthAndYear: 'de Setembro de 2023',
            }}
          />
          <MediaMatch greater="large">
            <MoreInformation>
              <button>
                Para mais informações
                <CaretDown size={24} />
              </button>
              <CardWithImage
                alt="Imagem jovem adorando"
                imageUrl="/assets/images/gallery/hero/hero-2.png"
              />
            </MoreInformation>
          </MediaMatch>
          <CardWithImage
            alt="Imagem jovem adorando"
            imageUrl="/assets/images/gallery/hero/hero-3.png"
            description={{
              address: 'Rua Esperança, 241 - Jardim Vargem Grande',
              button: {
                children: (
                  <>
                    Como chegar <MapPin size={24} />
                  </>
                ),
                onClick: handleShareLocationSecondDay,
              },
              date: '10',
              header: 'Domingo às 08h30',
              monthAndYear: 'de Setembro de 2023',
            }}
          />
        </ContentCards>
      </Content>

      <BackgroundVideo>
        <Ellipse />
        <video src="/assets/video/video.mp4" autoPlay muted loop />
      </BackgroundVideo>

      <EllipseBottom />
    </Container>
  );
}
