import { ChangeDetectionStrategy, Component } from '@angular/core';
import { SearchComponent } from './components/search/search.component';
import { MealCardComponent } from './components/meal-card/meal-card.component';

@Component({
  selector: 'app-all-meals',
  imports: [SearchComponent, MealCardComponent],
  templateUrl: './all-meals.component.html',
  styleUrl: './all-meals.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AllMealsComponent {}
