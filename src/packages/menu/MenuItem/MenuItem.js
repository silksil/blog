import React from "react";
import PropTypes from "prop-types";
import StyledMenuItem from "./styled";

const MenuItem = ({ isActive, children }) => (
  <StyledMenuItem isActive={isActive}>{children}</StyledMenuItem>
);

MenuItem.defaultProps = {
  isActive: false
};

MenuItem.propTypes = {
  children: PropTypes.node.isRequired,

  isActive: PropTypes.bool
};

export default MenuItem;
