import { FiCalendar, FiMapPin, FiShare2 } from 'react-icons/fi';
import { useAction } from '../../hooks/actions';
import { Button } from '../Button';
import { Container, ContentInformations, ContentInvite, Info } from './styles';

export function Invite() {
  const { handleShare, handleShareLocation } = useAction();

  return (
    <Container>
      <ContentInformations>
        <img
          src="assets/images/photos/img01.png"
          alt="Foto do Aviva Jovem 2ª Edição"
          className="background-img"
        />

        <Info>
          <div className="card-icon">
            <FiCalendar />
          </div>

          <p>18 de Setembro de 2021, às 19h00</p>
        </Info>

        <Info>
          <div className="card-icon">
            <FiMapPin />
          </div>

          <p>Rua Nova Esperança, 64 - Jd. São Judas</p>
        </Info>

        <div className="info-buttons">
          <Button
            type="button"
            typeButton="secondary"
            onClick={handleShare}
            display="true"
          >
            <FiShare2 />
            <span>Compartilhar</span>
          </Button>

          <Button type="button" onClick={handleShareLocation} display="true">
            <FiMapPin />

            <span>Como chegar</span>
          </Button>
        </div>
      </ContentInformations>

      <ContentInvite>
        <img src="assets/images/logo.png" alt="Logo AvivaJovem" />

        <p>
          Você é o nosso <span>convidado!!</span>
        </p>
      </ContentInvite>
    </Container>
  );
}
