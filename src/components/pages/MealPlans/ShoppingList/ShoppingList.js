import React from 'react';
import { useParams } from 'react-router-dom';
import Layout from 'components/common/Layout/Layout';
import { useMealPlanQuery } from '../hooks';

const ShoppingList = () => {
  const { id } = useParams();
  const { data, loading } = useMealPlanQuery({ id: JSON.parse(id) });

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
          <div>
            <div>{item}</div>
            <ul>
              {mealsMapping[item].map(ing => (
                <li key={`${item}-${ing}`}>{ing}</li>
              ))}
            </ul>
          </div>
        );
      })
    );
  };

  if (loading) return <div>loading</div>;
  return (
    <Layout>
      <div>COMING SOON!</div>
      <ul>{renderIngredients()}</ul>
    </Layout>
  );
};

export default ShoppingList;
