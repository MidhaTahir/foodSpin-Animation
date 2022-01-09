import React, { useContext } from "react";
import styled from "styled-components";
import { OtherContext } from "../../global/contextApi";

const Button = ({ children, ...otherProps }) => {
  const { state } = useContext(OtherContext);
  return (
    <ButtonStyled state={state} {...otherProps}>
      {children}
    </ButtonStyled>
  );
};

const ButtonStyled = styled.button`
  outline: none;
  border: none;
  width: 163px;
  height: 48px;
  background: ${({ state }) => state && state.theme};
  box-shadow: 0px 20px 40px ${({ state }) => state && state.lighterShade};
  border-radius: 69px;
  font-weight: bold;
  font-size: 13px;
  line-height: 19px;
  text-transform: uppercase;
  color: #ffffff;
  cursor: pointer;
`;

export default Button;
