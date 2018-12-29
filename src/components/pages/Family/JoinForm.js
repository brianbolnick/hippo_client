import React from "react";
import Input from "components/common/Input/Input";
import styled from "styled-components";
import Button from "components/common/Button/Button";
//import { API_URL } from "utils";
//import axios from "axios";
//import jwtDecode from "jwt-decode";
import { media } from "styles/css-variables";

//const config = { headers: {} };

const FormContainer = styled.form`
	width: 50%;
	height: 100%
	display: flex;
	justify-content: center;
	flex-flow: column;
	${media.phone` width: 90%;`};
`;

class JoinForm extends React.Component {
  state = {
    join_code: "",
    error: "",
    loading: false
  };

  handleSubmit = e => {
    e.preventDefault();
    console.log(this.state);
  };

  render() {
    const { loading } = this.state;
    return (
      <FormContainer onSubmit={this.handleSubmit}>
        <Input
          type="text"
          label="Join Code"
          icon="users"
          placeholder="Enter Shared Code"
          onChange={e => this.setState({ join_code: e.target.value })}
        />
        <Button type="submit" loading={loading}>
          Submit
        </Button>
      </FormContainer>
    );
  }
}

export default JoinForm;
