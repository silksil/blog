import { css } from "styled-components";
import { breakpoints } from "../../breakpoints";

export const TextBase = css`
  font-weight: ${props => (props.bold ? "bold" : "normal")};
  text-align: ${props => (props.center ? "center" : null)};
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  img,
  p,
  h1,
  h2,
  h3,
  blockquote {
    margin: 0;
    padding: 0;
    margin-top: 28px;
  }

  img {
    display: block;
    object-fit: cover;
    background-size: cover;
    width: 100%;
  }
  a {
    margin: 0;
    &:hover {
      cursor: pointer;
      filter: brightness(85%);
    }
  }
  blockquote {
    padding: 16px 0;
    font-weight: 700;
    &:before {
      content: "";
      display: block;
      left: 0px;
      width: 40px;
      padding-bottom: 24px;
      border-top: ${({ theme }) => ` 2px solid ${theme.secondary.main} `};
    }
    &:after {
      content: "";
      display: block;
      left: 0px;
      width: 40px;
      padding-top: 24px;
      border-bottom: ${({ theme }) => ` 2px solid ${theme.secondary.main} `};
    }
    div {
      margin-top: 16px;
      font-weight: 400;
    }
  }

  ol,
  ul {
    list-style: none;
    list-style-image: none;
    padding: 0px;
    margin: 0;
    li {
      margin-top: 16px;
      padding-left: 0px;
      margin-left: 30px;
      list-style-type: disc;
      width: 100%;
      &:first-child {
        margin-top: 0px;
      }
    }
  }
`;

export const m = css`
  p,
  ul,
  ol,
  li {
    font-weight: 400;
    font-size: 16.5px;
    line-height: 29px;
  }
  h1,
  h2,
  h3 {
    font-weight: 700;
    font-size: 24px;
    line-height: 32px;
    + p {
      margin-top: 8px;
    }
  }

  blockquote {
    font-size: 28px;
    font-weight: 700;
    line-height: 44px;
  }

  ${breakpoints.lg} {
    p,
    ul,
    ol,
    li {
      font-size: 19px;
      line-height: 36px;
      font-weight: 400;
    }
    blockquote {
      font-size: 30px;
      font-weight: 700;
      line-height: 48px;
    }
  }
`;
