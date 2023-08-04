import type { AppProps } from 'next/app';
import GlobalStyles from '@/styles/global';
import { ThemeProvider } from 'styled-components';
import { theme } from '@/styles/theme';
import Head from 'next/head';
import NextNprogress from 'nextjs-progressbar';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <Head>
        <title>AVIVA JOVEM - 2023</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          rel="shortcut icon"
          href="/assets/svg/aviva.svg"
          type="image/x-icon"
        />
        <meta
          name="description"
          content="O Aviva Jovem é um projeto que iniciou-se em 2017, na direção do Pastor Josuel.
          Já foram 5 edições do Aviva Jovem, com o objetivo de impactar cada vez mais nossa geração 🔥"
        />
        <meta name="image" content="/assets/images/banner.png" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Aviva Jovem #6" />
        <meta name="theme-color" content="#121210" />
        <meta name="google" content="notranslate" />
        <meta property="og:url" content="https://avivajovemadf.com" />
        <meta property="og:image" content="/assets/images/banner.png" />
        <meta
          property="og:image:secure_url"
          content="/assets/images/banner.png"
        />
        <meta property="og:image:alt" content="Aviva Jovem Adf" />
        <meta property="og:image:type" content="image/png" />
        <meta property="og:image:width" content="1920" />
        <meta property="og:image:height" content="1080" />
      </Head>

      <GlobalStyles />

      <Component {...pageProps} />

      <NextNprogress
        color={theme.colors.primary}
        startPosition={0.3}
        stopDelayMs={200}
        height={4}
      />
    </ThemeProvider>
  );
}
