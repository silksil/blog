import styled, { css } from "styled-components";
import { breakpoints } from "../../breakpoints";

export const HeaderWrapper = styled.div``;

export const HeaderImg = styled.img`
  background-position: center center;
  min-height: 100px;
  object-fit: cover;
  background-size: cover;
  width: 100%;
  height: 264px;
  ${breakpoints.md} {
    height: 500px;
  }

  ${breakpoints.lg} {
    margin-left: 17%;
    width: 83%;
  }
`;

export const HeaderContent = styled.div`
  background: ${({ theme }) => theme.primary.main};
  background-color: ${({ theme }) => theme.primary.main};
  z-index: 2;

  h1 {
    font-size: 34px;
    line-height: 40px;
  }
  h2 {
    font-size: 28px;
    line-height: 40px;
    font-weight: 300;
  }

  ${breakpoints.md} {
    padding: 32px;
    padding-bottom: 0px;
    margin-top: -64px;
    max-width: 73%;
  }

  ${breakpoints.lg} {
    max-width: 58%;
    margin: -64px auto 0px 0px;
  }
`;

export const Meta = styled.div`
  p {
    padding: 0px;
    margin: 0px;
    margin-top: 28px;
    font-size: 12px;
    line-height: 16px;
    color: ${({ theme }) => theme.primary.contrastSecondary};
  }
`;
