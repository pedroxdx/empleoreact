import React from "react";
import "../../styles/admin.css";
import { Link } from "react-router-dom";

export const HeaderApp = props => {
  const linkButton = {
    backgroundColor: "transparent",
    color: "#FFF",
    border: "none",
    cursor: "pointer",
    padding: "0"
  };

  const logout = () => {
    localStorage.removeItem("user_token");
    props.history.push("/login");
  };

  return (
    <>
      <header>
        <div className="container">
          <div className="row">
            <div className="col-12 col-sm-6 col-md-6 principal">
              <ul className="list-inline">
                <li className="list-inline-item">
                  <Link to="/admin/dashboard">Mi Cuenta</Link>
                </li>
                <li className="list-inline-item">
                  <Link to="/admin/profile">Perfil</Link>
                </li>
                <li className="list-inline-item">
                  <Link to="#">Empleos</Link>
                </li>
                <li className="list-inline-item">
                  <Link to="#">Ofertas</Link>
                </li>
                {/*<li><a href="#">Evaluaciones</a></li>*/}
              </ul>
            </div>
            <div className="col-12 col-sm-6 col-md-6 sesion">
              <ul className="list-inline">
                <li className="list-inline-item">Pedro Felipe Cicero Rubio</li>
                <li className="list-inline-item">|</li>
                <li className="list-inline-item">
                  <button style={linkButton} onClick={logout}>
                    Salir
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export const HeaderPage = props => {
  return (
    <>
      <section className="empleos-header text-center">
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

export const FooterApp = () => {
  return (
    <>
      <footer>
        <div className="container">
          <div className="row">
            <div className="col-12 col-sm-12 col-md-12">
              <p>
                <Link to="#">Derechos Reservados Orbitrade 2017</Link>
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};
