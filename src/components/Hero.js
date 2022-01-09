import React, { useContext } from "react";
import styled from "styled-components";
import { OtherContext } from "../global/contextApi";
import Button from "./common/Button";
import { colors } from "../global/colors";

const Hero = React.forwardRef(({ data }, ref) => {
  const { state } = useContext(OtherContext);
  return (
    <HeroStyled state={state} ref={ref}>
      <div>
        <div className="desc">
          <h1>{data.price}</h1>
          <h2>{data.title}</h2>
          <p className="text">{data.desc}</p>
          <Button>ORDER NOW</Button>
        </div>
      </div>
    </HeroStyled>
  );
});

const HeroStyled = styled.div`
  display: flex;
  .desc {
    width: 50%;
    margin-top: 200px;
  }
  h1 {
    font-style: normal;
    font-weight: 600;
    font-size: 44px;
    line-height: 66px;
    text-transform: capitalize;
    color: ${({ state }) => state && state.theme};
  }
  h2 {
    font-style: normal;
    font-weight: 500;
    font-size: 36px;
    line-height: 50px;
    text-transform: capitalize;
    color: ${colors.textColor};
  }
  .text {
    font-style: normal;
    font-weight: normal;
    font-size: 13px;
    line-height: 19px;
    color: ${colors.textColor};
  }
`;

export default Hero;
