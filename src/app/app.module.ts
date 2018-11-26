import { AuthFakeService } from 'src/app/auth.service';
import { AuthFireBaseService } from 'src/app/auth/auth.service';
import { AuthGuard } from './auth-guard.service';
import { RecipeService } from './recipes/recipe.service';
import { AppRoutingModule } from './app-routing.module';
import { ShoppingListService } from './shopping-list/shopping-list.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { RecipesComponent } from './recipes/recipes.component';
import { RecipeListComponent } from './recipes/recipe-list/recipe-list.component';
import { RecipeDetailComponent } from './recipes/recipe-detail/recipe-detail.component';
import { RecipeItemComponent } from './recipes/recipe-list/recipe-item/recipe-item.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ShoppingEditComponent } from './shopping-list/shopping-edit/shopping-edit.component';
import { RainbowDirectiveDirective } from './directives/rainbow-directive.directive';
import { OnHoverItemDirective } from './directives/on-hover-item.directive';
import { DropdownDirectiveDirective } from './directives/dropdown-directive.directive';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { RecipesStartComponent } from './recipes/recipes-start/recipes-start.component';
import { RecipeEditComponent } from './recipes/recipe-edit/recipe-edit.component';
import { AnderstandingObservablesComponent } from './anderstanding-observables/anderstanding-observables.component';
import { DataStorageService } from 'src/app/shared/data-storage';
import { SigninComponent } from './auth/signin/signin.component';
import { SignupComponent } from './auth/signup/signup.component';
import { AuthRecipesGuard } from 'src/app/auth/auth-recipes-guard.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RecipesComponent,
    RecipeListComponent,
    RecipeDetailComponent,
    RecipeItemComponent,
    ShoppingListComponent,
    ShoppingEditComponent,
    RainbowDirectiveDirective,
    OnHoverItemDirective,
    DropdownDirectiveDirective,
    PageNotFoundComponent,
    RecipesStartComponent,
    RecipeEditComponent,
    AnderstandingObservablesComponent,
    SigninComponent,
    SignupComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    AppRoutingModule,

  ],
  providers: [ShoppingListService, 
              RecipeService, 
              DataStorageService, 
              AuthFakeService, 
              AuthGuard, 
              AuthFireBaseService,
              AuthRecipesGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
