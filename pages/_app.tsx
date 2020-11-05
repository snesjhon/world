import React from "react";
import { ChakraProvider } from "@chakra-ui/core";
import type { AppProps } from "next/app";
import Head from "next/head";

function GlobalApp({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0,user-scalable=0"
        />
      </Head>
      <ChakraProvider resetCSS>
        <Component {...pageProps} />
      </ChakraProvider>
    </>
  );
}

export default GlobalApp;
