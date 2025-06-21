import {
  ChangeDetectionStrategy,
  Component,
  computed,
  inject,
  input,
} from '@angular/core';
import { Food } from '../../models/meals.model';
import { NgClass } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-meal-card',
  imports: [NgClass],
  templateUrl: './meal-card.component.html',
  styleUrl: './meal-card.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MealCardComponent {
  meal = input.required<Food>({});
  _router = inject(Router);
  stars = computed(() => {
    let arr = Array(5).fill(''),
      rate = this.meal().stars;
    arr = arr.map((e) => {
      if (rate > 1) {
        --rate;
        return 'full';
      } else if (rate < 1 && rate > 0) {
        --rate;
        return 'half';
      } else {
        return 'none';
      }
    });
    return arr;
  });

  onDisplayDetails(id: string) {
    this._router.navigate(['/user/meal', id]);
  }
}
