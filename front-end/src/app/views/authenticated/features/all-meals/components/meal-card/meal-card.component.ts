import {
  ChangeDetectionStrategy,
  Component,
  inject,
  input,
} from '@angular/core';
import { NgClass } from '@angular/common';
import { Router } from '@angular/router';
import { Food } from '../../../../../../shared/models/meal';
import { RatingComponent } from '../../../../../../shared/components/rating/rating.component';

@Component({
  selector: 'app-meal-card',
  imports: [NgClass, RatingComponent],
  templateUrl: './meal-card.component.html',
  styleUrl: './meal-card.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MealCardComponent {
  meal = input.required<Food>({});
  _router = inject(Router);

  onDisplayDetails(id: string) {
    this._router.navigate(['/user/meal', id]);
  }
}
