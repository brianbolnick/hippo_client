import React from "react";
import Layout from "../Layout/Layout";
import Button from 'components/Button/Button';
import { Link } from 'react-router-dom';
import { API_URL, token } from "utils";
import axios from "axios";

class Recipe extends React.Component {
	state = { recipes: [] }

	componentDidMount = () => {
		const authToken = `Bearer ${token}`;
		axios.get(`${API_URL}/recipes`, { headers: {Authorization: authToken}} )
			.then(({data}) => {
				console.log(data);
			})
			.catch (err => {
				console.log(err);
			})

		}

			render () {
				return(
					<Layout>
					You need to join or create a family before adding recipes. 
					<Link to='/family'>
					<Button>Create Family</Button>
					</Link>
					</Layout>
				)
			}
	}

export default Recipe
