import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./assets/styles/App.scss";
import Header from "./components/Header";
import Perfil from "./components/Perfil";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path="/perfil" component={Perfil} />
        {/*  <Route component={NotFound} /> */}
      </Switch>
    </BrowserRouter>
  );
}

export default App;
