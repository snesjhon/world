import { ExternalLinkIcon } from "@chakra-ui/icons";
import { Button, Flex, useBreakpointValue } from "@chakra-ui/react";
import Link from "next/link";
import React from "react";
function Menu(): JSX.Element {
  const btnSize = useBreakpointValue({ base: "sm", sm: "md" });
  return (
    <Flex justifyContent="space-between">
      <div>
        <Link href="/">
          <Button colorScheme="blue" size={btnSize} variant="ghostCyan">
            Home
          </Button>
        </Link>
      </div>
      <div>
        <Link href="/tech">
          <Button colorScheme="blue" size={btnSize} variant="ghostCyan">
            Tech
          </Button>
        </Link>
      </div>
      <div>
        <Button
          as="a"
          href="/resume.pdf"
          size={btnSize}
          target="_blank"
          variant="ghostCyan"
          rightIcon={<ExternalLinkIcon />}
        >
          Resume
        </Button>
      </div>
    </Flex>
  );
}
export default Menu;
