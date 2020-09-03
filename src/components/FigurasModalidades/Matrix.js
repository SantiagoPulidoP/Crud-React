import React, { useContext, useState } from "react";
import { GlobalContext } from "./../Context";
import { Link } from "react-router-dom";
import axios from "axios";

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

  const handleOnClick = (e) => {
    e.target.classList.toggle("selected");
    let index = parseInt(e.target.id);
    arr[index] = !arr[index];
    if (arr.includes(true)) {
      document.querySelector(".btn").classList.remove("disabled");
    } else {
      document.querySelector(".btn").classList.add("disabled");
    }
  };

  const handleOnClickButton = () => {
    let inputNombre = document.getElementById("nombre");

    axios
      .post("https://fake-api-crud.herokuapp.com/figuras", {
        nombreFigura: inputNombre.value,
        patronFigura: arr,
      })
      .then((res) => console.log(res.data));
  };
  return (
    <div className="matrix">
      <div className="form-group">
        <label>Nombre de la Figura: </label>
        <input className="form-control" type="text" name="nombre" id="nombre" />
      </div>
      <div className="container-matrix">
        {arr.map((i, index) => {
          return <div className="col-sm celda" key={index} id={index} onClick={handleOnClick}></div>;
        })}
      </div>

      <div className="form-group crear">
        <Link to="/figuras" className="crear-figura  btn btn-primary disabled form-control" onClick={handleOnClickButton}>
          Crear Figura
        </Link>
      </div>
    </div>
  );
};

export default Matrix;
