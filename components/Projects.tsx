import { ExternalLinkIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Divider,
  Flex,
  Grid,
  Heading,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react";
import Image from "next/image";
import React, { useState } from "react";

interface ProjectProps {
  tags: string[];
  title: string;
  description: string;
  link: string;
  img: string;
  type: "code" | "non";
}
const projectItems: ProjectProps[] = [
  {
    tags: ["Data Visualization", "Final Project"],
    title: "My Music",
    description:
      "My Data Visualization Final Project about my iTunes Music Data created using Observable",
    link: "https://observablehq.com/@snesjhon/my-apple-music-data",
    img: "/images/mymusic.jpg",
    type: "code",
  },
  {
    tags: ["npm Package", "Markdown"],
    title: "singlemd",
    description: "Make a website with just a single Markdown file",
    link: "https://singlemd.netlify.app/",
    img: "/images/project-singlemd.jpg",
    type: "code",
  },
  {
    tags: ["Personal", "Youtube"],
    title: "1 Second Every Day",
    description:
      "Imagine a movie that includes every day of the rest of your life.",
    link:
      "https://www.youtube.com/playlist?list=PLxN1mKPLtPoUFuE9-lFj9I0E_-eo3U2oi",
    img: "/images/project-1sed.jpg",
    type: "non",
  },
  {
    tags: ["Music", "Lists"],
    title: "RS 500",
    description: "My ongoing list of Rolling Stone's 500 Best Albums",
    link:
      "https://docs.google.com/spreadsheets/d/1ZfLCreXs221cBq6m8PfdU8863zbTJs54FxKWJs5AsjA/edit?usp=sharing",
    img: "/images/project-rs500.jpg",
    type: "non",
  },
];
function Projects(): JSX.Element {
  const [currentActive, setCurrentActive] = useState<
    ProjectProps["type"] | "all"
  >("all");
  const btnSize = useBreakpointValue({ base: "xs", sm: "sm" });
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
          <Button
            variant={currentActive === "all" ? "cyan700" : "ghostCyan"}
            onClick={() => setCurrentActive("all")}
            size={btnSize}
          >
            All
          </Button>
          <Button
            variant={currentActive === "code" ? "cyan700" : "ghostCyan"}
            onClick={() => setCurrentActive("code")}
            size={btnSize}
          >
            Code
          </Button>
          <Button
            variant={currentActive === "non" ? "cyan700" : "ghostCyan"}
            onClick={() => setCurrentActive("non")}
            size={btnSize}
          >
            Non-code
          </Button>
        </Flex>
      </Box>
      <Divider border="1px solid black" borderColor="black" opacity={1} />
      {projectItems
        .filter((e) =>
          currentActive === "all" ? e : e.type.includes(currentActive)
        )
        .map((e) => (
          <ProjectItem key={e.title} {...e} />
        ))}
    </>
  );
}

function ProjectItem({
  tags,
  title,
  description,
  link,
  img,
}: ProjectProps): JSX.Element {
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
              href={link}
              variant="linkCyan"
              as="a"
              rightIcon={<ExternalLinkIcon />}
              target="_blank"
            >
              View Project
            </Button>
          </Box>
        </Flex>
        <Box order={{ base: -1, md: 1 }}>
          <Box
            as="a"
            href={link}
            className="nextImg"
            position="relative"
            display="block"
            target="_blank"
          >
            {/* <Link isExternal href={link}> */}
            <Image src={img} width={1086} height={628} />
            {/* </Link> */}
          </Box>
        </Box>
      </Grid>
      <Divider border="1px solid black" borderColor="black" opacity={1} />
    </>
  );
}

export default Projects;
