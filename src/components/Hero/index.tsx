import { Header } from '../Header';
import { BackgroundHero, Container, ThemeEvent } from './styles';

export function Hero() {
  return (
    <Container>
      <BackgroundHero>
        <video
          className="video"
          src="assets/video/video.mp4"
          preload="none"
          muted
          loop
          autoPlay
        />
      </BackgroundHero>

      <Header />

      <ThemeEvent>
        <img src="assets/images/svg/logo.svg" alt="Logo Aviva Jovem" />

        <div>
          <h1>
            <span>Jovens</span>
            segundo o coração de
            <span>Deus</span>
          </h1>

          <strong>Atos 13:22</strong>
        </div>
      </ThemeEvent>
    </Container>
  );
}
