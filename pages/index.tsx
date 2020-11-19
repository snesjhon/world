import {
  Box,
  Container,
  Divider,
  Flex,
  Slide,
  useColorModeValue,
  VStack,
  Heading,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import About from "../components/About";
import Experience from "../components/Experience";
import Footer from "../components/Footer";
import Goals from "../components/Goals";
import Header from "../components/Header";
import Menu from "../components/Menu";
import Projects from "../components/Projects";
import Work from "../components/Work";
import { debounce } from "../utils/debounce";

function App(): JSX.Element {
  const [showHeader, setShowHeader] = useState(false);
  const borderColor = useColorModeValue("gray.800", "#fafafa");
  const headerBg = useColorModeValue("#fafafa", "gray.800");
  const loggin = debounce(() => {
    if (window.scrollY > 200 && !showHeader) {
      setShowHeader(true);
    } else {
      setShowHeader(false);
    }
  }, 30);
  useEffect(() => {
    window.addEventListener("scroll", loggin);
    return () => {
      window.removeEventListener("scroll", loggin);
    };
  }, []);

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
          <Slide
            direction="top"
            in={showHeader}
            style={{
              position: "sticky",
              zIndex: 10,
            }}
          >
            <Box
              bg={headerBg}
              py={3}
              px={{ base: 8, md: 10 }}
              w="100%"
              borderBottom="2px solid"
              borderColor={borderColor}
            >
              <Flex
                px={{ md: 4 }}
                justifyContent="space-between"
                alignItems="center"
              >
                <Heading size="md">JP</Heading>
                <Menu />
              </Flex>
            </Box>
          </Slide>
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
// export type Procedure = (...args: any[]) => void;

// function debounce(method: any, delay: number) {
//   clearTimeout(method._timeout);
//   method._timeout = setTimeout(() => method(), delay);
// }
export default App;
