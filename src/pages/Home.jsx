import React from "react";
import {
  HeaderApp,
  FooterApp,
  Patrocinadores,
  Restaurante,
  Servicios,
  Perfil
} from "./Secciones";
import FormEmpleoBuscador from "../components/FormEmpleoBuscador";

const Home = () => {
  return (
    <>
      <HeaderApp />
      <section className="buscador">
        <div className="container">
          &nbsp;
          <div className="row">
            <div className="col-12 col-sm-4 col-md-7">
              <div className="row">
                <div className="col-12 col-sm-12 col-md-1">&nbsp;</div>
                <div className="col-12 col-sm-12 col-md-10">
                  <p className="title">
                    Encuentra el empleo que estas buscando en los mejores
                    restaurantes del sureste.
                  </p>
                </div>
                <div className="col-12 col-sm-12 col-md-1">&nbsp;</div>
              </div>
            </div>
            <div className="col-12 col-sm-8 col-md-5">
              <FormEmpleoBuscador />
            </div>
          </div>
        </div>
      </section>
      <Patrocinadores />
      <Restaurante />
      <Servicios />
      <Perfil />
      <FooterApp />
    </>
  );
};

export default Home;
