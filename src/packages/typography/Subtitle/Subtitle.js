import React from "react";
import { string, bool, oneOf } from "prop-types";
import styled from "styled-components";
import * as S from "./styled";
import COLORS from "../enums";

import useColor from "../useColor";

const SubtitleStyle = styled.h1`
  ${S.SubtitleBase}
  ${props => S[props.size]};
`;

const Subtitle = ({ element, color, ...props }) => {
  const textColor = useColor(color);
  return <SubtitleStyle as={element} color={textColor} {...props} />;
};

Subtitle.defaultProps = {
  children: null
};

Subtitle.propTypes = {
  children: string,
  element: oneOf(["h1", "h2", "h3", "h4", "h5", "h6"]).isRequired,
  size: oneOf(["xxl", "xl", "l", "m", "s", "xs"]).isRequired,
  color: oneOf(Object.values(COLORS)).isRequired
};

export default Subtitle;
