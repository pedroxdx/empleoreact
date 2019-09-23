import React, { Component } from "react";
import { connect } from "react-redux";
import EmpleosDisponiblesItem from "./EmpleosDisponiblesItem";
import { getEmpleosDisponiblesAPI } from "../store/actions";

class EmpleosDisponibles extends Component {
  componentDidMount() {
    this.props.getEmpleosDisponibles(
      this.props.api,
      this.props.formEmpleoBuscador
    );
  }

  render() {
    return (
      <>
        {this.props.empleosDisponibles.map(empleo => (
          <EmpleosDisponiblesItem key={empleo.id} item={empleo} />
        ))}
      </>
    );
  }
}

const mapStateToProps = state => {
  return {
    api: state.appReducer.api,
    formEmpleoBuscador: state.empleoReducer.formEmpleoBuscador,
    empleosDisponibles: state.empleoReducer.empleosDisponibles
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getEmpleosDisponibles: (api, formEmpleoBuscador) =>
      dispatch(getEmpleosDisponiblesAPI(api, formEmpleoBuscador))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EmpleosDisponibles);
