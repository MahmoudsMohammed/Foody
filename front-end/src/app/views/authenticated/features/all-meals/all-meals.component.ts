import {
  ChangeDetectionStrategy,
  Component,
  DestroyRef,
  inject,
  OnInit,
  Signal,
} from '@angular/core';
import { SearchComponent } from './components/search/search.component';
import { MealCardComponent } from './components/meal-card/meal-card.component';
import { ActivatedRoute } from '@angular/router';
import { map, switchMap } from 'rxjs';
import { takeUntilDestroyed, toSignal } from '@angular/core/rxjs-interop';
import { AllMealsService } from './services/allmeals.service';

@Component({
  selector: 'app-all-meals',
  imports: [SearchComponent, MealCardComponent],
  providers: [AllMealsService],
  templateUrl: './all-meals.component.html',
  styleUrl: './all-meals.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AllMealsComponent implements OnInit {
  destroyRef = inject(DestroyRef);
  _actRoute = inject(ActivatedRoute);
  _allMeals = inject(AllMealsService);
  meals: Signal<any>;

  constructor() {
    this.meals = toSignal(
      this._actRoute.params.pipe(
        takeUntilDestroyed(this.destroyRef),
        map((data) => data['search'] || ''),
        switchMap((data) => this._allMeals.getMeals(data))
      )
    );
  }

  ngOnInit(): void {
    console.log(this.meals());
  }
}
