import React from "react";
import {
  HeaderApp,
  FooterApp,
  EmpleoIdeal,
  EmpleoBar,
  Patrocinadores,
  Perfil
} from "./Secciones";

const About = () => {
  return (
    <>
      <HeaderApp />
      <section className="nosotros-header">
        <div className="container">
          &nbsp;
          <div className="row">
            <div className="col-12 col-sm-2 col-md-2">&nbsp;</div>
            <div className="col-12 col-sm-8 col-md-8">
              <p className="title">Streamlining the world’s cities.</p>
              <p>
                Today, we’re growing businesses, creating jobs, and delivering
                smiles in over 300+ cities. But our journey has just begun. We
                want to bring our last-mile logistics infrastructure to every
                corner of the world.
              </p>
            </div>
            <div className="col-12 col-sm-2 col-md-2">&nbsp;</div>
          </div>
        </div>
      </section>
      <EmpleoIdeal />
      <EmpleoBar />
      <Patrocinadores />
      <Perfil />
      <FooterApp />
    </>
  );
};

export default About;
