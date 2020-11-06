import React from "react";
import { ChakraProvider, extendTheme } from "@chakra-ui/core";
import type { AppProps } from "next/app";
import Head from "next/head";

const customTheme = extendTheme({
  components: {
    Heading: {
      baseStyle: "'Hanuman', serif",
    },
  },
  styles: {
    global: {
      "html, body": {
        fontFamily: "'Open Sans', sans-serif",
      },
    },
  },
});

function GlobalApp({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0,user-scalable=0"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Hanuman:wght@400;700&family=Open+Sans&display=swap"
          rel="stylesheet"
        />
      </Head>
      <ChakraProvider theme={customTheme}>
        <Component {...pageProps} />
      </ChakraProvider>
    </>
  );
}

export default GlobalApp;
