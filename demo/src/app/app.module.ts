import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { VisModule } from 'ngx-vis';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VisNetworkExampleComponent } from './network/network-example.component';
import { VisTimelineExampleComponent } from './timeline/timeline-example.component';

@NgModule({
  declarations: [AppComponent, VisNetworkExampleComponent, VisTimelineExampleComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CommonModule,
    VisModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
