import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';
@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[] = [
    new Recipe('tester','this is a test','https://media.self.com/photos/5f189b76c58e27c99fbef9e3/16:9/w_1280,c_limit/blackberry-vanilla-french-toast.jpg'),
    new Recipe('tester','this is a test','https://static01.nyt.com/images/2021/02/17/dining/17tootired-sesame-noodles/merlin_126109679_c4abf7f2-e900-4552-a09a-a5421d4cbe8f-superJumbo.jpg?quality=90&auto=webp'),
    new Recipe('tester','this is a test','https://www.westcentralfoodservice.com/wp-content/uploads/2019/04/5-food-trends-2019-no-title.jpg')
  ];



  constructor() { }

  ngOnInit(): void {
  }

}
