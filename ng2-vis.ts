import { NgModule } from '@angular/core';

import { VisNetworkDirective, VisNetworkService } from './components/network';

@NgModule({
  exports: [VisNetworkDirective],
  declarations: [VisNetworkDirective],
  providers: [VisNetworkService]
})
export class VisModule {
}
