import {
  Box,
  Image,
  Spinner,
  Square,
  Text,
  useBreakpointValue,
  useColorModeValue,
} from "@chakra-ui/react";
import React, { useState } from "react";

export default function About(): JSX.Element {
  const [isLoaded, setIsLoaded] = useState(false);
  const beforeItem = useBreakpointValue({
    base: "-10%",
    sm: "-5%",
    md: "-15%",
  });
  const afterItemTop = useBreakpointValue({
    base: "-10%",
    sm: "-8%",
    md: "45%",
  });
  const afterItemRight = useBreakpointValue({
    base: 0,
    sm: 0,
    md: "-30%",
  });
  const borderColor = useColorModeValue("#fafafa", "gray.800");
  return (
    <Box px={{ base: 5, sm: 10, lg: 10 }}>
      <Box
        display={{ md: "grid" }}
        justifyContent="space-between"
        py={20}
        gridGap={{ md: "3rem" }}
        gridTemplateColumns={{ md: "1fr 1fr" }}
      >
        <Box mr={10}>
          <Box
            position="relative"
            _before={{
              content: "''",
              position: "absolute",
              top: "-5%",
              right: beforeItem,
              width: "100%",
              height: "110%",
              border: "2px solid",
              borderColor: !borderColor + "", // lol ts
              borderRadius: "5px",
              zIndex: 0,
              opacity: isLoaded ? 1 : 0,
            }}
          >
            {!isLoaded && (
              <Square>
                <Spinner />
              </Square>
            )}
            <Image
              src="avatar.jpg"
              border="1px solid"
              borderColor="gray.300"
              sx={{ filter: "grayscale(1)" }}
              zIndex={3}
              borderRadius="5px"
              position="relative"
              onLoad={() => setIsLoaded(true)}
            />
          </Box>
        </Box>
        <Box pl={{ base: 6, sm: 10, md: 0 }}>
          <Text>
            I specialize in creating and maintaining complex UI infrastructure.
            Oh yea, I also collect vinyls and love learning new things on
            youtube at 4am.
          </Text>
        </Box>
      </Box>
    </Box>
  );
}
