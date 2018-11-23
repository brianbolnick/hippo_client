import React from "react";
import { Link } from "react-router-dom";
import Input from "../Input/Input";
import styled from "styled-components";
import Button from "../Button/Button";
import { API_URL } from "../../utils";
import axios from "axios";
import jwtDecode from "jwt-decode";
import MediaQuery from "../MediaQuery/MediaQuery";
import { media, phoneMediaQuery } from "../../styles/css-variables";
import Nav from "../Nav/Nav";
import MobileNav from "../Nav/MobileNav";

const config = { headers: {} };

const FormContainer = styled.form`
	width: 50%;
	height: 100%
	display: flex;
	justify-content: center;
	flex-flow: column;
	${media.phone` width: 90%;`};
`;

const PageWrapper = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-flow: column;
  align-items: center;
`;

class SignIn extends React.Component {
  state = {
    email: "",
    password: "",
    error: "",
    loading: false,
    showMobile: window.matchMedia("(" + phoneMediaQuery + ")").matches
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
        <div
          style={{
            position: "absolute",
            top: "0",
            width: "100%"
          }}
        >
          {showMobile ? <MobileNav /> : <Nav />}
        </div>
        <PageWrapper>
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
        </PageWrapper>
      </div>
    );
  }
}

export default SignIn;
