import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';

import { VisNetworkExampleComponent } from './network/network-example.component';
import { VisModule } from '../ng2-vis';
import { DemoComponent } from './demo.component';

@NgModule({
  declarations: [
    DemoComponent,
    VisNetworkExampleComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    VisModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [DemoComponent]
})

export class VisDemoModule {
}
