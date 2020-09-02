import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import "../../assets/styles/components/figurasModalidades.scss";
import Figuras from "./Figuras";
import Modalidades from "./Modalidades";

const FigurasModalidades = () => {
  const [showFiguras, setShowFiguras] = useState(false);
  const [showModalidades, setShowModalidades] = useState(false);

  const handleClickFiguras = () => {
    setShowFiguras(true);
    setShowModalidades(false);
  };
  const handleClickModalidades = () => {
    setShowModalidades(true);
    setShowFiguras(false);
  };
  return (
    <div className="wrapper">
      <nav className="nav justify-content-center">
        <Link className="nav-link active" to="/figuras" onClick={handleClickFiguras}>
          Lista de Figuras
        </Link>
        <Link className="nav-link" to="/figuras" onClick={handleClickModalidades}>
          Lista de Modalidades
        </Link>
      </nav>
      {showFiguras && <Figuras />}
      {showModalidades && <Modalidades />}
    </div>
  );
};

export default FigurasModalidades;
