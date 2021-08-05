import { Title } from '../Title';
import { Container, Content, ImageLecturer, NameLecturer } from './styles';

export function Lecturer() {
  return (
    <Container>
      <img
        src="assets/images/svg/lines-ondsvg.svg"
        alt="Lines"
        className="background-line"
      />

      <Content>
        <ImageLecturer>
          <img
            src="assets/images/photos/preletor.jpeg"
            alt="Preletor Pastor Junior Fernandes"
          />

          <img
            src="assets/images/photos/preletor-confirmado.png"
            alt="Preletor Confirmado"
            className="confirm-lecturer"
          />
        </ImageLecturer>

        <NameLecturer>
          <Title>
            <h2>
              <span>Pastor:</span>
              Junior Fernandes
            </h2>
          </Title>
          <p>(Juninho do Sax)</p>
        </NameLecturer>
      </Content>
    </Container>
  );
}
