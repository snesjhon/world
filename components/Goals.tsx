import {
  Box,
  Center,
  Heading,
  SimpleGrid,
  useBreakpointValue,
  Text,
} from "@chakra-ui/react";
import React from "react";

const goals = ["Visit Japan", "Complete RS 500 personal Projects"];

const achieved = [
  "Alcatraz Swim",
  "Golden Gate Swim",
  "Own a Motorcycle",
  "Become a Software Engineer",
  "Cross Country Road Trip",
  "Own a House",
];

function Goals(): JSX.Element {
  const headerSize = useBreakpointValue({ base: "3xl", xs: "4xl" });
  return (
    <>
      <Box pt={10} pb={1}>
        <Center>
          <Heading size={headerSize}>Goals</Heading>
        </Center>
      </Box>
      <SimpleGrid columns={{ base: 1, md: 2 }} rows={{ base: 2, md: 1 }}>
        <Box>
          <Text
            textAlign="center"
            fontWeight={800}
            borderBottom={{ md: "2px solid black" }}
            pb={2}
          >
            Current
          </Text>
          <Box py={{ sm: 2, md: 20 }} px={20} position="relative">
            {goals.map((e) => (
              <Heading
                size="md"
                pb={2}
                key={e}
                _before={{
                  content: "'+'",
                  position: "absolute",
                  marginLeft: "-4%",
                }}
              >
                {e}
              </Heading>
            ))}
          </Box>
        </Box>
        <Box>
          <Text
            textAlign="center"
            fontWeight="bold"
            borderBottom={{ base: 0, md: "2px solid black" }}
            pb={2}
          >
            Achieved
          </Text>
          <Box
            py={{ sm: 2, md: 20 }}
            px={20}
            position="relative"
            borderLeft={{ md: "2px solid black" }}
          >
            {achieved.map((e) => (
              <Heading
                size="md"
                pb={2}
                key={e}
                _before={{
                  content: "'✓'",
                  position: "absolute",
                  marginLeft: "-4%",
                }}
              >
                {e}
              </Heading>
            ))}
          </Box>
        </Box>
      </SimpleGrid>
    </>
  );
}

export default Goals;
