import { ChangeDetectionStrategy, Component } from '@angular/core';
import { SharedService } from './shared.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
  title = 'change-detection';

  constructor(public sharedService: SharedService) {}

  increment() {
    this.sharedService.increment();
  }
}
