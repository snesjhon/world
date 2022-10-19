import React from "react";
import { Layout } from "../components";
import About from "../components/About";
import Experience from "../components/Experience";
import SolidDivider from "../components/SolidDivider";

export default function App(): JSX.Element {
  return (
    <Layout>
      <SolidDivider />
      <About />
      <SolidDivider />
      <Experience />
    </Layout>
  );
}
