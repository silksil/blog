import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { Heading, Text } from "../../typography";
import Facebook from "../../icons/SocialIcons/Facebook";
import Instagram from "../../icons/SocialIcons/Instagram";
import Twitter from "../../icons/SocialIcons/Twitter";
import Youtube from "../../icons/SocialIcons/Youtube";
import * as S from "./styled";

const HeaderBase = styled.header`
  ${S.HeaderBase}
`;

const Header = React.forwardRef(
  (
    {
      title,
      subtitle,
      broadcaster,
      broadcasterLogo,
      secondSubtitle,
      secondBroadcaster,
      secondBroadcasterLogo,
      description,
      LinkComponent,
      linkComponentProps,
      brandLogo,
      image,
      mobileImage,
      color,
      socialText,
      facebook,
      instagram,
      twitter,
      youtube
    },
    ref
  ) => (
    <HeaderBase ref={ref}>
      <S.HeaderImgContainer>
        {(image || mobileImage) && (
          <img
            srcSet={`${mobileImage} 480w, ${image}`}
            src={mobileImage}
            sizes="((orientation: portrait) and (max-width: 480px) 480px )"
            alt={`${title}`}
          />
        )}
      </S.HeaderImgContainer>
      <S.HeaderContent>
        <S.BrandInfo>
          {brandLogo && (
            <LinkComponent {...linkComponentProps}>
              <S.Circle>
                <S.BrandImage src={brandLogo} alt={title} />
              </S.Circle>
            </LinkComponent>
          )}
          <div>
            <Heading element="h1" variant="brand" color={color}>
              {title}
            </Heading>

            {subtitle && (
              <S.TagLine>
                <Text as="p" color={color}>
                  {subtitle}
                  {broadcasterLogo && (
                    <img src={broadcasterLogo} alt={broadcaster} />
                  )}
                </Text>
              </S.TagLine>
            )}
            {secondSubtitle && (
              <S.SecondTagLine>
                <Text as="p" color={color}>
                  {secondSubtitle}
                  {secondBroadcasterLogo && (
                    <img src={secondBroadcasterLogo} alt={secondBroadcaster} />
                  )}
                </Text>
              </S.SecondTagLine>
            )}
          </div>
        </S.BrandInfo>

        <S.Description>
          {description && (
            <Text color={color} html>
              {description}
            </Text>
          )}
        </S.Description>
        {(facebook || instagram || twitter || youtube) && (
          <S.HeaderSocialIcons>
            <S.SocialText>{socialText}</S.SocialText>
            {facebook && (
              <div>
                <a
                  href={facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Bekijk onze Facebookpagina"
                >
                  <Facebook color="white" />
                </a>
              </div>
            )}
            {instagram && (
              <div>
                <a
                  href={instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Bekijk onze Instagrampagina"
                >
                  <Instagram color="white" />
                </a>
              </div>
            )}
            {twitter && (
              <div>
                <a
                  href={twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Bekijk onze Twitterpagina"
                >
                  <Twitter />
                </a>
              </div>
            )}
            {youtube && (
              <div>
                <a
                  href={youtube}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Bekijk onze Youtubepagina"
                >
                  <Youtube />
                </a>
              </div>
            )}
          </S.HeaderSocialIcons>
        )}
      </S.HeaderContent>
    </HeaderBase>
  )
);

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
