import { Recipe } from 'src/app/recipes/recipe.model';
import { EventEmitter, Output } from '@angular/core';

export class RecipeService {

    recipeSelected = new EventEmitter<Recipe>();

    private recipes: Recipe[] = [
        new Recipe('A Test Recipe1', 'This is simply a test', 'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg'),
        new Recipe('A Test Recipe2', 'This is simply a test', 'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg')
      ];

    getRecipes() {
        return this.recipes.slice();
    }

}
