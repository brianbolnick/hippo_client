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
import Button from "components/common/Button";
import ProgressSteps from "components/common/ProgressSteps";

const TOTAL_STEPS = 5;
const AVAILABLE_TIMES = ["Mins", "Hrs", "Days"];

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
  ${({ isHidden }) =>
    isHidden &&
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

  renderDifficulty = () => {
    const difficulties = [
      { name: "Easy", value: 1 },
      { name: "Medium", value: 2 },
      { name: "Difficult", value: 3 }
    ];
    return difficulties.map(diff => {
      return (
        <option key={`difficulty|${diff.name}`} value={diff.value}>
          {diff.name}
        </option>
      );
    });
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
      <StepContainer isHidden={!active}>
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
      <StepContainer isHidden={!active}>
        <Title>Tell me more.</Title>
        <div>Prep Time</div>
        <div>Cook Time</div>
        <div>Servings</div>
        <div>Calories</div>
        <div>category</div>
        <div>dish type</div>
        <div>difficulty</div>
      </StepContainer>
    );
  };

  renderStep3 = active => {
    return (
      <StepContainer isHidden={!active}>
        <Title>What's in it?</Title>
        <div>Ingredients</div>
      </StepContainer>
    );
  };

  renderStep4 = active => {
    return (
      <StepContainer isHidden={!active}>
        <Title>How is it made?</Title>
        <div>directions</div>
      </StepContainer>
    );
  };

  renderStep5 = active => {
    return (
      <StepContainer isHidden={!active}>
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
