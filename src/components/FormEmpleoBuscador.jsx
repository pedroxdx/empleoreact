import React, { Component } from "react";
import { connect } from "react-redux";
import {
  getFormEmpleoBuscadorAPI,
  getEmpleosDisponiblesAPI
} from "../store/actions";

import "../styles/EmpleoBuscador.css";

class FormEmpleoBuscador extends Component {
  constructor(props) {
    super(props);
    this.state = {
      form: this.props.formEmpleoBuscador
    };
  }

  componentDidMount() {
    this.props.getFormDataEmpleoBuscador(this.props.api);
  }

  handleChangeSelectElement = e => {
    this.setState({
      form: { ...this.state.form, [e.target.name]: e.target.checked }
    });
  };

  handleChangeEmpleoBuscador = e => {
    this.setState({
      form: { ...this.state.form, [e.target.name]: Number(e.target.value) }
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.getEmpleosDisponibles(this.props.api, this.state.form);
  };

  render() {
    return (
      <>
        <article className="busqueda">
          <form onSubmit={this.handleSubmit}>
            <div className="form-group">
              <label htmlFor="busquedaempleo-area" className="control-label">
                Vacante
              </label>
              <div className="form-inline">
                <div className="custom-control custom-checkbox my-1">
                  <input
                    type="checkbox"
                    id="selectedArea"
                    name="selected_area"
                    className="custom-control-input"
                    checked={this.state.form.selected_area}
                    onChange={this.handleChangeSelectElement}
                  />
                  <label
                    htmlFor="selectedArea"
                    className="custom-control-label"
                  ></label>
                </div>
                <select
                  className="custom-select my-1"
                  name="area"
                  value={this.state.form.area}
                  onChange={this.handleChangeEmpleoBuscador}
                >
                  {this.props.formDataEmpleoBuscador.area.map(area => (
                    <option key={area.id} value={area.id}>
                      {area.nombre}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <div className="form-group">
              <label
                htmlFor="busquedaempleo-disponibilidad"
                className="control-label"
              >
                Disponibilidad
              </label>
              <div className="form-inline">
                <div className="custom-control custom-checkbox my-1">
                  <input
                    type="checkbox"
                    id="selectedDisponibilidad"
                    name="selected_disponibilidad"
                    className="custom-control-input"
                    checked={this.state.form.selected_disponibilidad}
                    onChange={this.handleChangeSelectElement}
                  />
                  <label
                    htmlFor="selectedDisponibilidad"
                    className="custom-control-label"
                  ></label>
                </div>
                <select
                  className="custom-select my-1"
                  name="disponibilidad"
                  value={this.state.form.disponibilidad}
                  onChange={this.handleChangeEmpleoBuscador}
                >
                  {this.props.formDataEmpleoBuscador.disponibilidad.map(
                    disponibilidad => (
                      <option key={disponibilidad.id} value={disponibilidad.id}>
                        {disponibilidad.nombre}
                      </option>
                    )
                  )}
                </select>
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="busquedaempleo-salario" className="control-label">
                Salario
              </label>
              <div className="form-inline">
                <div className="custom-control custom-checkbox my-1">
                  <input
                    type="checkbox"
                    id="selectedSalario"
                    name="selected_salario"
                    className="custom-control-input"
                    checked={this.state.form.selected_salario}
                    onChange={this.handleChangeSelectElement}
                  />
                  <label
                    htmlFor="selectedSalario"
                    className="custom-control-label"
                  ></label>
                </div>
                <select
                  className="custom-select my-1 mr-2"
                  name="salario"
                  value={this.state.form.salario}
                  onChange={this.handleChangeEmpleoBuscador}
                >
                  {this.props.formDataEmpleoBuscador.salario.map(salario => (
                    <option key={salario.id} value={salario.id}>
                      {salario.nombre}
                    </option>
                  ))}
                </select>
                <select
                  className="custom-select my-1 mr-2"
                  name="moneda"
                  value={this.state.form.moneda}
                  onChange={this.handleChangeEmpleoBuscador}
                >
                  {this.props.formDataEmpleoBuscador.moneda.map(moneda => (
                    <option key={moneda.id} value={moneda.id}>
                      {moneda.nombre}
                    </option>
                  ))}
                </select>
                <select
                  className="custom-select my-1 mr-2"
                  name="utemporal"
                  value={this.state.form.utemporal}
                  onChange={this.handleChangeEmpleoBuscador}
                >
                  {this.props.formDataEmpleoBuscador.utemporal.map(
                    utemporal => (
                      <option key={utemporal.id} value={utemporal.id}>
                        {utemporal.nombre}
                      </option>
                    )
                  )}
                </select>
              </div>
              <div className="form-inline">
                <label
                  htmlFor="busquedaempleo-salario_aproximado"
                  className="control-label"
                >
                  Salario Aproximado
                </label>
                <div className="custom-control custom-checkbox my-1 ml-2">
                  <input
                    type="checkbox"
                    id="selectedSalarioAprox"
                    name="selected_salario_aprox"
                    className="custom-control-input"
                    checked={this.state.form.selected_salario_aprox}
                    onChange={this.handleChangeSelectElement}
                  />
                  <label
                    htmlFor="selectedSalarioAprox"
                    className="custom-control-label"
                  ></label>
                </div>
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="busquedaempleo-estado" className="control-label">
                Estado
              </label>
              <div className="form-inline">
                <div className="custom-control custom-checkbox my-1">
                  <input
                    type="checkbox"
                    id="selectedEstado"
                    name="selected_estado"
                    className="custom-control-input"
                    checked={this.state.form.selected_estado}
                    onChange={this.handleChangeSelectElement}
                  />
                  <label
                    htmlFor="selectedEstado"
                    className="custom-control-label"
                  ></label>
                </div>
                <select
                  className="custom-select estado-mx"
                  name="estado"
                  value={this.state.form.estado}
                  onChange={this.handleChangeEmpleoBuscador}
                >
                  {this.props.formDataEmpleoBuscador.estado.map(estado => (
                    <option key={estado.id} value={estado.id}>
                      {estado.nombre}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <div className="row">
              <div className="col-6 col-sm-6 col-md-6 avanzada"></div>
              <div className="col-6 col-sm-6 col-md-6">
                <button type="submit" className="btn btn-success">
                  Buscar
                </button>
              </div>
            </div>
          </form>
        </article>
      </>
    );
  }
}

const mapStateToProps = state => {
  return {
    api: state.appReducer.api,
    formDataEmpleoBuscador: state.empleoReducer.formDataEmpleoBuscador,
    formEmpleoBuscador: state.empleoReducer.formEmpleoBuscador
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getFormDataEmpleoBuscador: api => dispatch(getFormEmpleoBuscadorAPI(api)),
    getEmpleosDisponibles: (api, formEmpleoBuscador) =>
      dispatch(getEmpleosDisponiblesAPI(api, formEmpleoBuscador))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FormEmpleoBuscador);
