import React, { Component } from "react";
import { Route, withRouter, Switch } from "react-router-dom";
import HomePage from "./pages/HomePage";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Recipes from "./pages/Recipes";
import Family from "./pages/Family/Family";
import NotFound from "./pages/NotFound";
import NoAuth from "./pages/NoAuth/NoAuth";
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
        <Route path="/recipes" exact component={Recipes} />
        <Route path="/family" exact component={Family} />
        <Route path="/sign_up" exact component={SignUp} />
        <Route component={NotFound} />
      </Switch>
    );
  }
}

export default withRouter(App);
