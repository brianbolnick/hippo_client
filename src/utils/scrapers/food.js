import cheerio from 'cheerio';
import RecipeSchema from './recipe-schema';
import { serverScraper } from './';

const food = url => {
  const Recipe = new RecipeSchema();
  return new Promise((resolve, reject) => {
    if (!url.includes('food.com/recipe/')) {
      reject(new Error("url provided must include 'food.com/recipe/'"));
    } else {
      serverScraper(url)
        .then(res => {
          const $ = cheerio.load(res.data);

          Recipe.title = $('.recipe-title').text();

          $('.recipe-ingredients__item').each((i, el) => {
            const item = $(el)
              .text()
              .replace(/\s\s+/g, ' ')
              .replace('⁄', '/')
              .trim();
            Recipe.rawIngredients.push(item);
          });

          $('.recipe-directions__step').each((i, el) => {
            const step = $(el)
              .text()
              .replace(/\s\s+/g, '');
            Recipe.steps.push(step);
          });

          Recipe.notes = `Original source: ${url}`;
          Recipe.imageUrl = $('link[rel="image_src"]').attr('href');
          Recipe.servings = $('.recipe-facts__servings')
            .first()
            .text()
            .match(/\d+/)[0];

          const timeStr = $('.recipe-facts__time')
            .first()
            .text()
            .match(/\d+.+/)[0];
          const number = timeStr.match(/\d+/)[0];
          const unit = timeStr.split(number)[1];
          Recipe.cookTime = `${number} ${unit}`;
          Recipe.prepTime = '0';

          Recipe.calories = $('p.recipe-nutrition__item.bold')
            .text()
            .match(/\d+/)[0];

          debugger;

          if (
            !Recipe.title ||
            !Recipe.rawIngredients.length ||
            !Recipe.steps.length
          ) {
            reject(new Error('No recipe found on page'));
          } else {
            resolve(Recipe);
          }
        })
        .catch(err => {
          console.log(err);
          reject(new Error(err));
        });
    }
  });
};

export default food;
