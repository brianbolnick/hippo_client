//import cheerio from 'cheerio';

//import RecipeSchema from "./recipe-schema";
//const puppeteerFetch = require("../helpers/puppeteerFetch");

//const copykat = url => {
//return new Promise(async (resolve, reject) => {
//if (!url.includes("copykat.com/")) {
//reject(new Error("url provided must include 'copykat.com/'"));
//} else {
//try {
//let html = await puppeteerFetch(url);
//var Recipe = new RecipeSchema();
//const $ = cheerio.load(html);

//Recipe.name = $(
//$(".wprm-recipe-container").find(".wprm-recipe-name")
//).text();

//$(".wprm-recipe-ingredient").each((i, el) => {
//Recipe.ingredients.push(
//$(el)
//.text()
//.replace(/\s\s+/g, " ")
//.trim()
//);
//});

//$(".wprm-recipe-instructions").each((i, el) => {
//Recipe.instructions.push(
//$(el)
//.text()
//.replace(/\s\s+/g, " ")
//.trim()
//);
//});

//Recipe.time.prep = $(
//$(".wprm-recipe-prep-time-container").children(".wprm-recipe-time")
//).text();
//Recipe.time.cook = $(
//$(".wprm-recipe-cook-time-container").children(".wprm-recipe-time")
//).text();
//Recipe.time.total = $(
//$(".wprm-recipe-total-time-container").children(".wprm-recipe-time")
//).text();

//Recipe.servings = $(".wprm-recipe-servings").text();

//if (
//!Recipe.name ||
//!Recipe.ingredients.length ||
//!Recipe.instructions.length
//) {
//reject(new Error("No recipe found on page"));
//} else {
//resolve(Recipe);
//}
//} catch (error) {
//reject(new Error("No recipe found on page"));
//}
//}
//});
//};

//export default copykat;
