import {
  About,
  Boards,
  Footer,
  Header,
  Hero,
  Modal,
  SectionInvite,
  SectionLecturers,
  SectionReason,
} from '@/components';
import { Container } from './styles';
import { HomeProps } from './types';

export function HomeTemplate({
  leaders,
  musicians,
  shepherds,
  volunteers,
  lecturers,
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

      <SectionLecturers lecturers={lecturers} />

      <SectionReason />

      <Footer />
    </Container>
  );
}
