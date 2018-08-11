import { NgModule } from '@angular/core';

import { HeaderComponent } from '././header/header.component';
import { HomeComponent } from '././home/home.component';
import { SharedModule } from './../shared/shared.module';
import { AppRoute } from './../app-routes';

import { AuthService } from '../auth/auth.service';
import { RecipeService } from '../recipes/recipe.service';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { DataStorageService } from '../shared/data-storage.service';

@NgModule({
  declarations: [
    HomeComponent,
    HeaderComponent
  ],
  imports: [
    SharedModule,
    AppRoute
  ],
  exports: [
    AppRoute,
    HeaderComponent
  ],
  providers: [
    RecipeService, 
    ShoppingListService, 
    DataStorageService, 
    AuthService
  ],
})
export class CoreModule {}