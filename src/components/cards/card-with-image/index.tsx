import Image from 'next/image';
import { Container } from './styles';

export function CardWithImage() {
  return (
    <Container>
      <Image
        src="/assets/images/gallery/hero/hero-1.png"
        alt="Imagem de jovem adorando"
        width={400}
        height={500}
      />
    </Container>
  );
}
