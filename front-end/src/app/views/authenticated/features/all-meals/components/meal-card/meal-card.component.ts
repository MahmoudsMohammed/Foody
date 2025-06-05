import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-meal-card',
  imports: [],
  templateUrl: './meal-card.component.html',
  styleUrl: './meal-card.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MealCardComponent {}
