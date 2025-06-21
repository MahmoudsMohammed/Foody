import {
  ChangeDetectionStrategy,
  Component,
  inject,
  Injector,
  OnInit,
  signal,
  Signal,
} from '@angular/core';
import { AllMealsService } from '../../services/allmeals.service';
import { Tag } from '../../models/meals.model';
import { toSignal } from '@angular/core/rxjs-interop';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-tags',
  imports: [NgClass],
  templateUrl: './tags.component.html',
  styleUrl: './tags.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TagsComponent implements OnInit {
  _allMeals = inject(AllMealsService);
  selectedTag = signal<string>('All');
  tags!: Signal<Tag[] | undefined>;
  _injectionContext = inject(Injector);

  ngOnInit(): void {
    this.tags = toSignal(this._allMeals.getTags(), {
      injector: this._injectionContext,
    });
  }
}
