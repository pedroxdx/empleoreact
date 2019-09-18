import React from "react";
import { HeaderApp, FooterApp, HeaderPage } from "./Secciones";
import FormRegistrarUsuario from "../components/FormRegistrarUsuario";

const RegistrarUsuario = () => {
  return (
    <>
      <HeaderApp />
      <HeaderPage title="Registrar Usuario" />
      <section className="empleos-buscador">
        <div className="container">
          <div className="row">
            <div className="col-12 col-sm-3 col-md-3">&nbsp;</div>
            <div className="col-12 col-sm-6 col-md-6">
              <div className="the-box rounded">
                <FormRegistrarUsuario />
              </div>
            </div>
          </div>
        </div>
      </section>
      <FooterApp />
    </>
  );
};

export default RegistrarUsuario;
