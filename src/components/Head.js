import React from "react";
import { Helmet } from "react-helmet";
import favicon from "../assets/favicon.ico";

export default props => (
  <Helmet>
    <meta charSet="utf-8" />
    <title>{props.title ? props.title : "snesjhon"} | Jhon Paredes</title>
    <meta
      name="viewport"
      content="width=device-width, initial-scale=1, minimal-ui"
    />
    <link rel="shortcut icon" type="image/png" href={favicon} />
  </Helmet>
);
