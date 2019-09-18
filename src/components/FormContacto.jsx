import React, { Component } from "react";
import { ValidationForm, TextInput } from "react-bootstrap4-form-validation";
import validator from "validator";

class FormContacto extends Component {
  constructor() {
    super();
    this.formRef = React.createRef();
    this.initialState = {
      form: {
        name: "",
        email: "",
        asunto: "",
        mensaje: ""
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
      <>
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
              minLength="8"
              errorMessage={{
                minLength: "Se requiere un mínimo de {minLength} caracteres"
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
            <label className="control-label" htmlFor="asunto">
              Asunto
            </label>
            <TextInput
              name="asunto"
              id="asunto"
              value={this.state.form.asunto}
              onChange={this.handleChange}
              required
              errorMessage={{
                required: "El campo Asunto es Requerido"
              }}
            />
          </div>

          <div className="form-group">
            <label className="control-label" htmlFor="mensaje">
              Mensaje
            </label>
            <TextInput
              name="mensaje"
              id="mensaje"
              value={this.state.form.mensaje}
              onChange={this.handleChange}
              multiline
              required
              rows="6"
              errorMessage={{
                required: "El campo Asunto es Requerido"
              }}
            />
          </div>

          <div className="form-group text-center">
            <button type="submit" className="btn btn-primary">
              Enviar
            </button>
          </div>
        </ValidationForm>
      </>
    );
  }
}

export default FormContacto;
