import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Header from "./components/Header/Header";
import Register from "./pages/Register/Register";
import Login from "./pages/Login/Login";
import Dashboard from "./pages/Dashboard/Dashboard";
import Add from "./pages/Add/Add";

const Routes = () => (
  <Router>
    <Header />
    <Switch>
      <Route exact path="/" component={Login} />
      <Route exact path="/dashboard" component={Dashboard} />
      <Route exact path="/register" component={Register} />
      <Route exact path="/add" component={Add} />
    </Switch>
  </Router>
);

export default Routes;
