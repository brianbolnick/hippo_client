import React from 'react';
import styled from 'styled-components/macro';
import moment from 'moment';
import { useParams } from 'react-router-dom';
import { media, colors } from 'styles/css-variables';
import Layout from 'components/common/Layout/Layout';
import Checkbox from 'components/common/Checkbox';
import { useMealPlanQuery } from '../hooks';

const Title = styled.div`
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 8px;
`;
const SubTitle = styled.div`
  color: ${colors.darkGray};
  margin-bottom: 32px;
  font-size: 1.2em;
`;

const MealName = styled.div`
  font-weight: 700;
  margin-bottom: 12px;
  font-size: 1.1em;
`;

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  justify-content: flex-start;
`;
const MealWrapper = styled.div`
  width: 33%;
  margin-bottom: 24px;

  ${media.tablet`
		width: 100%;
	`}
`;
const IngredientsContainer = styled.div`
  display: flex;
  flex-flow: column;
`;
const Ingredient = styled.div`
  display: flex;
`;
const IngredientName = styled.div``;

const ShoppingList = () => {
  const { id } = useParams();
  const { data, loading } = useMealPlanQuery({ id: JSON.parse(id) });

  const date = moment(data.insertedAt).format('MMMM Do, YYYY');

  const mealsMapping =
    data.recipes &&
    data.recipes.reduce((acc, rec) => {
      acc[rec.title] = rec.rawIngredients;
      return acc;
    }, {});

  const renderIngredients = () => {
    return (
      mealsMapping &&
      Object.keys(mealsMapping).map(item => {
        return (
          <MealWrapper>
            <MealName>{item}</MealName>
            <IngredientsContainer>
              {mealsMapping[item].map(ing => (
                <Ingredient>
                  <Checkbox onChange={() => console.log('check')} />
                  <IngredientName key={`${item}-${ing}`}>{ing}</IngredientName>
                </Ingredient>
              ))}
            </IngredientsContainer>
          </MealWrapper>
        );
      })
    );
  };

  if (loading) return <div>loading</div>;
  return (
    <Layout>
      <Title>Shopping List</Title>
      <SubTitle>Meal plan - {date}</SubTitle>
      <Container>{renderIngredients()}</Container>
    </Layout>
  );
};

export default ShoppingList;
