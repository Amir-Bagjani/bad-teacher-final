import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="fa-IR" dir="rtl">
      <Head>
        <meta charSet="utf-8" />
        <link
          as="style"
          rel="stylesheet preload prefetch"
          href="/iransans.css"
          crossOrigin="anonymous"
          type="text/css"
        ></link>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
