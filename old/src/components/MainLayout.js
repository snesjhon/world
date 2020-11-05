import React from "react";
import { Box } from "rebass";
import Head from "./Head";
import styled from "styled-components";
import "../../node_modules/github-markdown-css/github-markdown.css";

const MainLayoutWrapper = styled(Box)`
  @media print {
    @page {
      margin: 0.5rem;
    }
    border: transparent !important;
    .breadcrumbs {
      display: none;
    }
  }
`;

const MainLayout = ({ children }) => (
  <>
    <Head />
    <MainLayoutWrapper
      className="markdown-body"
      maxWidth={["", "80vw", "70vw", "60vw", "50vw"]}
      mx="auto"
      my={2}
      sx={{ border: "1px solid #d1d5da", borderRadius: "3px" }}
    >
      {children}
    </MainLayoutWrapper>
  </>
);

export default MainLayout;
