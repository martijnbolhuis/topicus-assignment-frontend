import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  constructor(private http: HttpClient) {}

  public saveRecipe(recipe: IRecipe): Observable<IRecipe> {
    return this.http.post('http://localhost:8080/recipes', recipe);
  }
}
