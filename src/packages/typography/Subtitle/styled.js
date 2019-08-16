import { css } from "styled-components";

export const SubtitleBase = css`
  margin: 0;
  padding: 0;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: ${({ color }) => color};
  font-size: 28px;
  line-height: 40px;
  font-weight: 300;
`;

export const l = css`
  font-size: 28px;
  line-height: 40px;
  font-weight: 300;
`;

export const s = css`
  font-size: 16px;
  line-height: 40px;
  font-weight: 400;
`;
