import React from "react";
import PropTypes from "prop-types";
import { Heading, Subtitle, Text } from "../../typography";
import * as S from "./styled";
import { GridItem, Grid } from "../../grids";

const Header = ({ title, subtitle, image, meta }) => (
  <S.HeaderWrapper>
    <S.HeaderImg srcSet={` ${image}`} src={image} alt={`${title}`} />
    <Grid>
      <GridItem
        columnStartSm="1"
        columnEndSm="span 12"
        columnStartMd="1"
        columnEndMd="span 9"
        columnStartLg="1"
        columnEndLg="11"
      >
        <S.HeaderContent>
          <Heading element="h1" color="primaryContrast">
            {title}
          </Heading>

          {subtitle && (
            <Subtitle element="h2" color="primaryContrastSecondary">
              {subtitle}
            </Subtitle>
          )}
          {meta && (
            <S.Meta>
              <Text as="p" size="xs" color="primaryContrastSecondary">
                {meta}
              </Text>
            </S.Meta>
          )}
        </S.HeaderContent>
      </GridItem>
    </Grid>
  </S.HeaderWrapper>
);

Header.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
  image: PropTypes.string
};

Header.defaultProps = {
  title: null,
  subtitle: null,
  image: null
};

export default Header;

// <S.HeaderWrapper>
{
  /* <S.HeaderImgContainer>
      {image && <img srcSet={` ${image}`} src={image} alt={`${title}`} />}
    </S.HeaderImgContainer>
    <S.HeaderContent> */
}
{
  /* <div> */
}
{
  /* <Heading element="h1" variant="brand" color={color}>
          {title}
        </Heading> */
}
{
  /*
        {subtitle && (
          <Text as="p" color={color}>
            {subtitle}
          </Text>
        )} */
}
{
  /* </div>
    </S.HeaderContent> */
}
