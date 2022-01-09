import React, { useContext } from "react";
import styled from "styled-components";
import { OtherContext } from "../../global/contextApi";
import { ArrowIcon } from "../../global/images";

const ArrowButton = ({ onClick }) => {
  const { state } = useContext(OtherContext);
  return (
    <ArrowButtonStyled state={state} onClick={onClick}>
      <ArrowIcon />
    </ArrowButtonStyled>
  );
};

const ArrowButtonStyled = styled.div`
  border-radius: 100%;
  background-color: ${({ state }) => state && state.theme};
  width: 50px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

export default ArrowButton;
