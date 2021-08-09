import { AppProps } from 'next/app';
import { AppProvider } from '../hooks';
import GloblaStyles from '../styles/GloblaStyles';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AppProvider>
      <GloblaStyles />
      <Component {...pageProps} />
    </AppProvider>
  );
}

export default MyApp;
