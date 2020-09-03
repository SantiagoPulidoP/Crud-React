import React, { useContext, useState, useEffect } from "react";
import { GlobalContext } from "./../Context";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusCircle, faTimes } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import axios from "axios";

const Figuras = () => {
  const [figure, setFigure] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    //if logged
    axios.get("https://fake-api-crud.herokuapp.com/figuras").then((res) => {
      setFigure(res.data);
      setLoading(false);
    });
  }, [loading]);

  const handleFigureDelete = (e) => {
    const id = e.target.id;
    if (id) {
      axios.delete(`https://fake-api-crud.herokuapp.com/figuras/${id}`).then((res) => {
        console.log(res.data);
        setLoading(true);
      });
    }
  };

  return (
    <div className="figuras">
      <Link to="/figura/new" className="add">
        Agregar figura
        <FontAwesomeIcon icon={faPlusCircle} size="1x" />
      </Link>

      {!loading && (
        <div className="figuras-container">
          {figure.map((i, index) => {
            return (
              <div className="card" style={{ width: "18rem" }} key={index} id={i.id}>
                <div className="card-title">{figure[index].nombreFigura}</div>
                <FontAwesomeIcon id={i.id} className="delete" icon={faTimes} onClick={handleFigureDelete} />
                <div className="container-elementos">
                  {figure[index].patronFigura.map((item, ind) => {
                    return item ? <div className="celda selected" key={ind}></div> : <div className="celda" key={ind}></div>;
                  })}
                </div>
              </div>
            );
          })}
        </div>
      )}
      {loading && (
        <div className="spinner-grow" role="status">
          <span className="sr-only">Loading...</span>
        </div>
      )}
    </div>
  );
};

export default Figuras;
