import { ExternalLinkIcon, MoonIcon, SunIcon } from "@chakra-ui/icons";
import { Button, Flex, IconButton, Link, useColorMode } from "@chakra-ui/react";
import React from "react";
function Menu(): JSX.Element {
  const { toggleColorMode, colorMode } = useColorMode();
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
      <IconButton
        icon={colorMode === "light" ? <SunIcon /> : <MoonIcon />}
        aria-label="Theme Toggle"
        onClick={toggleColorMode}
        variant="ghostCyan"
      />
    </Flex>
  );
}
export default Menu;
