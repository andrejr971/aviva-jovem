import {
  Bakcground,
  CardLecturer,
  Container,
  Content,
  Profile,
} from './styles';

export function Lecturers() {
  return (
    <Container>
      <div className="container">
        <h3 className="title-3">Preletores</h3>

        <Content>
          <CardLecturer>
            <img
              src="/assets/images/lecturer/lecturer2.png"
              alt="Foto do Pastor Israel Peixoto"
            />
            <Profile>
              <h5>Pr. Israel Peixoto</h5>
            </Profile>
          </CardLecturer>

          <CardLecturer>
            <img
              src="/assets/images/lecturer/lecturer1.png"
              alt="Foto do Pastor Paulo Silva"
            />
            <Profile>
              <h5>Pr. Paulo Silva</h5>
            </Profile>
          </CardLecturer>
        </Content>
      </div>

      <Bakcground>
        <img src="/assets/svg/circle-blue.svg" alt="circle 1" />
        <img src="/assets/svg/circle.svg" alt="circle 2" />
      </Bakcground>
    </Container>
  );
}
