import React, { ReactNode } from "react";
import styled, { css } from "styled-components";
import Button from "./Button";

interface SelectButtonProps {
  children: ReactNode;
  selected: boolean;
}

interface StyledComponentsSelectButtonProps {
  selected: boolean;
}

const SelectButton = ({ selected, children }: SelectButtonProps) => {
  return <Container selected={selected}>{children}</Container>;
};

export default SelectButton;

const Container = styled(Button)<StyledComponentsSelectButtonProps>`
  font-size: 1.4rem;
  font-weight: normal;
  word-break: keep-all;
  width: 6.2rem;
  border: 0;
  border-radius: 6.2rem;
  padding: 0.5rem 1.8rem;

  ${({ selected, theme }) => {
    if (selected) {
      return css`
        background-color: ${theme.color.second100};
        color: ${theme.color.fontWhite};
      `;
    }

    return css`
      background-color: ${theme.color.gray100};
      color: ${theme.color.fontBlack};
    `;
  }};
`;
