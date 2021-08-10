import { FiCalendar, FiMapPin, FiShare2 } from 'react-icons/fi';
import { useAction } from '../../hooks/actions';
import { Button } from '../Button';
import {
  Card,
  Container,
  GroupButton,
  Content,
  ContentFooter,
  DivThanks,
} from './styles';

export function Footer() {
  const { handleShare, handleShareLocation } = useAction();

  return (
    <Container>
      <Content>
        <ContentFooter>
          <img src="assets/images/logo-footer.png" alt="Logotipo Aviva Jovem" />
          <img
            src="assets/images/logo-ass-footer.png"
            alt="Logotipo Assembleia de Deus"
          />

          <div>
            <Card>
              <div>
                <FiCalendar />
              </div>

              <p>18 de Setembro de 2021, às 19h30</p>
            </Card>

            <Card>
              <div>
                <FiMapPin />
              </div>

              <p>Rua Nova Esperança, 64 - Jd. São Judas</p>
            </Card>

            <GroupButton>
              <Button
                type="button"
                typeButton="secondary"
                onClick={handleShare}
                display="true"
              >
                <FiShare2 />
                <span>Compartilhar</span>
              </Button>

              <Button
                type="button"
                onClick={handleShareLocation}
                display="true"
              >
                <FiMapPin />
                <span>Como chegar</span>
              </Button>
            </GroupButton>
          </div>
        </ContentFooter>
      </Content>
      <DivThanks>
        <p>@2019-2021 - Aviva Jovem - Todos os direitos reservados</p>
        <p>
          Desenvolvido por:{' '}
          <a href="andrejr.dev" target="blank">
            André Junior
          </a>
        </p>
      </DivThanks>
    </Container>
  );
}
