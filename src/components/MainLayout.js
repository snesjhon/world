import React from "react";
import { Box } from "rebass";
import "../../node_modules/github-markdown-css/github-markdown.css";

const Layout = ({ children }) => (
  <Box
    className="markdown-body"
    maxWidth={["", "80vw", "70vw", "60vw", "50vw"]}
    mx="auto"
    my={4}
    sx={{ border: "1px solid #d1d5da", borderRadius: "3px" }}
  >
    {children}
  </Box>
);

export default Layout;
