import styled from "styled-components";
import { breakpoints } from "../../breakpoints";

const Grid = styled.div`
  display: grid;
  grid-template-columns: ${props =>
    props.gridCols ? props.gridCols : "1fr ".repeat(12).trim()};
  grid-template-rows: auto;
  grid-gap: ${props => (props.gridGapSm ? props.gridGapSm : "24px")};
  justify-content: center;
  height: 100%;
  max-width: ${({ fullWidth }) => (fullWidth ? null : "1360px")};
  margin: 0 ${({ fullWidth }) => (fullWidth ? null : "16px")};
  position: relative;

  ${breakpoints.md} {
    grid-gap: ${props => (props.gridGapMd ? props.gridGapMd : "40px")};
    margin: 0 ${({ fullWidth }) => (fullWidth ? null : "40px")};
  }

  ${breakpoints.lg} {
    grid-gap: ${props => (props.gridGapLg ? props.gridGapLg : "40px")};
    margin: 0 ${({ fullWidth }) => (fullWidth ? null : "40px")};
  }

  ${breakpoints.xl} {
    padding: 0 40px;
    margin: 0 ${({ fullWidth }) => (fullWidth ? null : "auto")};
  }
`;

export default Grid;
