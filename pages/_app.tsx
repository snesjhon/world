import React from "react";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import type { AppProps } from "next/app";
import Head from "next/head";

const customTheme = extendTheme({
  components: {
    Heading: {
      baseStyle: ({ colorMode }: { colorMode: "light" | "dark" }) => ({
        fontFamily: `'Lato', sans-serif`,
        fontWeight: 400,
        color: colorMode === "light" ? "gray.700" : "#fafafa",
      }),
    },
    Button: {
      baseStyle: {
        lineHeight: 1,
        _focus: {
          boxShadow: "none",
        },
      },
    },
  },
  styles: {
    global: (props) => ({
      body: {
        fontFamily: "'Open Sans', sans-serif",
        background: props.colorMode === "light" ? "#fafafa" : "gray.800",
        color: props.colorMode === "light" ? "gray.700" : "#fafafa",
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
