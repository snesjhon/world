import {
  Image,
  Box,
  Button,
  Flex,
  Heading,
  SimpleGrid,
  Text,
} from "@chakra-ui/core";
import React from "react";

function About(): JSX.Element {
  return (
    <>
      <SimpleGrid columns={2} py={20}>
        <Box>
          <Box
            border="2px solid black"
            p={4}
            ml={10}
            display="inline-block"
            position="relative"
            w="300px"
            h="350px"
          >
            <Image
              src="gibbresh.png"
              fallbackSrc="https://via.placeholder.com/280x310"
              position="absolute"
              left="-10%"
            />
          </Box>
        </Box>
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
      </SimpleGrid>
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
