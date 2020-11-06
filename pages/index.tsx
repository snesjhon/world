import {
  Box,
  Center,
  Container,
  Divider,
  Heading,
  SimpleGrid,
} from "@chakra-ui/core";
import React from "react";
import About from "../components/About";
import Experience from "../components/Experience";
import Header from "../components/Header";
import Work from "../components/Work";

function App(): JSX.Element {
  return (
    <>
      <Container maxW="lg" my={3}>
        <Box border="2px solid black">
          <Box px={20}>
            <Header />
          </Box>
          <Divider border="1px solid black" borderColor="black" opacity={1} />
          <Box px={20}>
            <About />
          </Box>
          <Divider border="1px solid black" borderColor="black" opacity={1} />
          <Box py={10}>
            <Center>
              <Heading size="4xl" fontWeight="light">
                Experience
              </Heading>
            </Center>
          </Box>
          <Divider border="1px solid black" borderColor="black" opacity={1} />
          <Experience />
          <Divider border="1px solid black" borderColor="black" opacity={1} />
          <Work />
        </Box>
      </Container>
    </>
  );
}

export default App;
