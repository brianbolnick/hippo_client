import React, { Component } from "react";
import Layout from "components/common/Layout/Layout";
import { token, userId, familyId, API_URL } from "utils";
import axios from "axios";
import FileInput from "components/common/FileInput/FileInput";
import {
  TempIngredient,
  TempDirectionContainer,
  TempDirection,
  TempIngredientsContainer,
  DirectionsContainer,
  Form,
  AddableContainer,
  InputArea,
  ListArea,
  FormRow,
  Steps,
  Notice,
  DeleteIcon
} from "./styles";
import Input from "components/common/Input/Input";
import MediaQuery from "components/common/MediaQuery/MediaQuery";
import AddableInput from "components/common/AddableInput/AddableInput";
import ControlledInput from "components/common/ControlledInput/ControlledInput";
import Select from "components/common/Select/Select";
import FlashMessage from "components/common/FlashMessage/FlashMessage";
import Button from "components/common/Button/Button";
import Divider from "components/common/Divider/Divider";
import Textarea from "components/common/Textarea/Textarea";
import AddIngredientForm from "./AddIngredientForm.js";
import { tabletMediaQuery } from "styles/css-variables";

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
      dish_type_id: 1,
      notes: "",
      error: "",
      loading: false,
      showMobile: window.matchMedia("(" + tabletMediaQuery + ")").matches
    };
  }

  getCategories = () => {
    return axios.get(`${API_URL}/categories`, {
      headers: { Authorization: `Bearer ${token}` }
    });
  };

  getDishTypes = () => {
    return axios.get(`${API_URL}/dish_types`, {
      headers: { Authorization: `Bearer ${token}` }
    });
  };

  componentDidMount = () => {
    axios
      .all([this.getCategories(), this.getDishTypes()])
      .then(
        axios.spread((categoryData, dishTypeData) => {
          const categories = categoryData.data.data;
          const dishTypes = dishTypeData.data.data;
          this.setState({ categories, dishTypes }, () =>
            console.log(this.state)
          );
        })
      )
      .catch(err => {
        console.log(err);
        this.setState({ error: { message: "Something went wrong." } });
      });
  };

  handleAddIngredients = ing => {
    if (ing) {
      const ingredients = [...this.state.ingredients];
      ingredients.push(ing);
      this.setState({ ingredients });
    }
  };

  handleAddSteps = step => {
    if (step) {
      const steps = [...this.state.steps];
      steps.push(step);
      this.setState({ steps });
    }
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

  renderDishTypes = () => {
    return (
      this.state.dishTypes &&
      this.state.dishTypes.map(dishType => {
        return (
          <option key={`dishType|${dishType.id}`} value={dishType.id}>
            {dishType.name}
          </option>
        );
      })
    );
  };

  renderTimes = () => {
    return AVAILABLE_TIMES.map(time => {
      return (
        <option key={time} value={time}>
          {" "}
          {time}{" "}
        </option>
      );
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

  deleteIngredient = ing => {
    const ingredients = [...this.state.ingredients];
    this.setState({
      ingredients: ingredients.filter(
        x => JSON.stringify(x) !== JSON.stringify(ing)
      )
    });
  };

  deleteStep = step => {
    const steps = [...this.state.steps];
    this.setState({ steps: steps.filter(x => x !== step) });
  };

  renderIngredients = () => {
    const { ingredients } = this.state;
    return ingredients.length ? (
      ingredients.map(ing => (
        <TempIngredient key={JSON.stringify(ing)}>
          <span>{`${ing.quantity} ${ing.measurement} ${ing.name}`}</span>
          <DeleteIcon name="close" onClick={() => this.deleteIngredient(ing)} />
        </TempIngredient>
      ))
    ) : (
      <Notice>Use the field above to add ingredients!</Notice>
    );
  };

  renderSteps = () => {
    const { steps } = this.state;
    return steps.length
      ? steps.map((step, index) => {
          return (
            <TempDirection
              key={JSON.stringify(step)}
              style={{ alignItems: "center" }}
            >
              <span>{index + 1}</span>
              <TempDirectionContainer>
                <div>{step}</div>
                <DeleteIcon
                  name="close"
                  onClick={() => this.deleteStep(step)}
                  clear
                />
              </TempDirectionContainer>
            </TempDirection>
          );
        })
      : null;
  };

  handleSubmit = e => {
    e.preventDefault();

    this.setState({ loading: true });
    const data = new FormData();

    const stateData = { ...this.state };
    delete stateData.loading;
    delete stateData.error;
    delete stateData.categories;
    delete stateData.dishTypes;
    delete stateData.showMobile;
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

  handleMediaQueryChange = ({ matches }) => {
    this.setState({ showMobile: matches });
  };

  render() {
    const { loading, error, showMobile } = this.state;
    return (
      <Layout>
        <MediaQuery
          query={tabletMediaQuery}
          onChange={this.handleMediaQueryChange}
        />
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
              <Select
                onChange={e => this.setState({ dish_type_id: e.target.value })}
                icon="tags"
                label="Dish Type"
                placeholder="Dish Type"
              >
                {this.renderDishTypes()}
              </Select>
            </FormRow>
            <FileInput
              fileName={this.state.image && this.state.image.name}
              onChange={this.handleUploadImage}
              onClear={this.removeImage}
            />
            {!showMobile && (
              <Button type="submit" loading={loading}>
                Create Recipe
              </Button>
            )}
          </InputArea>
          <ListArea>
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
            <Textarea
              onChange={e => this.setState({ notes: e.target.value })}
              label="Notes"
              placeholder="Recipe Notes"
            />

            <Divider full />
            <AddableContainer>
              <AddIngredientForm
                onSave={data => this.handleAddIngredients(data)}
              />
              <TempIngredientsContainer>
                {this.renderIngredients()}
              </TempIngredientsContainer>
              {showMobile && <Divider full />}
              <AddableInput
                onAddClick={this.handleAddSteps}
                label="Directions"
                placeholder="Click + to add a new step"
              />
              <DirectionsContainer>
                {this.state.steps.length ? (
                  <Steps>{this.renderSteps()}</Steps>
                ) : (
                  <Notice>Use the field above to add a step!</Notice>
                )}
              </DirectionsContainer>
            </AddableContainer>
          </ListArea>
          {showMobile && (
            <Button type="submit" loading={loading}>
              Create Recipe
            </Button>
          )}
        </Form>
      </Layout>
    );
  }
}

export default NewRecipe;
