import { AppProps } from 'next/app';
import GloblaStyles from '../styles/GloblaStyles';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <GloblaStyles />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
