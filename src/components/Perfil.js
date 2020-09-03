import React, { useContext, useEffect } from "react";
import axios from "axios";
import "../assets/styles/components/perfil.scss";
import { Link } from "react-router-dom";
import userIcon from "../assets/static/usuario.svg";
import apellidoIcon from "../assets/static/apellido.svg";
import nombreUsuarioIcon from "../assets/static/codigo.svg";
import rolIcon from "../assets/static/rol.svg";
import fechaIcon from "../assets/static/fecha.svg";
import { GlobalContext } from "./Context";
import { useState } from "react";

const Perfil = () => {
  const { isLogged, setIsLogged } = useContext(GlobalContext);
  const [userData, setUserData] = useState({});

  useEffect(() => {
    if (isLogged) {
      axios.get("https://fake-api-crud.herokuapp.com/login").then((data) => {
        setUserData({
          nombre: data.data[0].user,
          apellido: data.data[0].apellido,
          nombreUsuario: data.data[0].NombreUsuario,
          rol: data.data[0].rol,
          fechaCreacion: data.data[0].fechaCreacion,
        });
      });
    }
  });

  return (
    <div className="perfil-container">
      {isLogged && (
        <div className="perfil">
          <div className="informacion">
            <div className="datos">
              <img src={userIcon} alt="" className="icono" />
              <p>
                <b>Nombre:</b> {userData.nombre}
              </p>
            </div>

            <div className="datos">
              <img src={apellidoIcon} alt="" className="icono" />
              <p>
                <b>Apellido:</b> {userData.apellido}{" "}
              </p>
            </div>

            <div className="datos">
              <img src={nombreUsuarioIcon} alt="" className="icono" />
              <p>
                <b>Nombre de usuario:</b> {userData.nombreUsuario}{" "}
              </p>
            </div>

            <div className="datos">
              <img src={rolIcon} alt="" className="icono" />
              <p>
                <b>Rol:</b> {userData.rol}{" "}
              </p>
            </div>

            <div className="datos">
              <img src={fechaIcon} alt="" className="icono" />
              <p>
                <b>Fecha de creacion:</b> {userData.fechaCreacion}{" "}
              </p>
            </div>
          </div>
          <div className="figuras-modalidades">
            <Link className="btn btn-primary mt-5" to="/figuras">
              Ver Figuras y Modalidades
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Perfil;
