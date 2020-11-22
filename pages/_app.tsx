import React from "react";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import type { AppProps } from "next/app";
import Head from "next/head";
interface ColorMode {
  colorMode: "light" | "dark";
}
const customTheme = extendTheme({
  components: {
    Heading: {
      baseStyle: ({ colorMode }: ColorMode) => ({
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
      variants: {
        cyan700: ({ colorMode }: ColorMode) => ({
          bg: colorMode === "light" ? "cyan.700" : "cyan.800",
          fontWeight: 500,
          color: "white",
          _active: {
            color: "white",
            bg: colorMode === "light" ? "cyan.900" : "cyan.800",
          },
          _hover: {
            color: "white",
            bg: colorMode === "light" ? "cyan.800" : "cyan.800",
          },
        }),
        ghostCyan: ({ colorMode }: ColorMode) => ({
          fontWeight: 500,
          _active: {
            color: "white",
            bg: colorMode === "light" ? "cyan.900" : "cyan.800",
          },
          _hover: {
            color: "white",
            bg: colorMode === "light" ? "cyan.800" : "cyan.800",
          },
        }),
        linkCyan: ({ colorMode }: ColorMode) => ({
          fontWeight: 500,
          padding: 0,
          _hover: {
            color: colorMode === "light" ? "cyan.800" : "cyan.800",
          },
          _active: {
            textDecoration: "underline",
          },
        }),
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
