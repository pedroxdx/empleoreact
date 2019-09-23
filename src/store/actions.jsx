import {
  GET_FORM_DATA_EMPLEO_BUSCADOR,
  GET_EMPLEOS_DISPONIBLES,
  LOGIN_USER
} from "./types";
import axios from "axios";

export const getFormEmpleoBuscadorAPI = api => {
  return dispatch => {
    saveFormEmpleoBuscadorAPI(api).then(data => {
      dispatch(getFormEmpleoBuscador(data));
    });
  };
};

const saveFormEmpleoBuscadorAPI = async api => {
  if (localStorage.getItem("formEmpleoBuscador") === null) {
    console.log("API");
    const response = await axios.get(
      `${api.url}/api/form-empleo-buscador`,
      api.httpHeaders
    );
    localStorage.setItem("formEmpleoBuscador", JSON.stringify(response.data));
    return response.data;
  } else {
    console.log("DB");
    let data = localStorage.getItem("formEmpleoBuscador");
    if (typeof data === "string") {
      return JSON.parse(data);
    }
  }
};

export const getEmpleosDisponiblesAPI = (api, formEmpleoBuscador) => {
  return dispatch => {
    axios
      .post(
        `${api.url}/api/buscar-empleo`,
        { form: formEmpleoBuscador },
        api.httpHeaders
      )
      .then(response => {
        dispatch(getEmpleosDisponibles(response.data));
      });
  };
};

export const getFormEmpleoBuscador = formDataEmpleoBuscador => ({
  type: GET_FORM_DATA_EMPLEO_BUSCADOR,
  formDataEmpleoBuscador
});

export const getEmpleosDisponibles = empleosDisponibles => ({
  type: GET_EMPLEOS_DISPONIBLES,
  empleosDisponibles
});

export const loginUser = user => ({
  type: LOGIN_USER,
  user
});
