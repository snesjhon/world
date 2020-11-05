import { Box, Container, Divider, Heading } from "@chakra-ui/core";
import React from "react";
import Header from "../components/Header";

function App(): JSX.Element {
  return (
    <>
      <Container outline="2px solid black" maxW="lg" mt={3}>
        <Header />
      </Container>
      <Container outline="2px solid black" maxW="lg">
        <div>asdbojasd</div>
      </Container>
    </>
  );
}

export default App;
