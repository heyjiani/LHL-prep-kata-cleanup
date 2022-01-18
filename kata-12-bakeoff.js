const ingredientCheck = (bakery, ingredientList) => {
  for (const item of bakery) {
    if (ingredientList.includes(item)) return true;
  }
  return false;
};

const chooseRecipe = (bakeryA, bakeryB, recipes) => {
  for (const recipe of recipes) {
    if (ingredientCheck(bakeryA, recipe.ingredients) && ingredientCheck(bakeryB, recipe.ingredients)) {
      return recipe.name;
    }
  }
};
