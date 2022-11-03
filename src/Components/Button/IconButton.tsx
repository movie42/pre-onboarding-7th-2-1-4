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
  font-size: 1.8rem;
  border: 0;
  height: 100%;
  max-height: 1.8rem;
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
