import React from "react";
import { Helmet } from "react-helmet-async";
import { useLocation } from "react-router-dom";

interface MetaProps {
  title: string;
  imageUrl: string;
  description: string;
}

const Meta = ({ title, imageUrl, description }: MetaProps) => {
  const { pathname, search } = useLocation();
  return (
    <Helmet prioritizeSeoTags>
      <meta property="description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={`${pathname}${search}`} />
      <meta property="og:title" content={title} />
      <meta property="og:image" content={imageUrl} />
      <meta property="og:description" content={description} />
      <meta property="og:site_name" content="알티 모빌리티" />
      <meta property="og:locale" content="ko_KR" />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <title>{title}</title>
    </Helmet>
  );
};

export default Meta;
