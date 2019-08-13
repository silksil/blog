import styled from "styled-components";
import BaseButton from "../BaseButton";

const PrimaryButton = styled(BaseButton)`
  background: ${({ theme }) => theme.secondary.main};
  color: ${({ theme }) => theme.secondary.contrast};

  &:hover {
    background-color: ${({ theme }) => theme.secondary.light};
  }

  &:active {
    background: ${({ theme }) => theme.secondary.dark};
  }
`;

export default PrimaryButton;
