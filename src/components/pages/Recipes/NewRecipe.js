import React, { Component } from "react";
import Layout from "components/Layout/Layout";
import { token, userId, familyId, API_URL, handleNetworkErrors } from "utils";
import axios from "axios";
import FileInput from "components/FileInput/FileInput";

class NewRecipe extends Component {
  constructor(props) {
    super(props);
    this.handleUploadImage = this.handleUploadImage.bind(this);

    this.state = {
      title: "Spaghetti",
      prep_time: "5 Mins",
      cook_time: "20 Mins",
      calories: "123",
      servings: 4,
      ingredients: ["Salt", "Pepper"],
      steps: ["Cook it all", "Eat it all!"],
      family_id: familyId,
      user_id: userId,
      category_id: 1
    };
  }

  handleSubmit = e => {
    e.preventDefault();
    console.log(this.state);

    const data = new FormData();

    const stateData = { ...this.state };
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
		this.setState({image: null})
	}

  render() {
    return (
      <Layout>
        <form onSubmit={this.handleSubmit}>
          <FileInput
            fileName={this.state.image && this.state.image.name}
            onChange={this.handleUploadImage}
						onClear={this.removeImage}
          />

          <button type="submit">Submit</button>
        </form>
      </Layout>
    );
  }
}

export default NewRecipe;
