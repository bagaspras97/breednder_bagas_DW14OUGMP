import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import LandingPage from "./LandingPage";
import ModalLogin from "./modalLogin";
import Dashboard from "./dashboard";
import Profile from "./Profile";
import Premium from "./Premium";
import EditProfile from "./EditProfile";

const AppRouter = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" exact component={LandingPage} />
      <Route path="/Login" component={ModalLogin} />
      <Route path="/dashboard" component={Dashboard} />
      <Route path="/profile" component={Profile} />
      <Route path="/editprofile" component={EditProfile} />
      <Route path="/premium" component={Premium} />
    </Switch>
  </BrowserRouter>
);

export default AppRouter;
