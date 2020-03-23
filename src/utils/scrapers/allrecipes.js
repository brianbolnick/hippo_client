import cheerio from 'cheerio';
import RecipeSchema from './recipe-schema';
import { serverScraper } from './';

const allRecipes = url => {
  const Recipe = new RecipeSchema();
  return new Promise((resolve, reject) => {
    if (!url.includes('allrecipes.com/recipe')) {
      reject(new Error("url provided must include 'allrecipes.com/recipe'"));
    } else {
      serverScraper(url)
        .then(res => {
          const html = res.data;
          const $ = cheerio.load(html);

          if ((Recipe.title = $('.intro').text())) {
            newAllRecipes($, Recipe);
          } else if ((Recipe.title = $('#recipe-main-content').text())) {
            oldAllRecipes($, Recipe);
          } else {
            reject(new Error('No recipe found on page'));
          }
          Recipe.notes = `Original source: ${url}`;
          resolve(Recipe);
        })
        .catch(err => {
          console.log(err);
          reject(new Error(err));
        });
    }
  });
};

const newAllRecipes = ($, Recipe) => {
  Recipe.title = Recipe.title.replace(/\s\s+/g, '');

  $('.recipe-meta-item').each((i, el) => {
    const title = $(el)
      .children('.recipe-meta-item-header')
      .text()
      .replace(/\s*:|\s+(?=\s*)/g, '');

    const value = $(el)
      .children('.recipe-meta-item-body')
      .text()
      .replace(/\s\s+/g, '');

    switch (title) {
      case 'prep':
        Recipe.prepTime = value;
        break;
      case 'cook':
        Recipe.cookTime = value;
        break;
      default:
        return false;
    }
  });

  $('.ingredients-item').each((i, el) => {
    const ingredient = $(el)
      .text()
      .replace(/\s\s+/g, ' ')
      .trim();
    Recipe.rawIngredients.push(ingredient);
  });

  $($('.instructions-section-item').find('p')).each((i, el) => {
    const instruction = $(el).text();
    Recipe.steps.push(instruction);
  });

  Recipe.imageUrl = $(
    '.mdex-test.template-recipe .recipe-content .primary-media-section.primary-media-with-filmstrip .component.lazy-image'
  ).first()[0].attribs['data-src'];
};

const oldAllRecipes = ($, Recipe) => {
  $('#polaris-app label').each((i, el) => {
    const item = $(el)
      .text()
      .replace(/\s\s+/g, '');
    if (item !== 'Add all ingredients to list' && item !== '') {
      Recipe.rawIngredients.push(item);
    }
  });

  $('.step').each((i, el) => {
    const step = $(el)
      .text()
      .replace(/\s\s+/g, '');
    if (step !== '') {
      Recipe.steps.push(step);
    }
  });

  Recipe.prepTime = $('time[itemprop=prepTime]').text();
  Recipe.cookTime = $('time[itemprop=cookTime]').text();
  Recipe.imageUrl = $('img.rec-photo').first()[0].attribs.src;
  Recipe.calories = $('span.calorie-count')
    .text()
    .match(/\d+/)[0];

  Recipe.servings = $('meta#metaRecipeServings').attr('content');
  //$($('.nutrition-summary-facts').find('span')).each((n, el) => {
  //const item = $(el).text();
  //if (item.toLowerCase().includes('calories')) {
  //Recipe.calories = item.match(/\d+/)[0];
  //}
  //});
};

export default allRecipes;
