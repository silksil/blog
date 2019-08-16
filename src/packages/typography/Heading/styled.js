import { css } from "styled-components";

export const HeadingBase = css`
  margin: 0;
  padding: 0;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: ${({ color }) => color};
  font-weight: 400;
`;

export const l = css`
  font-size: 34px;
  line-height: 40px;
`;

export const m = css`
  font-size: 24px;
  line-height: 32px;
`;
