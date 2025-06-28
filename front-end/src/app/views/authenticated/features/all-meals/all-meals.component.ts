import {
  ChangeDetectionStrategy,
  Component,
  DestroyRef,
  inject,
  OnInit,
  signal,
  Signal,
} from '@angular/core';
import { SearchComponent } from './components/search/search.component';
import { MealCardComponent } from './components/meal-card/meal-card.component';
import { ActivatedRoute } from '@angular/router';
import { map, switchMap, tap } from 'rxjs';
import { takeUntilDestroyed, toSignal } from '@angular/core/rxjs-interop';
import { AllMealsService } from './services/allmeals.service';
import { searchFields } from './models/meals.model';
import { TagsComponent } from './components/tags/tags.component';
import { NoDataComponent } from '../../../../shared/components/no-data/no-data.component';

@Component({
  selector: 'app-all-meals',
  imports: [SearchComponent, MealCardComponent, TagsComponent, NoDataComponent],
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
  searchFields = signal<searchFields>({ search: '', tag: 'All' });

  constructor() {
    this.meals = toSignal(
      this._actRoute.queryParamMap.pipe(
        takeUntilDestroyed(this.destroyRef),
        map((data: any) => {
          this.searchFields.set({
            search: data['params']['search'] || '',
            tag: data['params']['tag'] || 'All',
          });
          return {
            search: data['params']['search'] || '',
            tag:
              data['params']['tag'] === 'All' || !data['params']['tag']
                ? null
                : data['params']['tag'],
          };
        }),
        switchMap((data: searchFields) => this._allMeals.getMeals(data))
      )
    );
  }

  ngOnInit(): void {}
}
