import { CurrencyPipe, NgClass } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  inject,
  Injector,
  OnInit,
  signal,
} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { take, tap } from 'rxjs';
import { RatingComponent } from '../../../../shared/components/rating/rating.component';
import { CartService } from '../../../../core/services/cart.service';

@Component({
  selector: 'app-meal-details',
  imports: [NgClass, RatingComponent, CurrencyPipe],
  templateUrl: './meal-details.component.html',
  styleUrl: './meal-details.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MealDetailsComponent implements OnInit {
  _activateRoute = inject(ActivatedRoute);
  mealDetails = signal<any>('');
  _injector = inject(Injector);
  _cartService = inject(CartService);
  _router = inject(Router);

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

  onAddToCart() {
    this._cartService.addProduct(this.mealDetails());
    this._router.navigate(['/user/cart']);
  }
}
