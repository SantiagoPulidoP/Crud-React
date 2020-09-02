import React, { useState, createContext } from "react";

export const GlobalContext = createContext();

export const GlobalProvider = (props) => {
  const [modalidades, setModalidades] = useState([
    {
      nombre: "Completo",
      oportunidad: 5,
      cerrarAlAzar: 8,
    },
    {
      nombre: "Lleno",
      oportunidad: 7,
      cerrarAlAzar: 4,
    },
    {
      nombre: "Medio",
      oportunidad: 6,
      cerrarAlAzar: 4,
    },
  ]);
  const [figure, setFigure] = useState([
    [
      true,
      false,
      false,
      false,
      false,
      true,
      false,
      false,
      false,
      false,
      true,
      false,
      false,
      false,
      false,
      true,
      false,
      false,
      false,
      false,
      true,
      false,
      false,
      false,
      false,
    ],
    [
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      true,
      true,
      true,
      true,
    ],
  ]);
  return <GlobalContext.Provider value={{ figure, setFigure, modalidades, setModalidades }}>{props.children}</GlobalContext.Provider>;
};
