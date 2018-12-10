import React from "react";
import Link from "components/Link/Link";
import Input from "components/Input/Input";
import Button from "components/Button/Button";
import { API_URL, handleNetworkErrors } from "utils";
import axios from "axios";
import jwtDecode from "jwt-decode";
import MediaQuery from "components/MediaQuery/MediaQuery";
import { phoneMediaQuery } from "styles/css-variables";
import Nav from "components/Nav/Nav";
import MobileNav from "components/Nav/MobileNav";
import FlashMessage from "components/FlashMessage/FlashMessage";
import {
  FormWrapper,
  ActionsWrapper,
  FadedBlock,
  Block,
  FormContainer,
  PageWrapper,
  InfoBoxComponent
} from "./Styles";

const config = { headers: {} };

class SignIn extends React.Component {
  state = {
    email: "",
    password: "",
    error: "",
    loading: false
  };

  handleMediaQueryChange = ({ matches }) => {
    this.setState({ showMobile: matches });
  };

  handleFormSubmit = e => {
    e.preventDefault();
    this.setState({ loading: true });
    const data = {
      email: this.state.email.toLowerCase(),
      password: this.state.password
    };

    axios
      .post(`${API_URL}/sign_in`, data, config)
      .then(resp => {
        this.setState({ loading: false }, () => {
          if (resp.error) {
            const message = handleNetworkErrors(500);
            this.setState({ loading: false, error: { message } });
          } else {
            const jwt = jwtDecode(resp.data.jwt);
            console.log(jwt);
            localStorage.setItem("auth_token", resp.data.jwt);
            localStorage.setItem("jwt", JSON.stringify(jwt));
            window.location.replace("/");
          }
        });
      })
      .catch(err => {
        console.log(err);
        const message = handleNetworkErrors(err);
        this.setState({ loading: false, error: { message } });
      });
  };
  render() {
    const { loading, showMobile, error } = this.state;
    return (
      <div style={{ height: "100%" }}>
        <MediaQuery
          query={phoneMediaQuery}
          onChange={this.handleMediaQueryChange}
        />
        <PageWrapper>
          {showMobile ? <MobileNav auth /> : <Nav auth />}
          <Block />
          <FadedBlock />
          <ActionsWrapper>
            <FormWrapper>
              <FormContainer onSubmit={this.handleFormSubmit}>
                {error.message && (
                  <FlashMessage error>{error.message}</FlashMessage>
                )}
                <Input
                  type="text"
                  label="Email"
                  icon="envelope"
                  placeholder="Email Address"
                  onChange={e => this.setState({ email: e.target.value })}
                />
                <Input
                  type="password"
                  label="Password"
                  icon="lock"
                  placeholder="Password"
                  onChange={e => this.setState({ password: e.target.value })}
                />
                <Button type="submit" loading={loading}>
                  Submit
                </Button>
                <p>
                  Need an account? <Link to="/sign_up">Sign up now!</Link>
                </p>
              </FormContainer>
            </FormWrapper>
            <InfoBoxComponent />
          </ActionsWrapper>
        </PageWrapper>
      </div>
    );
  }
}

export default SignIn;
