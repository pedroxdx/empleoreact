import React from "react";
import { number_format } from "../shared/lib";

const EmpleosDisponiblesItem = props => {
  return (
    <>
      <article className="resultados">
        <div className="row">
          <div className="col-4 col-sm-4 col-md-2">
            <img
              className="img-fluid"
              src={`/assets/images/logos/${props.item.imagen}`}
              alt=""
            />
          </div>
          <div className="col-8 col-sm-8 col-md-7">
            <ul className="list-inline">
              <li className="list-inline-item">
                <a href="#">
                  <h3>{props.item.empleo}</h3>
                </a>
              </li>
              <li className="list-inline-item">
                <h4>{props.item.fecha}</h4>
              </li>
            </ul>
            <p>{props.item.descripcion}</p>
            <p className="salario">
              <strong>Salario:</strong> {props.item.signo}
              {number_format(props.item.salario, 2)} {props.item.moneda} al{" "}
              {props.item.unidad_temporal}
            </p>
          </div>
          <div className="col-12 col-sm-12 col-md-3">
            <ul className="list-unstyled">
              <li>
                <button
                  type="button"
                  className="btn btn-success ventana-postulado"
                >
                  Postularme
                </button>
              </li>
              <li>
                <table cellPadding="0" cellSpacing="0">
                  <tbody>
                    <tr>
                      <td rowSpan={2}>
                        <img src="/assets/images/ubicacion.png" alt="" />
                      </td>
                      <td className="data">{props.item.region.estado}</td>
                    </tr>
                    <tr>
                      <td className="data">{props.item.region.ciudad}</td>
                    </tr>
                  </tbody>
                </table>
              </li>
            </ul>
          </div>
        </div>
      </article>
    </>
  );
};

export default EmpleosDisponiblesItem;
