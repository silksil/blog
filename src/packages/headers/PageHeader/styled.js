import styled, { css } from "styled-components";
import { breakpoints } from "../../breakpoints";

export const HeaderBase = css`
  background-image: linear-gradient(135deg, #f037a5 0%, #ffcdd2 100%);
  position: relative;
  z-index: 0;
  padding: 0 20px;
  box-sizing: border-box;
  display: flex;
  margin-top: -56px;
  height: 95vh;

  &:after {
    content: "";
    display: block;
    background: ${({ theme }) => theme.primary.main};
    height: 8px;
    position: absolute;
    bottom: -8px;
    width: 100%;
    left: 0;
  }

  ${breakpoints.xs} {
    margin-top: -80px;
    max-height: 90vh;

    &:after {
      height: 32px;
      bottom: -32px;
    }
  }

  ${breakpoints.md} {
    padding: 0 40px;
    margin-top: -88px;
    bottom: -8px;

    &:after {
      display: none;
    }
  }

  ${breakpoints.lg} {
    height: 600px;
    display: flex;
    align-items: center;
  }
`;

export const HeaderImgContainer = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  overflow: hidden;
  display: flex;
  justify-content: flex-end;
  height: 60%;

  ${breakpoints.xs} {
    height: 70%;
  }

  ${breakpoints.md} {
    height: 60%;
    width: 100%;
  }

  ${breakpoints.lg} {
    height: 100%;
    justify-content: center;
  }

  img {
    height: 100%;
    flex-shrink: 0;
    object-fit: cover;
    width: 100%;
    margin: -1px 0;
  }

  /* &::after {
    content: "";
    position: absolute;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 1;
    display: block;
    background: linear-gradient(
      180deg,
      rgba(0, 0, 0, 0) 0%,
      rgba(0, 0, 0, 0) 12.74%,
      ${({ theme }) => theme.primary.main} 100%
    );
    height: 100px;

    ${breakpoints.lg} {
      top: 0;
      height: 100%;
      width: 66%;
      background: linear-gradient(
        270deg,
        rgba(0, 0, 0, 0) 0%,
        rgba(0, 0, 0, 0.35) 26.64%,
        rgba(0, 0, 0, 0.7) 100%
      );
    }
  } */
`;

export const HeaderContent = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: 60%;
  z-index: 2;

  ${breakpoints.xs} {
    margin-top: 50%;
  }

  ${breakpoints.md} {
    margin-top: 290px;
  }

  ${breakpoints.lg} {
    max-width: 1360px;
    margin: 80px auto 0;
  }
`;

export const BrandInfo = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-direction: row;
  align-items: center;
  margin-bottom: 20px;

  ${breakpoints.lg} {
    height: 120px;
    margin-bottom: 24px;
  }

  h1 {
    align-self: center;
    font-size: 22px;

    ${breakpoints.md} {
      font-size: 40px;
    }
  }
`;

export const Circle = styled.a`
  position: relative;
  border-radius: 50%;
  width: 56px;
  height: 56px;
  overflow: hidden;
  background-color: ${({ theme }) => theme.secondary.main};
  flex-shrink: 0;
  cursor: pointer;
  margin-right: 8px;

  img {
    width: 100%;
    height: auto;
  }

  ${breakpoints.md} {
    height: 68px;
    width: 68px;
    margin-right: 16px;
  }

  ${breakpoints.lg} {
    height: 120px;
    width: 120px;
  }
`;

export const BrandImage = styled.img`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 100%;
  transform: translate(-50%, -50%);
`;

export const TagLine = styled.div`
  line-height: 32px;
  display: flex;
  width: auto;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;

  ${breakpoints.md} {
    line-height: 32px;
    font-size: 20px;
    float: left;
    margin-right: 10px;
  }

  img {
    height: 1.8rem;
    width: auto;
    vertical-align: middle;
  }
`;

export const SecondTagLine = styled(TagLine)``;

export const Description = styled.span`
  line-height: 22px;
  margin-bottom: 32px;
  font-size: 16px;

  ${breakpoints.md} {
    line-height: 30px;
    font-size: 18px;
  }

  ${breakpoints.lg} {
    margin-bottom: 56px;
    max-width: 660px;
  }
`;

export const HeaderSocialIcons = styled.div`
  display: flex;
  margin-bottom: 32px;

  div {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    height: 40px;

    a {
      border: 1px solid rgba(187, 187, 187, 0.5);
      width: 40px;
      height: 40px;
      padding: 8px;
      box-sizing: border-box;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      margin: 4px;

      &:hover {
        border: 1px solid ${({ theme }) => theme.primary.dark};
      }
    }
  }
`;

export const SocialText = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 13px;
  color: ${({ theme }) => theme.primary.contrast};
  font-weight: bold;
  letter-spacing: 15;
  margin-right: 16px;
`;
