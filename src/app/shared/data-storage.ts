import { AuthFireBaseService } from './../auth/auth.service';
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
                private recipeService: RecipeService,
                private authFireBaseService: AuthFireBaseService) {}

    storeRecipes() {
        const token = this.authFireBaseService.getIdToken();
        return this.http.put('https://recipes-guy.firebaseio.com/recipes.json?auth=' + token, 
            this.recipeService.getRecipes());
    }

    getRecipes() {
        const token = this.authFireBaseService.getIdToken();
        console.log(token);
        return this.http.get('https://recipes-guy.firebaseio.com/recipes.json?auth=' + token)
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
