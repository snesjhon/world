import React from "react";
import { Icon, IconProps } from "@chakra-ui/react";

function ChakraIcon(props: IconProps): JSX.Element {
  return (
    <Icon viewBox="0 0 45 45" {...props}>
      <path
        fill="currentColor"
        d="M22.5 45C34.9264 45 45 34.9264 45 22.5C45 10.0736 34.9264 0 22.5 0C10.0736 0 0 10.0736 0 22.5C0 34.9264 10.0736 45 22.5 45ZM28.1077 8.1L22.7077 19.6693H33.3L15.0231 37.0233L23.7462 24.2144H11.7L28.1077 8.1Z"
      />
    </Icon>
  );
}

export default ChakraIcon;
