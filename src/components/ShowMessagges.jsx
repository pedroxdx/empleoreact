import React from "react";

export const SuccessMessage = props => {
  return (
    <div
      className="alert alert-success alert-dismissible fade show"
      role="alert"
    >
      <strong>El Usuario</strong> se creo correctamente.
      <button
        type="button"
        className="close"
        data-dismiss="alert"
        aria-label="Close"
        onClick={props.handleClose}
      >
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
  );
};

export const ErrorMessage = props => {
  return (
    <div
      className="alert alert-danger alert-dismissible fade show"
      role="alert"
    >
      <h4 className="alert-heading">Errors:</h4>
      <p>{props.errors}</p>
      <button
        type="button"
        className="close"
        data-dismiss="alert"
        aria-label="Close"
        onClick={props.handleClose}
      >
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
  );
};
