import React, { Component } from "react";
import Layout from "components/common/Layout/Layout";
import { token, userId, familyId, API_URL } from "utils";
import axios from "axios";
import FileInput from "components/common/FileInput/FileInput";
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
  Notice,
  ButtonContainer
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
import { tabletMediaQuery } from "styles/css-variables";

const AVAILABLE_TIMES = ["Mins", "Hrs", "Days"];

const authToken = `Bearer ${token}`;

const getCategories = () => {
  return axios.get(`${API_URL}/categories`, {
    headers: { Authorization: authToken }
  });
};

const getRecipe = id => {
  return axios.get(`${API_URL}/recipes/${id}`, {
    headers: { Authorization: authToken }
  });
};

class EditRecipe extends Component {
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
      notes: "",
      error: "",
      loading: false,
      showMobile: window.matchMedia("(" + tabletMediaQuery + ")").matches
    };
  }

  componentDidMount = () => {
    const id = this.props.match.params.id;
    axios
      .all([getRecipe(id), getCategories()])
      .then(
        axios.spread((recipeData, categoryData) => {
          const { data } = recipeData.data;
          this.setState({
            categories: categoryData.data.data,
            title: data.title,
            prep_time: data.prep_time,
            cook_time: data.cook_time,
            calories: data.calories,
            servings: data.servings,
            ingredients: data.ingredients,
            steps: data.steps,
            family_id: data.family_id,
            user_id: data.user_id,
            category_id: data.category.id,
            notes: data.notes,
            image_url: data.image_url
          });
        })
      )
      .catch(err => {
        console.log(err);
        this.setState({ error: { message: "Something went wrong." } });
      });
  };

  handleAddIngredients = ing => {
    const ingredients = [...this.state.ingredients];
    ingredients.push(ing);
    this.setState({ ingredients });
  };

  handleAddSteps = step => {
    const steps = [...this.state.steps];
    steps.push(step);
    this.setState({ steps });
  };

  renderCategories = () => {
    return (
      this.state.categories &&
      this.state.categories.map(category => {
        return (
          <option
            selected={category.id === this.state.category_id}
            key={`category|${category.id}`}
            value={category.id}
          >
            {category.name}
          </option>
        );
      })
    );
  };

  renderTimes = type => {
    if (this.state[type]) {
      const times = this.state[type].split(" ");
      return AVAILABLE_TIMES.map(time => {
        return (
          <option selected={time === times[1]} value={time}>
            {time}{" "}
          </option>
        );
      });
    }
  };

  renderServings = () => {
    return [...Array(10).keys()].map(x => {
      return (
        <option
          key={`serving|${x + 1}`}
          value={x + 1}
          selected={x + 1 === this.state.servings}
        >
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
    delete stateData.showMobile;
    Object.keys(stateData).forEach(obj => {
      const val = stateData[obj];
      if (val instanceof Array) {
        data.append(obj, JSON.stringify(val));
      } else {
        data.append(obj, val);
      }
    });

    const recipeId = this.props.match.params.id;
    axios
      .put(`${API_URL}/recipes/${recipeId}`, data, {
        headers: { Authorization: authToken }
      })
      .then(resp => {
        window.location.replace(`/recipes/${recipeId}`);
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
      image: e.target.files[0],
      image_url: null
    });
  };

  removeImage = () => {
    this.setState({ image: null });
  };

  handleMediaQueryChange = ({ matches }) => {
    this.setState({ showMobile: matches });
  };

  handleCancel = () => {
    const id = this.props.match.params.id;
    window.location.replace(`/recipes/${id}`);
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
              value={this.state.title}
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
                placehoder="Category"
              >
                {this.renderCategories()}
              </Select>
              <Input
                type="text"
                value={this.state.calories}
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
                defaultInputValue={this.state.prep_time.split(" ")[0]}
                placeholder="Prep"
                label="Prep Time"
                icon="clock"
              >
                {this.renderTimes("prep_time")}
              </ControlledInput>
              <ControlledInput
                onChange={e => this.setState({ cook_time: e })}
                placeholder="Cook"
                label="Cook Time"
                icon="clockAlarm"
                defaultInputValue={this.state.cook_time.split(" ")[0]}
              >
                {this.renderTimes("cook_time")}
              </ControlledInput>
            </FormRow>
            <FileInput
              fileName={this.state.image && this.state.image.name}
              onChange={this.handleUploadImage}
              onClear={this.removeImage}
            />
            {!showMobile && (
              <ButtonContainer>
                <Button type="submit" loading={loading}>
                  Save Recipe
                </Button>
                <Button secondary onClick={this.handleCancel}>
                  Cancel
                </Button>
              </ButtonContainer>
            )}
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
              {showMobile && <Divider full />}
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
              value={this.state.notes}
              label="Notes"
              placeholder="Recipe Notes"
            />
          </ListArea>
          {showMobile && (
            <ButtonContainer>
              <Button type="submit" loading={loading}>
                Save Recipe
              </Button>
              <Button secondary onClick={this.handleCancel}>
                Cancel
              </Button>
            </ButtonContainer>
          )}
        </Form>
      </Layout>
    );
  }
}

export default EditRecipe;
