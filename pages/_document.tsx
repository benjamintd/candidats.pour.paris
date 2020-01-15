import Document, { Html, Head, Main, NextScript } from "next/document";
import Meta from "../components/Meta";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang="FR-fr">
        <Head />
        <Meta />
        <body>
          <Main />
          <NextScript />
        </body>
        <style jsx global>{`
          body {
            margin: 0;
            font-family: "Fira Sans", -apple-system, BlinkMacSystemFont,
              "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell,
              "Helvetica Neue", sans-serif;
            --light-yellow: #ffeeaa;
          }
        `}</style>
      </Html>
    );
  }
}

export default MyDocument;
