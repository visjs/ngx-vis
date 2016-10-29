import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'example-app',
  template: `
    <div class="examples">
      <network-example></network-example>
    </div>
  `,
  encapsulation: ViewEncapsulation.None
})
export class DemoComponent {
}
