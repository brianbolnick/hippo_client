import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import get from 'lodash/get';
import Layout from 'components/common/Layout/Layout';
import PageLoader from 'components/common/PageLoader';
import { familyId } from 'utils';
import GET_FAMILY_MEAL_PLANS_QUERY from './getFamilyMealPlansQuery';

const MealPlans = () => {
  const { data, networkStatus, error: queryError } = useQuery(
    GET_FAMILY_MEAL_PLANS_QUERY,
    {
      variables: { familyId }
    }
  );

  const mealPlans = get(data, 'mealPlansQuery.mealPlans', {});
  console.log(mealPlans);

  //const recipe = get(data, "recipeQuery", {});
  //const ingredients = get(recipe, "rawIngredients", []);
  //const servings = get(recipe, "servings", 1);

  //if (queryError) {
  //if (queryError.message.toLowerCase().includes("unauthorized")) {
  //window.location.replace("/401");
  //}
  //setError(queryError.message);
  //}

  return networkStatus !== 7 || queryError ? (
    <PageLoader />
  ) : (
    <Layout>
      <div> meal plans </div>
    </Layout>
  );
};

export default MealPlans;
