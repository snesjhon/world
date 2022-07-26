import {
  Button,
  ChakraProvider,
  extendTheme,
  Heading,
  HeadingProps,
  ListItem,
  List,
  Text,
  UnorderedList,
  Divider,
} from "@chakra-ui/react";
import { HTMLChakraComponents } from "@chakra-ui/system";
import type { AppProps } from "next/app";
import Link from "next/link";
import Head from "next/head";
import React, { ReactNode } from "react";
import Layout from "../components/Layout";
import { MDXProvider } from "@mdx-js/react";

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
          border: "1px solid",
          borderColor: "cyan.700",
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
          border: "1px solid transparent",
          _active: {
            color: "cyan.800",
          },
          _hover: {
            border: "1px solid",
            borderColor: colorMode === "light" ? "cyan.800" : "cyan.800",
          },
        }),
        linkCyan: ({ colorMode }: ColorMode) => ({
          verticalAlign: "baseline",
          fontWeight: 500,
          padding: 0,
          height: "initial",
          color: "cyan.700",
          _hover: {
            color: colorMode === "light" ? "cyan.800" : "cyan.800",
            textDecoration: "underline",
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
      ".borderImg": {
        borderRadius: "5px",
        border: "1px solid lightgray !important",
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
        borderRadius: "5px",
      },
      ".nextImg:hover:after": {
        opacity: 0,
        cursor: "pointer",
      },
      ".nextImg img": {
        border: "1px solid #E2E8F0 !important",
        borderColor: "gray.200",
        borderRadius: "5px",
      },
    }),
  },
});
const TITLE = "Home";
const DESCRIPTION = "snesjhon home";

const CustomLink = (
  props: React.DetailedHTMLProps<
    React.AnchorHTMLAttributes<HTMLAnchorElement>,
    HTMLAnchorElement
  >
) => {
  const href = props.href;
  const isInternalLink = href && (href.startsWith("/") || href.startsWith("#"));

  if (isInternalLink) {
    return (
      <Link href={href}>
        <a {...props}>
          <Button variant="linkCyan">{props.children}</Button>
        </a>
      </Link>
    );
  }

  return (
    <a target="_blank" rel="noopener noreferrer" {...props}>
      <Button variant="linkCyan">{props.children}</Button>
    </a>
  );
};

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
        <title>{TITLE} | Jhon Paredes</title>
      </Head>
      <ChakraProvider theme={customTheme}>
        <MDXProvider
          components={{
            p: (props) => <Text pb={{ base: 1 }} {...props} />,
            ul: UnorderedList,
            li: ListItem,
            hr: (props) => <Divider mt={3} borderColor="gray.300" {...props} />,
            h1: (props) => <Heading as="h1" size="2xl" {...props} />,
            h2: (props) => <Heading as="h2" size="xl" {...props} />,
            h3: (props) => (
              <Heading
                as="h3"
                size="lg"
                pt={{ base: 4 }}
                pb={{ base: 3 }}
                {...props}
              />
            ),
            h4: (props) => (
              <Heading
                as="h4"
                size="md"
                pt={{ base: 4 }}
                pb={{ base: 3 }}
                {...props}
              />
            ),
            a: CustomLink,
          }}
        >
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </MDXProvider>
      </ChakraProvider>
    </>
  );
}
