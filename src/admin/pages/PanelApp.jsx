import React, { useEffect } from "react";
import { Route, Switch } from "react-router-dom";

import { useSelector, useDispatch } from "react-redux";
import * as actions from "../../store/actions";

import "../styles/sb-admin-2.css";
import "../styles/fontawesome-free/css/all.min.css";

import HeaderApp from "./HeaderApp";
import NavbarApp from "./NavbarApp";
import FooterApp from "./FooterApp";
import ScrollTop from "../components/ScrollTop";

import Dashboard from "./Dashboard";
import Profile from "./Profile";

const PanelApp = props => {
  const dispatch = useDispatch();
  const api = useSelector(state => state.appReducer.api);

  useEffect(() => {
    //dispatch(actions.isLogginAPI(api, props.history));
  });

  return (
    <>
      <div id="wrapper">
        <NavbarApp />
        <div id="content-wrapper" className="d-flex flex-column">
          <div id="content">
            <HeaderApp />
            <Switch>
              <Route path="/admin/dashboard" component={Dashboard} />
              <Route path="/admin/profile" component={Profile} />
            </Switch>
          </div>
          <FooterApp />
        </div>
      </div>
      <ScrollTop />
    </>
  );
};

export default PanelApp;
