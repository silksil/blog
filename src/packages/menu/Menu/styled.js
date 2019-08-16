import styled from "styled-components";
import { breakpoints } from "../../breakpoints";
import { TYPES } from "./Menu";

const StyledMenu = styled.ul`
  list-style: none;
  background-color: ${({ theme }) => theme.primary.main};
  display: flex;
  height: 56px;
  overflow-x: auto;
  overflow-y: hidden;
  padding: 8px;
  font-size: 14px;

  &::after {
    content: "";
    width: 39px;
    height: 56px;
    display: block;
    right: 0;
    position: absolute;
    pointer-events: none;
    background: linear-gradient(
      90deg,
      hsla(0, 0%, 100%, 0.15),
      hsla(0, 0%, 100%, 0.85) 46.32%,
      ${({ theme }) => theme.primary.main}
    );
  }

  padding: 0 16px;

  li {
    padding: 0 16px;
  }
  ${breakpoints.md} {
    li {
      padding: 0 32px;
    }
  }
`;

export default StyledMenu;
