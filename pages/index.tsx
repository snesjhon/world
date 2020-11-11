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
          <Header />
          <SolidDivider />
          <About />
          <SolidDivider />
          <Experience />
          <SolidDivider />
          <Work />
        </Box>
      </Container>
    </>
  );
}

function SolidDivider(): JSX.Element {
  return <Divider border="1px solid black" borderColor="black" opacity={1} />;
}

export default App;
