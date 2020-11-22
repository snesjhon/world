import { Box, Button, Center, Divider, Heading, Text } from "@chakra-ui/react";
import React from "react";

function Footer(): JSX.Element {
  return (
    <>
      <Box pt={10} pb={5} textAlign="center">
        <Heading size="2xl">Thanks for Stopping By</Heading>
      </Box>
      <Divider border="1px solid black" borderColor="black" opacity={1} />
      <Box py={20} textAlign="center">
        <Text fontSize="xl" pb={4}>
          I Hope you enjoy your stay
        </Text>
        <Text pb={10}>
          I’m always open for new opportunities,
          <br /> so if you would like to reach out or simply say hi, my inbox is
          always open!
        </Text>
        <Button variant="cyan700">Send me a message</Button>
      </Box>
      <Divider border="1px solid black" borderColor="black" opacity={1} />
      <Center py={4}>
        <Text fontSize="xs" color="gray.600">
          Designed & Coded by{" "}
          <Text as="span" color="red.600">
            RedOak Studios
          </Text>
        </Text>
      </Center>
    </>
  );
}

export default Footer;
