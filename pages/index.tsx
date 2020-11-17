import {
  Box,
  Container,
  Divider,
  useColorModeValue,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import About from "../components/About";
import Experience from "../components/Experience";
import Footer from "../components/Footer";
import Goals from "../components/Goals";
import Header from "../components/Header";
import Projects from "../components/Projects";
import Work from "../components/Work";

function App(): JSX.Element {
  const borderColor = useColorModeValue("gray.900", "gray.100");

  return (
    <>
      <Container
        position="relative"
        maxW="lg"
        my={{ base: 0, sm: 3 }}
        px={{ base: 0, sm: 4 }}
      >
        <VStack
          position="fixed"
          bottom="50%"
          ml="-5%"
          display={{ sm: "none", xl: "block" }}
        >
          <Box>asdin</Box>
          <Box>asdin</Box>
          <Box>asdin</Box>
          <Box>asdin</Box>
        </VStack>
        <Box position="absolute" right="0">
          <VStack
            position="fixed"
            bottom="5%"
            display={{ sm: "none", xl: "block" }}
          >
            <Box>asdin</Box>
            <Box>asdin</Box>
            <Box>asdin</Box>
            <Box>asdin</Box>
          </VStack>
        </Box>
        <Box border="2px solid" borderColor={borderColor}>
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
  const borderColor = useColorModeValue("gray.900", "gray.100");
  return (
    <Divider border="1px solid black" borderColor={borderColor} opacity={1} />
  );
}

export default App;
