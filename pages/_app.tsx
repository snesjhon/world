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
        color: colorMode === "light" ? "gray.700" : "#fafafa"
      })
    },
    Button: {
      baseStyle: {
        lineHeight: 1,
        _focus: {
          boxShadow: "none"
        }
      },
      variants: {
        cyan700: ({ colorMode }: ColorMode) => ({
          bg: colorMode === "light" ? "cyan.700" : "cyan.800",
          fontWeight: 500,
          color: "white",
          border: "1px solid",
          borderColor: "cyan.700",
          _active: {
            color: "white",
            bg: colorMode === "light" ? "cyan.900" : "cyan.800"
          },
          _hover: {
            color: "white",
            bg: colorMode === "light" ? "cyan.800" : "cyan.800"
          }
        }),
        ghostCyan: ({ colorMode }: ColorMode) => ({
          fontWeight: 500,
          border: "1px solid transparent",
          _active: {
            color: "cyan.800"
          },
          _hover: {
            border: "1px solid",
            borderColor: colorMode === "light" ? "cyan.800" : "cyan.800"
          }
        }),
        linkCyan: ({ colorMode }: ColorMode) => ({
          fontWeight: 500,
          padding: 0,
          color: "cyan.700",
          _hover: {
            color: colorMode === "light" ? "cyan.800" : "cyan.800",
            textDecoration: "underline"
          },
          _active: {
            textDecoration: "underline"
          }
        })
      }
    }
  },
  styles: {
    global: (props) => ({
      body: {
        fontFamily: "'Open Sans', sans-serif",
        background: props.colorMode === "light" ? "#fafafa" : "gray.800",
        color: props.colorMode === "light" ? "gray.700" : "#fafafa"
      },
      ".borderImg": {
        borderRadius: "5px",
        border: "1px solid lightgray !important"
      },
      ".nextImg::after": {
        content: "''",
        display: "block",
        position: "absolute",
        height: "98%",
        width: "100%",
        bg: "gray.500",
        top: 0,
        left: 0,
        opacity: 0.4,
        transition: "opacity 0.2s ease-in-out",
        borderRadius: "5px"
      },
      ".nextImg:hover:after": {
        opacity: 0,
        cursor: "pointer"
      },
      ".nextImg img": {
        border: "1px solid #E2E8F0 !important",
        borderColor: "gray.200",
        borderRadius: "5px"
      }
    })
  }
});

function GlobalApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0,user-scalable=0"
        />
        <title>snesjhon | Jhon Paredes</title>
      </Head>
      <ChakraProvider theme={customTheme}>
        <Component {...pageProps} />
      </ChakraProvider>
    </>
  );
}

export default GlobalApp;
