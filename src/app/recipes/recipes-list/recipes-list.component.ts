import { Component, OnInit, Output, EventEmitter } from '@angular/core'
import { Recipe } from '../recipe'
import { RecipesItemComponent} from './recipes-item.component'
@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',

})
export class RecipesListComponent implements OnInit {
  @Output() recipeSelected:EventEmitter<Recipe> = new EventEmitter();

  recipes:Recipe[] = [];
  recipe = new Recipe('Dummy', 'Dummy', 'http://thumbs3.ebaystatic.com/d/l225/pict/111967727089_1.jpg');

  constructor() {
  }

  onSelected(recipe:Recipe) {
    this.recipeSelected.emit(recipe);

  }

  ngOnInit() {
  }


}
