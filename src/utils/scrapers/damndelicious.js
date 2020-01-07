import cheerio from 'cheerio';
import { serverScraper } from './';
import RecipeSchema from './recipe-schema';

const damnDelicious = url => {
  return new Promise(async (resolve, reject) => {
    if (!url.includes('damndelicious.net')) {
      reject(new Error("url provided must include 'damndelicious.net'"));
    } else {
      serverScraper(url)
        .then(res => {
          const html = res.data;
          const $ = cheerio.load(html);

          const Recipe = new RecipeSchema();

          let titleDiv = $('.recipe-title');

          Recipe.title = $('h1.post-title').text();

          $(titleDiv)
            .find('p')
            .each((i, el) => {
              let title = $(el)
                .children('strong')
                .text();
              let data = $(el)
                .children('span')
                .text();

              switch (title) {
                case 'Yield:':
                  Recipe.servings = data;
                  break;
                case 'prep time:':
                  Recipe.prepTime = data;
                  break;
                case 'cook time:':
                  Recipe.cookTime = data;
                  break;
                default:
                  break;
              }
            });

          $('li[itemprop=ingredients]').each((i, el) => {
            Recipe.rawIngredients.push($(el).text());
          });

          $('.instructions')
            .find('li')
            .each((i, el) => {
              Recipe.steps.push($(el).text());
            });

          Recipe.imageUrl = $(
            'img.photo.nopin.pib-hover-img'
          ).first()[0].attribs.src;

          if (
            !Recipe.title ||
            !Recipe.rawIngredients.length ||
            !Recipe.steps.length
          ) {
            reject(new Error('No recipe found on page'));
          } else {
            resolve(Recipe);
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

export default damnDelicious;
