import {
  Box,
  Container,
  Divider,
  Flex,
  Slide,
  useColorModeValue,
  VStack,
  Heading,
  IconButton,
  Fade
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
import { debounce } from "../components/helpers";
import GithubIcon from "../components/Icons/GithubIcon";

import { ArrowUpIcon } from "@chakra-ui/icons";
import InstagramIcon from "../components/Icons/InstagramIcon";
import TwitterIcon from "../components/Icons/TwitterIcon";

function SolidDivider() {
  const borderColor = useColorModeValue("gray.900", "gray.100");
  return (
    <Divider border="1px solid black" borderColor={borderColor} opacity={1} />
  );
}

function App() {
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
  }, [loggin]);

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
          bottom="30%"
          ml="-5%"
          display={{ base: "none", xl: "block" }}
        >
          <Box>
            <IconButton
              as="a"
              aria-label="Github"
              variant="ghost"
              icon={<GithubIcon boxSize={8} color="cyan.700" />}
              href="https://github.com/snesjhon"
              target="_blank"
            />
          </Box>
          <Box>
            <IconButton
              as="a"
              aria-label="Instagram"
              variant="ghost"
              icon={<InstagramIcon boxSize={8} color="cyan.700" />}
              href="https://www.instagram.com/snesjhon/"
              target="_blank"
            />
          </Box>
          <Box>
            <IconButton
              as="a"
              aria-label="Twitter"
              variant="ghost"
              icon={<TwitterIcon boxSize={8} color="cyan.700" />}
              href="https://twitter.com/snesjhon"
              target="_blank"
            />
          </Box>
        </VStack>
        <Box position="absolute" right="0">
          <VStack
            position="fixed"
            bottom="30%"
            display={{ base: "none", xl: "block" }}
          >
            <Box>
              <Fade in={showHeader}>
                <IconButton
                  icon={<ArrowUpIcon />}
                  aria-label="Up Icon"
                  border="1px solid"
                  variant="ghost"
                  color="cyan.700"
                  boxSize={10}
                  onClick={() =>
                    document.documentElement.scrollTo({
                      top: 0,
                      behavior: "smooth"
                    })
                  }
                />
              </Fade>
            </Box>
          </VStack>
        </Box>
        <Box border="2px solid" borderColor={borderColor}>
          <Slide
            direction="top"
            in={showHeader}
            style={{
              position: "sticky",
              zIndex: 10
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

export default App;
