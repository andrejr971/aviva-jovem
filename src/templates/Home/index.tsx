// import { ReactSVG } from 'react-svg';

import Head from 'next/head';
import { About } from '../../components/About';
import { Board } from '../../components/Board';
import { Hero } from '../../components/Hero';
import { Information } from '../../components/Information';
import { Invite } from '../../components/Inivite';
import { Lecturer } from '../../components/Lecturer';
import { Loading } from '../../components/Loading';
import { IndexProps } from '../../dtos/IBoardsDTO';
import { Container } from './styles';

export function Home({ boards }: IndexProps) {
  return (
    <Container>
      <Head>
        <title>Aviva Jovem #5 - ADF</title>
      </Head>

      {/* <Loading /> */}

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
