import { useContext, useState } from "react";
import Hero from "../components/Hero";
import useWebAnimations, {
  fadeIn,
  rotateIn,
} from "@wellyshen/use-web-animations";
import Header from "../components/Header";
import FoodSpinner from "../components/FoodSpinner";
import styled from "styled-components";
import ArrowButton from "../components/common/ArrowButton";
import { Main1 } from "../global/images";
import { mockData } from "../global/mockData";
import { OtherContext } from "../global/contextApi";
import { colors } from "../global/colors";
import useWindowMediaQuery from "../global/hooks/useMediaQuery";

const LandingPage = () => {
  const { state, changeTheme } = useContext(OtherContext);
  const [contentIdx, setContentIdx] = useState(0);
  const [rotationDeg, setRotationDeg] = useState(20);
  const screens = useWindowMediaQuery();

  const themeChanger = {
    theme: state.theme === colors.orange ? colors.green : colors.orange,
    lighterShade:
      state.lighterShade === colors.lightGreen
        ? colors.lightGreen
        : colors.lightOrange,
  };

  const contentAnimation = useWebAnimations({
    ...fadeIn,
    keyframes: fadeIn.keyframes,
    animationOptions: {
      ...fadeIn.animationOptions,
      delay: 200,
      duration: fadeIn.animationOptions.duration * 0.15,
    },
  });

  const mainFoodAnimation = useWebAnimations({
    ...rotateIn,
    keyframes: rotateIn.keyframes,
    animationOptions: {
      ...rotateIn.animationOptions,
      delay: 200,
      duration: rotateIn.animationOptions.duration * 0.15,
      easing: "cubic-bezier(.17,.67,.83,.67)",
    },
  });

  const sideFoodAnimation = useWebAnimations({
    keyframes: { transform: [`rotateZ(${rotationDeg}deg)`] },
    animationOptions: {
      duration: rotateIn.animationOptions.duration * 0.25,
      fill: "forwards",
      easing: "cubic-bezier(.17,.67,.83,.67)",
    },
  });

  const leftArrowClick = () => {
    if (contentIdx > 0) {
      setContentIdx((prev) => prev - 1);
      changeTheme(themeChanger);
      contentAnimation.getAnimation().play();
      mainFoodAnimation.getAnimation().play();
      sideFoodAnimation.getAnimation().play();
      setRotationDeg((prev) => prev + 30);
    }
  };
  const rightArrowClick = () => {
    if (contentIdx < mockData.length - 1) {
      setContentIdx((prev) => prev + 1);
      changeTheme(themeChanger);
      contentAnimation.getAnimation().play();
      mainFoodAnimation.getAnimation().play();
      sideFoodAnimation.getAnimation().play();
      setRotationDeg((prev) => prev + 30);
    }
  };

  return (
    <LandingPageStyled screens={screens}>
      <FoodSpinner ref={sideFoodAnimation.ref} />
      <Header />
      <Hero data={mockData[contentIdx]} ref={contentAnimation.ref} />
      <div className="d-flex justify-content-between">
        <div className="hide">x</div>
        <div className="bottom">
          <ArrowButton onClick={leftArrowClick} />
          <img src={Main1} alt="main" ref={mainFoodAnimation.ref} />
          <ArrowButton onClick={rightArrowClick} />
        </div>
        <div className="hide">x</div>
      </div>
    </LandingPageStyled>
  );
};

const LandingPageStyled = styled.div`
  height: 100vh;
  margin-left: ${({ screens }) => (screens.md ? "130px" : "15px")};
  margin-right: ${({ screens }) => (screens.md ? "130px" : "15px")};
  padding-bottom: 40px;
  .bottom {
    z-index: 1;
    display: flex;
    align-items: end;
    margin-left: 20vw;
    margin-top: -10vw;
  }
`;

export default LandingPage;
