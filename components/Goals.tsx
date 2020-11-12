import {
  Box,
  Center,
  Heading,
  SimpleGrid,
  useBreakpointValue,
  Text,
} from "@chakra-ui/core";
import React from "react";

function Goals(): JSX.Element {
  const headerSize = useBreakpointValue({ base: "3xl", xs: "4xl" });
  return (
    <>
      <Box pt={10} pb={1} borderBottom="2px solid black">
        <Center>
          <Heading size={headerSize}>Goals</Heading>
        </Center>
        <SimpleGrid
          columns={{ base: 1, md: 2 }}
          rows={{ base: 2, md: 1 }}
          textAlign="center"
        >
          <Text fontWeight="bold">Current</Text>
          <Text fontWeight="bold">Achieved</Text>
        </SimpleGrid>
      </Box>
      <SimpleGrid columns={{ base: 1, md: 2 }} rows={{ base: 2, md: 1 }}>
        <Box borderRight={{ base: 0, md: "2px solid black" }}>
          <Box py={{ base: 0, md: 20 }} px={10}>
            <Heading size="md" pb={2}>
              + Visit Japan
            </Heading>
            <Heading size="md" pb={2}>
              + Own a House
            </Heading>
            <Heading size="md" pb={2}>
              + Amtrak Cross Country
            </Heading>
            <Heading size="md" pb={2}>
              + Present at a Conference
            </Heading>
            <Heading size="md" pb={2}>
              + Cross Country Motorcycle Trip
            </Heading>
            <Heading size="md" pb={2}>
              + Complete RS 500 personal project{" "}
            </Heading>
          </Box>
        </Box>
        <Box py={{ base: 0, md: 20 }} px={10}>
          <Heading size="md">+ Alcatraz Swim </Heading>
          <Heading size="md">+ Golden Gate Swim </Heading>
          <Heading size="md">+ Own a Motorcycle </Heading>
          <Heading size="md">+ Become a Software Engineer</Heading>
        </Box>
      </SimpleGrid>
    </>
  );
}

export default Goals;
