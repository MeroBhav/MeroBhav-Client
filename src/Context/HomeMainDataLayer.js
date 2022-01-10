import React from "react";
import HomeMainReducer, { initialState } from "./HomeMainReducer";

export const HomeMainDataLayerContext = React.createContext();

export default function HomeMainDataLayer({children}) {
  const [dataLayer, dispatch] = React.useReducer(HomeMainReducer, initialState);

  return (
    <HomeMainDataLayerContext.Provider value={[dataLayer, dispatch]}>
      {children}
    </HomeMainDataLayerContext.Provider>
  );
}

export const useHomeMainDataLayerValue = () => React.useContext(HomeMainDataLayerContext);