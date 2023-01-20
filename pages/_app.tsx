import { MDXProvider } from "@mdx-js/react";
import type { AppProps } from "next/app";
import Head from "next/head";
import React from "react";
import "../styles/global.scss";

const DEFAULT_TITLE = "Home";
const DESCRIPTION = "snesjhon home";

export default function GlobalApp({
  Component,
  pageProps,
}: AppProps): JSX.Element {
  const title = `${DEFAULT_TITLE} | Jhon Salazar`;
  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0,user-scalable=0"
        />
        <meta name="description" content={DESCRIPTION} />
        <title>{title}</title>
      </Head>
      <MDXProvider>
        <Component {...pageProps} />
      </MDXProvider>
    </>
  );
}
