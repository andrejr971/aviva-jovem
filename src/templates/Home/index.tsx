import Head from 'next/head';
import { About } from '../../components/About';
import { Board } from '../../components/Boards';
import { Footer } from '../../components/Footer';
import { Hero } from '../../components/Hero';
import { InformationDates } from '../../components/InformationDates';
import { Lecturers } from '../../components/Lecturers';
import { SliderGallery } from '../../components/SliderGallery';

export function Home() {
  return (
    <>
      <Head>
        <title>Aviva Jovem | Santidade</title>
      </Head>

      <Hero />

      <About />

      <Board />

      <SliderGallery />

      <InformationDates />

      <Lecturers />

      <SliderGallery />

      <Footer />
    </>
  );
}
