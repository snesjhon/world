import {
  Box,
  Button,
  Divider,
  Flex,
  Heading,
  Image,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalOverlay,
  Tag,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react";
import React, { useState } from "react";

interface Work {
  title: string;
  year: string;
  tags: string[];
  description: string;
  imgArr: string[];
  type: string[];
}

const workInfo: Work[] = [
  {
    title: "conDati",
    year: "2018 - current",
    tags: ["Lead UI Developer", "Infrastructure", "Design"],
    description:
      "Apply AI and Machine Learning algorithms to build analytic solutions that transform massive volumes of customer, event, and transaction data into accessible dashboards, alerts and automatic reports",
    imgArr: ["asd", "asdasd"],
    type: ["JavaScript", "Python", "React", "Redux"],
  },
  {
    title: "Akamai mPulse",
    year: "2017 - 2018",
    tags: ["UI Developer", "Design"],
    description:
      "Get granular visibility into how end users perceive performance, and take action against third-party resources that are slowing you down. Maximize your business outcomes by prioritizing enhancements that matter.",
    imgArr: ["asd", "asda"],
    type: ["JavaScript", "React", "Java", "Redux", "Java"],
  },
  {
    title: "SOASTA",
    year: "2015 - 2017",
    tags: ["Lead Designer", "Wordpress Developer"],
    description:
      "Cloud-based testing services, and created a browser-based website testing product. Website tests include load testing, software performance testing, functional testing and user interface testing.",
    imgArr: ["asd", "asda"],
    type: ["JavaScript", "Wordpress"],
  },
  {
    title: "Hawk Ridge Systems",
    year: "2013 - 2015",
    tags: ["UI Developer", "Design"],
    description: "asdasd",
    imgArr: ["asd", "asda"],
    type: ["Wordpress"],
  },
  {
    title: "CrossFit Endgame",
    year: "2014",
    tags: ["Lead UI Developer", "Lead Designer"],
    description: "asdasd",
    imgArr: ["Lead Designer", "Lead UI Developer"],
    type: ["Wordpress"],
  },
];

function Work(): JSX.Element {
  const [isOpen, setIsOpen] = useState(-1);
  const [workFilter, setWorkFilter] = useState<string>("all");
  const items = [...new Set(workInfo.map((e) => e.type).flat())];
  const filteredWork = workInfo.filter((e) =>
    workFilter === "all" ? e : e.type.includes(workFilter)
  );
  return (
    <>
      <Box id="portfolio" pt={10} pb={10} textAlign="center">
        <Text fontSize="sm">Portfolio</Text>
        <Heading size="3xl" fontWeight="light" py={5}>
          Selected Work
        </Heading>
        <Flex justifyContent="center">
          <Button
            variant="link"
            size="sm"
            mr={3}
            onClick={() => setWorkFilter("all")}
          >
            All
          </Button>
          {items.map((e) => (
            <Button
              variant="link"
              key={e}
              size="sm"
              mr={3}
              onClick={() => setWorkFilter(e)}
            >
              {e}
            </Button>
          ))}
        </Flex>
      </Box>
      <Divider border="1px solid black" borderColor="black" opacity={1} />
      <Box
        display={{ base: "block", sm: "block", md: "grid" }}
        gridTemplateColumns={{ md: "1fr 1fr" }}
      >
        {filteredWork.map(({ title, year, tags }, i) => (
          <WorkItem
            br={i % 2 === 0}
            last={i > 1 && i === filteredWork.length - 1}
            key={title + year}
            index={i}
            title={title}
            year={year}
            tags={tags}
            onOpen={onOpen}
          />
        ))}
      </Box>
      <Modal
        isOpen={isOpen !== -1}
        onClose={() => setIsOpen(-1)}
        isCentered
        size="xl"
      >
        <ModalOverlay />
        <ModalContent>
          <ModalCloseButton />
          <ModalBody>
            <WorkModal item={workInfo[isOpen]} />
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
  function onOpen(id: number) {
    return setIsOpen(id);
  }
}

function WorkItem({
  title,
  br,
  last,
  year,
  tags,
  onOpen,
  index,
}: {
  title: string;
  br: boolean;
  last: boolean;
  year: string;
  index: number;
  tags: string[];
  onOpen: (id: number) => void;
}): JSX.Element {
  const borderRight = useBreakpointValue({ md: "1px solid black" });
  return (
    <Flex
      borderRight={br && !last ? borderRight : undefined}
      borderBottom={last ? undefined : "1px solid black"}
      justifyContent="center"
      gridColumn={last ? "span 2" : undefined}
    >
      <Flex p={10} flexDirection="column">
        <Image
          src="https://via.placeholder.com/400x250"
          onClick={() => onOpen(index)}
        />
        <Flex py={8} justifyContent="space-between">
          <Heading size="lg">{title}</Heading>
          <Text color="gray.700">({year})</Text>
        </Flex>
        <Flex marginTop="auto">
          {tags.map((e) => (
            <Tag key={e} mr={3}>
              {e}
            </Tag>
          ))}
        </Flex>
      </Flex>
    </Flex>
  );
}

function WorkModal({ item }: { item: Work }) {
  const { title, description, tags } = item;
  return (
    <Flex>
      <Box pr={4} borderRight="1px solid" borderColor="black">
        <Flex justifyContent="space-between">
          <Heading>{title}</Heading>
          <Text>{title}</Text>
        </Flex>
        <Text>{description}</Text>
      </Box>
      <Box>
        <Text fontSize="lg">Technologies</Text>
        <Flex>
          {tags.map((e) => (
            <Text key={e}>{e}</Text>
          ))}
        </Flex>
      </Box>
    </Flex>
  );
}
export default Work;
