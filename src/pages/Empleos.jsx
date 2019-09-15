import React from "react";
import { HeaderApp, FooterApp, HeaderPage } from "./Secciones";
import FormEmpleoBuscador from "../components/FormEmpleoBuscador";
import EmpleosDisponibles from "../components/EmpleosDisponibles";

const Empleos = () => {
  return (
    <>
      <HeaderApp />
      <HeaderPage title="Empleos" />
      <section className="empleos-buscador">
        <div className="container">
          <div className="row">
            <div className="col-12 col-sm-6 col-md-5">
              <FormEmpleoBuscador />
            </div>
            <div className="col-12 col-sm-6 col-md-7">
              <EmpleosDisponibles />
            </div>
          </div>
        </div>
      </section>
      <FooterApp />
    </>
  );
};

export default Empleos;
