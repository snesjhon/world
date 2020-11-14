import { Box, Container, Divider } from "@chakra-ui/react";
import React from "react";
import About from "../components/About";
import Experience from "../components/Experience";
import Footer from "../components/Footer";
import Goals from "../components/Goals";
import Header from "../components/Header";
import Projects from "../components/Projects";
import Work from "../components/Work";

function App(): JSX.Element {
  return (
    <>
      <Container maxW="lg" my={{ base: 0, sm: 3 }} px={{ base: 0, sm: 4 }}>
        <Box border="2px solid" borderColor="gray.900">
          <Header />
          <SolidDivider />
          <About />
          <SolidDivider />
          <Experience />
          <SolidDivider />
          <Work />
          <SolidDivider />
          <Projects />
          <Goals />
          <SolidDivider />
          <Footer />
        </Box>
      </Container>
    </>
  );
}

function SolidDivider(): JSX.Element {
  return <Divider border="1px solid black" borderColor="black" opacity={1} />;
}

export default App;
