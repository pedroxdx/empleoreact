import {
  GET_FORM_DATA_EMPLEO_BUSCADOR,
  GET_EMPLEOS_DISPONIBLES
} from "../types";

const initialState = {
  formDataEmpleoBuscador: {
    area: [],
    salario: [],
    disponibilidad: [],
    moneda: [],
    utemporal: [],
    estado: []
  },
  formEmpleoBuscador: {
    selected_area: false,
    area: 1,
    selected_disponibilidad: false,
    disponibilidad: 1,
    selected_salario: false,
    salario: 1,
    moneda: 1,
    utemporal: 3,
    selected_salario_aprox: false,
    selected_estado: false,
    estado: 31
  },
  empleosDisponibles: []
};

const empleoReducer = (state = initialState, actions) => {
  switch (actions.type) {
    case GET_FORM_DATA_EMPLEO_BUSCADOR:
      return Object.assign({}, state, {
        formDataEmpleoBuscador: actions.formDataEmpleoBuscador
      });
    case GET_EMPLEOS_DISPONIBLES:
      return Object.assign({}, state, {
        empleosDisponibles: actions.empleosDisponibles
      });
    default:
      return state;
  }
};

export default empleoReducer;
