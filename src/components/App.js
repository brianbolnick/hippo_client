import React, { Component } from "react";
import { Route, withRouter, Switch } from "react-router-dom";
import HomePage from "./pages/HomePage";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import NotFound from "./pages/NotFound";
import NoAuth from "./pages/NoAuth";
import { jwt } from "../utils";

const HiddenRoute = ({ component: Component, isAuthenticated, ...rest }) => {
  return (
    <Route
      {...rest}
      render={props =>
        isAuthenticated ? <Component {...props} /> : <NoAuth {...props} />
      }
    />
  );
};
class App extends Component {
  isLoggedIn = () => {
    return !!jwt;
  };
  render() {
    return (
      <Switch location={this.props.location}>
        <HiddenRoute
          path="/"
          exact
          component={HomePage}
          isAuthenticated={this.isLoggedIn()}
        />
        <Route path="/sign_in" exact component={SignIn} />
        <Route path="/sign_up" exact component={SignUp} />
        <Route component={NotFound} />
      </Switch>
    );
  }
}

export default withRouter(App);
