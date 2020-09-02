import React, { useContext, useState } from "react";
import "./../../assets/styles/components/newFigura.scss";
import { GlobalContext } from "./../Context";
import Matrix from "./Matrix";

const NewFigura = () => {
  const { modalidades, setModalidades } = useContext(GlobalContext);
  const [selectValue, setSelectValue] = useState("");
  const handleOnChange = (e) => {
    setSelectValue(e.target.value);
  };
  return (
    <div className="newFiguraContainer">
      <label>Seleccione Modalidad</label>
      <select name="opciones" id="opciones" onChange={handleOnChange}>
        <option value="">none</option>
        {modalidades.map((item, index) => {
          return (
            <option value={item.nombre} key={index}>
              {item.nombre}
            </option>
          );
        })}
      </select>
      {selectValue !== "" && <h1>Añadir nueva Figura</h1> && <Matrix />}
    </div>
  );
};

export default NewFigura;
