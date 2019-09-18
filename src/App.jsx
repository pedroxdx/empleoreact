import React from "react";

import { BrowserRouter as Router, Route } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import Empleos from "./pages/Empleos";
import Contact from "./pages/Contact";
import RegistrarUsuario from "./pages/RegistrarUsuario";
import LogIn from "./pages/LogIn";
import RecuperarPassword from "./pages/RecuperarPassword";

function App() {
  return (
    <Router>
      <Route exact path="/" component={Home} />
      <Route exact path="/about" component={About} />
      <Route exact path="/empleos" component={Empleos} />
      <Route exact path="/contact" component={Contact} />
      <Route exact path="/registrar-usuario" component={RegistrarUsuario} />
      <Route exact path="/login" component={LogIn} />
      <Route exact path="/recuperar-password" component={RecuperarPassword} />
    </Router>
  );
}

export default App;
