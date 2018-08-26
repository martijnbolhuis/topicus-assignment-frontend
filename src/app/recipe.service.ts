import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { IRecipe } from './data-model';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  constructor(private http: HttpClient) {}

  public saveRecipe(recipe: IRecipe): Observable<Object>{
    return this.http.post('/recipes', recipe);
  }
}
