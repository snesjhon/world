import { ExternalLinkIcon } from "@chakra-ui/icons";
import { Button, Flex } from "@chakra-ui/react";
import React from "react";
function Menu(): JSX.Element {
  return (
    <Flex justifyContent="space-between">
      <Button
        variant="ghostCyan"
        fontWeight="md"
        onClick={() =>
          document
            .querySelector("#portfolio")
            ?.scrollIntoView({ behavior: "smooth" })
        }
      >
        Portfolio
      </Button>
      <Button
        variant="ghostCyan"
        fontWeight="md"
        onClick={() =>
          document
            .querySelector("#projects")
            ?.scrollIntoView({ behavior: "smooth" })
        }
      >
        Projects
      </Button>
      <Button
        as="a"
        href="/resume.pdf"
        target="_blank"
        variant="ghostCyan"
        fontWeight="light"
        rightIcon={<ExternalLinkIcon />}
      >
        Resume
      </Button>
    </Flex>
  );
}
export default Menu;
