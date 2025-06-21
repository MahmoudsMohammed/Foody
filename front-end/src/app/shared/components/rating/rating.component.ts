import { NgClass } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  computed,
  input,
} from '@angular/core';

@Component({
  selector: 'app-rating',
  imports: [NgClass],
  templateUrl: './rating.component.html',
  styleUrl: './rating.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RatingComponent {
  rating = input.required<number>();
  stars = computed(() => {
    let arr = Array(5).fill(''),
      rate = this.rating();
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
}
