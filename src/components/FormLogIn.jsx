import React, { Component } from "react";
import {
  ValidationForm,
  TextInput,
  Checkbox
} from "react-bootstrap4-form-validation";
import { Link } from "react-router-dom";

import "../styles/FormLogIn.css";

class FormLoginIn extends Component {
  constructor() {
    super();
    this.formRef = React.createRef();
    this.initialState = {
      form: {
        username: "",
        password: "",
        rememberMe: false
      }
    };
    this.state = this.initialState;
  }

  handleChange = e => {
    this.setState({
      form: { ...this.state.form, [e.target.name]: e.target.value }
    });
  };

  handleChangeRememberMe = e => {
    this.setState({
      form: { ...this.state.form, [e.target.name]: e.target.checked }
    });
  };

  handleSubmit = (e, formData, inputs) => {
    e.preventDefault();
    this.handleReset();
  };

  handleReset = () => {
    let formRef = this.formRef.current;
    this.setState(this.initialState);
    formRef.resetValidationState(true);
  };

  render() {
    return (
      <>
        <ValidationForm onSubmit={this.handleSubmit} ref={this.formRef}>
          <div className="form-group">
            <label className="control-label" htmlFor="username">
              Usuario
            </label>
            <TextInput
              name="username"
              id="username"
              value={this.state.form.username}
              onChange={this.handleChange}
              minLength="8"
              errorMessage={{
                minLength: "Se requiere un mínimo de {minLength} caracteres"
              }}
            />
          </div>
          <div className="form-group">
            <label className="control-label" htmlFor="password">
              Contraseña
            </label>
            <TextInput
              name="password"
              id="password"
              type="password"
              required
              pattern="(?=.*[A-Z]).{6,}"
              value={this.state.form.password}
              onChange={this.handleChange}
              errorMessage={{
                required: "El campo Contraseña es Requerido",
                pattern:
                  "Se requiere un mínimo de 6 caracteres y debe contener al menos una letra capital."
              }}
            />
          </div>
          <div className="form-group">
            <Checkbox
              name="rememberMe"
              label="Recordarme"
              id="rememberMe"
              value={this.state.form.rememberMe}
              onChange={this.handleChangeRememberMe}
            />
          </div>
          <button type="submit" className="btn btn-primary mr-2">
            Login
          </button>
          <Link to="/recuperar-password" className="btn btn-success">
            Forgot your password
          </Link>
        </ValidationForm>
      </>
    );
  }
}

export default FormLoginIn;
