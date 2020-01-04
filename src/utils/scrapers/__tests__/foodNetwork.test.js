import recipeScraper from "../";

const RECIPE_URL =
  "https://www.foodnetwork.com/recipes/rachael-ray/super-nachos-recipe-1914057";

describe("foodNetwork.com", () => {
  it("scrapes the website and pulls the correct data without breaking", () => {
    recipeScraper(RECIPE_URL).then(recipe => {
      /* TITLE */
      const title = "Super Nachos";
      expect(recipe.title).toEqual(title);

      /* INGREDIENTS */
      const testIng = "4 vine ripe tomatoes, seeded and chopped";
      expect(recipe.rawIngredients.includes(testIng)).toEqual(true);

      /* STEPS */
      const firstStep =
        "Arrange a mixture of 2 varieties of corn chips on a very large platter or use your broiler pan as a platter.";
      expect(recipe.steps[0]).toEqual(firstStep);

      /* SERVINGS */
      const servings = 4;
      expect(recipe.servings).toEqual(servings);

      /* COOK TIME */
      const cookTime = "15 min";
      expect(recipe.cookTime).toEqual(cookTime);

      /* PREP TIME */
      const prepTime = "15 min";
      expect(recipe.prepTime).toEqual(prepTime);

      /* IMAGE */
      const imageUrl =
        "https://food.fnr.sndimg.com/content/dam/images/food/fullset/2011/4/7/0/TM1C48_super-nachos_s4x3.jpg.rend.hgtvcom.826.620.suffix/1382539863868.jpeg";
      expect(recipe.imageUrl).toEqual(imageUrl);

      /* NOTES */
      const notes = `Original source: ${RECIPE_URL}`;
      expect(recipe.notes).toEqual(notes);

      /* DIFFICULTY */
      const difficulty = 1;
      expect(recipe.difficulty).toEqual(difficulty);
    });
  });
});
