import { Title } from '../Title';
import { Container, Content, ContentAbout, AboutImages, Card } from './style';

export function About() {
  return (
    <Container>
      <Title>
        <h2>
          Aviva
          <span>Jovem</span>
        </h2>
      </Title>

      <Content>
        <ContentAbout>
          <div>
            <p>
              O Aviva Jovem é um projeto que iniciou-se em 2018, na direção do
              Pastor Josuel. Já foram 4 edições do Aviva Jovem, com o objetivo
              de impactar cada vez mais nossa geração 🔥
            </p>
            <p>
              <strong>SE PREPARE PARA A VOLTA DA 5° EDIÇÃO:</strong>
              Seguindo todos os protocolos de segurança contra o Covid-19,
              estamos de volta.
            </p>
            <p>
              Venha cultuar conosco, Deus terá uma palavra poderosa para você,
              só não se esqueça: Jovens de todas as idades até 100 anos, venha
              participar.
            </p>
            <p>
              <strong>Venha e traga mais um!!!</strong>
            </p>
          </div>

          <footer>
            <button type="button">
              Pastor regional: Valdeonor Soares, Coordenador: Pastor Josuel
              Cardoso...
            </button>
          </footer>
        </ContentAbout>

        <AboutImages>
          <Card position="first">
            <img
              src="assets/images/logo-ass.png"
              alt="Logo Assembleia de Deus ministério do Ferreira"
            />
          </Card>
          <Card position="last">
            <img src="assets/images/svg/logo.svg" alt="Logo AvivaJovem" />
          </Card>

          <img
            src="assets/images/photos/about.png"
            alt="Foto do primeiro Aviva Jovem"
            className="image-about"
          />
        </AboutImages>
      </Content>
    </Container>
  );
}
