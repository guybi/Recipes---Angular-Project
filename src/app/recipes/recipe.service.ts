import { Recipe } from './recipe.model';
import { Ingredient } from './../shared/ingredient.model';
import { Output, Injectable } from '@angular/core';
import { ShoppingListService } from 'src/app/shopping-list/shopping-list.service';
import { Subject} from 'rxjs/Subject';

@Injectable()
export class RecipeService {

    recipesChanged = new Subject<Recipe[]>();

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

    addRecipe(recipe: Recipe) {
        this.recipes.push(recipe);
        this.recipesChanged.next(this.recipes.slice());
    }

    updateRecipe(index: number,recipe: Recipe) {
        this.recipes[index] = recipe;
        this.recipesChanged.next(this.recipes.slice());
    }
}
