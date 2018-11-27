import React from "react";
import { Link } from "react-router-dom";
import Input from "../Input/Input";
import styled from "styled-components";
import { API_URL } from "../../utils";
import axios from "axios";
import jwtDecode from "jwt-decode";
import Button from "../Button/Button";
import { media, phoneMediaQuery, colors } from "styles/css-variables";
import MediaQuery from "../MediaQuery/MediaQuery";

const config = { headers: {} };
const HelpText = styled.div`
  font-size: 0.9rem;
  margin-top: -8px;
  color: ${colors.darkGray};
  ${media.phone`
		color: white 
	`};
`;

const Divider = styled.hr`
  border: 0;
  height: 1px;
  background: linear-gradient(
    to right,
    rgba(0, 0, 0, 0),
    rgb(255, 65, 108),
    rgb(249, 102, 94),
    rgba(0, 0, 0, 0)
  );
  margin: 40px 0;
  ${media.phone`
		height: 2px;
		background: linear-gradient( to right, rgba(0,0,0,0), rgb(255, 255, 255), rgb(255, 255, 255), rgba(0,0,0,0) );
	`};
`;

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
  flex-flow: row;
`;

const InfoScreen = styled.div`
  width: 45%;
  height: 100%;
  background: linear-gradient(to top left, #d44b92, #f0617d, #f3874a);
  ${media.phone`
		display: none;
	`};
`;

const FormScreen = styled.div`
  width: 65%;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  ${media.phone`
		width: 100%;
		background: linear-gradient(to bottom left, #d44b92, #f0617d, #f3874a);
		label { color: white; }
	`};
`;

class SignUp extends React.Component {
  state = {
    name: "",
    email: "",
    password: "",
    passwordConfirmation: "",
    joinCode: "",
    loading: false,
    error: {},
    showMobile: window.matchMedia("(" + phoneMediaQuery + ")").matches
  };
  handleMediaQueryChange = ({ matches }) => {
    this.setState({ showMobile: matches });
  };

  handleFormSubmit = e => {
    e.preventDefault();
    if (this.state.password !== this.state.passwordConfirmation) {
      this.setState({
        error: {
          message: "Passwords should match",
          field: "password_confirmation"
        }
      });
      return;
    }
    this.setState({ loading: true });
    const data = {
      user: {
        name: this.state.name,
        email: this.state.email,
        password: this.state.password,
        password_confirmation: this.state.passwordConfirmation,
        join_code: this.state.joinCode
      }
    };
    axios
      .post(`${API_URL}/sign_up`, data, config)
      .then(resp => {
        this.setState({ loading: false }, () => {
          if (resp.errors) {
            const field = Object.keys(resp.data.errors)[0];
            const message = resp.data.errors[field][0];
            this.setState({ loading: false, error: { field, message } });
          } else {
            const jwt = jwtDecode(resp.data.jwt);
            localStorage.setItem("auth_token", resp.data.jwt);
            localStorage.setItem("jwt", JSON.stringify(jwt));
            window.location.replace("/");
          }
        });
      })
      .catch(err => {
        console.log(err);
        const field = Object.keys(err.response.data.errors)[0];
        const message = err.response.data.errors[field][0];
        this.setState({ loading: false, error: { field, message } });
      });
  };
  render() {
    const { error, showMobile } = this.state;
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
              {error.message && <div>{error.message}</div>}
              <Input
                inputState={error.field === "join_code" ? "error" : ""}
                type="text"
                label="Family Join Code"
                icon="users"
                placeholder="Shared Family Code"
                onChange={e => this.setState({ joinCode: e.target.value })}
              />
              <HelpText>
                No join code? No problem. Add a new code and your family will be
                created automatically.{" "}
              </HelpText>
              <Divider />
              <Input
                inputState={error.field === "email" ? "error" : ""}
                type="text"
                label="Email"
                icon="envelope"
                placeholder="Email Address"
                onChange={e => this.setState({ email: e.target.value })}
              />
              <Input
                inputState={error.field === "name" ? "error" : ""}
                type="text"
                label="Full Name"
                icon="user"
                placeholder="Full Display Name"
                onChange={e => this.setState({ name: e.target.value })}
              />

              <Input
                inputState={error.field === "password" ? "error" : ""}
                type="password"
                label="Password"
                icon="lock"
                placeholder="Password"
                onChange={e => this.setState({ password: e.target.value })}
              />
              <Input
                inputState={
                  error.field === "password_confirmation" ? "error" : ""
                }
                type="password"
                label="Confirm Password"
                icon="lock"
                placeholder="Confirm Password"
                onChange={e =>
                  this.setState({ passwordConfirmation: e.target.value })
                }
              />
              <Button secondary={showMobile} type="submit">
                Submit
              </Button>
              <p style={{ color: "white" }}>
                Already have an account? <Link to="/sign_in">Sign In</Link>{" "}
                instead.
              </p>
            </FormContainer>
          </FormScreen>
        </PageWrapper>
      </div>
    );
  }
}

export default SignUp;
