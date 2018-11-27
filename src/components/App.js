import React, { Component } from "react";
import { Route, withRouter, Switch, Redirect } from "react-router-dom";
import HomePage from "./pages/HomePage";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Recipes from "./pages/Recipes";
import About from "./pages/About";
import Family from "./pages/Family/Family";
import NotFound from "./pages/NotFound";
import Test from "./pages/Test";
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

const AuthRoute = ({ component: Component, isAuthenticated, ...rest }) => {
  return (
    <Route
      {...rest}
      render={props =>
        isAuthenticated ? <Component {...props} /> : <Redirect
            to={{
              pathname: "/sign_in",
              state: { from: props.location }
            }}
          />
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
        <AuthRoute path="/family" exact component={Family} />
        <Route path="/sign_up" exact component={SignUp} />
        <Route path="/about" exact component={About} />
        <Route path="/test" exact component={Test} />
        <Route component={NotFound} />
      </Switch>
    );
  }
}

export default withRouter(App);
