import React, { useContext, useEffect, useState } from "react";
import { GlobalContext } from "./../Context";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusCircle, faTrash } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
const Modalidades = (props) => {
  const [modalidades, setModalidades] = useState([]);
  const [loading, setLoading] = useState(true);
  const { isLogged, setIsLogged } = useContext(GlobalContext);
  useEffect(() => {
    if (isLogged) {
      axios.get("https://fake-api-crud.herokuapp.com/modalidades").then((data) => {
        setModalidades(data.data);
        setLoading(false);
        console.log(data.data);
      });
    }
  }, [loading]);
  const handleClickDelete = (e) => {
    if (e.target.id) {
      let id = e.target.id;
      axios.delete(`https://fake-api-crud.herokuapp.com/modalidades/${id}`).then((res) => {
        console.log(res.data);
        setLoading(true);
      });
    }
  };
  return (
    <div className="figuras">
      {isLogged ? (
        <Link to="/modalidad/new" className="add">
          Agregar nueva modalidad
          <FontAwesomeIcon icon={faPlusCircle} size="1x" />
        </Link>
      ) : (
        <Link to="/" className="add">
          Agregar nueva modalidad
          <FontAwesomeIcon icon={faPlusCircle} size="1x" />
        </Link>
      )}
      {!loading && (
        <table border="1" cellPadding="6" cellSpacing="4" className="tabla-modalidades">
          <tr>
            <th>Nombre de la Modalidad</th>
            <th>Oportunidad</th>
            <th>Cerrar al azar</th>
          </tr>
          {modalidades.map((item, index) => (
            <tr key={index}>
              <td>{item.nombre}</td>
              <td>{item.oportunidad}</td>
              <td>{item.cerrarAlAzar}</td>
              <td id={item.id} onClick={handleClickDelete}>
                <FontAwesomeIcon icon={faTrash} id={item.id} onClick={handleClickDelete} />
              </td>
            </tr>
          ))}
        </table>
      )}
      {loading && (
        <div className="spinner-grow" role="status">
          <span className="sr-only">Loading...</span>
        </div>
      )}
    </div>
  );
};

export default Modalidades;
