import { Box, Divider, Flex, Heading, Image, Tag, Text } from "@chakra-ui/core";
import React from "react";

function Work(): JSX.Element {
  return (
    <>
      <Box pt={10} pb={5} textAlign="center">
        <Text fontSize="sm">Portfolio</Text>
        <Heading size="4xl" fontWeight="light" py={5}>
          Selected Work
        </Heading>
        <Flex justifyContent="center">
          <Text color="cyan.700">All</Text>
          <Text px={4} color="gray.500">
            Code
          </Text>
          <Text color="gray.500">Non-code</Text>
        </Flex>
      </Box>
      <Divider border="1px solid black" borderColor="black" opacity={1} />
      <Box
        display={{ base: "block", sm: "block", md: "grid" }}
        gridTemplateColumns={{ md: "1fr 1fr" }}
      >
        <WorkItem />
        <WorkItem />
      </Box>
      <Box
        display={{ base: "block", sm: "block", md: "grid" }}
        gridTemplateColumns={{ md: "1fr 1fr" }}
      >
        <WorkItem />
        <WorkItem />
      </Box>
    </>
  );
}

function WorkItem(): JSX.Element {
  return (
    <Box
      p={10}
      borderRight="1px solid black"
      borderBottom="1px solid black"
      flexDirection="column"
    >
      <Image src="https://via.placeholder.com/400x250" />
      <Flex py={8} justifyContent="space-between">
        <Heading>conDati</Heading>
        <Text>(2018 - currently)</Text>
      </Flex>
      <Flex>
        <Tag>Item</Tag>
        <Tag>Item2</Tag>
        <Tag>Item3</Tag>
      </Flex>
    </Box>
  );
}

export default Work;
