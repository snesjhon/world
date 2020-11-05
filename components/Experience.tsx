import { Box, Heading, SimpleGrid, Text } from "@chakra-ui/core";
import React from "react";

function Experience(): JSX.Element {
  return (
    <SimpleGrid columns={2}>
      <Box borderRight="2px solid black">
        <Box py={20}>
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
      <Box pr={10}>
        <Box py={20}>
          <Job
            number={1}
            title="Co-Founder"
            year="2020 - Present"
            company="Akamai"
          />
          <Job
            number={2}
            title="Sr. UI Engineer"
            year="2018 - Present"
            company="conDati"
          />
          <Job
            number={2}
            title="Sr. UI Engineer"
            year="2018 - Present"
            company="conDati"
          />
        </Box>
      </Box>
    </SimpleGrid>
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
        <Heading size="md">{title}</Heading>
      </Box>
    </SimpleGrid>
  );
}

export default Experience;
