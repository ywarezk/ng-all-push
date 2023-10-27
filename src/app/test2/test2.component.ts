import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-test2',
  template: `
    <p>
      test2 works!
    </p>
  `,
  styles: [
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Test2Component {

}
