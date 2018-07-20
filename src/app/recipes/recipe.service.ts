import { Subject } from 'rxjs/Subject';
import { Injectable, Output, EventEmitter } from '@angular/core';
import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();
  recipesChanged = new Subject<Recipe[]>();

  private recipes: Recipe[] = [
    new Recipe(
      'Steak with vegetables', 
      'Recipe cooking beef meat restaurant dinner grill', 
      'https://cdn.pixabay.com/photo/2017/07/16/10/43/recipe-2508859_960_720.jpg',
       [
         new Ingredient('Steak', 1),
         new Ingredient('Tomatoes', 4)
       ]),
    new Recipe(
      'Special rice', 
      'Gastronomy food dishes eat recipe lunch', 
      'https://cdn.pixabay.com/photo/2017/09/17/23/21/gastronomy-2760200_960_720.jpg',
       [
          new Ingredient('Rice', 1),
          new Ingredient('Bean', 20)
       ])
  ];

  constructor(private shoppingListService: ShoppingListService) {}

  getRecipes() {
    return this.recipes.slice();
  }

  getRecipe(index: number) {
    return this.recipes[index];
  }

  setRecipes(recipes: Recipe[]) {
    this.recipes = recipes;
    this.recipesChanged.next(this.recipes.slice());
  }

  addIngredientsToShoppingList(ingredient: Ingredient[]) {
    this.shoppingListService.addIngredients(ingredient);
  }

  addRecipe(recipe: Recipe) {
    this.recipes.push(recipe);
    this.recipesChanged.next(this.recipes.slice());
  }

  updateRecipe(index: number, newRecipe: Recipe) {
    this.recipes[index] = newRecipe;
    this.recipesChanged.next(this.recipes.slice());
  }

  deleteRecipe(index: number) {
    this.recipes.splice(index, 1);
    this.recipesChanged.next(this.recipes.slice());
  }
}
