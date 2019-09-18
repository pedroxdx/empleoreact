import React, { Component } from "react";
import { ValidationForm, TextInput } from "react-bootstrap4-form-validation";
import validator from "validator";

class FormRecuperarPassword extends Component {
  constructor() {
    super();
    this.formRef = React.createRef();
    this.initialState = {
      form: {
        email: ""
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

  render() {
    return (
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
        <div className="form-group text-center">
          <button type="submit" className="btn btn-primary">
            Enviar Correo
          </button>
        </div>
      </ValidationForm>
    );
  }
}

export default FormRecuperarPassword;
