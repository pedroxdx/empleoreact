import React, { Component } from "react";
import { ValidationForm, TextInput } from "react-bootstrap4-form-validation";
import validator from "validator";

class FormRegistrarUsuario extends Component {
  constructor() {
    super();
    this.formRef = React.createRef();
    this.initialState = {
      form: {
        name: "",
        last_name: "",
        email: "",
        username: "",
        password: "",
        confirmPassword: ""
      }
    };
    this.state = this.initialState;
  }

  handleChange = e => {
    this.setState({
      form: { ...this.state.form, [e.target.name]: e.target.value }
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

  matchPassword = value => {
    return value && value === this.state.form.password;
  };

  render() {
    return (
      <ValidationForm onSubmit={this.handleSubmit} ref={this.formRef}>
        <div className="form-group">
          <label className="control-label" htmlFor="name">
            Nombre
          </label>
          <TextInput
            name="name"
            id="name"
            value={this.state.form.name}
            onChange={this.handleChange}
            required
            errorMessage={{
              required: "El campo Nombre es Requerido"
            }}
          />
        </div>
        <div className="form-group">
          <label className="control-label" htmlFor="last_name">
            Apellido Paterno
          </label>
          <TextInput
            name="last_name"
            id="last_name"
            value={this.state.form.last_name}
            onChange={this.handleChange}
            required
            errorMessage={{
              required: "El campo Apellido Paterno es Requerido"
            }}
          />
        </div>
        <div className="form-group">
          <label className="control-label" htmlFor="email">
            Email
          </label>
          <TextInput
            type="email"
            name="email"
            id="email"
            value={this.state.form.email}
            onChange={this.handleChange}
            validator={validator.isEmail}
            errorMessage={{
              validator: "El campo Email no es válido."
            }}
          />
        </div>
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
          <label className="control-label" htmlFor="confirmPassword">
            Reescribir Contraseña
          </label>
          <TextInput
            name="confirmPassword"
            id="confirmPassword"
            type="password"
            required
            validator={this.matchPassword}
            errorMessage={{
              required: "El campo Reescribir Contraseña es Requerido",
              validator:
                "El campo Contraseña y Reescribir Contraseña no son iguales."
            }}
            value={this.state.form.confirmPassword}
            onChange={this.handleChange}
          />
        </div>
        <div className="form-group text-center">
          <button type="submit" className="btn btn-primary">
            Registrar
          </button>
        </div>
      </ValidationForm>
    );
  }
}

export default FormRegistrarUsuario;
