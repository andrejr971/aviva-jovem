import Head from 'next/head';
import { About } from '../../components/About';
import { Board } from '../../components/Boards';
import { Footer } from '../../components/Footer';
import { Hero } from '../../components/Hero';
import { InformationDates } from '../../components/InformationDates';
import { Intro } from '../../components/Intro';
import { Lecturers } from '../../components/Lecturers';
import { ModalSchedule } from '../../components/ModalSchedule';
import { SliderGallery } from '../../components/SliderGallery';

export function Home() {
  return (
    <>
      <Head>
        <title>Aviva Jovem | Santidade</title>
      </Head>

      <Intro />

      <Hero />

      <About />

      <Board />

      <SliderGallery />

      <InformationDates />

      <Lecturers />

      <SliderGallery />

      <ModalSchedule />

      <Footer />
    </>
  );
}
