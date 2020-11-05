import { Flex, Heading, Text } from "@chakra-ui/core";
import React from "react";

function Header(): JSX.Element {
  return (
    <Flex pt={20} pb={10} justifyContent="space-between" alignItems="baseline">
      <Heading size="4xl" fontWeight="light">
        Jhon Paredes
      </Heading>
      <Flex justifyContent="space-between">
        <Text>Portfolio</Text>
        <Text px={4}>Projects</Text>
        <Text>Resume</Text>
      </Flex>
    </Flex>
  );
}

export default Header;
