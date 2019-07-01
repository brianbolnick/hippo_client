import React, { Component } from "react";
import { Route, withRouter, Switch, Redirect } from "react-router-dom";
import SignIn from "./pages/Auth/SignIn";
import SignUp from "./pages/Auth/SignUp";
import Logout from "./pages/Auth/Logout";
import Recipes from "./pages/Recipes";
import Recipe from "./pages/Recipes/Recipe";
import NewRecipe from "./pages/Recipes/NewRecipe";
import EditRecipe from "./pages/Recipes/EditRecipe";
import About from "./pages/About";
import Family from "./pages/Family/Family";
import MealPlans from "./pages/MealPlans";
import NotFound from "./pages/NotFound";
import Unauthorized from "./pages/Unauthorized";
import Test from "./pages/Test";
import NoAuth from "./pages/NoAuth/NoAuth";
import { jwt } from "utils";

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
        isAuthenticated ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: "/sign_in",
              state: { from: props.location }
            }}
          />
        )
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
          component={Recipes}
          isAuthenticated={this.isLoggedIn()}
        />
        <Route path="/sign_in" exact component={SignIn} />
        <AuthRoute
          path="/recipes"
          exact
          component={Recipes}
          isAuthenticated={this.isLoggedIn()}
        />
        <AuthRoute
          path="/recipes/new"
          isAuthenticated={this.isLoggedIn()}
          exact
          component={NewRecipe}
        />
        <AuthRoute
          path="/recipes/:id/edit"
          isAuthenticated={this.isLoggedIn()}
          exact
          component={EditRecipe}
        />

        <AuthRoute
          path="/recipes/:id"
          isAuthenticated={this.isLoggedIn()}
          exact
          component={Recipe}
        />
				<AuthRoute
					path="/meal_plans"
					isAuthenticated={this.isLoggedIn()}
					exact
					component={MealPlans}
				/>
        <AuthRoute
          path="/family"
          exact
          component={Family}
          isAuthenticated={this.isLoggedIn()}
        />
        <Route path="/sign_up" exact component={SignUp} />
        <Route path="/logout" exact component={Logout} />
        <Route path="/about" exact component={About} />
        <Route path="/test/:id" exact component={Test} />
        <Route path="/401" exact component={Unauthorized} />
        <Route component={NotFound} />
      </Switch>
    );
  }
}

export default withRouter(App);
