import { Routes } from '@angular/router';

import { VisNetworkExampleComponent } from './network/network-example.component';
import { VisTimelineExampleComponent } from './timeline/timeline-example.component';

export const routes: Routes = [
  { path: 'timeline', component: VisTimelineExampleComponent },
  { path: 'network', component: VisNetworkExampleComponent },
];
