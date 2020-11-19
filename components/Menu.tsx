import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import { Button, Flex, IconButton, useColorMode } from "@chakra-ui/react";
import React from "react";
function Menu(): JSX.Element {
  const { toggleColorMode, colorMode } = useColorMode();
  return (
    <Flex justifyContent="space-between">
      <Button variant="ghost" fontWeight="md">
        Portfolio
      </Button>
      <Button variant="ghost" fontWeight="md">
        Projects
      </Button>
      <Button variant="ghost" fontWeight="md">
        Resume
      </Button>
      <IconButton
        icon={colorMode === "light" ? <SunIcon /> : <MoonIcon />}
        aria-label="Theme Toggle"
        onClick={toggleColorMode}
        variant="ghost"
      />
    </Flex>
  );
}
export default Menu;
