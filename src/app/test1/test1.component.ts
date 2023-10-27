import {ChangeDetectionStrategy, Component} from '@angular/core';

@Component({
  selector: 'app-test1',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: ` <p>test1 works!</p> `,
  styles: [],
})
export class Test1Component {}
