// import { ReactSVG } from 'react-svg';

import { About } from '../../components/About';
import { Hero } from '../../components/Hero';
import { Information } from '../../components/Information';
import { Container } from './styles';

export function Home() {
  return (
    <Container>
      <Hero />

      <article>
        <Information />
      </article>

      <About />
    </Container>
  );
}
