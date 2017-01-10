import { Component } from '@angular/core';
import { HeaderComponent } from'./header.component'
import { RecipesComponent } from './recipes/recipes.component'
import { RecipesListComponent } from './recipes/recipes-list/recipes-list.component'
import { RecipesItemComponent } from './recipes/recipes-list/recipes-item.component'
import { RecipeDetailComponent}  from './recipes/recipe-detail/recipe-detail.component'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'app works!';
}
