import React, { useState, useContext } from "react";
import Modalidades from "./Modalidades";
import axios from "axios";
import "../../assets/styles/components/newModalidad.scss";
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
    /*     setModalidades((prevMod) => [...prevMod, nuevo]);
     */ axios.post("https://fake-api-crud.herokuapp.com/modalidades", {
      nombre: nuevo.nombre,
      oportunidad: nuevo.oportunidad,
      cerrarAlAzar: nuevo.cerrarAlAzar,
    });
  };

  return (
    <div className="modalidad-container">
      <h4 className="title">Agregar nueva modalidad</h4>
      <form>
        <div className="form-group">
          <label>
            <small>Nombre de modalidad:</small> <input type="text" name="nombre" onChange={handleOnChange} class="form-control" />
          </label>{" "}
        </div>
        <div className="form-group">
          <label>
            <small>Oportunidad:</small> <input class="form-control" type="number" name="oportunidad" onChange={handleOnChange} />
          </label>{" "}
        </div>
        <div className="form-group">
          <label>
            <small>Cerrrar al lanzar:</small> <input class="form-control" type="number" name="cerrarAlAzar" onChange={handleOnChange} />
          </label>
        </div>
        <Link to="/figuras" className="btn btn-primary" onClick={handleCreate}>
          <b>Crear</b>
        </Link>
      </form>
    </div>
  );
};
export default NewModalidad;
