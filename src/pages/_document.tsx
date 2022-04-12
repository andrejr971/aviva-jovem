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
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Audiowide&family=Open+Sans:wght@400;500;600&family=Poppins:wght@400;500;600&display=swap"
            rel="stylesheet"
          />

          <link
            rel="shortcut icon"
            href="/assets/svg/aviva.svg"
            type="image/x-icon"
          />

          <meta
            name="description"
            content="O Aviva Jovem é um projeto que iniciou-se em 2019, na direção do Pastor Josuel.
          Já foram 5 edições do Aviva Jovem, com o objetivo de impactar cada vez mais nossa geração 🔥"
          />
          <meta name="image" content="/assets/images/banner.jpeg" />
          <meta property="og:type" content="website" />
          <meta property="og:title" content="Aviva Jovem #6" />
          <meta name="theme-color" content="#121210" />
          <meta name="google" content="notranslate" />
          <meta property="og:url" content="https://avivajovemadf.com" />
          <meta property="og:image" content="/assets/images/banner.jpeg" />
          <meta
            property="og:image:secure_url"
            content="/assets/images/banner.jpeg"
          />
          <meta property="og:image:alt" content="Aviva Jovem Adf" />
          <meta property="og:image:type" content="image/jpeg" />
          <meta property="og:image:width" content="1080" />
          <meta property="og:image:height" content="1920" />
        </Head>
        <body>
          <div id="root"></div>

          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
