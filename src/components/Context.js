import React, { useState, createContext } from "react";

export const GlobalContext = createContext();

export const GlobalProvider = (props) => {
  const [isLogged, setIsLogged] = useState(false);
  return <GlobalContext.Provider value={{ isLogged, setIsLogged }}>{props.children}</GlobalContext.Provider>;
};
