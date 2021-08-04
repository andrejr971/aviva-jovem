import Head from 'next/head';
import { Home } from '../templates/Home';

export default function Index() {
  return (
    <>
      <Head>
        <title>AvivaJovem</title>
      </Head>
      <Home />
    </>
  );
}
