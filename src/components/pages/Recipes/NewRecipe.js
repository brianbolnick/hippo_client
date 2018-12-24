import React, { Component } from "react";
import Layout from "components/Layout/Layout";
import { token, userId, familyId, API_URL, handleNetworkErrors } from "utils";
import axios from "axios";
import FileInput from "components/FileInput/FileInput";
import { Form, InputArea } from "./styles";
import Input from "components/Input/Input";
import Select from "components/Select/Select";
import FlashMessage from "components/FlashMessage/FlashMessage";
import Button from "components/Button/Button";

class NewRecipe extends Component {
  constructor(props) {
    super(props);
    this.handleUploadImage = this.handleUploadImage.bind(this);

    this.state = {
      title: "",
      prep_time: "5 Mins",
      cook_time: "20 Mins",
      calories: "123",
      servings: 4,
      ingredients: ["Salt", "Pepper"],
      steps: ["Cook it all", "Eat it all!"],
      family_id: familyId,
      user_id: userId,
      category_id: 1,
      error: "",
      loading: false
    };
  }

  componentDidMount = () => {
    const authToken = `Bearer ${token}`;
    axios
      .get(`${API_URL}/categories`, {
        headers: { Authorization: authToken }
      })
      .then(({ data }) => {
        this.setState({ categories: data.data }, () =>
          console.log(this.state.categories)
        );
      })
      .catch(err => {
        console.log(err);
        this.setState({ error: { message: "Something went wrong." } });
      });
  };

  renderCategories = () => {
    return (
      this.state.categories &&
      this.state.categories.map(category => {
        return (
          <option key={`category|${category.id}`} value={category.id}>
            {category.name}
          </option>
        );
      })
    );
  };

  handleSubmit = e => {
    e.preventDefault();

    const data = new FormData();

    const stateData = { ...this.state };
    delete stateData.loading;
    delete stateData.error;
    delete stateData.categories;
    Object.keys(stateData).forEach(obj => {
      const val = stateData[obj];
      if (val instanceof Array) {
        data.append(obj, JSON.stringify(val));
      } else {
        data.append(obj, val);
      }
    });

    const authToken = `Bearer ${token}`;
    axios
      .post(`${API_URL}/recipes`, data, {
        headers: { Authorization: authToken }
      })
      .then(resp => {
        const id = resp.data.data.id;
        window.location.replace(`/recipes/${id}`);
      })
      .catch(err => {
        console.log(err);
      });
  };

  handleUploadImage = e => {
    this.setState({
      image: e.target.files[0]
    });
  };

  removeImage = () => {
    this.setState({ image: null });
  };

  render() {
    const { loading, error } = this.state;
    return (
      <Layout>
        <FlashMessage visible={!!error.message} error>
          {error.message}
        </FlashMessage>

        <Form onSubmit={this.handleSubmit}>
          <InputArea>
            <Input
              inputState={error.field === "email" ? "error" : ""}
              type="text"
              label="Recipe Title"
              icon="utensils"
              placeholder="Title"
              onChange={e => this.setState({ title: e.target.value })}
            />
            <Select
              onChange={e => this.setState({ category_id: e.target.value })}
              icon="tags"
              label="Category"
              placeholder="Category"
            >
              {this.renderCategories()}
            </Select>

            <Button type="submit" loading={loading}>
              Create
            </Button>
          </InputArea>
          <FileInput
            fileName={this.state.image && this.state.image.name}
            onChange={this.handleUploadImage}
            onClear={this.removeImage}
          />
        </Form>
      </Layout>
    );
  }
}

export default NewRecipe;
