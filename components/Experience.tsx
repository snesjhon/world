import { Box, Link, SimpleGrid, Text } from "@chakra-ui/react";
import React from "react";

function Experience(): JSX.Element {
  return (
    <Box py={{ base: 0, md: 20 }}>
      <Job
        number={0}
        title="Cross Country Amtrak"
        year="October 2022"
        company="Travel"
        link="https://www.shopify.com//"
      />
      <Job
        number={0}
        title="Joined Shopify!"
        year="2021 - Present"
        company="Shopify"
        link="https://www.shopify.com//"
      />
      <Job
        number={1}
        title="Co-Founder"
        year="2020 - Present"
        company="RedOak"
        link="https://redoakui.com/"
      />
      <Job
        number={2}
        title="Sr. UI Engineer"
        year="2018 - Present"
        company="conDati"
        link="https://www.condati.com/"
      />
    </Box>
  );
}
function Job({
  year,
  number,
  company,
  title,
  link,
}: {
  year: string;
  number: number;
  company: string;
  title: string;
  link: string;
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
      <Box pt={9} pb={20} pl={10}>
        {/* <Link href={link} isExternal fontSize="sm" color="grey">
          {`🚄 ${company}`}
        </Link> */}
        <Text
          fontSize="md"
          color="gray"
          verticalAlign="center"
        >{`🚄 ${company}`}</Text>
        <Text fontSize="lg" fontWeight="bold">
          {title}
        </Text>
      </Box>
    </SimpleGrid>
  );
}

export default Experience;
