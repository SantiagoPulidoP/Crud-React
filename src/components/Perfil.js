import React from "react";
import "../assets/styles/components/perfil.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { userInfo } from "../mocks/usario";
import userIcon from "../assets/static/usuario.svg";
import apellidoIcon from "../assets/static/apellido.svg";
import nombreUsuarioIcon from "../assets/static/codigo.svg";
import rolIcon from "../assets/static/rol.svg";
import fechaIcon from "../assets/static/fecha.svg";

const Perfil = () => (
  <div className="perfil">
    <button>
      {" "}
      <FontAwesomeIcon icon={faArrowLeft} size="lg" />
    </button>
    <div className="informacion">
      <div className="datos">
        <img src={userIcon} alt="" className="icono" />
        <p>
          <b>Nombre:</b> {userInfo.nombre}
        </p>
      </div>

      <div className="datos">
        <img src={apellidoIcon} alt="" className="icono" />
        <p>
          <b>Apellido:</b> {userInfo.apellido}{" "}
        </p>
      </div>

      <div className="datos">
        <img src={nombreUsuarioIcon} alt="" className="icono" />
        <p>
          <b>Nombre de usuario:</b> {userInfo.nombreDeUsuario}{" "}
        </p>
      </div>

      <div className="datos">
        <img src={rolIcon} alt="" className="icono" />
        <p>
          <b>Rol:</b> {userInfo.rol}{" "}
        </p>
      </div>

      <div className="datos">
        <img src={fechaIcon} alt="" className="icono" />
        <p>
          <b>Fecha de creacion:</b> {userInfo.fechaCreacion}{" "}
        </p>
      </div>
    </div>
    <div className="imagen"></div>
  </div>
);

export default Perfil;
