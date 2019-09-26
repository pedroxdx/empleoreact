import React from "react";
import { HeaderApp, FooterApp } from "./Secciones";
import "../../styles/admin.css";
import { Route, Switch } from "react-router-dom";
import Dashboard from "./Dashboard";
import Profile from "./Profile";

const Admin = props => {
  return (
    <>
      <Switch>
        <HeaderApp history={props.history} />
        <Route path="/admin/dashboard" component={Dashboard} />
        <Route path="/admin/profile" component={Profile} />
        <FooterApp />
      </Switch>
    </>
  );
};

export default Admin;
