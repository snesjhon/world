import { ArrowUpIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Container,
  Divider,
  Fade,
  Flex,
  Heading,
  IconButton,
  Slide,
  useBreakpointValue,
  useColorModeValue,
  VStack,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { debounce } from "../components/helpers";
import GithubIcon from "../components/Icons/GithubIcon";
import InstagramIcon from "../components/Icons/InstagramIcon";
import TwitterIcon from "../components/Icons/TwitterIcon";
import Menu from "../components/Menu";

import NextLink from "next/link";

function SolidDivider() {
  const borderColor = useColorModeValue("gray.900", "gray.100");
  return (
    <Divider border="1px solid black" borderColor={borderColor} opacity={1} />
  );
}

export default function Uses(): JSX.Element {
  const [showHeader, setShowHeader] = useState(false);
  const borderColor = useColorModeValue("gray.800", "#fafafa");
  const headerBg = useColorModeValue("#fafafa", "gray.800");
  const btnSize = useBreakpointValue({ base: "sm", sm: "md" });

  const headerSize = useBreakpointValue({ base: "3xl", xs: "4xl" });
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
                      behavior: "smooth",
                    })
                  }
                />
              </Fade>
            </Box>
          </VStack>
        </Box>
        <Box border="2px solid" borderColor={borderColor}>
          {/* <Slide
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
          </Slide> */}
          <Box px={{ base: 5, sm: 10, lg: 20 }}>
            <Box pt={{ base: 9 }}>
              <NextLink href="/" passHref>
                <Button variant="linkCyan" fontWeight="md" size={btnSize}>
                  Back
                </Button>
              </NextLink>
            </Box>
            <Box
              display={{ md: "flex" }}
              pb={5}
              justifyContent="space-between"
              alignItems="baseline"
            >
              <Heading size={headerSize} whiteSpace="nowrap">
                What I use
              </Heading>
            </Box>
          </Box>
          <SolidDivider />
          something else
        </Box>
      </Container>
    </>
  );
}
