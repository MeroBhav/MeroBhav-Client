import React from "react";
import RegisterReducer, { initialState } from "./RegisterReducer";

export const RegisterUserDataLayerContext = React.createContext();

export default function DataLayer({children}) {
  const [dataLayer, dispatch] = React.useReducer(RegisterReducer, initialState);

  return (
    <RegisterUserDataLayerContext.Provider value={[dataLayer, dispatch]}>
      {children}
    </RegisterUserDataLayerContext.Provider>
  );
}

export const useDataLayerValue = () => React.useContext(RegisterUserDataLayerContext);