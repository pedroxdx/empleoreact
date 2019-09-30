import React, { Component } from "react";
import axios from "axios";
import { connect } from "react-redux";
import { ErrorMessage } from "./ShowMessagges";
import {
  ValidationForm,
  TextInput,
  Checkbox
} from "react-bootstrap4-form-validation";
import validator from "validator";
import { Link } from "react-router-dom";

import { AuthContext } from "../context/auth";

import "../styles/FormLogIn.css";

class FormLoginIn extends Component {
  static contextType = AuthContext;

  constructor() {
    super();
    this.formRef = React.createRef();
    this.initialState = {
      form: {
        email: "",
        password: "",
        rememberMe: false
      },
      errors: "",
      isLogging: true
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
    this.loginUserAPI();
    this.handleReset();
  };

  handleReset = () => {
    let formRef = this.formRef.current;
    this.setState({
      form: this.initialState.form
    });
    formRef.resetValidationState(true);
  };

  loginUserAPI = () => {
    axios
      .post(
        `${this.props.api.url}/api/login`,
        this.state.form,
        this.props.api.httpHeaders
      )
      .then(response => {
        if (response.status === 200 && response.data.isLogging) {
          this.context.setAuthTokens(response.data.user);
          this.props.history.push("/admin/dashboard");
        }
        this.setState({
          isLogging: response.data.isLogging,
          errors: response.data.errors
        });
      })
      .catch(e => {
        this.setState({
          isLogging: false,
          errors: e
        });
      });
  };

  handleMessageErrorClose = () => {
    this.setState({ errors: "" });
  };

  render() {
    return (
      <>
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
              value={this.state.form.password}
              onChange={this.handleChange}
              errorMessage={{
                required: "El campo Contraseña es Requerido"
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

const mapStateToProps = state => {
  return {
    api: state.appReducer.api
  };
};

export default connect(mapStateToProps)(FormLoginIn);
