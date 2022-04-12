import { Container, ContentLine1, ContentLine2 } from './styles';

export function SliderGallery() {
  return (
    <Container>
      <ContentLine1>
        <img src="/assets/images/gallery/img01.png" alt="Imagem aviva" />
        <img src="/assets/images/gallery/img02.png" alt="Imagem aviva" />
        <img src="/assets/images/gallery/img03.png" alt="Imagem aviva" />
        <img src="/assets/images/gallery/img04.png" alt="Imagem aviva" />
        <img src="/assets/images/gallery/img06.png" alt="Imagem aviva" />
        <img src="/assets/images/gallery/img07.png" alt="Imagem aviva" />
        <img src="/assets/images/gallery/img08.png" alt="Imagem aviva" />
      </ContentLine1>
      <ContentLine2>
        <img src="/assets/images/gallery/img06.png" alt="Imagem aviva" />
        <img src="/assets/images/gallery/img07.png" alt="Imagem aviva" />
        <img src="/assets/images/gallery/img08.png" alt="Imagem aviva" />
        <img src="/assets/images/gallery/img01.png" alt="Imagem aviva" />
        <img src="/assets/images/gallery/img02.png" alt="Imagem aviva" />
        <img src="/assets/images/gallery/img03.png" alt="Imagem aviva" />
        <img src="/assets/images/gallery/img04.png" alt="Imagem aviva" />
      </ContentLine2>
    </Container>
  );
}
