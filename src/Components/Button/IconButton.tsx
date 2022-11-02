import React, { ReactNode } from "react";
import styled from "styled-components";

import Button from "./Button";

interface IconButtonProps {
  children: ReactNode;
  accessibilityText: string;
  onClick: () => void;
}

const IconButton = ({ accessibilityText, ...props }: IconButtonProps) => {
  return (
    <Container {...props}>
      <span className="hidden-text">{accessibilityText}</span>
      {props.children}
    </Container>
  );
};

export default IconButton;

const Container = styled(Button)`
  box-sizing: border-box;
  display: block;
  font-size: 2rem;
  border: 0;
  background-color: unset;
  .hidden-text {
    position: absolute;
    overflow: hidden;
    width: 1px;
    height: 1px;
    margin: -1px -1px;
    top: -1px;
    left: -1px;
  }
`;
