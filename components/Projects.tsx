import { ExternalLinkIcon } from "@chakra-ui/icons";
import {
  Box,
  Heading,
  Flex,
  Divider,
  Text,
  Link,
  Image,
  Grid,
  Button,
  Icon,
} from "@chakra-ui/react";
import React from "react";

function Projects(): JSX.Element {
  return (
    <>
      <Box
        id="projects"
        display={{ base: "block", sm: "block", md: "flex" }}
        pt={10}
        pb={5}
        px={10}
        textAlign="center"
        alignItems="baseline"
      >
        <Box>
          <Heading size="3xl" fontWeight="light" py={5}>
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
        description="My Data Visualization Final Project about my iTunes Music Data created using Observable"
        img="https://via.placeholder.com/400x250"
        link="https://google.com"
        tags={["Data Visualization", "Final Project"]}
        title="My Music"
      />
      <ProjectItem
        description="Make a website with just a single Markdown file"
        img="https://via.placeholder.com/400x250"
        link="https://google.com"
        tags={["npm package", "markdown"]}
        title="singlemd"
      />
      <ProjectItem
        description="Imagine a movie that includes every day of the rest of your life."
        img="https://via.placeholder.com/400x250"
        link="https://google.com"
        tags={["personal", "youtube"]}
        title="1 Second Every Day"
      />
      <ProjectItem
        description="My ongoing list of Rolling Stone's 500 Best Albums"
        img="https://via.placeholder.com/400x250"
        link="https://google.com"
        tags={["music", "lists"]}
        title="RS 500"
      />
    </>
  );
}

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
          <Box>
            <Button
              variant="link"
              as={Link}
              href={link}
              size="sm"
              isExternal
              rightIcon={<ExternalLinkIcon />}
            >
              View Project
            </Button>
          </Box>
        </Flex>
        <Box order={{ base: -1, md: 1 }}>
          <Image src={img} />
        </Box>
      </Grid>
      <Divider border="1px solid black" borderColor="black" opacity={1} />
    </>
  );
}

export default Projects;
