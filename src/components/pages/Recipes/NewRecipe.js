import React, { Component } from "react";
import Layout from "components/Layout/Layout";
import { token, userId, familyId, API_URL } from "utils";
import axios from "axios";
import FileInput from "components/FileInput/FileInput";
import {
  TempIngredient,
  TempStep,
  TempIngredientsContainer,
  StepsContainer,
  Form,
  AddableContainer,
  InputArea,
  ListArea,
  FormRow,
  Steps,
  Notice
} from "./styles";
import Input from "components/Input/Input";
import AddableInput from "components/AddableInput/AddableInput";
import ControlledInput from "components/ControlledInput/ControlledInput";
import Select from "components/Select/Select";
import FlashMessage from "components/FlashMessage/FlashMessage";
import Button from "components/Button/Button";
import Divider from "components/Divider/Divider";
import Textarea from "components/Textarea/Textarea";

const AVAILABLE_TIMES = ["Mins", "Hrs", "Days"];

class NewRecipe extends Component {
  constructor(props) {
    super(props);
    this.handleUploadImage = this.handleUploadImage.bind(this);

    this.state = {
      title: "",
      prep_time: "",
      cook_time: "",
      calories: "",
      servings: 1,
      ingredients: [],
      steps: [],
      family_id: familyId,
      user_id: userId,
      category_id: 1,
      notes: "",
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

  handleAddIngredients = ing => {
    const ingredients = [...this.state.ingredients];
    ingredients.push(ing);
    console.log(ingredients);
    this.setState({ ingredients });
  };

  handleAddSteps = step => {
    const steps = [...this.state.steps];
    steps.push(step);
    console.log(steps);
    this.setState({ steps });
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

  renderTimes = () => {
    return AVAILABLE_TIMES.map(time => {
      return <option value={time}> {time} </option>;
    });
  };

  renderServings = () => {
    return [...Array(10).keys()].map(x => {
      return (
        <option key={`serving|${x + 1}`} value={x + 1}>
          {x + 1}
        </option>
      );
    });
  };

  renderIngredients = () => {
    const { ingredients } = this.state;
    return ingredients.length ? (
      ingredients.map(ing => <TempIngredient>{ing}</TempIngredient>)
    ) : (
      <Notice>Use the field above to add ingredients!</Notice>
    );
  };

  renderSteps = () => {
    const { steps } = this.state;
    return steps.length ? steps.map(ing => <TempStep>{ing}</TempStep>) : null;
  };

  handleSubmit = e => {
    e.preventDefault();

    this.setState({ loading: true });
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
        this.setState({
          error: { message: "Something went wrong. Please try again." },
          loading: false
        });
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
              type="text"
              label="Recipe Title"
              icon="book"
              placeholder="Title"
              onChange={e => this.setState({ title: e.target.value })}
            />
            <FormRow three>
              <Select
                onChange={e => this.setState({ category_id: e.target.value })}
                icon="tags"
                label="Category"
                placeholder="Category"
              >
                {this.renderCategories()}
              </Select>
              <Input
                type="text"
                label="Calories"
                icon="heartbeat"
                placeholder="Calories"
                onChange={e => this.setState({ calories: e.target.value })}
              />

              <Select
                onChange={e => this.setState({ servings: e.target.value })}
                icon="utensils"
                label="Servings"
                placeholder="Serving Size"
              >
                {this.renderServings()}
              </Select>
            </FormRow>

            <FormRow>
              <ControlledInput
                onChange={e => this.setState({ prep_time: e })}
                defaultSelectValue="Minutes"
                placeholder="Prep"
                label="Prep Time"
                icon="clock"
              >
                {this.renderTimes()}
              </ControlledInput>
              <ControlledInput
                onChange={e => this.setState({ cook_time: e })}
                defaultSelectValue="Minutes"
                placeholder="Cook"
                label="Cook Time"
                icon="clockAlarm"
              >
                {this.renderTimes()}
              </ControlledInput>
            </FormRow>
            <FileInput
              fileName={this.state.image && this.state.image.name}
              onChange={this.handleUploadImage}
              onClear={this.removeImage}
            />
            <Button type="submit" loading={loading}>
              Create Recipe
            </Button>
          </InputArea>
          <ListArea>
            <AddableContainer>
              <AddableInput
                onAddClick={this.handleAddIngredients}
                label="Ingredients"
                placeholder="Click + to add a new ingredient"
              />
              <TempIngredientsContainer>
                {this.renderIngredients()}
              </TempIngredientsContainer>
              <AddableInput
                onAddClick={this.handleAddSteps}
                label="Directions"
                placeholder="Click + to add a new step"
              />
              <StepsContainer>
                {this.state.steps.length ? (
                  <Steps>{this.renderSteps()}</Steps>
                ) : (
                  <Notice>Use the field above to add a step!</Notice>
                )}
              </StepsContainer>
            </AddableContainer>

            <Divider full />
            <Textarea
              onChange={e => this.setState({ notes: e.target.value })}
              label="Notes"
              placeholder="Recipe Notes"
            />
          </ListArea>
        </Form>
      </Layout>
    );
  }
}

export default NewRecipe;
