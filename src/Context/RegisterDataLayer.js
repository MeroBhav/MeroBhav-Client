import React from "react";
import RegisterReducer, { initialState } from "./RegisterReducer";

export const RegisterUserDataLayerContext = React.createContext();

export default function RegisterUserDataLayer({children}) {
  const [dataLayer, dispatch] = React.useReducer(RegisterReducer, initialState);

  return (
    <RegisterUserDataLayerContext.Provider value={[dataLayer, dispatch]}>
      {children}
    </RegisterUserDataLayerContext.Provider>
  );
}

export const useRegisterUserDataLayerValue = () => React.useContext(RegisterUserDataLayerContext);