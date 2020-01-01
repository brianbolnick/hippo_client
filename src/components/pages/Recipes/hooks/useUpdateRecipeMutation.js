import { useMutation } from "@apollo/react-hooks";
import { CREATE_RECIPE_MUTATION, GET_RECIPE_QUERY } from "../apollo";

const updateRecipeCache = (cache, { data }) => {
  const existingRecipeQuery = cache.readQuery({
    query: GET_RECIPE_QUERY
  });

  console.log("IN UPDATE");
  //TODO: verify
  //const newRecipe = data.recipe;

  //cache.writeQuery({
  //query: GET_RECIPE_QUERY,
  //data
  //});
};

const useUpdateRecipeMutation = () => {
  const [mutate] = useMutation(CREATE_RECIPE_MUTATION, {
    onCompleted({ updateRecipe }) {
      const id = updateRecipe.id;
      window.location.replace(`/recipes/${id}`);
    }
  });

  const updateRecipe = variables => {
    mutate({
      variables,
      update: updateRecipeCache
    });
  };

  return [updateRecipe];
};

export default useUpdateRecipeMutation;
