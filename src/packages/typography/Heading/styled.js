import { css } from "styled-components";
import { breakpoints } from "../../breakpoints";

export const HeadingBase = css`
  margin: 0;
  padding: 0;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: ${({ color }) => color};
  text-transform: ${({ uppercase }) => uppercase && "uppercase"};
  text-align: ${props => (props.center ? "center" : null)};
`;

export const xxl = css`
  font-size: 1.625rem;
  font-weight: 900;

  ${breakpoints.md} {
    font-size: 2.75rem;
  }
`;

export const xl = css`
  font-size: 1.625rem;
  font-weight: 700;

  ${breakpoints.md} {
    font-size: 2.25rem;
  }
`;

export const l = css`
  font-size: 1.625rem;
  font-weight: 600;

  ${breakpoints.md} {
    font-size: 2rem;
  }
`;

export const m = css`
  font-size: 1.125rem;
  font-weight: 400;

  ${breakpoints.md} {
    font-size: 1.375rem;
  }
`;

export const s = css`
  font-size: 1.125rem;
  font-weight: 700;

  ${breakpoints.md} {
    font-size: 1.375rem;
  }
`;

export const xs = css`
  font-size: 1.25rem;
  font-weight: 700;
`;
