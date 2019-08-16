import React from "react";
import PropTypes from "prop-types";
import StyledMenu from "./styled";

const Menu = ({ variant, children }) => (
  <StyledMenu aria-label="Menu">{children}</StyledMenu>
);

Menu.defaultProps = {
  variant: null
};

Menu.propTypes = {
  children: PropTypes.node.isRequired
};

export default Menu;
