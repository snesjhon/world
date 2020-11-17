import {
  Box,
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

function Work(): JSX.Element {
  const [isOpen, setIsOpen] = useState("");

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
          onOpen={onOpen}
        />
        <WorkItem
          title="Akamai mPulse"
          year="2017 - 2018"
          tags={["UI Developer", "Design"]}
          onOpen={onOpen}
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
          onOpen={onOpen}
        />
        <WorkItem
          title="Hawk Ridge Systems"
          year="2013 - 2015"
          tags={["UI Developer", "Design"]}
          onOpen={onOpen}
        />
      </Box>
      <WorkItem
        title="CrossFit Endgame"
        year="2014"
        tags={["Lead Designer", "Lead UI Developer"]}
        onOpen={onOpen}
        last
      />
      <Modal
        isOpen={isOpen !== ""}
        onClose={() => setIsOpen("")}
        isCentered
        size="xl"
      >
        <ModalOverlay />
        <ModalContent>
          <ModalCloseButton />
          <ModalBody>
            {isOpen === "conDati" && (
              <WorkModal
                company={isOpen}
                description="something something something"
                imgArr={["asd", "asd"]}
                tech={["asd", "asd"]}
                title="UI Developer"
              />
            )}
            {isOpen === "Akamai mPulse" && (
              <WorkModal
                company={isOpen}
                description="something something something"
                imgArr={["asd", "asd"]}
                tech={["asd", "asd"]}
                title="UI Developer"
              />
            )}
            {isOpen === "SOASTA" && (
              <WorkModal
                company={isOpen}
                description="something something something"
                imgArr={["asd", "asd"]}
                tech={["asd", "asd"]}
                title="UI Developer"
              />
            )}
            {isOpen === "Hawk Ridge Systems" && (
              <WorkModal
                company={isOpen}
                description="something something something"
                imgArr={["asd", "asd"]}
                tech={["asd", "asd"]}
                title="UI Developer"
              />
            )}
            {isOpen === "CrossFit Endgame" && (
              <WorkModal
                company={isOpen}
                description="something something something"
                imgArr={["asd", "asd"]}
                tech={["asd", "asd"]}
                title="UI Developer"
              />
            )}
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
  function onOpen(id: string) {
    return setIsOpen(id);
  }
}

function WorkItem({
  br,
  last,
  title,
  year,
  tags,
  onOpen,
}: {
  br?: boolean;
  last?: boolean;
  title: string;
  year: string;
  tags: string[];
  onOpen: (id: string) => void;
}): JSX.Element {
  const borderRight = useBreakpointValue({ md: "1px solid black" });
  return (
    <Flex
      borderRight={br ? borderRight : undefined}
      borderBottom={last ? undefined : "1px solid black"}
      justifyContent="center"
    >
      <Flex p={10} flexDirection="column">
        <Image
          src="https://via.placeholder.com/400x250"
          onClick={() => onOpen(title)}
        />
        <Flex py={8} justifyContent="space-between">
          <Heading size="lg" color="gray.700">
            {title}
          </Heading>
          <Text color="gray.700">({year})</Text>
        </Flex>
        <Flex justifyContent="space-evenly" marginTop="auto">
          {tags.map((e) => (
            <Tag key={e}>{e}</Tag>
          ))}
        </Flex>
      </Flex>
    </Flex>
  );
}

function WorkModal({
  imgArr,
  title,
  company,
  description,
  tech,
}: {
  imgArr: string[];
  title: string;
  company: string;
  description: string;
  tech: string[];
}) {
  return (
    <Flex>
      <Box pr={4} borderRight="1px solid" borderColor="black">
        <Flex justifyContent="space-between">
          <Heading>{company}</Heading>
          <Text>{title}</Text>
        </Flex>
        <Text>{description}</Text>
      </Box>
      <Box>
        <Text fontSize="lg">Technologies</Text>
        <Flex>
          {tech.map((e) => (
            <Text key={e}>{e}</Text>
          ))}
        </Flex>
      </Box>
    </Flex>
  );
}
export default Work;
