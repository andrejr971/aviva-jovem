import type { AppProps } from 'next/app';
import GlobalStyles from '@/styles/global';
import { ThemeProvider } from 'styled-components';
import { theme } from '@/styles/theme';
import Head from 'next/head';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <Head>
        <title>AVIVA JOVEM - 2023</title>
      </Head>
      <GlobalStyles />

      <Component {...pageProps} />
    </ThemeProvider>
  );
}
