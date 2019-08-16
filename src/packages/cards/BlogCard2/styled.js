import styled from "styled-components";

export const StyledBlogCard = styled.div`
  cursor: pointer;
  display: inline-block;
  position: relative;
  width: 100%;
  vertical-align: top;
  text-align: left;
  margin: 20px; //TODO: REMOVE
  box-shadow: 0 20px 20px rgba(0, 0, 0, 0.08);
  white-space: normal;
  overflow: hidden;
  transition: all 250ms cubic-bezier(0.02, 0.01, 0.47, 1);
  h3 {
    font-size: 32px;
    font-weight: 700;
  }
  h4 {
    font-size: 24px;
  }
  &:hover {
    box-shadow: 0 40px 40px rgba(0, 0, 0, 0.16);
    transform: translate(0, -5px);
    transition-delay: 0s !important;
  }
`;

export const Content = styled.div`
  padding: 20px;
`;

export const Img = styled.img`
  background-position: center center;
  min-height: 100px;
  object-fit: cover;
  background-size: cover;
  width: 100%;
  height: 240px;
`;

export const CardFooter = styled.div`
  font-size: 12px;
  font-weight: 100;
  color: ${({ theme }) => theme.primary.contrastSecondary};
  margin-top: 12px;
  padding-top: 16px;
  border-top: ${({ theme }) => `1px solid ${theme.primary.contrastTertiary}`};
  border-spacing: 16px 0px 0px 0px;
`;
