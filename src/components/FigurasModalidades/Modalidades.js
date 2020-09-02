import React, { useContext } from "react";
import { GlobalContext } from "./../Context";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusCircle, faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
const Modalidades = (props) => {
  const { modalidades, setModalidades } = useContext(GlobalContext);
  console.log(modalidades);
  return (
    <div className="figuras">
      <Link to="/modalidad/new">
        <FontAwesomeIcon icon={faPlusCircle} size="2x" />
      </Link>

      <table border="1" cellPadding="6" cellSpacing="4">
        <tr>
          <th>Nombre de la Modalidad</th>
          <th>Oportunidad</th>
          <th>Cerrar al azar</th>
        </tr>
        {modalidades.map((item, index) => (
          <tr>
            <td>{item.nombre}</td>
            <td>{item.oportunidad}</td>
            <td>{item.cerrarAlAzar}</td>
            <td>
              <FontAwesomeIcon icon={faEdit} />
            </td>
            <td>
              <FontAwesomeIcon icon={faTrash} />
            </td>
          </tr>
        ))}
      </table>
    </div>
  );
};

export default Modalidades;
