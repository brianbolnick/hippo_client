import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import get from 'lodash/get';
import moment from 'moment';
import styled from 'styled-components/macro';
import Layout from 'components/common/Layout/Layout';
import Button from 'components/common/Button';
import PageLoader from 'components/common/PageLoader';
import RecipeCard from 'components/common/Recipe/RecipeCard';
import { familyId } from 'utils';
import { avenir, colors } from 'styles/css-variables';
import GET_FAMILY_MEAL_PLANS_QUERY from './getFamilyMealPlansQuery';

const PageContainer = styled.div`
  width: 80%;
  margin: 0 auto;
`;

const Title = styled.div`
  font-size: 2rem;
  letter-spacing: 1px;
  font-family: ${avenir};
  font-weight: 700;
  margin-bottom: 16px;
`;

const PlansContainer = styled.div``;

const TitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const MealPlanContainer = styled.div`
  margin-bottom: 40px;
`;

const Date = styled.div`
  font-size: 1.25rem;
  color: ${({ active }) => (active ? colors.black : colors.mutedGray)};
  font-weight: 600;
`;

const PlanHeader = styled.div`
  display: flex;
  margin-bottom: 16px;
  align-items: center;
`;

const ActiveTag = styled.div`
  background: ${colors.blue};
  color: ${colors.white};
  padding: 6px;
  border-radius: 2px;
  margin-left: 16px;
  font-size: 12px;
  text-transform: uppercase;
  font-weight: 700;
`;

const RecipesContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const MealPlan = ({ data }) => {
  //const family = get(data, 'family', {});
  //<div>
  //<div>Family</div>
  //<div>{family.displayName}</div>
  //</div>

  const recipes = get(data, 'recipes', []);
  const date = moment(data.insertedAt).format('MMMM Do, YYYY');
  const isActive = !data.archived;

  return (
    <MealPlanContainer active={isActive}>
      <PlanHeader>
        <Date active={isActive}>{date}</Date>
        {isActive && <ActiveTag>Active</ActiveTag>}
      </PlanHeader>

      <RecipesContainer active={isActive}>
        {recipes.map(recipe => {
          return <RecipeCard key={recipe.id} data={recipe} />;
        })}
      </RecipesContainer>
    </MealPlanContainer>
  );
};

const MealPlans = () => {
  const { data, networkStatus, error: queryError } = useQuery(
    GET_FAMILY_MEAL_PLANS_QUERY,
    {
      variables: { familyId }
    }
  );

  const mealPlans = get(data, 'mealPlansQuery.mealPlans', []);
  console.log('plans', mealPlans);

  return networkStatus !== 7 || queryError ? (
    <PageLoader />
  ) : (
    <Layout>
      <PageContainer>
        <TitleContainer>
          <Title>Meal Plans</Title>
          <Button onClick={() => console.log('click')}>Create New</Button>
        </TitleContainer>
        <PlansContainer>
          {mealPlans.map(plan => (
            <MealPlan data={plan} key={plan.id} />
          ))}
        </PlansContainer>
      </PageContainer>
    </Layout>
  );
};

export default MealPlans;
