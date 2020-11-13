import {
  Box,
  Heading,
  Flex,
  Divider,
  Text,
  Link,
  Image,
  Grid,
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
      <Grid
        py={10}
        px={10}
        gridTemplateColumns={{ sm: "0.95fr", md: "1fr 1fr" }}
        gridTemplateRows={{ sm: "1fr 1fr", md: "1fr" }}
        justifyContent="center"
      >
        <Flex
          borderRight={{ md: "1px solid black" }}
          pr={10}
          mr={10}
          flexDirection="column"
          justifyContent="space-around"
        >
          <Flex>
            {tags.map((e, i) => (
              <Text key={e} color="gray.500" fontSize="xs">
                {e}
                {i !== tags.length - 1 && (
                  <Text as="span" px={2}>
                    |
                  </Text>
                )}
              </Text>
            ))}
          </Flex>
          <Box>
            <Heading color="gray.900">{title}</Heading>
            <Text color="gray.600">{description}</Text>
          </Box>

          <Link href={link} isExternal color="cyan.700">
            View Project
          </Link>
        </Flex>
        <Box order={{ base: -1, md: 1 }}>
          <Image src={img} />
        </Box>
      </Grid>
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
        description="How my music taste has change over time lbut make it data visualization"
        img="https://via.placeholder.com/400x250"
        link="https://google.com"
        tags={["Data Visualization", "Final Project"]}
        title="My Music"
      />
      <ProjectItem
        description="How my music taste has change over time lbut make it data visualization"
        img="https://via.placeholder.com/400x250"
        link="https://google.com"
        tags={["jhon", "something"]}
        title="My Music"
      />
      <ProjectItem
        description="lorem lorem"
        img="https://via.placeholder.com/400x250"
        link="https://google.com"
        tags={["jhon", "something"]}
        title="My Music"
      />
      <ProjectItem
        description="lorem lorem"
        img="https://via.placeholder.com/400x250"
        link="https://google.com"
        tags={["jhon", "something"]}
        title="My Music"
      />
    </>
  );
}

export default Projects;
