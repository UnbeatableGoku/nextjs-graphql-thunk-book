import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang='en'>
      <Head>
        {/* <title>Book Api </title> */}
        <meta name='description' content='Books search app' />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
