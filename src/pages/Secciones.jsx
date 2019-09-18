import React from "react";
import { Link } from "react-router-dom";

export const HeaderApp = () => {
  return (
    <>
      <header>
        <div className="container">
          <div className="row">
            <div className="col-12 col-sm-8 col-md-8 principal">
              <ul className="list-inline">
                <li className="list-inline-item">
                  <img src="/assets/images/empleorestaurante.png" alt="" />
                </li>
                <li className="list-inline-item">
                  <Link to="/">Inicio</Link>
                </li>
                <li className="list-inline-item">
                  <Link to="/about">Nosotros</Link>
                </li>
                <li className="list-inline-item">
                  <Link to="/empleos">Empleos</Link>
                </li>
                <li className="list-inline-item">
                  <Link to="/contact">Contacto</Link>
                </li>
              </ul>
            </div>
            <div className="col-12 col-sm-4 col-md-4 sesion">
              <ul className="list-inline">
                <li className="list-inline-item">
                  <Link to="/registrar-usuario">Registro</Link>
                </li>
                <li className="list-inline-item">|</li>
                <li className="list-inline-item">
                  <Link to="/login">Iniciar Sesión</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export const FooterApp = () => {
  return (
    <>
      <footer>
        <div className="container">
          <div className="row">
            <div className="col-12 col-sm-12 col-md-12">
              <p>
                <Link to="">Derechos Reservados Orbitrade 2017</Link>
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export const HeaderPage = props => {
  return (
    <>
      <section className="page-header text-center">
        <div className="container">
          &nbsp;
          <div className="row">
            <div className="col-12 col-sm-12 col-md-12">
              <h2>{props.title}</h2>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export const Restaurante = () => {
  return (
    <>
      <section className="restaurante">
        <div className="container">
          <div className="row">
            <div className="col-12 col-sm-6 col-md-6 text-left">
              <h2>Encontramos el mejor staff para tu negocio</h2>
              <p>
                Nosotros nos encargamos de buscar y entrevistar los candidatos
                ideales para tus vacantes en nuestra plataforma.
              </p>
              <p>
                Al proporcionarte los mejores candidatos agilizamos tu proceso
                de contratación y{" "}
                <strong>
                  disminuimos tu rotación de personal, lo que te ayuda a
                  disminuir costos.
                </strong>
              </p>
            </div>
            <div className="col-12 col-sm-6 col-md-6">
              <img
                className="img-fluid"
                src="/assets/images/laptop.png"
                alt=""
              />
            </div>
          </div>
          <div className="row">
            <div className="col-12 col-sm-6 col-md-6">
              <img
                className="img-fluid"
                src="/assets/images/sitioweb.jpg"
                alt=""
              />
            </div>
            <div className="col-12 col-sm-6 col-md-6 text-right">
              <h2>Simplifica tu proceso de contratación.</h2>
              <p>
                Si constantemente necesitas personal para ciertos puestos puedes
                publicar de forma recurrente tu anuncio, de forma que siempre
                tengas al siguiente candidato listo para empezar a trabajar en
                establecimiento.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export const Patrocinadores = () => {
  return (
    <>
      <section className="patrocinadores">
        <div className="container">
          <div className="row">
            <div className="col-12 col-sm-12 col-md-12">
              <h3>Utilizado actualmente por</h3>
            </div>
          </div>
          <div className="row">
            <div className="col-12 col-sm-3 col-md-3">
              <img
                className="img-fluid"
                src="/assets/images/trompos.jpg"
                alt=""
              />
            </div>
            <div className="col-12 col-sm-3 col-md-3">
              <img
                className="img-fluid"
                src="/assets/images/pigua.jpg"
                alt=""
              />
            </div>
            <div className="col-12 col-sm-3 col-md-3">
              <img
                className="img-fluid"
                src="/assets/images/nectar.jpg"
                alt=""
              />
            </div>
            <div className="col-12 col-sm-3 col-md-3">
              <img
                className="img-fluid"
                src="/assets/images/acqua.jpg"
                alt=""
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export const Servicios = () => {
  return (
    <>
      <section className="servicios">
        <div className="container">
          <div className="row">
            <div className="col-12 col-sm-12 col-md-12">
              <h2>¿Buscas empleo en un restaurante, bar u hotel?</h2>
              <h3>Conoce los beneficios de publicar tu perfil:</h3>
            </div>
          </div>
          <div className="row">
            <div className="col-12 col-sm-12 col-md-12">
              <div className="sectores">
                <div className="row">
                  <div className="col-12 col-sm-12 col-md-4">
                    <div className="row">
                      <div className="col-3 col-sm-3 col-md-3 img-left">
                        <img
                          className="img-fluid"
                          src="/assets/images/cocinero.png"
                          alt=""
                        />
                      </div>
                      <div className="col-9 col-sm-9 col-md-9 text-left">
                        <h4>Los mejores empleos</h4>
                        <p>
                          Los mejores restaurantes del Sureste publican sus
                          vacantes con nosostros.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-12 col-sm-12 col-md-4">
                    <div className="row">
                      <div className="col-3 col-sm-3 col-md-3 img-left">
                        <img
                          className="img-fluid"
                          src="/assets/images/copa.png"
                          alt=""
                        />
                      </div>
                      <div className="col-9 col-sm-9 col-md-9 text-left">
                        <h4>Muestra tus habilidades</h4>
                        <p>
                          Completa la evaluación según tu perfil para obtener
                          mejores empleos.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-12 col-sm-12 col-md-4">
                    <div className="row">
                      <div className="col-3 col-sm-3 col-md-3 img-left">
                        <img
                          className="img-fluid"
                          src="/assets/images/sobre.png"
                          alt=""
                        />
                      </div>
                      <div className="col-9 col-sm-9 col-md-9 text-left">
                        <h4>Recibe alertas al momento</h4>
                        <p>
                          Completa la evaluación según tu perfil para obtener
                          mejores empleos.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export const Perfil = () => {
  return (
    <>
      <section className="perfil">
        <div className="container">
          <div className="row">
            <div className="col-12 col-sm-12 col-md-12">
              <ul className="list-inline">
                <li className="list-inline-item">
                  Elige tu perfil para iniciar:
                </li>
                <li className="list-inline-item">
                  <button className="btn btn-warning">Hostess</button>
                </li>
                <li className="list-inline-item">
                  <button className="btn btn-success">Chef</button>
                </li>
                <li className="list-inline-item">
                  <button className="btn btn-primary">Barman</button>
                </li>
                <li className="list-inline-item">
                  <button className="btn btn-danger">Mesero</button>
                </li>
                <li className="list-inline-item">
                  <button className="btn btn-info">Cocinero</button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export const EmpleoIdeal = () => {
  return (
    <>
      <section className="empleo-ideal">
        <div className="container">
          <div className="row">
            <div className="col-12 col-sm-6 col-md-6">
              <img
                className="img-fluid"
                src="/assets/images/chef-decoration.jpg"
                alt=""
              />
            </div>
            <div className="col-12 col-sm-6 col-md-6 text-right">
              <h2>Encuentra tu empleo ideal.</h2>
              <p>
                Nosotros nos encargamos de buscar y entrevistar los candidatos
                ideales para tus vacantes en nuestra plataforma.
              </p>
              <p>
                Al proporcionarte los mejores candidatos agilizamos tu proceso
                de contratación y{" "}
                <strong>
                  disminuimos tu rotación de personal, lo que te ayuda a
                  disminuir costos
                </strong>
                .
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export const EmpleoBar = () => {
  return (
    <>
      <section className="bar">
        <div className="container">
          <div className="row">
            <div className="col-12 col-sm-6 col-md-6">
              <h2>Encuentra tu empleo ideal</h2>
              <h3>Encuentra tu empleo ideal en nuestra plataforma.</h3>
              <hr />
              <article>
                <p>
                  Nosotros nos encargamos de buscar y entrevistar los candidatos
                  ideales para tus vacantes en nuestra plataforma.
                </p>
                <p>
                  Al proporcionarte los mejores candidatos agilizamos tu proceso
                  de contratación y disminuimos tu rotación de personal, lo que
                  te ayuda a disminuir costos.
                </p>
              </article>
            </div>
            <div className="col-12 col-sm-6 col-md-6">&nbsp;</div>
          </div>
        </div>
      </section>
    </>
  );
};
