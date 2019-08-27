import styled from "styled-components";
import { breakpoints } from "../../breakpoints";

export const NavBar = styled.div`
  width: 100%;
  height: 50px;
  padding: 16px 16px;
  display: flex;
  box-sizing: border-box;
  justify-content: space-between;
  background: ${({ theme, isTransparent }) => isTransparent ? 'transparent' : theme.primary.main};
  box-shadow: ${({ theme, isTransparent }) => isTransparent ? 'transparent' :` 0 0 48px ${theme.primary.shadow}`};
  position: ${({ isTransparent }) => isTransparent ? 'absolute' : 'static'};
  z-index: 2;
  a {
    font-size: 16px;
    cursor: pointer;
    font-weight: 380;
    color: ${({ color }) => color};
    &:hover {
      color: ${({ theme }) => theme.primary.contrastSecondary};
    }
    &:active {
      color: ${({ theme }) => theme.primary.contrast};
    }
    margin-right: 24px;
  }

  ${breakpoints.md} {
    padding: 16px 16px;
  }

  ${breakpoints.lg} {
    padding: 16px 30px;
  }
`;

export const Left = styled.div`
  display: flex;
`;

export const Right = styled.div`
  display: flex;
  align-items: center;
`;
