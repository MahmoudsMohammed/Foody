import {
  ChangeDetectionStrategy,
  Component,
  inject,
  OnInit,
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-meal-details',
  imports: [],
  templateUrl: './meal-details.component.html',
  styleUrl: './meal-details.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MealDetailsComponent implements OnInit {
  _activateRoute = inject(ActivatedRoute);

  ngOnInit(): void {
    this._activateRoute.data.subscribe((data) => console.log(data));
  }
}
