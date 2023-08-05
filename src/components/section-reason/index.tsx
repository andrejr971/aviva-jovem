import Image from 'next/image';
import { Container, Content, ContentReason, Heading } from './styles';

export function SectionReason() {
  return (
    <Container>
      <Image
        alt="background section"
        src="/assets/images/gallery/background-section-2.png"
        width={1920}
        height={1488}
      />

      <Content>
        <ContentReason>
          <p>
            <span>MOTIVOS</span>
          </p>
          <p>PARA VOCÊ</p>
          <p>
            <span>PARTICIPAR</span> DO
          </p>
        </ContentReason>

        <Heading>
          AVIVA <span>JOVEM</span>
        </Heading>

        <ul>
          <li>Lugar de louvor e adoração a Deus</li>
          <li>Lugar de Palavra</li>
          <li>Lugar de união e comunhão</li>
          <li>Lugar de encontro com Cristo</li>
          <li>Lugar que tem a benção e a presença de Deus</li>
        </ul>

        <strong>BORA?</strong>
      </Content>
    </Container>
  );
}
