import { HomeComponent } from './home/home.component';
import { AuthRoutingModule } from './auth/auth-routing.module';
import { AuthModule } from './auth/auth.module';
import { ShoppingListModule } from './shopping-list/shopping-list.module';
import { RecipesRoutingModule } from './recipes/recipes-routing.module';
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
import { AuthRecipesGuard } from 'src/app/auth/auth-recipes-guard.service';

import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RainbowDirectiveDirective,
    PageNotFoundComponent,
    AnderstandingObservablesComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    AppRoutingModule,
    SharedModule,
    ShoppingListModule,
    AuthModule,
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
