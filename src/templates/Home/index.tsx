// import { ReactSVG } from 'react-svg';

import { About } from '../../components/About';
import { Board } from '../../components/Board';
import { Hero } from '../../components/Hero';
import { Information } from '../../components/Information';
import { Invite } from '../../components/Inivite';
import { Lecturer } from '../../components/Lecturer';
import { IndexProps } from '../../dtos/IBoardsDTO';
import { Container } from './styles';

export function Home({ boards }: IndexProps) {
  return (
    <Container>
      <Hero />

      <article>
        <Information />
      </article>

      <About />

      <Board boards={boards} />

      <Lecturer />
      <Invite />
    </Container>
  );
}
