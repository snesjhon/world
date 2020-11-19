import React from "react";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import type { AppProps } from "next/app";
import Head from "next/head";

const customTheme = extendTheme({
  components: {
    Heading: {
      baseStyle: {
        fontFamily: `'Hanuman', serif`,
        fontWeight: "light",
        letterSpacing: "0.04rem",
      },
    },
    Button: {
      baseStyle: {
        lineHeight: 1,
      },
    },
  },
  styles: {
    global: (props) => ({
      body: {
        fontFamily: "'Open Sans', sans-serif",
        background: props.colorMode === "light" ? "#fafafa" : "gray.800",
        color: props.colorMode === "light" ? "gray.800" : "#fafafa",
      },
    }),
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
      </Head>
      <ChakraProvider theme={customTheme}>
        <Component {...pageProps} />
      </ChakraProvider>
    </>
  );
}

export default GlobalApp;
