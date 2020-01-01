import { useMutation } from "@apollo/react-hooks";
import { CREATE_RECIPE_MUTATION, GET_RECIPE_QUERY } from "../apollo";

//const updateRecipeCache = (cache, { data }) => {
////const existingRecipeQuery = cache.readQuery({
////query: GET_RECIPE_QUERY
////});

//console.log("IN UPDATE");
////TODO: verify
////const newRecipe = data.recipe;

////cache.writeQuery({
////query: GET_RECIPE_QUERY,
////data
////});
//};

const useCreateRecipeMutation = () => {
  const [mutate] = useMutation(CREATE_RECIPE_MUTATION, {
    onCompleted({ createRecipe }) {
      const id = createRecipe.id;
      window.location.replace(`/recipes/${id}`);
    }
  });

  const createRecipe = variables => {
    console.log("variables", variables);

    mutate({
      variables
      //update: updateRecipeCache,
    });
  };

  return [createRecipe];
};

export default useCreateRecipeMutation;
