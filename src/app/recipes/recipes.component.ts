import { Component, OnInit } from '@angular/core';
import {RecipesListComponent} from '../recipes/recipes-list/recipes-list.component'
import {RecipeDetailComponent} from '../recipes/recipe-detail/recipe-detail.component'
import {Recipe} from './recipe'


@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
})
export class RecipesComponent implements OnInit {
  selectedRecipe:Recipe;

  constructor() {
  }

  ngOnInit() {
  }

}
