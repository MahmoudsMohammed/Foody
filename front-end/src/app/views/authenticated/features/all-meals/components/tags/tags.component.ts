import {
  ChangeDetectionStrategy,
  Component,
  effect,
  inject,
  Injector,
  input,
  OnInit,
  signal,
  Signal,
} from '@angular/core';
import { AllMealsService } from '../../services/allmeals.service';
import { Tag } from '../../models/meals.model';
import { toSignal } from '@angular/core/rxjs-interop';
import { NgClass } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-tags',
  imports: [NgClass],
  templateUrl: './tags.component.html',
  styleUrl: './tags.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TagsComponent implements OnInit {
  tag = input.required<string>();
  selectedTag = signal<string>('All');
  tags!: Signal<Tag[] | undefined>;
  _injectionContext = inject(Injector);
  _allMeals = inject(AllMealsService);
  _router = inject(Router);
  _activateRoute = inject(ActivatedRoute);

  constructor() {
    effect(() => {
      this.selectedTag.set(this.tag());
    });
  }

  ngOnInit(): void {
    this.tags = toSignal(this._allMeals.getTags(), {
      injector: this._injectionContext,
    });
  }

  onTagActivate(tag: Tag) {
    this.selectedTag.set(tag.name);
    this._router.navigate([], {
      relativeTo: this._activateRoute,
      queryParamsHandling: 'merge',
      queryParams: {
        tag: this.selectedTag(),
      },
    });
  }
}
