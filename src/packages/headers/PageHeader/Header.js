import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { Heading, Text } from "../../typography";
import * as S from "./styled";
import {Grid, GridItem} from '../../grids';

const HeaderBase = styled.header`
  ${S.HeaderBase}
`;

const Header = ({
      title,
      subtitle,
      color,
      ...props
    }) => (
    <HeaderBase {...props}>
          <Grid>
            <GridItem
                          columnStartSm="1"
                          columnEndSm="span 12"
                          columnStartMd="2"
                          columnEndMd="span 10"
                          columnStartLg="2"
                          columnEndLg="10">
      <S.HeaderContent>


            <Heading as="h1" >
              {title}
            </Heading>

            {subtitle && (
              
              <Heading as="h2" >
                  {subtitle}
                </Heading>
       
            )}

     
 
      </S.HeaderContent>
      </GridItem>
          </Grid>
    </HeaderBase>
  )


Header.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
  broadcaster: PropTypes.string,
  broadcasterLogo: PropTypes.string,
  secondSubtitle: PropTypes.string,
  secondBroadcaster: PropTypes.string,
  secondBroadcasterLogo: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.string,
  mobileImage: PropTypes.string,
  brandLogo: PropTypes.string,
  brandLink: PropTypes.string,
  LinkComponent: PropTypes.func,
  linkComponentProps: PropTypes.shape(),
  color: PropTypes.string,
  socialText: PropTypes.string,
  facebook: PropTypes.string,
  instagram: PropTypes.string,
  twitter: PropTypes.string,
  youtube: PropTypes.string
};

Header.defaultProps = {
  broadcaster: null,
  brandLogo: null,
  subtitle: null,
  secondSubtitle: null,
  secondBroadcaster: null,
  secondBroadcasterLogo: null,
  image: null,
  mobileImage: null,
  description: null,
  brandLink: "",
  LinkComponent: props => React.createElement("a", props),
  linkComponentProps: {},
  broadcasterLogo: null,
  color: null,
  socialText: null,
  facebook: null,
  instagram: null,
  twitter: null,
  youtube: null
};

export default Header;
