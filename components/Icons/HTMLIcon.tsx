import React from "react";
import { Icon, IconProps } from "@chakra-ui/react";

function HTMLIcon(props: IconProps): JSX.Element {
  return (
    <Icon viewBox="0 0 51 51" {...props}>
      <path
        d="M6.375 3.18701L9.85535 43.3505L25.4771 47.812L41.1387 43.3445L44.625 3.18701H6.375ZM37.0547 16.3354H18.7266L19.125 21.4155H36.6562L35.3105 36.4954L25.5 39.2934L15.6705 36.5043L14.9952 28.7866H19.8023L20.143 32.7003L25.5 34.1725L30.8211 32.6863L31.3769 26.2964H14.7422L13.4881 11.3958H37.473L37.0547 16.3354Z"
        fill="currentColor"
      />
    </Icon>
  );
}

export default HTMLIcon;
