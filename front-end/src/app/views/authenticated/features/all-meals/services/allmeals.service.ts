import { inject, Injectable } from '@angular/core';
import { filter, map, Observable, of } from 'rxjs';
import { searchFields, Tag } from '../models/meals.model';
import { Food } from '../../../../../shared/models/meal';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class AllMealsService {
  _http = inject(HttpClient);

  getMeals(searchFields: searchFields): Observable<Food[]> {
    return of(this.#allMeals).pipe(map((data) => {}));
  }

  getTags(): Observable<Tag[]> {
    return of(sample_tags);
  }
}
