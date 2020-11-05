import React from "react";
import { Box, Flex, Text } from "rebass";
import { Link } from "gatsby";

const Breadcrumbs = props => (
  <Flex className="breadcrumbs" justifyContent="space-between">
    <Box>
      <Text fontSize={1} mb={2}>
        <Link to="/">Home</Link> / {props.current}
      </Text>
    </Box>
  </Flex>
);

export default Breadcrumbs;
