import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import "../assets/styles/login.scss";
import { Link } from "react-router-dom";
import { GlobalContext } from "./Context";

const Login = () => {
  const { isLogged, setIsLogged } = useContext(GlobalContext);
  const [user, setUser] = useState("");
  const [pass, setPass] = useState("");
  useEffect(() => {
    axios.get("https://fake-api-crud.herokuapp.com/login").then((data) => {
      setUser(data.data[0].user);
      setPass(data.data[0].pass);
    });
  });

  const handleButtonClick = (e) => {
    e.preventDefault();

    if (document.querySelector(".user").value === user && document.querySelector(".pass").value === "bingola22") {
      document.querySelector("form").style.display = "none";
      document.querySelector("h4").style.display = "none";

      document.querySelector(".welcome").style.display = "block";
      setIsLogged(true);
    } else {
      document.querySelector("form").style.boxShadow = "0px 2px 10px red";
    }
  };
  return (
    <div className="login-container">
      <h4>Iniciar Sesión</h4>
      <form>
        <div className="form-group" id="usuario">
          <label>
            Usuario
            <input type="text" className="form-control user" />
          </label>
        </div>
        <div className="form-group password">
          <label>
            Contraseña
            <input type="password" className="form-control pass" />
          </label>
        </div>
        <button className="btn btn-primary" onClick={handleButtonClick}>
          Iniciar Sesión
        </button>
      </form>
      <div className="welcome">
        <h5>Bienvenido!</h5>
        <Link className="btn btn-primary" to="/perfil">
          Entrar
        </Link>
      </div>
    </div>
  );
};

export default Login;
