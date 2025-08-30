import { Injectable } from '@angular/core';
import { filter, map, Observable, of } from 'rxjs';
import { searchFields, Tag } from '../models/meals.model';
import { Food } from '../../../../../shared/models/meal';

@Injectable()
export class AllMealsService {
  #allMeals = sample_foods;

  getMeals(searchFields: searchFields): Observable<Food[]> {
    return of(this.#allMeals).pipe(
      map((data) => {
      
      })
    );
  }

  getTags(): Observable<Tag[]> {
    return of(sample_tags);
  }
}
