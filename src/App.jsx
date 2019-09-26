import React from "react";

import { Route, Switch } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import Empleos from "./pages/Empleos";
import Contact from "./pages/Contact";
import RegistrarUsuario from "./pages/RegistrarUsuario";
import LogIn from "./pages/LogIn";
import RecuperarPassword from "./pages/RecuperarPassword";
import Dashboard from "./pages/admin/Dashboard";
import Profile from "./pages/admin/Profile";

function App() {
  return (
    <>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/empleos" component={Empleos} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/registrar-usuario" component={RegistrarUsuario} />
        <Route exact path="/login" component={LogIn} />
        <Route exact path="/recuperar-password" component={RecuperarPassword} />
        <Route path="/admin/dashboard" component={Dashboard} />
        <Route path="/admin/profile" component={Profile} />
      </Switch>
    </>
  );
}

export default App;
