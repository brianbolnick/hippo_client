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

const config = { headers: {} };

const FormContainer = styled.form`
	width: 50%;
	height: 100%
	display: flex;
	justify-content: center;
	flex-flow: column;
	${media.phone` 
	width: 90%;
	height: 90%;
	border: solid 4px #F9665E;
	border-radius: 2px;
	padding: 10px 32px;
	box-sizing: border-box;
`};
`;

const PageWrapper = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-flow: row;
`;

const InfoScreen = styled.div`
  width: 45%;
  height: 100%;
  background: linear-gradient(to top left, #d44b92, #f0617d, #f3874a);
  ${media.phone` display: none;`};
`;

const FormScreen = styled.div`
  width: 65%;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  ${media.phone`
	width: 100%;
	`};
`;

class SignIn extends React.Component {
  state = {
    email: "",
    password: "",
    error: "",
    loading: false
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
    const { loading } = this.state;
    return (
      <div style={{ height: "100%" }}>
        <MediaQuery
          query={phoneMediaQuery}
          onChange={this.handleMediaQueryChange}
        />
        <PageWrapper>
          <InfoScreen />
          <FormScreen>
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
          </FormScreen>
        </PageWrapper>
      </div>
    );
  }
}

export default SignIn;
