import { Component, OnInit } from '@angular/core';
import { RecipesService } from 'src/app/Services/recipes.service';


@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.scss']
})
export class RecipesComponent implements OnInit {

  meals: any = [];

  constructor(private _RecipesService: RecipesService) { }
  ngOnInit(): void {
    this.getAllRecipes();
  }

  getAllRecipes() {
    this._RecipesService.getRecipes().subscribe({
      next: (res) => {
        console.log(res);
        this.meals = res.meals.slice(0, 3);
      },
      error: (err) => {
        console.log(err);
      },
      complete: () => {
        console.log('Completed Request - Successfully !');
      }
    })
  }
}
