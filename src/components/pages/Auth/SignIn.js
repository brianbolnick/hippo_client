import React from "react";
import { Link } from "react-router-dom";
import Input from "components/Input/Input";
import Button from "components/Button/Button";
import { API_URL } from "utils";
import axios from "axios";
import jwtDecode from "jwt-decode";
import MediaQuery from "components/MediaQuery/MediaQuery";
import { colors, phoneMediaQuery } from "styles/css-variables";
import Nav from "components/Nav/Nav";
import MobileNav from "components/Nav/MobileNav";
import Icon from "components/Icon/Icon";
import {
  InfoTitle,
  InfoDescription,
  InfoLink,
  InfoBox,
  FormWrapper,
  ActionsWrapper,
  FadedBlock,
  Block,
  FormContainer,
  PageWrapper
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
      email: this.state.email,
      password: this.state.password
    };

    axios
      .post(`${API_URL}/sign_in`, data, config)
      .then(resp => {
        this.setState({ loading: false }, () => {
          if (resp.error) {
            const message = resp.error;
            this.setState({ loading: false, error: message });
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
        const message = err.response.data.error;
        this.setState({ loading: false, error: message });
      });
  };
  render() {
    const { loading, showMobile } = this.state;
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
            <InfoBox>
              <Icon
                name="utensils"
                color={colors.black}
                style={{ width: "80px", height: "80px" }}
              />
              <InfoTitle> Your Recipes Are Just Clicks Away.</InfoTitle>
              <InfoDescription>
                Hungry Hippo makes it easy to create, keep, and share your
                family recipes
              </InfoDescription>
              <InfoLink to="/about">
                <Button>Learn More</Button>
              </InfoLink>
            </InfoBox>
          </ActionsWrapper>
        </PageWrapper>
      </div>
    );
  }
}

export default SignIn;
