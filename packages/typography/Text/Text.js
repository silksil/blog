import React from "react";
import { node, bool, oneOf } from "prop-types";
import styled from "styled-components";
import * as S from "./styled";
import COLORS from "../enums";

import useColor from "../useColor";

const TextStyle = styled.div`
  ${S.TextBase}
  ${props => S[props.size]};
`;

const Text = ({ color, ...props }) => {
  const textColor = useColor(color);
  return <TextStyle color={textColor} {...props} />;
};

Text.defaultProps = {
  children: null,
  bold: false,
  center: false,
  size: "m"
};

Text.propTypes = {
  children: node,
  color: oneOf(Object.values(COLORS)).isRequired,
  bold: bool,
  center: bool,
  size: oneOf(["m", "s", "xs"])
};

export default Text;
