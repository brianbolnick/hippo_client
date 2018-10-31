import React, { Component } from 'react';
import { Route, withRouter, Switch } from "react-router-dom";
import HomePage from "./pages/HomePage";
import SignIn from "./pages/SignIn";
import NotFound from "./pages/NotFound";

class App extends Component {
  render() {
    return (
			<Switch location={this.props.location}>
				<Route path="/" exact component={HomePage} />
				<Route path="/sign_in" exact component={SignIn} />
				<Route component={NotFound} />
			</Switch>
   );
  }
}

export default withRouter(App);
