import React, { Component } from "react";
import axios from "axios";
import { token, userId, familyId, API_URL } from "utils";
import { colors } from "styles/css-variables";
import Layout from "components/common/Layout";
import FlashMessage from "components/common/FlashMessage";
import FileInput from "components/common/FileInput";
import ProgressSteps from "components/common/ProgressSteps";
import RecipePreview from "components/pages/Recipes/ViewRecipe/RecipeView";
import Input from "./Input";
import TextArea from "./TextArea";
import Dropdown from "./Dropdown";
import AddIngredientForm from "./AddIngredientForm";
import AddStepForm from "./AddStepForm";
import {
  Notice,
  Title,
  StepContainer,
  Columns,
  Column,
  StepOptions,
  ActionButton,
  PageContainer
} from "./NewRecipeStyles";
import Ingredient from "./Ingredient";
import Step from "./Step";

const TOTAL_STEPS = 5;

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
    raw_ingredients: [],
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

  getFamily = () => {
    return axios.get(`${API_URL}/family/${familyId}`, {
      headers: { Authorization: `Bearer ${token}` }
    });
  };

  componentDidMount = () => {
    axios
      .all([this.getCategories(), this.getDishTypes(), this.getFamily()])
      .then(
        axios.spread((categoryData, dishTypeData, familyData) => {
          const categories = categoryData.data.data;
          const dishTypes = dishTypeData.data.data;
          const family = familyData.data.data;
          this.setState({ categories, dishTypes, family });
        })
      )
      .catch(err => {
        console.log(err);
        this.setState({ error: "Something went wrong." });
      });
  };

  handleSubmit = e => {
    e.preventDefault();

    if (!this.state.title || !this.state.prep_time || !this.state.cook_time) {
      this.setState({
        error: "Title, Prep Time, and Cook Time can't be blank."
      });
    } else {
      this.submitRecipe();
    }
  };

  submitRecipe = () => {
    this.setState({ loading: true });
    const {
      currentStep,
      error,
      loading,
      categories,
      dishTypes,
      family,
      imageUrl,
      ...recipe
    } = this.state;

    const data = new FormData();

    Object.keys(recipe).forEach(obj => {
      const val = recipe[obj];
      if (val && val instanceof Array) {
        data.append(obj, JSON.stringify(val));
      } else if (val) {
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
          error: "Something went wrong. Please try again.",
          loading: false
        });
      });
  };

  handleAddIngredients = rawIngredient => {
    if (rawIngredient) {
      const raw_ingredients = [...this.state.raw_ingredients, rawIngredient];
      this.setState({ raw_ingredients });
    }
  };

  handleAddSteps = step => {
    if (step) {
      const steps = [...this.state.steps, step];
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
        onChange={item => this.setState({ servings: item.id })}
        items={list}
        label="Serving Size"
      />
    );
  };

  deleteIngredient = ing => {
    const raw_ingredients = [...this.state.raw_ingredients];

    const filteredRawIngredients = raw_ingredients.filter(
      x => JSON.stringify(x) !== JSON.stringify(ing)
    );

    this.setState({ raw_ingredients: filteredRawIngredients });
  };

  updateIngredient = (oldIng, newIng) => {
    const raw_ingredients = [...this.state.raw_ingredients];
    const index = raw_ingredients.indexOf(oldIng);
    raw_ingredients[index] = newIng;

    this.setState({ raw_ingredients });
  };

  deleteStep = step => {
    const steps = [...this.state.steps];
    this.setState({ steps: steps.filter(x => x !== step) });
  };

  updateStep = (oldStep, newStep) => {
    const steps = [...this.state.steps];
    const index = steps.indexOf(oldStep);
    steps[index] = newStep;

    this.setState({ steps });
  };

  renderIngredients = () => {
    const { raw_ingredients } = this.state;
    return raw_ingredients.length ? (
      raw_ingredients.map((ing, index) => (
        <Ingredient
          key={`ingredient|${index}`}
          ingredient={ing}
          onUpdate={this.updateIngredient}
          onDelete={this.deleteIngredient}
        />
      ))
    ) : (
      <Notice>Use the field above to add ingredients!</Notice>
    );
  };

  renderSteps = () => {
    const { steps } = this.state;

    return (
      steps &&
      steps.map((step, index) => {
        return (
          <Step
            key={`step|${index}`}
            stepNumber={index + 1}
            step={step}
            onUpdate={this.updateStep}
            onDelete={this.deleteStep}
          />
        );
      })
    );
  };

  handleUploadImage = e => {
    const image = e.target.files[0];
    if (image.size <= 102400) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const imageUrl = reader.result;
        this.setState({ imageUrl });
      };

      image && reader.readAsDataURL(image);

      this.setState({ image });
    } else {
      this.setState({ error: "File size is too large. Must be 100kb or less" });
    }
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
        <AddIngredientForm onSave={data => this.handleAddIngredients(data)} />
        {this.renderIngredients()}
      </StepContainer>
    );
  };

  renderStep4 = active => {
    return (
      <StepContainer active={active}>
        <Title>How is it made?</Title>
        <AddStepForm onSave={data => this.handleAddSteps(data)} />
        {this.renderSteps()}
      </StepContainer>
    );
  };

  renderStep5 = active => {
    const {
      image,
      currentStep,
      error,
      loading,
      categories,
      dishTypes,
      ...recipe
    } = this.state;

    const category =
      categories && categories.find(cat => cat.id === recipe.category_id);
    const dish_type =
      dishTypes && dishTypes.find(dt => dt.id === recipe.dish_type_id);

    return (
      <StepContainer active={active}>
        <Title>Preview</Title>

        <RecipePreview recipe={{ ...recipe, category, dish_type }} />
      </StepContainer>
    );
  };

  render() {
    const { currentStep, error, loading } = this.state;

    return (
      <Layout hideFooter>
        <FlashMessage
          visible={!!error}
          error
          onClose={() => this.setState({ error: "" })}
        >
          {error}
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
              <ActionButton onClick={this.handleSubmit} loading={loading}>
                Finish
              </ActionButton>
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
