import React from "react";
import StyledGrid from "./styled";

const Grid = ({ children, ...props }) => {
  return <StyledGrid {...props}>{children}</StyledGrid>;
};

export default Grid;
