import React, { useState, useContext } from "react";
import Modalidades from "./Modalidades";
import { Link } from "react-router-dom";
import { GlobalContext } from "./../Context";

const NewModalidad = () => {
  const { modalidades, setModalidades } = useContext(GlobalContext);
  const [nuevo, setNuevo] = useState({
    nombre: "",
    oportunidad: "",
    cerrarAlAzar: "",
  });

  const handleOnChange = (e) => {
    setNuevo({ ...nuevo, [e.target.name]: e.target.value });
  };

  const handleCreate = () => {
    setModalidades((prevMod) => [...prevMod, nuevo]);
  };

  return (
    <div className="modalidad-container">
      <h4>Agregar nueva modalidad</h4>
      <label>
        Nombre de modalidad <input type="text" name="nombre" onChange={handleOnChange} />
      </label>
      <label>
        Oportunidad <input type="number" name="oportunidad" onChange={handleOnChange} />
      </label>
      <label>
        Cerrrar al lanzar <input type="number" name="cerrarAlAzar" onChange={handleOnChange} />
      </label>
      <Link to="/figuras" onClick={handleCreate}>
        Crear
      </Link>
    </div>
  );
};
export default NewModalidad;
