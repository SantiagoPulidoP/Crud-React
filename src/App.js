import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./assets/styles/App.scss";
import Header from "./components/Header";
import Perfil from "./components/Perfil";
import FigurasModalidades from "./components/FigurasModalidades/FigurasModalidades.js";
import NewModalidad from "./components/FigurasModalidades/NewModalidad";
import NewFigura from "./components/FigurasModalidades/NewFigura";
import Login from "./components/Login";
import Footer from "./components/Footer";
function App() {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/perfil" component={Perfil} />
        <Route exact path="/figuras" component={FigurasModalidades} />
        <Route exact path="/modalidad/new" component={NewModalidad} />
        <Route exact path="/figura/new" component={NewFigura} />
        {/*  <Route component={NotFound} /> */}
      </Switch>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
