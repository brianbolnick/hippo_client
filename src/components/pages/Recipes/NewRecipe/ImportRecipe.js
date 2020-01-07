import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { token, familyId, API_URL } from 'utils';
import queryString from 'query-string';
import RecipeView from './EditRecipeView';
import { recipeScraper } from 'utils';

const ImportRecipe = ({ location }) => {
  const [categories, setCategories] = useState([]);
  const [dishTypes, setDishTypes] = useState([]);
  const [family, setFamily] = useState({});
  const [recipe, setRecipe] = useState({});
  const [loadingData, setLoadingData] = useState(true);

  const getCategories = () => {
    return axios.get(`${API_URL}/categories`, {
      headers: { Authorization: `Bearer ${token}` }
    });
  };

  const getDishTypes = () => {
    return axios.get(`${API_URL}/dish_types`, {
      headers: { Authorization: `Bearer ${token}` }
    });
  };

  const getFamily = () => {
    return axios.get(`${API_URL}/family/${familyId}`, {
      headers: { Authorization: `Bearer ${token}` }
    });
  };

  const buildUrl = url => {
    if (!url.includes('?')) return url;
    return url.split('?')[0];
  };

  useEffect(() => {
    const getRecipe = async () => {
      const values = queryString.parse(location.search);
      const url = buildUrl(values.srcUrl);

      const data = await recipeScraper(url);
      setRecipe(data);
    };

    axios
      .all([getCategories(), getDishTypes(), getFamily()])
      .then(
        axios.spread((categoryData, dishTypeData, familyData) => {
          getRecipe();
          const categories = categoryData.data.data;
          const dishTypes = dishTypeData.data.data;
          const fam = familyData.data.data;
          setCategories(categories);
          setDishTypes(dishTypes);
          setFamily(fam);
          setLoadingData(false);
        })
      )
      .catch(err => {
        console.log(err);
        //TODO
      });
  }, [location.search]);

  if (!Object.keys(recipe).length || loadingData) return <div>loading</div>;

  return (
    <RecipeView
      recipe={recipe}
      categories={categories}
      dishTypes={dishTypes}
      family={family}
      isImportedRecipe
    />
  );
};

export default ImportRecipe;
