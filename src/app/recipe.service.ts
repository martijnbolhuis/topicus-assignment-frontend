import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import { IRecipe, IMedicine } from './data-model';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  constructor(private http: HttpClient) {}

  public saveRecipe(recipe: IRecipe): Observable<Object>{
    return this.http.post('/recipes', recipe);
  }

  public getMedicines(): Observable<Object>{
    return this.http.get<IMedicine[]>('/medicines');
  }
}
