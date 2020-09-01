import React from "react";
import "../assets/styles/components/header.scss";
import userIcon from "../assets/static/user-icon.png";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <header className="header">
      <h1>Welcome home</h1>
      <div className="header-menu">
        <div className="header-menu-profile">
          <img src={userIcon} alt="" />
          <p>Perfil</p>
        </div>
        <ul>
          <li>
            <Link to="/perfil">Cuenta</Link>
          </li>
          <li>
            <a href="/">Iniciar Sesión</a>
          </li>
        </ul>
      </div>
    </header>
  );
};
export default Header;
