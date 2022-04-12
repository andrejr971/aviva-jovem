import {
  Container,
  Content,
  ContentImage,
  ImageAviva,
  ImageAvivaCircle,
  ReactBackground,
} from './styles';

export function About() {
  return (
    <Container>
      <ContentImage>
        <ImageAviva
          src="/assets/images/image02.jpeg"
          alt="Imagem do último aviva"
        />

        <ImageAvivaCircle src="/assets/svg/AvivaJovemCircle.svg" />

        <ReactBackground src="/assets/svg/rect_02.svg" />
      </ContentImage>

      <Content>
        <h3>Aviva Jovem</h3>
        <p>
          O Aviva Jovem é um projeto que iniciou-se em 2018, na direção do
          Pastor Josuel. Já foram 4 edições do Aviva Jovem, com o objetivo de
          impactar cada vez mais nossa geração 🔥{' '}
          <strong> SE PREPARE PARA A VOLTA DA 6° EDIÇÃO!</strong> <br />
          Venha cultuar conosco, Deus terá uma palavra poderosa para você, só
          não se esqueça: Jovens de todas as idades até 100 anos, venha
          participar. <strong>Venha e traga mais um!!!</strong>
        </p>
      </Content>
    </Container>
  );
}
