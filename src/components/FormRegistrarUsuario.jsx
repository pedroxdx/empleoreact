import React, { Component } from "react";
import axios from "axios";
import { connect } from "react-redux";
import { ValidationForm, TextInput } from "react-bootstrap4-form-validation";
import validator from "validator";
import { ErrorMessage, SuccessMessage } from "./ShowMessagges";

class FormRegistrarUsuario extends Component {
  constructor() {
    super();
    this.formRef = React.createRef();
    this.initialState = {
      form: {
        name: "",
        email: "",
        password: "",
        c_password: ""
      },
      isCreated: false,
      errors: ""
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
    this.registerUserAPI();
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

  registerUserAPI = async () => {
    try {
      const response = await axios.post(
        `${this.props.api.url}/api/register-user`,
        this.state.form,
        this.props.api.httpHeaders
      );
      this.setState(
        {
          isCreated: response.data.isCreated,
          errors: response.data.errors
        },
        () => {
          console.log(this.state);
        }
      );
    } catch (err) {
      throw new Error(err);
    }
  };

  handleMessageErrorClose = () => {
    this.setState({ errors: "" });
  };

  handleMessageSuccessClose = () => {
    this.setState({ isCreated: false });
  };

  render() {
    return (
      <>
        {this.state.isCreated ? (
          <SuccessMessage
            message="El Usuario se creo correctamente."
            handleClose={this.handleMessageSuccessClose}
          />
        ) : (
          ""
        )}
        {this.state.errors.length !== 0 ? (
          <ErrorMessage
            errors={this.state.errors}
            handleClose={this.handleMessageErrorClose}
          />
        ) : (
          ""
        )}
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
            <label className="control-label" htmlFor="c_password">
              Reescribir Contraseña
            </label>
            <TextInput
              name="c_password"
              id="c_password"
              type="password"
              required
              validator={this.matchPassword}
              errorMessage={{
                required: "El campo Reescribir Contraseña es Requerido",
                validator:
                  "El campo Contraseña y Reescribir Contraseña no son iguales."
              }}
              value={this.state.form.c_password}
              onChange={this.handleChange}
            />
          </div>
          <div className="form-group text-center">
            <button type="submit" className="btn btn-primary">
              Registrar
            </button>
          </div>
        </ValidationForm>
      </>
    );
  }
}

const mapStateToProps = state => {
  return {
    api: state.appReducer.api
  };
};

export default connect(mapStateToProps)(FormRegistrarUsuario);
