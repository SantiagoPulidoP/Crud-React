import React, { useContext, useState, useEffect } from "react";
import "./../../assets/styles/components/newFigura.scss";
import axios from "axios";

import { GlobalContext } from "./../Context";
import Matrix from "./Matrix";

const NewFigura = () => {
  const [modalidades, setModalidades] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectValue, setSelectValue] = useState("");

  useEffect(() => {
    axios.get("https://fake-api-crud.herokuapp.com/modalidades").then((data) => {
      setModalidades(data.data);
      setLoading(false);
      console.log(data.data);
    });
  }, []);
  const handleOnChange = (e) => {
    setSelectValue(e.target.value);
  };
  return (
    <div className="newFiguraContainer">
      <h3 className="text-center mt-3">Crear nueva figura</h3>
      <div className="form-group">
        <label>Seleccione Modalidad: </label>
        <select name="opciones" id="opciones" onChange={handleOnChange} className="form-control">
          <option value="">none</option>
          {modalidades.map((item, index) => {
            return (
              <option value={item.nombre} key={index}>
                {item.nombre}
              </option>
            );
          })}
        </select>
      </div>
      {selectValue !== "" && <h1>Añadir nueva Figura</h1> && <Matrix />}
    </div>
  );
};

export default NewFigura;
