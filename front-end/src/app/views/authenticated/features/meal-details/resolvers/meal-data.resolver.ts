import { inject } from '@angular/core';
import { ResolveFn } from '@angular/router';
import { MealDetailsService } from '../service/meal-details.service';
import { Food } from '../../../../../shared/models/meal';

export const mealDataResolver: ResolveFn<Food[]> = (route, state) => {
  const _mealDetails = inject(MealDetailsService);
  return _mealDetails.getById(route.paramMap.get('id') || '');
};
