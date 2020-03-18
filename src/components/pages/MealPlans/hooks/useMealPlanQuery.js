import { useRef } from 'react';
import get from 'lodash/get';
import { useQuery } from '@apollo/react-hooks';
import { MEAL_PLAN_QUERY } from '../apollo';

const useMealPlanQuery = ({ id }) => {
  const dataRef = useRef({});

  const { data, error, loading } = useQuery(MEAL_PLAN_QUERY, {
    variables: { id },
    skip: !id
  });

  const mealPlan = get(data, 'mealPlanQuery', {});

  if (JSON.stringify(dataRef.current) !== JSON.stringify(mealPlan)) {
    dataRef.current = mealPlan;
  }

  return {
    data: dataRef.current,
    error,
    loading
  };
};

export default useMealPlanQuery;
