import { Html, Head, Main, NextScript } from "next/document";

const Document = () => {
  return (
    <Html lang="en">
      <Head />
      <body>
        <div id="overlays" />
        <Main />
        <NextScript />
      </body>
    </Html>
  );
};

export default Document;
