import React from "react";
import styled from "styled-components";
import Layout from 'components/common/Layout/Layout';
import NewForm from './NewForm';
import JoinForm from './JoinForm';
import Button from 'components/common/Button/Button';
const PageWrapper = styled.div`
	height: 100%;
	width: 100%;
	display: flex;
	flex-flow: column;
	align-items: center;
`;

class Family extends React.Component {
	state = { showForm: false }

	toggleForm = () => {
		this.setState({showForm: !this.state.showForm });
	}

	render() {
		const { showForm } = this.state;
		return (
			<Layout>
				<PageWrapper>
					<JoinForm />
					<p>No Family created yet?</p>
					<Button onClick={this.toggleForm}> Create Family </Button>
					{showForm && <NewForm />}
				</PageWrapper>
			</Layout>
		);
	}
}

export default Family;
