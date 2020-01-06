import recipeScraper from '../';

const RECIPE_URL =
  'https://www.allrecipes.com/recipe/11973/spaghetti-carbonara-ii/';

describe('allRecipes.com', () => {
  it('scrapes the website and pulls the correct data without breaking', () => {
    recipeScraper(RECIPE_URL).then(recipe => {
      /* TITLE */
      const title = 'Spaghetti Carbonara II';
      expect(recipe.title).toEqual(title);

      /* INGREDIENTS */
      const testIng = '1 pound spaghetti';
      expect(recipe.rawIngredients.includes(testIng)).toEqual(true);

      /* STEPS */
      const firstStep =
        'In a large pot of boiling salted water, cook spaghetti pasta until al dente. Drain well. Toss with 1 tablespoon of olive oil, and set aside.';
      expect(recipe.steps[0]).toEqual(firstStep);

      /* SERVINGS */
      const servings = 8;
      expect(recipe.servings).toEqual(servings);

      /* CALORIES */
      const calories = 444;
      expect(recipe.calories).toEqual(calories);

      /* COOK TIME */
      const cookTime = '15 min';
      expect(recipe.cookTime).toEqual(cookTime);

      /* PREP TIME */
      const prepTime = '15 min';
      expect(recipe.prepTime).toEqual(prepTime);

      /* IMAGE */
      const imageUrl =
        'https://images.media-allrecipes.com/userphotos/560x315/187850.jpg';
      expect(recipe.imageUrl).toEqual(imageUrl);

      /* NOTES */
      const notes = `Original source: ${RECIPE_URL}`;
      expect(recipe.notes).toEqual(notes);

      /* DIFFICULTY */
      //const difficulty = 1;
      //expect(recipe.difficulty).toEqual(difficulty);
    });
  });
});
