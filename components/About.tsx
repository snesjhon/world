import {
  border,
  Box,
  Button,
  Divider,
  Flex,
  Heading,
  IconProps,
  Image,
  SimpleGrid,
  Text,
  useBreakpointValue,
  useColorModeValue,
} from "@chakra-ui/react";
import React, { FunctionComponent } from "react";
import ChakraIcon from "./Icons/ChakraIcon";
import ReactIcon from "./Icons/ReactIcon";
import ReduxIcon from "./Icons/ReduxIcon";

function About(): JSX.Element {
  const beforeItem = useBreakpointValue({ base: 0, sm: "-5%", md: "-15%" });
  const afterItemTop = useBreakpointValue({
    base: "-8%",
    sm: "-8%",
    md: "45%",
  });
  const afterItemRight = useBreakpointValue({ base: 0, sm: 0, md: "-30%" });
  const borderColor = useColorModeValue("#fafafa", "gray.800");
  return (
    <Box px={{ base: 5, sm: 10, lg: 20 }}>
      <Box display={{ md: "flex" }} justifyContent="space-between" py={20}>
        <Box maxW={{ md: "40%" }} mr={10}>
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
            }}
            _after={{
              content: "'About me'",
              position: "absolute",
              top: afterItemTop,
              right: afterItemRight,
              backgroundColor: borderColor,
              padding: 2,
              zIndex: 1,
            }}
          >
            <Image
              src="/images/avatar.jpg"
              border="1px solid"
              borderColor="gray.300"
              css={{ filter: "grayscale(1)" }}
              borderRadius="5px"
            />
          </Box>
        </Box>
        <Box pt={20} pl={{ base: 6, sm: 10, md: 0 }}>
          <Box pb={10}>
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
          <Text>A forever student I have a strong</Text>
          <Text>A forever student I have a strong</Text>
          <Text pb={10}>A forever student I have a strong</Text>
          <Button bg="cyan.700" color="white">
            Get in touch
          </Button>
        </Box>
      </Box>
      <Flex py={10} justifyContent="space-between">
        <Box>
          <Text pb={10} fontSize="lg" fontWeight="bold">
            Technologies
          </Text>
          <SimpleGrid columns={{ sm: 2, md: 4 }} gap={10}>
            <AboutIcon IconCmpt={ChakraIcon} text="Chakra UI" />
            <AboutIcon IconCmpt={ReactIcon} text="React" />
            <AboutIcon IconCmpt={ReduxIcon} text="Redux" />
            <AboutIcon IconCmpt={ChakraIcon} text="Chakra UI" />
            <AboutIcon IconCmpt={ReactIcon} text="React" />
            <AboutIcon IconCmpt={ReactIcon} text="React" />
            <AboutIcon IconCmpt={ReactIcon} text="React" />
            <AboutIcon IconCmpt={ReduxIcon} text="Redux" />
          </SimpleGrid>
        </Box>
        <Divider
          as="div"
          orientation="vertical"
          height="auto"
          borderColor={!borderColor + ""}
          opacity={1}
        />
        <Box>
          <Text pb={10} fontSize="lg" fontWeight="bold">
            Languages
          </Text>
          <SimpleGrid columns={{ sm: 2, md: 4 }} gap={10}>
            <AboutIcon IconCmpt={ChakraIcon} text="Chakra UI" />
            <AboutIcon IconCmpt={ReactIcon} text="React" />
            <AboutIcon IconCmpt={ReduxIcon} text="Redux" />
            <AboutIcon IconCmpt={ChakraIcon} text="Chakra UI" />
            <AboutIcon IconCmpt={ReactIcon} text="React" />
            <AboutIcon IconCmpt={ReactIcon} text="React" />
            <AboutIcon IconCmpt={ReactIcon} text="React" />
            <AboutIcon IconCmpt={ReduxIcon} text="Redux" />
          </SimpleGrid>
        </Box>
      </Flex>
    </Box>
  );
}

function AboutIcon({
  IconCmpt,
  text,
}: {
  IconCmpt: FunctionComponent<IconProps>;
  text: string;
}) {
  const iconColor = useColorModeValue("gray.900", "#fafafa");
  const textColor = useColorModeValue("gray.600", "gray.400");
  return (
    <Box textAlign="center">
      <IconCmpt color={iconColor} boxSize={12} mb={2} />
      <Text fontSize="xs" color={textColor}>
        {text}
      </Text>
    </Box>
  );
}
export default About;
