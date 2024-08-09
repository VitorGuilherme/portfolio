import { Html, Head, Main, NextScript } from "next/document";
import { Theme, ThemePanel } from '@radix-ui/themes';


export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
      <Theme grayColor="sand" radius="large" appearance="dark">
        <Main />
        <NextScript />
      </Theme>
      </body>
    </Html>
  );
}