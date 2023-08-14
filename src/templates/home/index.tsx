import {
  About,
  Boards,
  Footer,
  Header,
  Hero,
  SectionInvite,
  SectionLecturers,
  SectionReason,
} from '@/components';
import { NextSeo } from 'next-seo';

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
      <NextSeo
        title={`AVIVA JOVEM - 2023`}
        canonical={'https://avivajovemadf.vercel.app/'}
        openGraph={{
          title: `AVIVA JOVEM - 2023`,
          siteName: 'AVIVA JOVEM - 2023',
          url: 'https://avivajovemadf.vercel.app/',
          images: [
            {
              url: '/assets/images/banner.jpg',
              alt: 'Banner aviva jovem',
            },
          ],
        }}
      />

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
