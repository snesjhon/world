import {
  Box,
  Heading,
  Flex,
  Divider,
  Text,
  Link,
  Image,
} from "@chakra-ui/core";
import React from "react";

function ProjectItem({
  tags,
  title,
  description,
  link,
  img,
}: {
  tags: string[];
  title: string;
  description: string;
  link: string;
  img: string;
}): JSX.Element {
  return (
    <>
      <Flex py={16} px={10}>
        <Flex
          borderRight="1px solid black"
          pr={10}
          mr={10}
          flexDirection="column"
          justifyContent="space-between"
        >
          {tags.map((e) => (
            <Text key={e}>{e}</Text>
          ))}
          <Box>
            <Heading>{title}</Heading>
            <Text>{description}</Text>
          </Box>

          <Link href={link}>View Project</Link>
        </Flex>
        <Box>
          <Image src={img} />
        </Box>
      </Flex>
      <Divider border="1px solid black" borderColor="black" opacity={1} />
    </>
  );
}

function Projects(): JSX.Element {
  return (
    <>
      <Box
        display={{ base: "block", sm: "block", md: "flex" }}
        pt={10}
        pb={5}
        px={10}
        textAlign="center"
        alignItems="baseline"
      >
        <Box>
          <Heading size="4xl" fontWeight="light" py={5}>
            Side Projects
          </Heading>
        </Box>
        <Flex justifyContent="center" pl={10}>
          <Text color="cyan.700">All</Text>
          <Text px={4} color="gray.500">
            Code
          </Text>
          <Text color="gray.500">Non-code</Text>
        </Flex>
      </Box>
      <Divider border="1px solid black" borderColor="black" opacity={1} />
      <ProjectItem
        description="lorem lorem"
        img="https://via.placeholder.com/468x250"
        link="https://google.com"
        tags={["jhon", "something"]}
        title="My Music"
      />
      <ProjectItem
        description="lorem lorem"
        img="https://via.placeholder.com/468x250"
        link="https://google.com"
        tags={["jhon", "something"]}
        title="My Music"
      />
      <ProjectItem
        description="lorem lorem"
        img="https://via.placeholder.com/468x250"
        link="https://google.com"
        tags={["jhon", "something"]}
        title="My Music"
      />
      <ProjectItem
        description="lorem lorem"
        img="https://via.placeholder.com/468x250"
        link="https://google.com"
        tags={["jhon", "something"]}
        title="My Music"
      />
    </>
  );
}

export default Projects;
