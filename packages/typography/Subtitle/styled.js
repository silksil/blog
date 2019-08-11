import styled from "styled-components";
import { breakpoints } from "../../breakpoints";

const SubtitleStyle = styled.span`
  margin: 0;
  font-size: 1rem;
  font-weight: 500;
  line-height: 1.6;
  text-shadow: 1px 1px 0 0 rgba(0, 0, 0, 0.5);
  color: ${({ theme }) => theme.background.contrastSecondary};
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  ${breakpoints.md} {
    font-size: 1.25rem;
  }
`;

export default SubtitleStyle;
