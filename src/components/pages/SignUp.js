import React from "react";
import { Link } from "react-router-dom";
import Input from "../Input/Input";
import styled from "styled-components";
import { API_URL } from "../../utils";
import axios from "axios";
import jwtDecode from "jwt-decode";
import Button from "../Button/Button";
import { media } from "../../styles/css-variables";
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

class SignUp extends React.Component {
  state = {
    email: "",
    password: "",
    passwordConfirmation: "",
    loading: false,
    error: {}
  };

  handleFormSubmit = e => {
    e.preventDefault();
    console.log("submitting");
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
        email: this.state.email,
        password: this.state.password,
        password_confirmation: this.state.passwordConfirmation
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
            console.log(jwt);
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
    const { error } = this.state;
    return (
      <PageWrapper>
        <FormContainer onSubmit={this.handleFormSubmit}>
          {error.message && <div>{error.message}</div>}
          <Input
            inputState={error.field === "email" && "is-danger"}
            type="text"
            label="Email"
            icon="envelope"
            placeholder="Email Address"
            onChange={e => this.setState({ email: e.target.value })}
          />
          <Input
            inputState={error.field === "password" && "is-danger"}
            type="password"
            label="Password"
            icon="lock"
            placeholder="Password"
            onChange={e => this.setState({ password: e.target.value })}
          />
          <Input
            inputState={error.field === "password_confirmation" && "is-danger"}
            type="password"
            label="Confirm Password"
            icon="lock"
            placeholder="Confirm Password"
            onChange={e =>
              this.setState({ passwordConfirmation: e.target.value })
            }
          />
          <Button type="submit">Submit</Button>
          <p>
            Already have an account? <Link to="/sign_in">Sign In</Link> instead.{" "}
          </p>
        </FormContainer>
      </PageWrapper>
    );
  }
}

export default SignUp;
