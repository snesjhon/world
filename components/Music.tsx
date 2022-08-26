import { Box } from "@chakra-ui/react";
import React from "react";

export default function Music({ url }: { url: string }): JSX.Element {
  const parseNormalLink = url.split("/us")[1];
  return (
    <Box my={3}>
      <iframe
        allow="autoplay *; encrypted-media *;"
        frameBorder="0"
        height="150"
        style={{
          width: "100%",
          maxWidth: "660px",
          overflow: "hidden",
          background: "transparent",
        }}
        sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-storage-access-by-user-activation allow-top-navigation-by-user-activation"
        src={`https://embed.music.apple.com/us${parseNormalLink}`}
      ></iframe>
    </Box>
  );
}
