import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
        <Main />
        <NextScript />
        <script
        dangerouslySetInnerHTML={{
          __html: `window.allowedOrigin = '${process.env.NEXT_PUBLIC_UMBRIEL_FRONT_LOCAL_ADDRRESS}';`,
        }}
      />
      </body>
    </Html>
  );
}
