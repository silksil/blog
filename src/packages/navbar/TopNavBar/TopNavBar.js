import React from "react";
import PropTypes from "prop-types";
import * as S from "./styled";

const TopNavBar = ({ childrenLeft, childrenRight }) => (
  <S.NavBar>
    <S.Left>{childrenLeft}</S.Left>
    <S.Right>{childrenRight}</S.Right>
  </S.NavBar>
);

TopNavBar.defaultProps = {
  childrenLeft: null,
  childrenRight: null
};

TopNavBar.propTypes = {
  childrenLeft: PropTypes.node,
  childrenRight: PropTypes.node
};

export default TopNavBar;
