import type { AppProps } from "next/app";
import Head from "next/head";
import React from "react";
import ChakraWrapper from "../config/chakra";

const TITLE = "Home";
const DESCRIPTION = "snesjhon home";

export default function GlobalApp({
  Component,
  pageProps,
}: AppProps): JSX.Element {
  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0,user-scalable=0"
        />
        <meta name="description" content={DESCRIPTION} />
        <title>{`${TITLE} | Jhon Paredes`}</title>
      </Head>
      <ChakraWrapper>
        <Component {...pageProps} />
      </ChakraWrapper>
    </>
  );
}
