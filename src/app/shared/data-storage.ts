import { Recipe } from 'src/app/recipes/recipe.model';
import { RecipeService } from './../recipes/recipe.service';
import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
import 'rxjs/Rx';
import { Observable } from 'rxjs/Observable';

// "https://recipes-guy.firebaseio.com/"
@Injectable()
export class DataStorageService {
    constructor(private http: Http,
                private recipeService: RecipeService) {}

    storeRecipes() {
        return this.http.put('https://recipes-guy.firebaseio.com/recipes.json', 
        this.recipeService.getRecipes());
    }

    getRecipes() {
        return this.http.get('https://recipes-guy.firebaseio.com/recipes.json')
            .map(
                (response: Response) => {
                    const recipes: Recipe[] = response.json();
                    for (let recipe of recipes) {
                        if (!recipe['ingredients']) {
                            recipe['ingredients'] = [];
                        }
                    }
                    return recipes;
                }
            )
            .subscribe(
                (recipes: Recipe[]) => {
                    this.recipeService.setRecipes(recipes);
                }
            )

    }
}
