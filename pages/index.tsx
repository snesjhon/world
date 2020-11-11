import { Box, Container, Divider } from "@chakra-ui/core";
import React from "react";
import About from "../components/About";
import Experience from "../components/Experience";
import Header from "../components/Header";
import Work from "../components/Work";

function App(): JSX.Element {
  return (
    <>
      <Container maxW="lg" my={{ base: 0, sm: 3 }} px={{ base: 0, sm: 4 }}>
        <Box border="2px solid black">
          <Box px={{ base: 5, sm: 10, lg: 20 }}>
            <Header />
          </Box>
          <Divider border="1px solid black" borderColor="black" opacity={1} />
          <Box px={{ base: 5, sm: 10, lg: 20 }}>
            <About />
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
