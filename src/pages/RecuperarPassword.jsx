import React from "react";
import { HeaderApp, FooterApp, HeaderPage } from "./Secciones";
import FormRecuperarPassword from "../components/FormRecuperarPassword";

const RecuperarPassword = () => {
  return (
    <>
      <HeaderApp />
      <HeaderPage title="Recuperar Contraseña" />
      <section className="empleos-buscador">
        <div className="container">
          <div className="row">
            <div className="col-12 col-sm-3 col-md-3">&nbsp;</div>
            <div className="col-12 col-sm-6 col-md-6">
              <div className="the-box rounded">
                <FormRecuperarPassword />
              </div>
            </div>
          </div>
        </div>
      </section>
      <FooterApp />
    </>
  );
};

export default RecuperarPassword;
