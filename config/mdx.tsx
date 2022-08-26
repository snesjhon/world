import React from "react";
import {
  Heading,
  ListItem,
  Text,
  UnorderedList,
  Divider,
  Button,
} from "@chakra-ui/react";
import Link from "next/link";
import { MDXProvider } from "@mdx-js/react";

interface Props {
  children: React.ReactNode;
}

const headingProps = {
  pt: { base: 4 },
  pb: { base: 3 },
};

export default function MDXWrapper(props: Props): JSX.Element {
  const { children } = props;
  return (
    <MDXProvider
      components={{
        p: (props) => <Text pb={{ base: 1 }} {...props} />,
        ul: UnorderedList,
        li: ListItem,
        hr: (props) => <Divider my={3} borderColor="gray.300" {...props} />,
        h1: (props) => (
          <Heading as="h1" size="2xl" {...headingProps} {...props} />
        ),
        h2: (props) => (
          <Heading as="h2" size="xl" {...headingProps} {...props} />
        ),
        h3: (props) => (
          <Heading as="h3" size="lg" {...headingProps} {...props} />
        ),
        h4: (props) => (
          <Heading as="h4" size="md" {...headingProps} {...props} />
        ),
        a: CustomLink,
      }}
    >
      {children}
    </MDXProvider>
  );
}

function CustomLink(
  props: React.DetailedHTMLProps<
    React.AnchorHTMLAttributes<HTMLAnchorElement>,
    HTMLAnchorElement
  >
): JSX.Element {
  const href = props.href;
  const isInternalLink = href && (href.startsWith("/") || href.startsWith("#"));

  if (isInternalLink) {
    return (
      <Link href={href}>
        {/* <a {...props}> */}
        <Button variant="linkCyan">{props.children}</Button>
        {/* </a> */}
      </Link>
    );
  }

  return (
    <a target="_blank" rel="noopener noreferrer" {...props}>
      <Button variant="linkCyan">{props.children}</Button>
    </a>
  );
}
