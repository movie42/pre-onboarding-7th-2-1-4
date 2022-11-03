import React, { ReactNode, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import styled, { css } from "styled-components";
import Button from "./Button";

interface SelectButtonProps {
  children: ReactNode;
  segment: string;
  onClick: () => void;
}

interface StyledComponentsSelectButtonProps {
  selected: boolean;
}

const SelectButton = ({ children, segment, ...props }: SelectButtonProps) => {
  const { search } = useLocation();
  const [isSelect, setIsSelect] = useState(false);

  const selectedButton = (search: string) => {
    const [_, searchQuery] = search.split("=");

    if (!search && segment === "all") {
      setIsSelect(true);
      return;
    }

    if (searchQuery === segment) {
      setIsSelect(true);
      return;
    }
    setIsSelect(false);
  };

  useEffect(() => {
    selectedButton(search);
  }, [search]);

  return (
    <Container {...props} selected={isSelect}>
      {children}
    </Container>
  );
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
