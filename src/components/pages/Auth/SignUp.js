import React from "react";
import Link from "components/common/Link/Link";
import Input from "components/common/Input/Input";
import Button from "components/common/Button/Button";
import { API_URL, handleNetworkErrors } from "utils";
//import { getRecipeArgs } from "./helper";
import axios from "axios";
import jwtDecode from "jwt-decode";
import { phoneMediaQuery } from "styles/css-variables";
import Layout from "components/common/Layout/Layout";
import Checkbox from "components/common/Checkbox/Checkbox";
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
import Modal from "components/common/Modal/Modal";

const config = { headers: {} };

class SignUp extends React.Component {
  state = {
    name: "",
    email: "",
    password: "",
    passwordConfirmation: "",
    joinCode: "",
    familyName: "",
    showFamilyModal: false,
    loading: false,
    hasJoinCode: false,
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

    if (!this.state.joinCode) {
      this.setState({ showFamilyModal: true });
      return;
    }

    this.setState({ loading: true });

    const data = {
      user: {
        name: this.state.name,
        email: this.state.email.toLowerCase(),
        password: this.state.password,
        password_confirmation: this.state.passwordConfirmation,
        join_code: this.state.joinCode.toLowerCase(),
        family_name: this.state.familyName
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
        const message = handleNetworkErrors(err);
        this.setState({ loading: false, error: { message } });
      });
  };
  render() {
    const { error, hasJoinCode, showFamilyModal, loading } = this.state;
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
                  <Checkbox
                    onChange={e =>
                      this.setState({
                        hasJoinCode: e.target.checked
                      })
                    }
                    checked={hasJoinCode}
                  >
                    I have a family join code
                  </Checkbox>

                  {hasJoinCode && (
                    <Input
                      inputState={error.field === "join_code" ? "error" : ""}
                      type="text"
                      label="Family Join Code"
                      icon="users"
                      placeholder="Shared Family Code"
                      onChange={e =>
                        this.setState({ joinCode: e.target.e.target.valueue })
                      }
                    />
                  )}
                  <Button type="submit" loading={loading}>
                    Submit
                  </Button>
                  <p>
                    Already have an account? <Link to="/sign_in">Sign In</Link>{" "}
                    instead.
                  </p>
                </FormContainer>
              </FormWrapper>
              <InfoBoxComponent />
            </ActionsWrapper>
          </PageWrapper>

          {showFamilyModal && (
            <Modal
              onCloseRequest={() => this.setState({ showFamilyModal: false })}
            >
              <p style={{ textAlign: "center" }}>
                You need to join a family in order to create and view recipes.
                Create one now!
              </p>
              <FormWrapper>
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
                  <Input
                    inputState={error.field === "family_name" ? "error" : ""}
                    type="text"
                    label="Family Display Name"
                    icon="users"
                    placeholder="Family Name"
                    onChange={e =>
                      this.setState({ familyName: e.target.value })
                    }
                  />
                  <Button loading={loading} type="submit">
                    Submit
                  </Button>
                </FormContainer>
              </FormWrapper>
            </Modal>
          )}
        </Layout>
      </div>
    );
  }
}

export default SignUp;
