import { parse } from "recipe-ingredient-parser";
import Fraction from "fraction.js";

/**
 * Maps an ingredient string to a parsed result
 * using `recipe-ingredient-parser` and calculates new
 * serving sizes based on a passed in servings factor.
 *
 * Ex:
 * 	> createParsedIngredients(["3 Tbsp Sugar"], 2)
 *
 *		{
 *			"3 Tbs Sugar": {
 *				quantity: 6,
 *				unit: "tablespoon",
 *				ingredient: "sugar"
 *			}
 *		}
 **/
export const createParsedIngredients = (ingredients, servingFactor = 1) => {
  return ingredients.reduce((acc, ing) => {
    const parsedIng = parse(ing.toLowerCase());
    const { quantity, unit, ingredient } = parsedIng;

    const formattedQuantity = calculateQuantity(quantity, servingFactor);

    acc[ing] = {
      quantity: formattedQuantity,
      unit,
      ingredient
    };

    return acc;
  }, {});
};

/**
 * Calculates the appropriate quantity size
 * based on the serving size
 */
const calculateQuantity = (quantity, serving) => {
  const newQuantity = quantity * serving;

  if (
    getQuantityType(quantity) === "fraction" ||
    getQuantityType(newQuantity) == "fraction"
  ) {
    const frac = createFraction(quantity);
    const value = frac.mul(serving);
    return convertImproperFraction(value);
  }

  return newQuantity;
};

/**
 *	Converts an improper fraction into a reduced
 *  and normalized fraction
 **/
const convertImproperFraction = fraction => {
  const numerator = fraction.n;
  const denominator = fraction.d;

  if (numerator % denominator === 0) {
    return numerator / denominator;
  }

  const mix = Math.floor(numerator / denominator);
  const newNumerator = numerator % denominator;
  return `${displayMix(mix)}${newNumerator}/${denominator}`;
};

const createFraction = val => new Fraction(val).simplify();

/**
 *	Helper for displaying mixed fractions
 **/
const displayMix = mix => {
  if (mix) return `${mix} `;
  return "";
};

const getQuantityType = quantity => {
  if (createFraction(quantity).d === 1) return "number";
  return "fraction";
};
