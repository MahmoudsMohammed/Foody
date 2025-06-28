import { ChangeDetectionStrategy, Component, input } from '@angular/core';

@Component({
  selector: 'app-no-data',
  imports: [],
  templateUrl: './no-data.component.html',
  styleUrl: './no-data.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NoDataComponent {
  message = input.required<string>();
  resetText = input.required<string>();

  onReset() {}
}
