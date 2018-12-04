import { RecipesRoutingModule } from './recipes/recipes-routing.module';
import { DropdownDirectiveDirective } from './directives/dropdown-directive.directive';
import { RecipesModule } from './recipes/recipes.module';
import { AuthFakeService } from 'src/app/auth.service';
import { AuthFireBaseService } from 'src/app/auth/auth.service';
import { AuthGuard } from './auth-guard.service';
import { RecipeService } from './recipes/recipe.service';
import { AppRoutingModule } from './app-routing.module';
import { ShoppingListService } from './shopping-list/shopping-list.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ShoppingEditComponent } from './shopping-list/shopping-edit/shopping-edit.component';
import { RainbowDirectiveDirective } from './directives/rainbow-directive.directive';
import { OnHoverItemDirective } from './directives/on-hover-item.directive';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AnderstandingObservablesComponent } from './anderstanding-observables/anderstanding-observables.component';
import { DataStorageService } from 'src/app/shared/data-storage';
import { SigninComponent } from './auth/signin/signin.component';
import { SignupComponent } from './auth/signup/signup.component';
import { AuthRecipesGuard } from 'src/app/auth/auth-recipes-guard.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ShoppingListComponent,
    ShoppingEditComponent,
    RainbowDirectiveDirective,
    OnHoverItemDirective,
    PageNotFoundComponent,
    AnderstandingObservablesComponent,
    SigninComponent,
    SignupComponent,
    DropdownDirectiveDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RecipesModule,
    AppRoutingModule,
  ],
  providers: [
              ShoppingListService,
              RecipeService,
              DataStorageService,
              AuthFakeService,
              AuthGuard,
              AuthFireBaseService,
              AuthRecipesGuard
            ],
  bootstrap: [AppComponent]
})
export class AppModule { }
