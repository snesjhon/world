import React from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";
import { Box } from "rebass";

const Overlay = styled(Box)`
  display: ${props => (props.isOpen ? "block" : "none")};
  position: fixed;
  padding-top: 50px;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 25;
  opacity: 0.5;
  background-color: gray;
`;

const Presentation = styled(Box)`
  display: ${props => (props.isOpen ? "flex" : "none")};
  position: fixed;
  top: 15%;
  left: 50%;
  transform: translateX(-50%);
  width: 60vw;
  z-index: 50;
  background: white;
  border: 1px solid #d1d5da;
  border-radius: 3px;
  box-shadow: 0px 0px 5px 5px rgba(0, 0, 0, 0.05);
`;

const Portal = props => {
  return ReactDOM.createPortal(props.children, document.body);
};

const Modal = props => {
  const { children, isOpen, handleClose, ...rest } = props;
  return (
    <Portal>
      <Overlay isOpen={isOpen} onClick={handleClose} />
      <Presentation isOpen={isOpen} p={4} {...rest}>
        {children}
      </Presentation>
    </Portal>
  );
};

export default Modal;
