import { useMutation } from '@apollo/react-hooks';
import { UPDATE_MEAL_PLAN_MUTATION } from '../apollo';

const useMealPlansMutation = () => {
  const [mutate] = useMutation(UPDATE_MEAL_PLAN_MUTATION, {
    onCompleted({ updateMealPlan }) {
      //const id = createRecipe.id;
      window.location.replace(`/meal_plans`);
    }
  });

  const updateMealPlan = variables => {
    mutate({ variables });
  };

  return [updateMealPlan];
};

export default useMealPlansMutation;
