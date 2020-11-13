import {
  Box,
  Divider,
  Flex,
  Heading,
  Image,
  Tag,
  Text,
  useBreakpointValue,
} from "@chakra-ui/core";
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
        <WorkItem
          br
          title="conDati"
          year="2018 - current"
          tags={["Lead UI Developer", "Infrastructure", "Design"]}
        />
        <WorkItem
          title="Akamai mPulse"
          year="2017 - 2018"
          tags={["UI Developer", "Design"]}
        />
      </Box>
      <Box
        display={{ base: "block", sm: "block", md: "grid" }}
        gridTemplateColumns={{ md: "1fr 1fr" }}
      >
        <WorkItem
          br
          title="SOASTA"
          year="2015 - 2017"
          tags={["Lead Designer", "Wordpress Developer"]}
        />
        <WorkItem
          title="Hawk Ridge Systems"
          year="2013 - 2015"
          tags={["UI Developer", "Design"]}
        />
      </Box>
      <WorkItem
        title="CrossFit Endgame"
        year="2014"
        tags={["Lead Designer", "Lead UI Developer"]}
        last
      />
    </>
  );
}

function WorkItem({
  br,
  last,
  title,
  year,
  tags,
}: {
  br?: boolean;
  last?: boolean;
  title: string;
  year: string;
  tags: string[];
}): JSX.Element {
  const borderRight = useBreakpointValue({ md: "1px solid black" });
  return (
    <Flex
      borderRight={br ? borderRight : undefined}
      borderBottom={last ? undefined : "1px solid black"}
      justifyContent="center"
    >
      <Box p={10} flexDirection="column">
        <Image src="https://via.placeholder.com/400x250" />
        <Flex py={8} justifyContent="space-between">
          <Heading color="gray.700">{title}</Heading>
          <Text color="gray.700">({year})</Text>
        </Flex>
        <Flex>
          {tags.map((e) => (
            <Tag key={e} mr={6}>
              {e}
            </Tag>
          ))}
        </Flex>
      </Box>
    </Flex>
  );
}

export default Work;
