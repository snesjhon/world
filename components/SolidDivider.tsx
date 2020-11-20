import { Divider, DividerProps, useColorModeValue } from "@chakra-ui/react";
import React from "react";
function SolidDivider({ ...props }: DividerProps): JSX.Element {
  const borderColor = useColorModeValue("gray.900", "gray.100");
  return (
    <Divider
      border="1px solid black"
      borderColor={borderColor}
      opacity={1}
      {...props}
    />
  );
}
export default SolidDivider;
