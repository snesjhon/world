import { Box, Button, Flex, Heading, Text } from "@chakra-ui/core";
import React from "react";

function About(): JSX.Element {
  return (
    <>
      <Flex py={20}>
        <Box>About me</Box>
        <Box>
          <Heading>
            Software Engineer <br /> + Music Enthusiast
          </Heading>
          <Text>
            A forever student I have a strong passion for expanding my knowledge
            met minim molasdasdlit. Met minim mollit met minim mollit.
          </Text>
          <Button colorScheme="cyan">Get in Touch</Button>
        </Box>
      </Flex>
      <Flex px={10} justifyContent="space-between">
        <Box>
          <Heading size="md">Technologies</Heading>
        </Box>
        <Box>
          <Heading size="md">Languages</Heading>
        </Box>
      </Flex>
    </>
  );
}

export default About;
