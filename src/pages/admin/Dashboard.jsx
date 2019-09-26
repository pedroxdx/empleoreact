import React, { Component } from "react";
import "../../styles/admin.css";
import { HeaderPage } from "./Secciones";
import { connect } from "react-redux";
import { HeaderApp, FooterApp } from "./Secciones";
import { isLogginAPI } from "../../store/actions";

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    this.props.isLogginAPI(this.props.api);
  }

  render() {
    return (
      <>
        <HeaderApp history={this.props.history} />
        <HeaderPage title="Mi Cuenta" />
        <section className="admin tooltips">
          <div className="container">
            <div className="row">
              <div className="col-12 col-sm-12 col-md-12">
                <h1>¡ Bienvenido Pedro Felipe Cicero Rubio !</h1>
                <hr />
              </div>
            </div>
            <div className="row">
              <div className="col-12 col-sm-6 col-md-6">
                <div className="the-box">
                  <h4 className="small-title">ESTADISTICAS</h4>
                </div>
              </div>
              <div className="col-12 col-sm-6 col-md-6">
                <h2>Noticias</h2>
                <div className="row" style={divNoticias}></div>
              </div>
            </div>
          </div>
        </section>
        <FooterApp />
      </>
    );
  }
}

const divNoticias = {
  marginTop: "30px"
};

const mapStateToProps = state => {
  return {
    api: state.appReducer.api
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    isLogginAPI: api => dispatch(isLogginAPI(api, ownProps.history))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Dashboard);
