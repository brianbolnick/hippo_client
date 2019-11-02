import React, { Component } from "react";
import styled from "styled-components";
import axios from "axios";
import { token, userId, familyId, API_URL } from "utils";
import { colors, avenir, media } from "styles/css-variables";
import Layout from "components/common/Layout";
import FlashMessage from "components/common/FlashMessage";
import FileInput from "components/common/FileInput";
import Input from "./Input";
import TextArea from "./TextArea";
import Dropdown from "./Dropdown";
import Button from "components/common/Button";
import ProgressSteps from "components/common/ProgressSteps";

const TOTAL_STEPS = 5;

const Title = styled.div`
  font-size: 1.5rem;
  letter-spacing: 1px;
  margin: 32px 0;
  font-weight: 600;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  color: ${colors.black};
  font-family: ${avenir};
`;

const StepContainer = styled.div`
  ${({ active }) =>
    !active &&
    `
		display: none;
	`};
`;

const Columns = styled.div`
  display: flex;
  flex-flow: row;
  flex-wrap: wrap;
  width: 100%;
  justify-content: space-between;

  ${media.smallDesktop`
		flex-flow: column;
	`}
`;

const Column = styled.div`
  ${({ flex }) =>
    flex &&
    `
		flex: ${flex};
	`};

  &:not(:last-child) {
    margin-right: 48px;
  }
`;

const StepOptions = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const ActionButton = styled(Button)`
  margin-left: 16px;
`;

const PageContainer = styled.div`
  padding: 0 12%;

  ${media.smallDesktop`
		padding: 0;
	`}
`;

class NewRecipe extends Component {
  state = {
    image: null,
    currentStep: 1,
    title: "",
    prep_time: "",
    cook_time: "",
    calories: "",
    servings: 1,
    difficulty: 1,
    ingredients: [],
    steps: [],
    family_id: familyId,
    user_id: userId,
    category_id: 1,
    dish_type_id: 1,
    notes: "",
    error: "",
    imageUrl: "",
    loading: false
  };

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
          this.setState({ categories, dishTypes });
        })
      )
      .catch(err => {
        console.log(err);
        this.setState({ error: { message: "Something went wrong." } });
      });
  };

  //handleSubmit = e => {
  //e.preventDefault();

  //this.setState({ loading: true });
  //const data = new FormData();

  //const stateData = { ...this.state };
  //delete stateData.loading;
  //delete stateData.error;
  //delete stateData.categories;
  //delete stateData.dishTypes;
  //delete stateData.showMobile;
  //Object.keys(stateData).forEach(obj => {
  //const val = stateData[obj];
  //if (val instanceof Array) {
  //data.append(obj, JSON.stringify(val));
  //} else {
  //data.append(obj, val);
  //}
  //});

  //const authToken = `Bearer ${token}`;
  //axios
  //.post(`${API_URL}/recipes`, data, {
  //headers: { Authorization: authToken }
  //})
  //.then(resp => {
  //const id = resp.data.data.id;
  //window.location.replace(`/recipes/${id}`);
  //})
  //.catch(err => {
  //console.log(err);
  //this.setState({
  //error: { message: "Something went wrong. Please try again." },
  //loading: false
  //});
  //});
  //};
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
    const list =
      this.state.categories &&
      this.state.categories.map(category => {
        return {
          id: category.id,
          title: category.name,
          selected: this.state.category_id === category.id,
          key: "category"
        };
      });

    return (
      <Dropdown
        placeholder="Category"
        onChange={item => this.setState({ category_id: item.id })}
        items={list}
        label="Category"
      />
    );
  };

  renderDishTypes = () => {
    const list =
      this.state.dishTypes &&
      this.state.dishTypes.map(dishType => {
        return {
          id: dishType.id,
          title: dishType.name,
          selected: this.state.dishType_id === dishType.id,
          key: "dishType"
        };
      });

    return (
      <Dropdown
        placeholder="Dish Type"
        onChange={item => this.setState({ dish_type_id: item.id })}
        items={list}
        label="Dish Type"
      />
    );
  };

  renderDifficulty = () => {
    const difficulties = [
      { name: "Easy", id: 1 },
      { name: "Medium", id: 2 },
      { name: "Difficult", id: 3 }
    ];
    const list = difficulties.map(diff => {
      return {
        id: diff.id,
        title: diff.name,
        selected: this.state.difficulty === diff.id,
        key: "difficulty"
      };
    });

    return (
      <Dropdown
        placeholder="Dish Difficulty"
        onChange={item => this.setState({ difficulty: item.id })}
        items={list}
        label="Difficulty"
      />
    );
  };

  renderServings = () => {
    const list = [...Array(10)].map((serving, index) => {
      return {
        id: index + 1,
        title: index + 1,
        selected: this.state.servings === index + 1,
        key: "serving"
      };
    });

    return (
      <Dropdown
        placeholder="Serving Size"
        onChange={item => this.setState({ servings: item })}
        items={list}
        label="Serving Size"
      />
    );
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

  //renderIngredients = () => {
  //const { ingredients } = this.state;
  //return ingredients.length ? (
  //ingredients.map(ing => (
  //<TempIngredient key={JSON.stringify(ing)}>
  //<span>{`${ing.quantity} ${ing.measurement} ${ing.name}`}</span>
  //<DeleteIcon name="close" onClick={() => this.deleteIngredient(ing)} />
  //</TempIngredient>
  //))
  //) : (
  //<Notice>Use the field above to add ingredients!</Notice>
  //);
  //};

  //renderSteps = () => {
  //const { steps } = this.state;
  //return steps.length
  //? steps.map((step, index) => {
  //return (
  //<TempDirection
  //key={JSON.stringify(step)}
  //style={{ alignItems: "center" }}
  //>
  //<span>{index + 1}</span>
  //<TempDirectionContainer>
  //<div>{step}</div>
  //<DeleteIcon
  //name="close"
  //onClick={() => this.deleteStep(step)}
  //clear
  ///>
  //</TempDirectionContainer>
  //</TempDirection>
  //);
  //})
  //: null;
  //};

  handleUploadImage = e => {
    const image = e.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      const imageUrl = reader.result;
      this.setState({ imageUrl });
    };

    image && reader.readAsDataURL(image);

    this.setState({ image });
  };

  removeImage = () => {
    this.setState({ image: null });
  };

  renderStep1 = active => {
    return (
      <StepContainer active={active}>
        <Title>What is it?</Title>
        <Columns>
          <Column flex={1}>
            <Input
              type="text"
              placeholder="What's it called?"
              onChange={e => this.setState({ title: e.target.value })}
              label="Recipe Title"
              value={this.state.title}
            />
            <TextArea
              placeholder="What's special about it?"
              label="Notes"
              onChange={e => this.setState({ notes: e.target.value })}
              value={this.state.notes}
            />
          </Column>

          <Column flex={1.5}>
            <FileInput
              onChange={this.handleUploadImage}
              file={this.state.image}
              onClear={this.removeImage}
              imageUrl={this.state.imageUrl}
            />
          </Column>
        </Columns>
      </StepContainer>
    );
  };

  renderStep2 = active => {
    return (
      <StepContainer active={active}>
        <Title>Tell me more.</Title>
        <Columns>
          <Column flex={1}>
            <div>Cook Time</div>

            <Input
              type="text"
              placeholder="Prep Time"
              onChange={e => this.setState({ prep_time: e.target.value })}
              label="Prep Time"
              value={this.state.prep_time}
            />
            <Input
              type="text"
              placeholder="Cook Time"
              onChange={e => this.setState({ cook_time: e.target.value })}
              label="Cook Time"
              value={this.state.cook_time}
            />
            <Input
              type="text"
              placeholder="Calories"
              onChange={e => this.setState({ calories: e.target.value })}
              label="Calories"
              value={this.state.calories}
            />
          </Column>

          <Column flex={1}>
            {this.renderCategories()}
            {this.renderDishTypes()}
            {this.renderServings()}
            {this.renderDifficulty()}
          </Column>
        </Columns>
      </StepContainer>
    );
  };

  renderStep3 = active => {
    return (
      <StepContainer active={active}>
        <Title>What's in it?</Title>
        <div>Ingredients</div>
      </StepContainer>
    );
  };

  renderStep4 = active => {
    return (
      <StepContainer active={active}>
        <Title>How is it made?</Title>
        <div>directions</div>
      </StepContainer>
    );
  };

  renderStep5 = active => {
    return (
      <StepContainer active={active}>
        <Title>Preview</Title>

        <div>Preview recipe</div>
      </StepContainer>
    );
  };

  submitRecipe = () => {
    console.log("submit", this.state);
  };

  render() {
    const { currentStep, error } = this.state;

    return (
      <Layout>
        <FlashMessage visible={!!error.message} error>
          {error.message}
        </FlashMessage>
        <PageContainer>
          <ProgressSteps
            step={currentStep}
            totalSteps={TOTAL_STEPS}
            title="New Recipe"
            color={colors.softRed}
          />
          {this.renderStep1(currentStep === 1)}
          {this.renderStep2(currentStep === 2)}
          {this.renderStep3(currentStep === 3)}
          {this.renderStep4(currentStep === 4)}
          {this.renderStep5(currentStep === 5)}
          <StepOptions>
            {currentStep > 1 && (
              <ActionButton
                secondary
                onClick={() => this.setState({ currentStep: currentStep - 1 })}
              >
                Back
              </ActionButton>
            )}
            {currentStep === TOTAL_STEPS ? (
              <ActionButton onClick={this.submitRecipe}>Finish</ActionButton>
            ) : (
              <ActionButton
                onClick={() => this.setState({ currentStep: currentStep + 1 })}
              >
                Next
              </ActionButton>
            )}
          </StepOptions>
        </PageContainer>
      </Layout>
    );
  }
}

export default NewRecipe;
