import { Injectable } from '@angular/core';
import { sample_foods, sample_tags } from '../../../../../../../public/data';
import { filter, map, Observable, of } from 'rxjs';
import { Food, searchFields, Tag } from '../models/meals.model';

@Injectable()
export class AllMealsService {
  #allMeals = sample_foods;

  getMeals(searchFields: searchFields): Observable<Food[]> {
    return of(this.#allMeals).pipe(
      map((data) => {
        if (searchFields.search && searchFields.tag) {
          return data.filter(
            (m) =>
              m.name
                .toLowerCase()
                .includes(searchFields.search.toLowerCase()) &&
              m.tags.includes(searchFields.tag)
          );
        } else {
          return data.filter((m) =>
            m.name.toLowerCase().includes(searchFields.search.toLowerCase())
          );
        }
      })
    );
  }

  getTags(): Observable<Tag[]> {
    return of(sample_tags);
  }
}
