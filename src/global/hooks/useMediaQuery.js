import { useState, useEffect } from "react";

const useWindowMediaQuery = () => {
  const [windowWidth, setWindowWidth] = useState(getWindowDimensions());

  function getWindowDimensions() {
    const width = window ? window.innerWidth : null;
    let obj = {
      sm: false,
      xs: false,
      md: false,
      lg: false,
      xl: false,
      xxl: false,
    };

    if (width) {
      if (width <= 576) {
        obj = {
          sm: true,
          xs: false,
          md: false,
          lg: false,
          xl: false,
          xxl: false,
        };
      } else if (width <= 768) {
        obj = {
          sm: true,
          xs: true,
          md: false,
          lg: false,
          xl: false,
          xxl: false,
        };
      } else if (width <= 992) {
        obj = {
          sm: false,
          xs: true,
          md: true,
          lg: false,
          xl: false,
          xxl: false,
        };
      } else if (width <= 1200) {
        obj = {
          sm: false,
          xs: true,
          md: true,
          lg: true,
          xl: false,
          xxl: false,
        };
      } else if (width <= 1400) {
        obj = {
          sm: false,
          xs: true,
          md: true,
          lg: true,
          xl: true,
          xxl: false,
        };
      } else {
        obj = {
          sm: false,
          xs: true,
          md: true,
          lg: true,
          xl: true,
          xxl: true,
        };
      }
    }
    return obj;
  }

  useEffect(() => {
    setWindowWidth(getWindowDimensions());

    window.addEventListener("resize", () => {
      setWindowWidth(getWindowDimensions());
    });
    return window.removeEventListener("resize", () => {});
  }, []);

  return windowWidth;
};

export default useWindowMediaQuery;
