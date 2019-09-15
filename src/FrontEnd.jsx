import React from "react";

import { HeaderApp, FooterApp } from "./pages/Secciones";
import { Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Empleos from "./pages/Empleos";
import Contact from "./pages/Contact";

function FrontEnd() {
  return (
    <>
      <HeaderApp />
      <Route exact path="/" component={Home} />
      <Route exact path="/about" component={About} />
      <Route exact path="/empleos" component={Empleos} />
      <Route exact path="/contact" component={Contact} />
      <FooterApp />
    </>
  );
}

export default FrontEnd;
