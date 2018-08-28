import { Injectable } from '@angular/core';
import {HttpClient, HttpResponse} from '@angular/common/http';
import {Observable} from 'rxjs';
import { IRecipe, IMedicine } from './data-model';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  constructor(private http: HttpClient) {}

  public saveRecipe(recipe: IRecipe): Observable<HttpResponse<Object>>{
    return this.http.post('/recipes', recipe, {observe: 'response'});
  }

  public getMedicines(): Observable<Object>{
    return this.http.get<IMedicine[]>('/medicines');
  }
}
