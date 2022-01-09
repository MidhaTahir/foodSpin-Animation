import { createContext, useReducer } from "react";
import { colors } from "./colors";

const initialState = {
  theme: colors.orange,
  lighterShade: colors.lightOrange,
};

const otherReducer = (state = initialState, action) => {
  switch (action.type) {
    case "TOGGLE_THEME":
      return {
        ...state,
        theme: action.payload.theme,
        lighterShade: action.payload.lighterShade,
      };
    default:
      return state;
  }
};

export const OtherContext = createContext();
export const OtherProvider = ({ children }) => {
  const [state, dispatch] = useReducer(otherReducer, initialState);
  const changeTheme = (shade) => {
    const { theme, lighterShade } = shade;
    dispatch({
      type: "TOGGLE_THEME",
      payload: { theme, lighterShade },
    });
  };
  return (
    <OtherContext.Provider value={{ state, changeTheme }}>
      {children}
    </OtherContext.Provider>
  );
};
