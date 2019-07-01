import React from "react";
import Link from "components/common/Link/Link";
import Input from "components/common/Input/Input";
import Button from "components/common/Button/Button";
import { API_URL, handleNetworkErrors } from "utils";
import axios from "axios";
import jwtDecode from "jwt-decode";
import Layout from "components/common/Layout/Layout";
import FlashMessage from "components/common/FlashMessage/FlashMessage";
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
    const { loading, error } = this.state;
    return (
      <div style={{ height: "100%" }}>
				<Layout auth fullScreen>
        <PageWrapper>
          <Block />
          <FadedBlock />
          <ActionsWrapper>
            <FormWrapper>
              <FormContainer onSubmit={this.handleFormSubmit}>
                <FlashMessage visible={!!error.message} error>
                  {error.message}
                </FlashMessage>
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
			</Layout>
      </div>
    );
  }
}

export default SignIn;
