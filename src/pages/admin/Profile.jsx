import React, { Component } from "react";
import "../../styles/admin.css";
import { HeaderPage } from "./Secciones";
import { connect } from "react-redux";
import { HeaderApp, FooterApp } from "./Secciones";
import { isLogginAPI } from "../../store/actions";
import FormUserProfile from "../../components/FormUserProfile";

class Profile extends Component {
  componentDidMount() {
    this.props.isLogginAPI(this.props.api);
  }
  render() {
    return (
      <>
        <HeaderApp history={this.props.history} />
        <HeaderPage title="Perfil" />
        <section className="admin tooltips">
          <div className="container">
            <div className="row">
              <div className="col-12 col-sm-12 col-md-12">
                <div className="the-box rounded">
                  <div className="row">
                    <div className="col-12 col-sm-12 col-md-12">
                      <h1 className="page-heading">Currículum Profesional</h1>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-12 col-sm-12 col-md-12">
                      <div className="panel with-nav-tabs panel-info">
                        <div className="panel-heading">
                          <FormUserProfile />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <FooterApp />
      </>
    );
  }
}

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
)(Profile);
