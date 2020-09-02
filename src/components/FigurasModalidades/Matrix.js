import React, { useContext } from "react";
import { GlobalContext } from "./../Context";
import { Link } from "react-router-dom";
import "../../assets/styles/components/matrix.scss";
const Matrix = () => {
  let arr = [
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
    false,
    false,
    false,
    false,
  ];
  const { figure, setFigure } = useContext(GlobalContext);
  const handleOnClick = (e) => {
    let index = parseInt(e.target.id);
    e.target.classList.toggle("selected");
    arr[index] = !arr[index];
    if (arr.includes(true)) {
      document.querySelector("button").disabled = false;
    } else {
      document.querySelector("button").disabled = true;
    }
  };

  const handleOnClickButton = (e) => {
    setFigure((prevFig) => [...prevFig, arr]);
  };
  return (
    <div className="matrix">
      <label htmlFor="">Nombre de la Figura</label>
      <input type="text" name="nombre" id="nombre" />
      <div className="container">
        {arr.map((i, index) => {
          return <div className="col-sm celda" key={index} id={index} onClick={handleOnClick}></div>;
        })}
      </div>
      <Link className="crear-figura" onClick={handleOnClickButton} disabled>
        <button>Crear Figura</button>
      </Link>
    </div>
  );
};

export default Matrix;
