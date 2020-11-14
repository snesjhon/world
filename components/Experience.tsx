import {
  Box,
  Center,
  Divider,
  Heading,
  SimpleGrid,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react";
import React from "react";

function Experience(): JSX.Element {
  const headerSize = useBreakpointValue({ base: "3xl", xs: "4xl" });
  return (
    <>
      <Box pt={10} pb={5}>
        <Center>
          <Heading size={headerSize}>Experience</Heading>
        </Center>
      </Box>
      <Divider border="1px solid black" borderColor="black" opacity={1} />
      <SimpleGrid columns={{ base: 1, md: 2 }} rows={{ base: 2, md: 1 }}>
        <Box borderRight={{ base: 0, md: "2px solid black" }}>
          <Box py={{ base: 0, md: 20 }}>
            <Job
              number={1}
              title="Co-Founder"
              year="2020 - Present"
              company="RedOak"
            />
            <Job
              number={2}
              title="Sr. UI Engineer"
              year="2018 - Present"
              company="conDati"
            />
          </Box>
        </Box>
        <Box pr={{ base: 0, md: 10 }}>
          <Box py={{ base: 0, md: 20 }}>
            <Job
              number={3}
              title="Software Engineer II"
              year="2017 - 2018"
              company="Akamai"
            />
            <Job
              number={4}
              title="Software Engineer"
              year="2015 - 2017"
              company="SOASTA"
            />
            <Job
              number={5}
              title="Web Developer"
              year="2012 - 2015"
              company="Hawk Ridge Systems"
            />
          </Box>
        </Box>
      </SimpleGrid>
    </>
  );
}
function Job({
  year,
  number,
  company,
  title,
}: {
  year: string;
  number: number;
  company: string;
  title: string;
}) {
  return (
    <SimpleGrid columns={2}>
      <Box
        borderRight="1px solid black"
        textAlign="right"
        pt={10}
        pb={20}
        pr={10}
        position="relative"
        _after={{
          content: "''",
          height: "13px",
          width: "13px",
          position: "absolute",
          bgColor: "cyan.700",
          top: "-3px",
          right: "-7px",
          marginTop: 12,
          borderRadius: "50%",
        }}
      >
        <Text fontSize="sm">{year}</Text>
      </Box>
      <Box pt={10} pb={20} pl={10}>
        <Text fontSize="sm" color="grey">
          {`0${number}. ${company}`}
        </Text>
        <Text fontSize="lg" fontWeight="bold">
          {title}
        </Text>
      </Box>
    </SimpleGrid>
  );
}

export default Experience;
