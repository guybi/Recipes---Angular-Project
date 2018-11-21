import { Ingredient } from './../shared/ingredient.model';
import { Recipe } from 'src/app/recipes/recipe.model';
import { EventEmitter, Output, Injectable } from '@angular/core';
import { ShoppingListService } from 'src/app/shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {

    recipeSelected = new EventEmitter<Recipe>();

    private recipes: Recipe[] = [
        new Recipe('A Test Recipe1',
                    'This is simply a test',
                    'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg',
                [
                   new Ingredient('Meat', 1),
                   new Ingredient('French Fries', 1),
                ]),
        new Recipe('A Test Recipe2',
                    'This is simply a test',
                    'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg',
                    [
                        new Ingredient('Buns', 2),
                        new Ingredient('Meat', 1),
                     ]),
      ];

    constructor(private shoppingListService: ShoppingListService) {}


    getRecipes() {
        return this.recipes.slice();
    }

    getRecipe(index: number) {
        return this.recipes[index];
    }
    addIngredientToShoppingList(ingredient: Ingredient[]) {
        this.shoppingListService.addAllIngredients(ingredient);
    }

}
