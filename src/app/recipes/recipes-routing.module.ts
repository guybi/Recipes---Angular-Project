import { AuthRecipesGuard } from './../auth/auth-recipes-guard.service';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuard } from './../auth-guard.service';
import { RecipeDetailComponent } from './recipe-detail/recipe-detail.component';
import { RecipeEditComponent } from './recipe-edit/recipe-edit.component';
import { RecipeListComponent } from './recipe-list/recipe-list.component';
import { RecipesStartComponent } from './recipes-start/recipes-start.component';
import { RecipesComponent } from './recipes.component';

const recipesRoutes: Routes = [
    { path: '', component: RecipesComponent, children: [
      { path: '', component: RecipesStartComponent },
      { path: 'new', component: RecipeEditComponent, canLoad: [AuthRecipesGuard] },
      { path: ':id', component: RecipeDetailComponent },
      { path: ':id/edit', component: RecipeEditComponent, canLoad: [AuthRecipesGuard] },
    ] },
  ];

@NgModule({
    imports: [
        RouterModule.forChild(recipesRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class RecipesRoutingModule {}