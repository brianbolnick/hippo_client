import request from "request";
import cheerio from "cheerio";
import RecipeSchema from "./recipe-schema";

const food = url => {
  const Recipe = new RecipeSchema();
  return new Promise((resolve, reject) => {
    if (!url.includes("food.com/recipe/")) {
      reject(new Error("url provided must include 'food.com/recipe/'"));
    } else {
      request(url, (error, response, html) => {
        if (!error && response.statusCode == 200) {
          const $ = cheerio.load(html);

          Recipe.name = $(".recipe-title").text();

          $(".recipe-ingredients__item").each((i, el) => {
            const item = $(el)
              .text()
              .replace(/\s\s+/g, " ")
              .trim();
            Recipe.ingredients.push(item);
          });

          $(".recipe-directions__step").each((i, el) => {
            const step = $(el)
              .text()
              .replace(/\s\s+/g, "");
            Recipe.instructions.push(step);
          });

          Recipe.time.total = $(".recipe-facts__time")
            .children()
            .last()
            .text();

          if (
            !Recipe.name ||
            !Recipe.ingredients.length ||
            !Recipe.instructions.length
          ) {
            reject(new Error("No recipe found on page"));
          } else {
            resolve(Recipe);
          }
        } else {
          reject(new Error("No recipe found on page"));
        }
      });
    }
  });
};

export default food;
