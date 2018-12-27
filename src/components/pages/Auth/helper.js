export const getRecipeArgs = (familyId, userId) => {
  return {
    title: "Pizza Margherita",
    prep_time: "5 Mins",
    cook_time: "1 Hr",
    calories: "343",
    servings: 4,
    ingredients: [
      "1/2 recipe homemade pizza crust",
      "1 Tablespoon olive oil",
      "2 cloves roasted garlic finely chopped",
      "1/4 cup your favorite pizza or tomato sauce",
      "8 ounces mozzarella cheese sliced into 1/2 inch thick pieces",
      "2 plum tomatoes sliced (or any tomato you like)",
      "handful of fresh basil",
      "fresh ground pepper to taste"
    ],
    steps: [
      "Prepare the pizza dough through step 11 including preheating the oven to 475F as described in step 8",
      "Mix the olive oil and chopped garlic together in a small dish. After waiting 15 minutes as described in step 11 spread olive oil/garlic mixture on top of crust. Top with pizza sauce then the mozzarella cheese slices then the tomato slices",
      "Bake for 14-16 minutes or until the crust is lightly browned and the cheese is bubbling. For the last minute I move the oven rack to the top rack to really brown the edges. That's optional.",
      "Remove from the oven and top with fresh basil and pepper. Slice pizza and serve immediately. Store leftover pizza covered tightly in the refrigerator and reheat as you prefer. Baked pizza slices may be frozen up to 1 month.",
      "Please see homemade pizza crust recipe for how to make ahead and freeze the pizza dough",
      "Slice pizza and serve immediately. Store leftover pizza covered tightly in the refrigerator and reheat as you prefer. Baked pizza slices may be frozen up to 1 month.",
      "Please see homemade pizza crust recipe for how to make ahead and freeze the pizza dough",
      "Slice pizza and serve immediately. Store leftover pizza covered tightly in the refrigerator and reheat as you prefer. Baked pizza slices may be frozen up to 1 month.",
      "Please see homemade pizza crust recipe for how to make ahead and freeze the pizza dough"
    ],
    family_id: familyId,
    user_id: userId,
    category_id: 1,
    notes:
      "This is a default recipe that everyone gets. Give it a try or delete it if you would like!",
    image_url:
      "https://cdn.jamieoliver.com/home/wp-content/uploads/2016/06/2.jpg"
  };
};
