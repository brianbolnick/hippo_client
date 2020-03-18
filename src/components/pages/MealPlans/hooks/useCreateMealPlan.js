import { useMutation } from '@apollo/react-hooks';
import { CREATE_MEAL_PLAN_MUTATION } from '../apollo';

const useCreateMealPlan = () => {
  const [mutate] = useMutation(CREATE_MEAL_PLAN_MUTATION);

  const createMealPlan = () => {
    return mutate();
  };

  return [createMealPlan];
};

export default useCreateMealPlan;
