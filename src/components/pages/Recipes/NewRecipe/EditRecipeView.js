import React, { useState } from "react";
import get from "lodash/get";
import { userId, familyId } from "utils";
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
import { useUpdateRecipeMutation, useCreateRecipeMutation } from "../hooks";

const TOTAL_STEPS = 5;

const EditRecipeView = ({
  recipe,
  categories,
  dishTypes,
  family,
  isImportedRecipe
}) => {
  const [image, setImage] = useState(null);
  const [currentStep, setCurrentStep] = useState(1);
  const [title, setTitle] = useState(get(recipe, "title", ""));
  const [prepTime, setPrepTime] = useState(get(recipe, "prepTime", ""));
  const [cookTime, setCookTime] = useState(get(recipe, "cookTime", ""));
  const [calories, setCalories] = useState(get(recipe, "calories", ""));
  const [servings, setServings] = useState(get(recipe, "servings", 1));
  const [difficulty, setDifficulty] = useState(get(recipe, "difficulty", 1));
  const [rawIngredients, setRawIngredients] = useState(
    get(recipe, "rawIngredients", [])
  );
  const [steps, setSteps] = useState(get(recipe, "steps", []));
  const [categoryId, setCategoryId] = useState(get(recipe, "category.id", 1));
  const [dishTypeId, setDishTypeId] = useState(get(recipe, "dishType.id", 1));
  const [notes, setNotes] = useState(get(recipe, "notes", ""));
  const [error, setError] = useState("");
  const [imageUrl, setImageUrl] = useState(get(recipe, "imageUrl", ""));
  const [loading, setLoading] = useState(false);
  const [updateRecipe] = useUpdateRecipeMutation();
  const [createRecipe] = useCreateRecipeMutation();

  const handleSubmit = e => {
    e.preventDefault();

    if (!title || !prepTime || !cookTime) {
      setError("Title, Prep Time, and Cook Time can't be blank.");
    } else {
      submitRecipe();
    }
  };

  const submitRecipe = () => {
    setLoading(true);
    const vars = {
      image,
      imageUrl: !image ? imageUrl : null,
      title,
      prepTime,
      cookTime,
      calories,
      servings: parseInt(servings),
      difficulty: parseInt(difficulty),
      rawIngredients,
      steps,
      familyId,
      userId,
      categoryId,
      dishTypeId,
      notes,
      id: recipe.id
    };

    //clean up empty vars
    Object.keys(vars).forEach(v => {
      if (!vars[v]) {
        delete vars[v];
      }
    });

    setLoading(false);
    isImportedRecipe ? createRecipe(vars) : updateRecipe(vars);
  };

  const handleAddIngredients = rawIngredient => {
    if (rawIngredient) {
      const newRawIngredients = [...rawIngredients, rawIngredient];
      setRawIngredients(newRawIngredients);
    }
  };

  const handleAddSteps = step => {
    if (step) {
      const newSteps = [...steps, step];
      setSteps(newSteps);
    }
  };

  const renderCategories = () => {
    const list =
      categories &&
      categories.map(category => {
        return {
          id: category.id,
          title: category.name,
          selected: categoryId === category.id,
          key: "category"
        };
      });

    return (
      <Dropdown
        placeholder="Category"
        onChange={item => setCategoryId(item.id)}
        items={list}
        defaultValue={categoryId}
        label="Category"
      />
    );
  };

  const renderDishTypes = () => {
    const list =
      dishTypes &&
      dishTypes.map(dishType => {
        return {
          id: dishType.id,
          title: dishType.name,
          selected: dishTypeId === dishType.id,
          key: "dishType"
        };
      });

    return (
      <Dropdown
        placeholder="Dish Type"
        defaultValue={dishTypeId}
        onChange={item => setDishTypeId(item.id)}
        items={list}
        label="Dish Type"
      />
    );
  };

  const renderDifficulty = () => {
    const difficulties = [
      { name: "Easy", id: 1 },
      { name: "Medium", id: 2 },
      { name: "Difficult", id: 3 }
    ];

    const list = difficulties.map(diff => {
      return {
        id: diff.id,
        title: diff.name,
        selected: difficulty === diff.id,
        key: "difficulty"
      };
    });

    return (
      <Dropdown
        placeholder="Dish Difficulty"
        defaultValue={difficulty}
        onChange={item => setDifficulty(item.id)}
        items={list}
        label="Difficulty"
      />
    );
  };

  const renderServings = () => {
    const list = [...Array(10)].map((serving, index) => {
      return {
        id: index + 1,
        title: index + 1,
        selected: servings === index + 1,
        key: "serving"
      };
    });

    return (
      <Dropdown
        placeholder="Serving Size"
        onChange={item => setServings(item.id)}
        defaultValue={servings}
        items={list}
        label="Serving Size"
      />
    );
  };

  const deleteIngredient = ing => {
    const newRawIngredients = [...rawIngredients];

    const filteredRawIngredients = newRawIngredients.filter(
      x => JSON.stringify(x) !== JSON.stringify(ing)
    );

    setRawIngredients(filteredRawIngredients);
  };

  const updateIngredient = (oldIng, newIng) => {
    const newRawIngredients = [...rawIngredients];
    const index = newRawIngredients.indexOf(oldIng);
    newRawIngredients[index] = newIng;

    setRawIngredients(newRawIngredients);
  };

  const deleteStep = step => {
    const newSteps = [...steps];
    setSteps(newSteps.filter(x => x !== step));
  };

  const updateStep = (oldStep, newStep) => {
    const newSteps = [...steps];
    const index = newSteps.indexOf(oldStep);
    newSteps[index] = newStep;

    setSteps(newSteps);
  };

  const renderIngredients = () => {
    return rawIngredients.length ? (
      rawIngredients.map((ing, index) => (
        <Ingredient
          key={`ingredient|${index}`}
          ingredient={ing}
          onUpdate={updateIngredient}
          onDelete={deleteIngredient}
        />
      ))
    ) : (
      <Notice>Use the field above to add ingredients!</Notice>
    );
  };

  const renderSteps = () => {
    return (
      steps &&
      steps.map((step, index) => {
        return (
          <Step
            key={`step|${index}`}
            stepNumber={index + 1}
            step={step}
            onUpdate={updateStep}
            onDelete={deleteStep}
          />
        );
      })
    );
  };

  const handleUploadImage = ({
    target: {
      validity,
      files: [image]
    }
  }) => {
    if (validity.valid) {
      if (image.size <= 1003349) {
        setImage(image);
        const reader = new FileReader();
        reader.onloadend = () => {
          const imageUrl = reader.result;
          setImageUrl(imageUrl);
        };

        image && reader.readAsDataURL(image);
      } else {
        setError("File size is too large. Must be 1mb or less");
      }
    }
  };

  const removeImage = () => {
    setImage(null);
  };

  const renderStep1 = active => {
    return (
      <StepContainer active={active}>
        <Title>What is it?</Title>
        <Columns>
          <Column flex={1}>
            <Input
              type="text"
              placeholder="What's it called?"
              onChange={e => setTitle(e.target.value)}
              label="Recipe Title"
              value={title}
            />
            <TextArea
              placeholder="What's special about it?"
              label="Notes"
              onChange={e => setNotes(e.target.value)}
              value={notes}
            />
          </Column>

          <Column flex={1.5}>
            <FileInput
              onChange={handleUploadImage}
              file={image}
              onClear={removeImage}
              imageUrl={imageUrl}
            />
          </Column>
        </Columns>
      </StepContainer>
    );
  };

  const renderStep2 = active => {
    return (
      <StepContainer active={active}>
        <Title>Tell me more.</Title>
        <Columns>
          <Column flex={1}>
            <div>Cook Time</div>

            <Input
              type="text"
              placeholder="Prep Time"
              onChange={e => setPrepTime(e.target.value)}
              label="Prep Time"
              value={prepTime}
            />
            <Input
              type="text"
              placeholder="Cook Time"
              onChange={e => setCookTime(e.target.value)}
              label="Cook Time"
              value={cookTime}
            />
            <Input
              type="text"
              placeholder="Calories"
              onChange={e => setCalories(e.target.value)}
              label="Calories"
              value={calories}
            />
          </Column>

          <Column flex={1}>
            {renderCategories()}
            {renderDishTypes()}
            {renderServings()}
            {renderDifficulty()}
          </Column>
        </Columns>
      </StepContainer>
    );
  };

  const renderStep3 = active => {
    return (
      <StepContainer active={active}>
        <Title>What's in it?</Title>
        <AddIngredientForm onSave={data => handleAddIngredients(data)} />
        {renderIngredients()}
      </StepContainer>
    );
  };

  const renderStep4 = active => {
    return (
      <StepContainer active={active}>
        <Title>How is it made?</Title>
        <AddStepForm onSave={data => handleAddSteps(data)} />
        {renderSteps()}
      </StepContainer>
    );
  };

  const renderStep5 = active => {
    const recipe = {
      image,
      title,
      prepTime,
      cookTime,
      calories,
      servings,
      difficulty,
      rawIngredients,
      steps,
      familyId,
      userId,
      categoryId,
      dishTypeId,
      notes,
      imageUrl
    };

    const category =
      categories && categories.find(cat => cat.id === recipe.categoryId);
    const dishType =
      dishTypes && dishTypes.find(dt => dt.id === recipe.dishTypeId);

    return (
      <StepContainer active={active}>
        <Title>Preview</Title>

        <RecipePreview recipe={{ ...recipe, category, dishType, family }} />
      </StepContainer>
    );
  };

  return (
    <Layout hideFooter>
      <FlashMessage visible={!!error} error onClose={() => setError("")}>
        {error}
      </FlashMessage>
      <PageContainer>
        <ProgressSteps
          step={currentStep}
          totalSteps={TOTAL_STEPS}
          title="New Recipe"
          color={colors.softRed}
        />
        {renderStep1(currentStep === 1)}
        {renderStep2(currentStep === 2)}
        {renderStep3(currentStep === 3)}
        {renderStep4(currentStep === 4)}
        {renderStep5(currentStep === 5)}
        <StepOptions>
          {currentStep > 1 && (
            <ActionButton
              secondary
              onClick={() => setCurrentStep(currentStep - 1)}
            >
              Back
            </ActionButton>
          )}
          {currentStep === TOTAL_STEPS ? (
            <ActionButton onClick={handleSubmit} loading={loading}>
              Finish
            </ActionButton>
          ) : (
            <ActionButton onClick={() => setCurrentStep(currentStep + 1)}>
              Next
            </ActionButton>
          )}
        </StepOptions>
      </PageContainer>
    </Layout>
  );
};

export default EditRecipeView;
