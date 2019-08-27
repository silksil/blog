import React from "react";
import PropTypes from "prop-types";
import * as S from "./styled";
import { useContrastColor} from "../../themes";

const TopNavBar = ({ childrenLeft, childrenRight, color, ...props }) => {
  const contrastColor = useContrastColor(color);
  return (
  <S.NavBar {...props} color={contrastColor}>
    <S.Left>{childrenLeft}</S.Left>
    <S.Right>{childrenRight}</S.Right>
  </S.NavBar>
)
}

TopNavBar.defaultProps = {
  childrenLeft: null,
  childrenRight: null
};

TopNavBar.propTypes = {
  childrenLeft: PropTypes.node,
  childrenRight: PropTypes.node
};

export default TopNavBar