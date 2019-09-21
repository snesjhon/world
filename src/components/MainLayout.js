import React from "react";
import { Box } from "rebass";
import Head from "./Head";
import "../../node_modules/github-markdown-css/github-markdown.css";

const MainLayout = ({ children }) => (
  <>
    <Head />
    <Box
      className="markdown-body"
      maxWidth={["", "80vw", "70vw", "60vw", "50vw"]}
      mx="auto"
      my={2}
      sx={{ border: "1px solid #d1d5da", borderRadius: "3px" }}
    >
      {children}
    </Box>
  </>
);

export default MainLayout;
