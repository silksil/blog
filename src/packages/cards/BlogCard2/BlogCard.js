import React from "react";
import * as S from "./styled";
import { Heading, Subtitle } from "../../typography";

const BlogCard = ({ title, subtitle, imageSrc, tags, ...props }) => {
  return (
    <S.StyledBlogCard {...props}>
      <S.Img srcSet={` ${imageSrc}`} src={imageSrc} alt={`${title}`} />
      <S.Content>
        <Heading element="h3" size="m" color="primaryContrast">
          {title}
        </Heading>
        {subtitle && (
          <Subtitle element="h4" size="s" color="primaryContrastSecondary">
            {subtitle}
          </Subtitle>
        )}
        <S.CardFooter>{tags}</S.CardFooter>
      </S.Content>
    </S.StyledBlogCard>
  );
};

export default BlogCard;
