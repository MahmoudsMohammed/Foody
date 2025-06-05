import { Injectable } from '@angular/core';
import { sample_foods } from '../../../../../../../public/data';
import { filter, map, Observable, of } from 'rxjs';
import { Food } from '../models/meals.model';

@Injectable()
export class AllMealsService {
  #allMeals = sample_foods;

  getMeals(search: string): Observable<Food[]> {
    return of(this.#allMeals).pipe(
      map((data) =>
        data.filter((m) => m.name.toLowerCase().includes(search.toLowerCase()))
      )
    );
  }
}
