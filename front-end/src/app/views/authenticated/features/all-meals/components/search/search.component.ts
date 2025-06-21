import {
  ChangeDetectionStrategy,
  Component,
  effect,
  inject,
  input,
} from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search',
  imports: [TranslateModule, FormsModule],
  templateUrl: './search.component.html',
  styleUrl: './search.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SearchComponent {
  search = input.required<string>();
  meal = '';
  _router = inject(Router);

  constructor() {
    effect(() => {
      this.meal = this.search();
    });
  }

  onSearch() {
    this._router.navigate(['/user/all'], {
      queryParams: { search: this.meal },
      queryParamsHandling: 'merge',
    });
  }
}
