import React from "react";
import { Link } from "react-router-dom";
import Input from "../Input/Input";
import styled from "styled-components";
import Button from "../Button/Button";
import { API_URL } from "../../utils";
import axios from "axios";
import jwtDecode from "jwt-decode";
import MediaQuery from "../MediaQuery/MediaQuery";
import { Logo, media, phoneMediaQuery, colors } from "../../styles/css-variables";
import Nav from "components/Nav/Nav";
import MobileNav from "components/Nav/MobileNav";

const config = { headers: {} }; 

const InfoBox = styled.div`

`;

const FormWrapper = styled.div`
	z-index: 9;
	display: flex;
    align-items: center;
    justify-content: center;
	${media.phone`
		width: 100%;
	`};
`;

export const FadedBlock = styled.div`
	width: 400px;
	height: 75vh;
	position: absolute;
	bottom: 356px;
	left: 75%;
	transform: rotate(45deg);
	background-image: linear-gradient(to top left,#D44B92,#F0617D,#F3874A);
	border-radius: 64px;
	opacity: 0.7;
	z-index: -2;
`;

export const Block = styled.div`
	width: 1000px;
	height: 100vh;
	position: absolute;
	top: 110px;
	left: 70%;
	transform: rotate(45deg);
	background-image: linear-gradient(to top left,#D44B92,#F0617D,#F3874A);
	border-radius: 64px;
`;

const FormContainer = styled.form`
	width: 400px;
	display: flex;
	justify-content: center;
	flex-flow: column;
	${media.phone` 
	    box-sizing: border-box;
	    background: #ffffff;
	    border-radius: 4px;
	    width: 100%;
	    box-shadow: 0 0 12px 3px #21212170;
			padding: 16px;
	`};
`;

const PageWrapper = styled.div`
	height: 100%;
	position: relative;
	width: 100%;
	overflow: hidden;
	display: flex;
	padding: 10%;
	box-sizing: border-box;

	${media.phone`
		padding: 5%;
	`};
`;

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
				{showMobile ? <MobileNav transparent/> : <Nav transparent/>}
				<PageWrapper>
					<Block  />
					<FadedBlock  />
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
					</InfoBox>
				</PageWrapper>
			</div>
		);
	}
}

export default SignIn;
