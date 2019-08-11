import { css } from "styled-components";
import { breakpoints } from "../../breakpoints";

export const TextBase = css`
  font-weight: ${props => (props.bold ? "bold" : "normal")};
  text-align: ${props => (props.center ? "center" : null)};
  margin: 0;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: ${props => props.color};
  a {
    margin: 0;
    color: ${props => props.color};

    &:hover {
      cursor: pointer;
      filter: brightness(85%);
    }
  }
  blockquote {
    font-style: italic;
    padding: 0px;
    margin: 0px;
  }

  ol {
    ${props => props.color};
    li {
      width: 100%;
    }
  }

  ul {
    list-style: none;
    color: ${props => props.color};

    li {
      padding-left: 24px;
    }
  }
`;

export const m = css`
  font-size: 0.9375rem;
  line-height: 1.375rem;

  ${breakpoints.md} {
    font-size: 1.125rem;
    line-height: 2rem;
  }

  ${breakpoints.lg} {
    font-size: 1.1rem;
    line-height: 2rem;
  }
  a {
    font-size: 0.9375rem;
    line-height: 1.375rem;
  }
  blockquote {
    border-left: 3px solid;
    padding-left: 15px;

    ${breakpoints.md} {
      font-size: 2rem;
      padding-left: 22px;
    }
  }

  ol {
    ${props => props.color};
    font-size: 0.9375rem;
    line-height: 1.375rem;
    margin-left: 16px;

    ${breakpoints.md} {
      font-size: 1.125rem;
      line-height: 2rem;
    }

    ${breakpoints.lg} {
      font-size: 1.25rem;
      line-height: 2rem;
    }

    li {
      padding-left: 24px;
      width: 100%;
      &:before {
        color: ${props => props.color};
      }
    }
  }

  ul {
    list-style: none;
    font-size: 0.9375rem;
    line-height: 1.375rem;
    margin-left: 16px;

    ${breakpoints.md} {
      font-size: 1.125rem;
      line-height: 2rem;
    }

    ${breakpoints.lg} {
      font-size: 1.25rem;
      line-height: 2rem;
    }

    li {
      padding-left: 24px;

      &:before {
        content: "";
        width: 16px;
        height: 4px;
        color: ${props => props.color};
        padding-right: 5px;
        display: inline-block;
        position: relative;
        top: -5px;
        left: -24px;
      }
    }
  }
`;

export const xs = css`
  font-size: 0.7rem;
  line-height: 1.2rem;
  ${breakpoints.md} {
    font-size: 0.75 rem;
    line-height: 1.2rem;
  }

  ${breakpoints.lg} {
    font-size: 0.75rem;
    line-height: 1.2rem;
  }
`;

export const s = css`
  font-size: 0.8rem;
  line-height: 1.2rem;
  ${breakpoints.md} {
    font-size: 0.8rem;
    line-height: 1.2rem;
  }

  ${breakpoints.lg} {
    font-size: 0.8rem;
    line-height: 1.2rem;
  }

  blockquote {
    font-size: 0.8rem;
    line-height: 1.2rem;
    ${breakpoints.md} {
      font-size: 0.8rem;
      line-height: 1.2rem;
    }

    ${breakpoints.lg} {
      font-size: 0.8rem;
      line-height: 1.2rem;
    }
  }
`;
