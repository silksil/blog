import styled, { css } from "styled-components";
import { breakpoints } from "../../breakpoints";

export const HeaderBase = css`
  background-image: ${({theme})=>  `linear-gradient(135deg, ${theme.tertiary.main} 0%, #ffcdd2 100%)`};
`;



export const HeaderContent = styled.div`
  color: ${({theme})=> theme.tertiary.contrast};
  text-align: center;
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: 30%;
  h1 {
  font-weight: 900;
  font-size: 64px;
  }
  ${breakpoints.lg} {
    text-align: left;
    max-width: 1360px;
  }
`;

