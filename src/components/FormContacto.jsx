import React, { Component } from "react";

class FormContacto extends Component {
  render() {
    return (
      <>
        <form id="contact-form">
          <div className="form-group">
            <label className="control-label" htmlFor="contactform-name">
              Nombre
            </label>
            <input type="text" className="form-control" />
          </div>
          <div className="form-group">
            <label className="control-label" htmlFor="contactform-email">
              Email
            </label>
            <input type="text" className="form-control" />
          </div>
          <div className="form-group">
            <label className="control-label" htmlFor="contactform-subject">
              Asunto
            </label>
            <input type="text" className="form-control" />
          </div>
          <div className="form-group">
            <label className="control-label" htmlFor="contactform-body">
              Mensaje
            </label>
            <textarea className="form-control" rows={6}></textarea>
          </div>
          <div className="form-group text-center">
            <button type="submit" className="btn btn-primary">
              Enviar
            </button>
          </div>
        </form>
      </>
    );
  }
}

export default FormContacto;
