import React from "react";
import Layout from "components/Layout/Layout";
import { API_URL, token } from "utils";
import axios from "axios";
import {
  DetailsContainer,
  ShowContainer,
  ImageBlock,
  Title,
  Category,
  Meta
} from "./styles";
class Recipe extends React.Component {
  state = { recipe: {} };

  componentDidMount = () => {
    const authToken = `Bearer ${token}`;

    const id = this.props.match.params.id;
    axios
      .get(`${API_URL}/recipes/${id}`, {
        headers: { Authorization: authToken }
      })
      .then(({ data }) => {
        this.setState({ recipe: data.data });
      })
      .catch(err => {
        console.log(err);
      });
  };

  render() {
    const { recipe } = this.state;
    console.log(recipe);
    return (
      <Layout>
        <ShowContainer>
          <ImageBlock url={recipe.image_url} />
          <DetailsContainer>
            <Title>{recipe.title}</Title>
            <Category>American</Category>
            <Meta>Somehing</Meta>
          </DetailsContainer>
        </ShowContainer>
      </Layout>
    );
  }
}

export default Recipe;
