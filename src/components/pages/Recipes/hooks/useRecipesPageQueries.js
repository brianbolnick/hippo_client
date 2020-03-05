import { useState, useEffect, useCallback } from 'react';
import axios from 'axios';
import { API_URL, token, familyId } from 'utils';

const authToken = `Bearer ${token}`;

const useRecipesPageQueries = recipeType => {
  const [recipes, setRecipes] = useState([]);
  const [categories, setCategories] = useState([]);
  const [dishTypes, setDishTypes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const getCategories = () =>
    axios.get(`${API_URL}/categories`, {
      headers: { Authorization: authToken }
    });

  const getDishTypes = () =>
    axios.get(`${API_URL}/dish_types`, {
      headers: { Authorization: authToken }
    });

  const getRecipes = useCallback(
    () =>
      axios.get(`${API_URL}/family/${familyId}/${recipeType}`, {
        headers: { Authorization: authToken }
      }),
    [recipeType]
  );

  useEffect(() => {
    axios
      .all([getRecipes(), getCategories(), getDishTypes()])
      .then(
        axios.spread((recipeData, categoryData, dishTypeData) => {
          const recipes = recipeData.data.data;
          const categories = categoryData.data.data;
          const dishTypes = dishTypeData.data.data;

          setLoading(false);
          setCategories(categories);
          setDishTypes(dishTypes);
          setRecipes(recipes);
        })
      )
      .catch(err => {
        console.log(err);
        setLoading(false);
        setError('Something went wrong, please try again.');
      });
  }, [getRecipes, recipeType]);

  return {
    recipes,
    categories,
    dishTypes,
    loading,
    error
  };
};

export default useRecipesPageQueries;
