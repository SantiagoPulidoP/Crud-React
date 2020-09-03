import React, { useContext, useState } from "react";
import "../assets/styles/components/header.scss";
import userIcon from "../assets/static/user-icon.png";
import { Link } from "react-router-dom";
import { GlobalContext } from "./Context";
const Header = () => {
  const { isLogged, setIsLogged } = useContext(GlobalContext);
  return (
    <header className="header">
      <Link to="/" id="inicio">
        <h1>Bingola</h1>
      </Link>

      <div className="header-menu">
        <div className="header-menu-profile">
          <img src={userIcon} alt="" />
          <h6>Perfil</h6>
        </div>
        <ul>
          <li>
            {isLogged ? (
              <div className="menu-logged">
                <Link to="/perfil">Cuenta</Link>
                <Link
                  to="/"
                  onClick={() => {
                    setIsLogged(false);
                  }}
                >
                  Salir
                </Link>
              </div>
            ) : null}
          </li>
          <li>
            <li>{isLogged ? null : <Link to="/">Iniciar Sesion</Link>}</li>
          </li>
        </ul>
      </div>
    </header>
  );
};
export default Header;
