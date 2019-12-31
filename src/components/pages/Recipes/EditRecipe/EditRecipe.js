import React from "react";
import GET_RECIPE_QUERY from "../ViewRecipe/getRecipeQuery";
import { useQuery } from "@apollo/react-hooks";
import get from "lodash/get";

const EditRecipe = ({ match }) => {
  const recipeId = parseInt(match.params.id);
  const { data, loading, networkStatus } = useQuery(GET_RECIPE_QUERY, {
    variables: { recipeId }
  });

  const recipe = get(data, "recipeQuery", {});
  const ingredients = get(recipe, "rawIngredients", []);
  const servings = get(recipe, "servings", 1);

  return (
    <div>
      coming soon {!networkStatus !== 7 && !loading && "(done loading)"}
    </div>
  );
};

export default EditRecipe;
//const stateData = { ...this.state };
//delete stateData.loading;
//delete stateData.error;
//delete stateData.categories;
//delete stateData.showMobile;
//Object.keys(stateData).forEach(obj => {
//const val = stateData[obj];
//if (val instanceof Array) {
//data.append(obj, JSON.stringify(val));
//} else {
//data.append(obj, val);
//}
//});

//const recipeId = this.props.match.params.id;
//axios
//.put(`${API_URL}/recipes/${recipeId}`, data, {
//headers: { Authorization: authToken }
//})
//.then(resp => {
//window.location.replace(`/recipes/${recipeId}`);
//})
//.catch(err => {
//console.log(err);
//this.setState({
//error: { message: "Something went wrong. Please try again." },
//loading: false
//});
//});
//};
