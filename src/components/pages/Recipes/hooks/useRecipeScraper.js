import { useMutation } from "@apollo/react-hooks";
import { CREATE_RECIPE_MUTATION } from "../apollo";

const useCreateRecipeMutation = () => {
  const [mutate] = useMutation(CREATE_RECIPE_MUTATION, {
    onCompleted({ createRecipe }) {
      const id = createRecipe.id;
      window.location.replace(`/recipes/${id}`);
    }
  });

  const createRecipe = variables => {
    mutate({
      variables
    });
  };

  return [createRecipe];
};

export default useCreateRecipeMutation;
