import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { VisNetworkExampleComponent } from './network/network-example.component';
import { VisTimelineExampleComponent } from './timeline/timeline-example.component';

const routes: Routes = [
  { path: 'timeline', component: VisTimelineExampleComponent },
  { path: 'network', component: VisNetworkExampleComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
