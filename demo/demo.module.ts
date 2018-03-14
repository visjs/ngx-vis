import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule }   from '@angular/router';

import { VisModule } from '../ng2-vis';
import { DemoComponent } from './demo.component';
import { HomeComponent } from './home/home.component';
import { VisNetworkExampleComponent } from './network/network-example.component';
import { VisTimelineExampleComponent } from './timeline/timeline-example.component';

@NgModule({
  declarations: [
    DemoComponent,
    HomeComponent,
    VisNetworkExampleComponent,
    VisTimelineExampleComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    VisModule,
    CommonModule,
    RouterModule.forRoot([
      { path: 'timeline', component: VisTimelineExampleComponent },
      { path: '', redirectTo: '/home', pathMatch: 'full' },
      { path: 'home', component: HomeComponent },
      { path: 'network', component: VisNetworkExampleComponent },
      { path: '**', component: HomeComponent },
    ]),
  ],
  providers: [],
  bootstrap: [DemoComponent],
})
export class VisDemoModule { }
