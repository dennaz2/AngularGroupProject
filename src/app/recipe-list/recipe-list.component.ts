import { Component, OnInit, Input, EventEmitter } from "@angular/core";
import { FoodService } from "../services/food.service";
import { SearchCriteriaComponent } from "../search-criteria/search-criteria.component";
@Component({
  selector: "app-recipe-list",
  templateUrl: "./recipe-list.component.html",
  styleUrls: ["./recipe-list.component.css"]
})
export class RecipeListComponent implements OnInit {
  recipes = SearchCriteriaComponent.recipes;
  ingredients: string[] = this.recipes.ingredientLines;
  criteria: string = "";
  favorite: boolean = false;
  favorites: any[] = [];
  static favorites: any[];
  hidden: boolean = true;
  index: number;

  // filterText: string = "";

  constructor(private foodService: FoodService) {}

  addFavorite(recipe) {
    recipe.favorite = true;
    this.favorites.push(recipe);
    console.log(this.favorites);
    this.foodService.setFavorite(this.favorites);
  }

  setIndex(indexNumber: number) {
    this.index = indexNumber;
  }

  hideRecipe(indexNumber: number) {
    this.index = null;
  }

  // filter() {
  //   if (!this.filterText) {
  //     return this.recipes;
  //   }

  //   let match = this.filterText.toLowerCase();
  //   return this.recipes.filter(item => item.includes(match));
  // }

  ngOnInit() {
    // console.log(this.recipes);
    console.log(this.favorites);
    this.foodService.getRecipe(this.criteria);
  }
}
