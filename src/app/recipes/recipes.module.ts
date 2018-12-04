import { NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { RecipeItemComponent } from './recipe-list/recipe-item/recipe-item.component';
import { RecipeEditComponent } from './recipe-edit/recipe-edit.component';
import { RecipesComponent } from './recipes.component';
import { RecipesStartComponent } from './recipes-start/recipes-start.component';
import { RecipeDetailComponent } from './recipe-detail/recipe-detail.component';
import { RecipeListComponent } from './recipe-list/recipe-list.component';
import { RecipesRoutingModule } from './recipes-routing.module';

import { SharedModule } from './../shared/shared.module';

@NgModule({
    declarations: [
                RecipesComponent,
                RecipeDetailComponent,
                RecipesStartComponent,
                RecipeListComponent,
                RecipeEditComponent,
                RecipeItemComponent,
            ],
    imports: [
                CommonModule,
                ReactiveFormsModule,
                RecipesRoutingModule,
                SharedModule
            ]
        })
export class RecipesModule {}