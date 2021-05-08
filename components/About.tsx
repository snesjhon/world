import {
  Box,
  Button,
  Divider,
  Flex,
  Heading,
  IconProps,
  Image,
  SimpleGrid,
  Spinner,
  Square,
  Text,
  useBreakpointValue,
  useColorModeValue
} from "@chakra-ui/react";
import React, { FunctionComponent, useState } from "react";
import ChakraIcon from "./Icons/ChakraIcon";
import CSSIcon from "./Icons/CSSIcon";
import DockerIcon from "./Icons/DockerIcon";
import FirebaseIcon from "./Icons/FirebaseLogo";
import HTMLIcon from "./Icons/HTMLIcon";
import JavaScriptIcon from "./Icons/JavaScriptIcon";
import PythonIcon from "./Icons/PythonIcon";
import ReactIcon from "./Icons/ReactIcon";
import ReduxIcon from "./Icons/ReduxIcon";
import SQLIcon from "./Icons/SQLIcon";
import TypeScriptIcon from "./Icons/TypeScriptIcon";
import WebflowIcon from "./Icons/WebflowIcon";
import WebpackIcon from "./Icons/WebpackIcon";
import WordpressIcon from "./Icons/WordpressIcon";

function About() {
  const [isLoaded, setIsLoaded] = useState(false);
  const beforeItem = useBreakpointValue({
    base: "-10%",
    sm: "-5%",
    md: "-15%"
  });
  const afterItemTop = useBreakpointValue({
    base: "-10%",
    sm: "-8%",
    md: "45%"
  });
  const afterItemRight = useBreakpointValue({
    base: 0,
    sm: 0,
    md: "-30%"
  });
  const borderColor = useColorModeValue("#fafafa", "gray.800");
  return (
    <Box px={{ base: 5, sm: 10, lg: 20 }}>
      <Box
        display={{ md: "grid" }}
        justifyContent="space-between"
        py={20}
        gridGap={{ md: "6rem", lg: "8rem" }}
        gridTemplateColumns={{ md: "1fr 1fr" }}
      >
        <Box mr={10}>
          <Box
            position="relative"
            _before={{
              content: "''",
              position: "absolute",
              top: "-5%",
              right: beforeItem,
              width: "100%",
              height: "110%",
              border: "2px solid",
              borderColor: !borderColor + "", // lol ts
              borderRadius: "5px",
              zIndex: 0,
              opacity: isLoaded ? 1 : 0
            }}
            _after={{
              content: "'About me'",
              position: "absolute",
              top: afterItemTop,
              right: afterItemRight,
              backgroundColor: borderColor,
              padding: 2,
              zIndex: 1,
              opacity: isLoaded ? 1 : 0
            }}
          >
            {!isLoaded && (
              <Square>
                <Spinner />
              </Square>
            )}
            <Image
              src="/images/myavatar.jpg"
              border="1px solid"
              borderColor="gray.300"
              sx={{ filter: "grayscale(1)" }}
              zIndex={3}
              borderRadius="5px"
              position="relative"
              onLoad={() => setIsLoaded(true)}
            />
          </Box>
        </Box>
        <Box pt={{ base: 20, md: 10, lg: 20 }} pl={{ base: 6, sm: 10, md: 0 }}>
          <Box pb={6}>
            <Heading size="xl" mb={4}>
              Software Engineer
            </Heading>
            <Heading
              position="relative"
              size="xl"
              _before={{ content: "'+'", position: "absolute", left: "-2rem" }}
            >
              Music Enthusiast
            </Heading>
          </Box>
          <Text>
            I specialize in creating and maintaining complex UI infrastructure.
            Oh yea, I also collect vinyls and love learning new things on
            youtube at 4am.
          </Text>
          <br />
          <Button
            as="a"
            href="mailto:snesjhon@gmail?subject=Hey Jhon Let's Talk"
            target="_blank"
            variant="cyan700"
          >
            Get in touch
          </Button>
        </Box>
      </Box>
      <Flex py={10} justifyContent="space-between">
        <Box>
          <Text pb={{ base: 5, sm: 10 }} fontSize="lg" fontWeight="bold">
            Technologies
          </Text>
          <SimpleGrid columns={{ base: 2, md: 4 }} gap={{ base: 3, sm: 10 }}>
            <AboutIcon IconCmpt={ReactIcon} text="React" />
            <AboutIcon IconCmpt={ReduxIcon} text="Redux" />
            <AboutIcon IconCmpt={ChakraIcon} text="Chakra UI" />
            <AboutIcon IconCmpt={WebpackIcon} text="Webpack" />
            <AboutIcon IconCmpt={WordpressIcon} text="Wordpress" />
            <AboutIcon IconCmpt={WebflowIcon} text="Webflow" />
            <AboutIcon IconCmpt={DockerIcon} text="Docker" />
            <AboutIcon IconCmpt={FirebaseIcon} text="Firebase" />
          </SimpleGrid>
        </Box>
        <Divider
          as="div"
          orientation="vertical"
          height="auto"
          borderColor={borderColor}
          opacity={1}
        />
        <Box>
          <Text pb={{ base: 5, sm: 10 }} fontSize="lg" fontWeight="bold">
            Languages
          </Text>
          <SimpleGrid columns={{ base: 2, md: 4 }} gap={{ base: 3, sm: 10 }}>
            <AboutIcon IconCmpt={JavaScriptIcon} text="JavaScript" />
            <AboutIcon IconCmpt={TypeScriptIcon} text="TypeScript" />
            <AboutIcon IconCmpt={PythonIcon} text="Python" />
            <AboutIcon IconCmpt={HTMLIcon} text="HTML" />
            <AboutIcon IconCmpt={CSSIcon} text="CSS" />
            <AboutIcon IconCmpt={SQLIcon} text="SQL" />
          </SimpleGrid>
        </Box>
      </Flex>
    </Box>
  );
}

function AboutIcon({
  IconCmpt,
  text
}: {
  IconCmpt: FunctionComponent<IconProps>;
  text: string;
}) {
  const iconColor = useColorModeValue("gray.900", "#fafafa");
  const textColor = useColorModeValue("gray.600", "gray.400");
  return (
    <Box textAlign="center">
      <IconCmpt color={iconColor} boxSize={{ base: 10, md: 12 }} mb={2} />
      <Text fontSize="xs" color={textColor}>
        {text}
      </Text>
    </Box>
  );
}
export default About;
