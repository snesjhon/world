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

function App(): JSX.Element {
  return (
    <>
      <Container maxW="lg" mt={3} border="2px solid black" px={0}>
        <Box px={10}>
          <Header />
        </Box>
        <Divider border="1px solid black" borderColor="black" opacity={1} />
        <Box px={10}>
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
      </Container>
    </>
  );
}

export default App;
