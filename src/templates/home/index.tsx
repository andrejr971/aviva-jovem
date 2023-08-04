import {
  About,
  Boards,
  Header,
  Hero,
  SectionInvite,
  SectionLecturers,
} from '@/components';
import { Container } from './styles';
import { HomeProps } from './types';

export function HomeTemplate({
  leaders,
  musicians,
  shepherds,
  volunteers,
}: HomeProps) {
  return (
    <Container>
      <Header />
      <Hero />

      <About />

      <Boards
        leaders={leaders}
        musicians={musicians}
        shepherds={shepherds}
        volunteers={volunteers}
      />

      <SectionInvite />

      <SectionLecturers />
    </Container>
  );
}
