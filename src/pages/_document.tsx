import Document, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentContext,
} from 'next/document';
import { ServerStyleSheet } from 'styled-components';

export default class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: App => props => sheet.collectStyles(<App {...props} />),
        });

      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      };
    } finally {
      sheet.seal();
    }
  }

  render() {
    return (
      <Html lang="pt-BR">
        <Head>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600;700&family=Rock+Salt&family=Poppins:wght@400;500;700&display=swap"
            rel="stylesheet"
          />

          <meta
            name="description"
            content="O Aviva Jovem é um projeto que iniciou-se em 2018, na direção do
              Pastor Josuel. Já foram 4 edições do Aviva Jovem, com o objetivo
              de impactar cada vez mais nossa geração 🔥"
          />
          <meta name="image" content="assets/images/AvivaJovem.png" />
          <meta property="og:type" content="website" />
          <meta property="og:title" content="Aviva Jovem #5" />
          <meta name="theme-color" content="#121210" />
          <meta name="google" content="notranslate" />
          <meta property="og:url" content="https://avivajovemadf.com" />
          <meta property="og:image" content="assets/images/AvivaJovem.png" />
          <meta
            property="og:image:secure_url"
            content="assets/images/AvivaJovem.png"
          />
          <meta property="og:image:alt" content="Aviva Jovem" />
          <meta property="og:image:type" content="image/png" />
          <meta property="og:image:width" content="1200" />
          <meta property="og:image:height" content="630" />
          <link
            rel="shortcut icon"
            href="assets/images/favicon.png"
            type="image/x-icon"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
