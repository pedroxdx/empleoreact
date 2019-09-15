import React from "react";
import { HeaderApp, FooterApp } from "./Secciones";
import FormContacto from "../components/FormContacto";

const Contact = () => {
  return (
    <>
      <HeaderApp />
      <section className="contacto-header">
        <div className="container">
          &nbsp;
          <div className="row">
            <div className="col-12 col-sm-12 col-md-12">&nbsp;</div>
          </div>
        </div>
      </section>
      <section className="contacto-title">
        <div className="container">
          <div className="row">
            <div className="col-12 col-sm-12 col-md-12">
              <h2>Idea local con impacto global</h2>
            </div>
          </div>
        </div>
      </section>
      <section className="contacto-form">
        <div className="container">
          <div className="row">
            <div className="col-12 col-sm-12 col-md-12">
              <h2>Contáctanos</h2>
              <hr />
            </div>
          </div>
          <div className="row">
            <div className="col-12 col-sm-6 col-md-6">
              <FormContacto />
            </div>
            <div className="col-12 col-sm-6 col-md-6">
              <article>
                <p className="title">Estamos ubicados en:</p>
                <p>
                  Calle 65 entre 62 y 64 <br />
                  Col Centro <br />
                  Mérida, Yucatán <br />
                  Tel. 999 23 2444 <br />
                  <strong>info@empleorestaurante.com</strong>
                </p>
              </article>
            </div>
          </div>
        </div>
      </section>
      <FooterApp />
    </>
  );
};

export default Contact;
