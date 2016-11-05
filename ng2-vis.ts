import { NgModule } from '@angular/core';

import { VisNetworkDirective, VisNetworkService } from './components/network';
import { VisTimelineDirective, VisTimelineService } from './components/timeline';

export * from './components';

@NgModule({
  exports: [VisNetworkDirective, VisTimelineDirective],
  declarations: [VisNetworkDirective, VisTimelineDirective],
  providers: [VisNetworkService, VisTimelineService]
})
export class VisModule { }
