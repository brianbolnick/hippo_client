import React from "react";
import Input from "components/Input/Input";
import styled from "styled-components";
import Button from "components/Button/Button";
//import { API_URL } from "utils";
//import axios from "axios";
//import jwtDecode from "jwt-decode";
import { media} from "styles/css-variables";

//const config = { headers: {} };

const FormContainer = styled.form`
	width: 50%;
	height: 100%
	display: flex;
	justify-content: center;
	flex-flow: column;
	${media.phone` width: 90%;`};
`;

class NewForm extends React.Component {
	state = {
		display_name: "",
		join_code: "",
		error: "",
		loading: false
	};

	render() {
		const { loading } = this.state;
		return (
			<FormContainer onSubmit={e => console.log(e)}>
				<Input
					type="text"
					label="Family Name"
					icon="users"
					placeholder="Family Display Name"
					onChange={e => this.setState({ display_name: e.target.value })}
				/>
				<Input
					type="test"
					label="Join Code"
					icon="envelope"
					placeholder="Shareable Code To Send To Others"
					onChange={e => this.setState({ password: e.target.value })}
				/>
				<Button type="submit" loading={loading}>
					Submit
				</Button>
			</FormContainer>
		)
	}
}

export default NewForm;
