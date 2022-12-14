import { Html, Head, Main, NextScript } from 'next/document'

export default function MyDocument() {
  return (
    <Html>
      <Head>
        <link rel="manifest" href="/manifest.json" />
        <link rel="apple-touch-icon" href="/icon.png"></link>
        <meta name="theme-color" content="#FFF" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
