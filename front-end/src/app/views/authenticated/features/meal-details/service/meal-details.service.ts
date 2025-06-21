import { Injectable } from '@angular/core';
import { sample_foods } from '../../../../../../../public/data';
import { Observable, of, filter, map } from 'rxjs';
import { Food } from '../../../../../shared/models/meal';

@Injectable({ providedIn: 'root' })
export class MealDetailsService {
  #data = sample_foods;
  constructor() {}
  getById(id: string): Observable<Food[]> {
    return of(this.#data).pipe(map((data) => data.filter((m) => m.id === id)));
  }
}
