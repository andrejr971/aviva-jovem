import Image from 'next/image';
import { Container, Content, SectionAbout } from './styles';

export function About() {
  return (
    <Container>
      <Image
        src="/assets/images/gallery/about.jpeg"
        alt="Jovem adorando a Deus"
        width={1416}
        height={425}
      />

      <Content>
        <SectionAbout>
          <h2>
            Aviva <span>Jovem</span>
          </h2>
          <p>
            O Aviva Jovem é um projeto que iniciou-se em 2017, na direção do
            Pastor Josuel. Já foram 6 edições do Aviva Jovem, com o objetivo de
            impactar cada vez mais nossa geração 🔥
          </p>
          <p>
            <span>SE PREPARE PARA A VOLTA DA 7° EDIÇÃO!</span>
          </p>
          <p>
            Venha cultuar conosco, Deus terá uma palavra poderosa para você, só
            não se esqueça: Jovens de todas as idades até 100 anos, venha
            participar.
          </p>
          <p>
            <span>Venha e traga mais um!!!</span>
          </p>
        </SectionAbout>
      </Content>
    </Container>
  );
}
