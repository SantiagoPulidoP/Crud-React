import React, { useContext } from "react";
import { GlobalContext } from "./../Context";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusCircle } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const Figuras = () => {
  const { figure, setFigure } = useContext(GlobalContext);

  return (
    <div className="figuras">
      <Link to="/figura/new">
        <FontAwesomeIcon icon={faPlusCircle} size="2x" />
      </Link>
      <h1>Figuras</h1>
      <div className="figuras-container">
        {figure.map((i, index) => {
          return (
            <div className="card" style={{ width: "18rem" }} key={index}>
              <div className="container-elementos">
                {figure[index].map((item, ind) => {
                  return item ? <div className="celda selected" key={ind}></div> : <div className="celda" key={ind}></div>;
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Figuras;
