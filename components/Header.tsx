import { Flex, Box, Heading, Text, useBreakpointValue } from "@chakra-ui/core";
import React from "react";

function Header(): JSX.Element {
  const headerSize = useBreakpointValue({ base: "3xl", xs: "4xl" });
  return (
    <Box px={{ base: 5, sm: 10, lg: 20 }}>
      <Box
        display={{ md: "flex" }}
        pt={16}
        pb={5}
        justifyContent="space-between"
        alignItems="baseline"
      >
        <Heading size={headerSize}>Jhon Paredes</Heading>
        <Flex justifyContent="space-between" pt={2}>
          <Text>Portfolio</Text>
          <Text px={4}>Projects</Text>
          <Text>Resume</Text>
        </Flex>
      </Box>
    </Box>
  );
}

export default Header;
