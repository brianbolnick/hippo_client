import request from 'request';
import cheerio from 'cheerio';
import RecipeSchema from './recipe-schema';
import { DIFFICULTIES_MAP } from './utils';

const foodNetwork = url => {
  const Recipe = new RecipeSchema();
  return new Promise((resolve, reject) => {
    if (!url.includes('foodnetwork.com/recipes/')) {
      reject(new Error("url provided must include 'foodnetwork.com/recipes/'"));
    } else {
      request(url, (error, response, html) => {
        if (!error && response.statusCode === 200) {
          const $ = cheerio.load(html);

          Recipe.title = $('.o-AssetTitle__a-HeadlineText')
            .first()
            .text();

          Recipe.imageUrl =
            'https:' +
            $('img.m-MediaBlock__a-Image.a-Image').first()[0].attribs.src;

          $('.o-Ingredients__a-Ingredient, .o-Ingredients__a-SubHeadline').each(
            (i, el) => {
              const item = $(el)
                .text()
                .replace(/\s\s+/g, '');
              Recipe.rawIngredients.push(item);
            }
          );

          $('.o-Method__m-Step').each((i, el) => {
            const step = $(el)
              .text()
              .replace(/\s\s+/g, '');
            if (step !== '') {
              Recipe.steps.push(step);
            }
          });

          $('.o-RecipeInfo li').each((i, el) => {
            let timeItem = $(el)
              .text()
              .replace(/\s\s+/g, '')
              .split(':');
            switch (timeItem[0]) {
              case 'Prep':
                Recipe.prepTime = timeItem[1];
                break;
              case 'Cook':
                Recipe.cookTime = timeItem[1];
                break;
              case 'Level':
                Recipe.difficulty =
                  DIFFICULTIES_MAP[timeItem[1].toLowerCase()] || 1;
                break;
              case 'Yield':
                Recipe.servings = parseInt(timeItem[1].match(/\d+/)[0]);
                break;
              default:
                break;
            }
          });

          Recipe.notes = `Original source: ${url}`;

          if (
            !Recipe.title ||
            !Recipe.rawIngredients.length ||
            !Recipe.steps.length
          ) {
            reject(new Error('No recipe found on page'));
          } else {
            resolve(Recipe);
          }
        } else {
          reject(new Error('No recipe found on page'));
        }
      });
    }
  });
};

export default foodNetwork;
