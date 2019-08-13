import styled from "styled-components";
import { breakpoints } from "../breakpoints";

export const GridItem = styled.div`
  grid-column-start: ${props => props.columnStartSm};
  grid-column-end: ${props => props.columnEndSm};
  grid-row-start: ${props => props.rowStartSm};
  grid-row-end: ${props => props.rowEndSm};
  display: ${props => (props.centered ? "flex" : "block")};
  justify-content: ${props => (props.centered ? "center" : "")};
  width: 100%;
  margin: 0;

  ${breakpoints.md} {
    grid-column-start: ${props => props.columnStartMd};
    grid-column-end: ${props => props.columnEndMd};
    grid-row-start: ${props => props.rowStartMd};
    grid-row-end: ${props => props.rowEndMd};
  }

  ${breakpoints.lg} {
    grid-column-start: ${props => props.columnStartLg};
    grid-column-end: ${props => props.columnEndLg};
    grid-row-start: ${props => props.rowStartLg};
    grid-row-end: ${props => props.rowEndLg};
  }

  ${breakpoints.xl} {
    grid-column-start: ${props => props.columnStartXl};
    grid-column-end: ${props => props.columnEndXl};
    grid-row-start: ${props => props.rowStartXl};
    grid-row-end: ${props => props.rowEndXl};
  }
`;
