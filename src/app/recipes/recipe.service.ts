import { Recipe } from './recipe.model';
import { Ingredient } from './../shared/ingredient.model';
import { Output, Injectable } from '@angular/core';
import { ShoppingListService } from 'src/app/shopping-list/shopping-list.service';
import { Subject} from 'rxjs/Subject';

@Injectable()
export class RecipeService {

    recipesChanged = new Subject<Recipe[]>();

    private recipes: Recipe[] = [
        new Recipe('Steak',
                    'Whether your preference is a butter-soft fillet steak, flavour-packed sirloin or thriftier cut like bavette, rump or onglet, quick-cooking and constant attention should be paid when cooking your beef. With only a few minutes leeway between rare and well-done, timing is key. Weve put together some tips to help you from start to finish.',
                    'http://www.sabergrills.com/better-barbecue-blog/wp-content/uploads/2017/04/grilled-tomahawk-steak.jpg',
                [
                   new Ingredient('Meat', 1),
                   new Ingredient('French Fries', 1),
                ])

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

    deleteRecipe(index: number) {
        this.recipes.splice(index, 1);
        this.recipesChanged.next(this.recipes.slice());
    }

    setRecipes(recipes: Recipe[]) {
        this.recipes = recipes;
        this.recipesChanged.next(this.recipes.slice());
    }
}
