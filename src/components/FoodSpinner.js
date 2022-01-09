import React, { useContext } from "react";
import styled from "styled-components";
import { OtherContext } from "../global/contextApi";
import { Spinner } from "../global/images";

const FoodSpinner = React.forwardRef((props, ref) => {
  const { state } = useContext(OtherContext);

  return (
    <FoodSpinnerStyled state={state}>
      <div className="blob">
        <img
          src={Spinner}
          className="food-spinner"
          alt="food-spinner"
          ref={ref}
        />
      </div>
    </FoodSpinnerStyled>
  );
});

const FoodSpinnerStyled = styled.div`
  .blob {
    border-radius: 100%;
    background: ${({ state }) => state && state.lighterShade};
    position: absolute;
    width: 80vw;
    height: 80vw;
    right: 0vw;
    top: -50vw;
    display: flex;
    justify-content: center;
    align-items: end;
    overflow: hidden;
  }
  .food-spinner {
    position: absolute;
    top: 55vw;
    width: 45vw;
    height: 45vw;
  }
`;

export default FoodSpinner;
