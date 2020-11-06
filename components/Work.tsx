import { Box, Button, Center, Divider, Flex, Heading, Text } from "@chakra-ui/core";
import React from "react";

function Work(): JSX.Element {
  return (
    <>
      <Box py={10}>
        <Center>
          <Heading size="4xl" fontWeight="light">
            Selected Work
          </Heading>
        </Center>
      </Box>
      <Divider border="1px solid black" borderColor="black" opacity={1} />
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

export default Work;
