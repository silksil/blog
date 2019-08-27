import styled from "styled-components";
import {breakpoints} from '../../breakpoints';

export const StyledBlogCard = styled.div`
  cursor: pointer;
  display: inline-block;
  position: relative;
  width: 100%;
  vertical-align: top;
  text-align: left;
  white-space: normal;
  overflow: hidden;
  h3{
    font-weight: 700;
  font-size: 24px;
  }
  h4 {
    font-size: 16px;
  }
${breakpoints.md} {
  h3 {
    font-size: 34px;
  }

  h4 {
    font-size: 24px;
  }
}



`;

export const Content = styled.div`
  padding: 14px 0;
`;

export const Img = styled.img`
  background-position: center center;
  object-fit: cover;
  background-size: cover;
  width: 100%;
  height: 160px;
  ${breakpoints.md}{
    height: 240px;
  }
`;

export const CardFooter = styled.div`
  font-size: 12px;
  font-weight: 80;
  color: ${({ theme }) => theme.primary.contrastSecondary};
  margin-top: 12px;
  text-transform: uppercase;
`;
