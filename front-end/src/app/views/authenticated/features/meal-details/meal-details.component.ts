import {
  ChangeDetectionStrategy,
  Component,
  inject,
  Injector,
  OnInit,
  signal,
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { take, tap } from 'rxjs';

@Component({
  selector: 'app-meal-details',
  imports: [],
  templateUrl: './meal-details.component.html',
  styleUrl: './meal-details.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MealDetailsComponent implements OnInit {
  _activateRoute = inject(ActivatedRoute);
  mealDetails = signal<any>('');
  _injector = inject(Injector);

  ngOnInit(): void {
    this._activateRoute.data
      .pipe(
        take(1),
        tap((data: any) => {
          this.mealDetails.set(data['meal'][0]);
        })
      )
      .subscribe();
  }
}
