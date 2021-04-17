import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Divider,
  Flex,
  Heading,
  IconButton,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  SimpleGrid,
  Tag,
  Image as Img,
  Text,
  useBreakpointValue
} from "@chakra-ui/react";
import Image from "next/image";
import React, { useState } from "react";
import JavaScriptIcon from "./Icons/JavaScriptIcon";
import TypeScriptIcon from "./Icons/TypeScriptIcon";
import PythonIcon from "./Icons/PythonIcon";
import WordpressIcon from "./Icons/WordpressIcon";
import ReduxIcon from "./Icons/ReduxIcon";
import ReactIcon from "./Icons/ReactIcon";

interface Props {
  title: string;
  company: string;
  year: string;
  tags: string[];
  description: string;
  imgArr: string[];
  type: string[];
}

const workInfo: Props[] = [
  {
    company: "conDati",
    title: "Sr. UI Engineer",
    year: "2018 - 2021",
    tags: ["Lead UI Developer", "Infrastructure", "Design"],
    description:
      "Apply AI and Machine Learning algorithms to build analytic solutions that transform massive volumes of customer, event, and transaction data into accessible dashboards, alerts and automatic reports",
    imgArr: ["condati1.jpg", "condati2.jpg", "condati3.jpg"],
    type: ["JavaScript", "TypeScript", "React", "Python", "Redux"]
  },
  {
    company: "Akamai mPulse",
    title: "Software Engineer II",
    year: "2017 - 2018",
    tags: ["UI Developer", "Design"],
    description:
      "Get granular visibility into how end users perceive performance, and take action against third-party resources that are slowing you down. Maximize your business outcomes by prioritizing enhancements that matter.",
    imgArr: ["akamai1.jpg", "akamai2.jpg", "akamai3.jpg"],
    type: ["JavaScript", "React", "Redux"]
  },
  {
    company: "SOASTA",
    title: "Software Engineer",
    year: "2015 - 2017",
    tags: ["Lead Designer", "Wordpress Developer"],
    description:
      "Cloud-based testing services, and created a browser-based website testing product. Website tests include load testing, software performance testing, functional testing and user interface testing.",
    imgArr: ["soasta1.jpg", "soasta2.jpg", "soasta3.jpg"],
    type: ["JavaScript", "Wordpress"]
  },
  {
    company: "Hawk Ridge Systems",
    title: "Web Developer",
    year: "2013 - 2015",
    tags: ["UI Developer", "Wordpress Developer"],
    description:
      "The largest worldwide partner for Dassault Systèmes SOLIDWORKS, our goal at Hawk Ridge Systems is to provide you with the the widest selection of 3D design and manufacturing solutions, and access to the most experienced team of professionals in the industry.",
    imgArr: ["hrs1.jpg", "hrs2.jpg", "hrs3.jpg"],
    type: ["Wordpress"]
  }
];

function Work(): JSX.Element {
  const [isOpen, setIsOpen] = useState(-1);
  const [workFilter, setWorkFilter] = useState<string>("all");
  const buttonSize = useBreakpointValue({ base: "xs", sm: "sm" });
  const modalSize = useBreakpointValue({ base: "full", sm: "xl", md: "5xl" });
  const items = [...new Set(...workInfo.map((e) => e.type))];
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
        <Flex justifyContent="center" flexWrap="wrap">
          <Button
            variant={workFilter === "all" ? "cyan700" : "ghostCyan"}
            size={buttonSize}
            onClick={() => setWorkFilter("all")}
          >
            All
          </Button>
          {items.map((e) => (
            <Button
              variant={workFilter === e ? "cyan700" : "ghostCyan"}
              key={e}
              size={buttonSize}
              onClick={() => setWorkFilter(e)}
              colorScheme={workFilter === e ? "cyan" : undefined}
            >
              {e}
            </Button>
          ))}
        </Flex>
      </Box>
      <Divider border="1px solid black" borderColor="black" opacity={1} />
      <Box
        display={{ base: "block", sm: "block", md: "grid" }}
        gridTemplateColumns={{
          md: filteredWork.length === 1 ? ".5fr" : "1fr 1fr"
        }}
        justifyContent={filteredWork.length === 1 ? "center" : undefined}
      >
        {filteredWork.map((props, i) => (
          <WorkItem
            br={i % 2 === 0}
            bb={
              filteredWork.length === 2 ||
              (filteredWork.length === 4 && i === 2)
            }
            last={
              (i > 1 && i === filteredWork.length - 1) ||
              filteredWork.length === 1
            }
            key={props.title + props.year}
            index={i}
            onOpen={onOpen}
            {...props}
          />
        ))}
      </Box>
      <Modal
        isOpen={isOpen !== -1}
        onClose={() => setIsOpen(-1)}
        isCentered
        size={modalSize}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalCloseButton />
          <ModalBody>
            <ModalHeader />
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
  imgArr,
  br,
  bb,
  last,
  year,
  tags,
  onOpen,
  index
}: Props & {
  br: boolean;
  bb: boolean;
  last: boolean;
  index: number;
  onOpen: (id: number) => void;
}): JSX.Element {
  const borderRight = useBreakpointValue({ md: "1px solid black" });
  const tagSize = useBreakpointValue({ base: "sm", sm: "md" });
  return (
    <Flex
      borderRight={br && !last ? borderRight : undefined}
      borderBottom={last || bb ? undefined : "1px solid black"}
      justifyContent="center"
    >
      <Box p={10}>
        <Box
          className="nextImg"
          position="relative"
          onClick={() => onOpen(index)}
        >
          <Image src={`/images/${imgArr[0]}`} width="413px" height="241px" />
        </Box>
        <Flex py={8} justifyContent="space-between" alignItems="baseline">
          <Heading size="lg">{title}</Heading>
          <Text color="gray.700" fontSize="sm">
            ({year})
          </Text>
        </Flex>
        <Flex marginTop="auto">
          {tags.map((e, i) => (
            <Tag
              key={e}
              mr={3}
              bg={`cyan.${9 - i}00`}
              color="white"
              size={tagSize}
            >
              {e}
            </Tag>
          ))}
        </Flex>
      </Box>
    </Flex>
  );
}

function WorkModal({ item }: { item: Props }) {
  const { title, description, type, imgArr, company } = item;
  const [active, setActive] = useState(0);
  return (
    <Box>
      <Img
        className="borderImg"
        src={`/images/${imgArr[active]}`}
        fallbackSrc={`/images/p/${imgArr[active]}`}
        w="100%"
        h="100%"
      />
      <Flex justifyContent="space-between" alignItems="center" pt={4}>
        <IconButton
          aria-label="right arrow"
          variant="outline"
          size="sm"
          icon={<ChevronLeftIcon boxSize={6} color="cyan.700" />}
          onClick={() =>
            setActive((prev) => (prev === 0 ? imgArr.length - 1 : prev - 1))
          }
        />
        <Box>
          {active + 1} / {imgArr.length}
        </Box>
        <IconButton
          aria-label="right arrow"
          variant="outline"
          size="sm"
          icon={<ChevronRightIcon boxSize={6} color="cyan.700" />}
          onClick={() =>
            setActive((prev) => (prev === imgArr.length - 1 ? 0 : prev + 1))
          }
        />
      </Flex>
      <SimpleGrid
        templateColumns={{ sm: "1fr", md: "1fr 0.5fr" }}
        templateRows={{ base: "1fr 1fr", sm: "1fr" }}
        py={4}
      >
        <Box
          pr={4}
          borderRight={{ md: "1px solid" }}
          borderColor="black"
          mr={4}
        >
          <Flex justifyContent="space-between" alignItems="baseline" mb={2}>
            <Heading color="cyan.700" size="lg">
              {company}
            </Heading>
            <Text fontSize="sm" color="gray.500">
              {title}
            </Text>
          </Flex>
          <Text fontSize="sm">{description}</Text>
        </Box>
        <Box>
          <Text fontSize="lg" fontWeight={900} my={3}>
            Technologies
          </Text>
          <Flex>
            {type.map((e) => {
              switch (e) {
                case "JavaScript":
                  return <JavaScriptIcon key={e} boxSize={10} mr={3} />;
                case "React":
                  return <ReactIcon key={e} boxSize={10} mr={3} />;
                case "TypeScript":
                  return <TypeScriptIcon key={e} boxSize={10} mr={3} />;
                case "Python":
                  return <PythonIcon key={e} boxSize={10} mr={3} />;
                case "Redux":
                  return <ReduxIcon key={e} boxSize={10} mr={3} />;
                case "Wordpress":
                  return <WordpressIcon key={e} boxSize={10} mr={3} />;
                default:
                  return null;
              }
            })}
          </Flex>
        </Box>
      </SimpleGrid>
    </Box>
  );
}

export default Work;
