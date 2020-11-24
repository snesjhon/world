import React from "react";
import { Icon, IconProps } from "@chakra-ui/react";

function CSSIcon(props: IconProps): JSX.Element {
  return (
    <Icon viewBox="0 0 51 51" {...props}>
      <path
        d="M6.375 3.18555L9.86133 43.35L25.4771 47.8105L41.1387 43.3431L44.625 3.18555H6.375ZM35.3294 36.5447L25.507 39.3437L15.6994 36.5308L15.0271 28.7852H19.8342L20.1759 32.7257L25.5139 34.2358L25.5269 34.2637L30.853 32.7845L31.4148 26.3945H20.2207L19.8223 21.4141H31.8401L32.2734 16.334H13.9453L13.5469 11.4531H37.5109L35.3294 36.5447Z"
        fill="currentColor"
      />
    </Icon>
  );
}

export default CSSIcon;
