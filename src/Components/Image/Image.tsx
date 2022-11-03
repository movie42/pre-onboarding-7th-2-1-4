import React from "react";
import styled from "styled-components";

type ImageProps = React.ImgHTMLAttributes<HTMLImageElement>;

const Image = (props: ImageProps) => {
  return <Item {...props} />;
};

export default Image;

const Item = styled.img`
  width: 100%;
`;
