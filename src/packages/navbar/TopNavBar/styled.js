import styled from "styled-components";
import { breakpoints } from "../../breakpoints";

export const NavBar = styled.div`
  width: 100%;
  height: 50px;
  padding: 16px 16px;
  display: flex;
  box-sizing: border-box;
  justify-content: space-between;
  background: ${({ theme }) => theme.primary.main};
  box-shadow: ${({ theme }) => `0 0 48px ${theme.primary.shadow}`};

  a {
    font-size: 16px;
    font-weight: 150;
    color: ${({ theme }) => theme.primary.contrast};
    &:hover {
      color: ${({ theme }) => theme.primary.contrastSecondary};
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

  > *:not(:last-child) {
    margin-right: 15px;
  }
`;
