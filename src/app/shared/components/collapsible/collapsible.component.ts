import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-collapsible',
  templateUrl: './collapsible.component.html',
  styleUrls: ['./collapsible.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CollapsibleComponent {
  @Input() label: string;
}
