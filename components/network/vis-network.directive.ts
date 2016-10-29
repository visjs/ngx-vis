import {
  Directive,
  Input,
  Output,
  EventEmitter,
  OnDestroy,
  OnChanges,
  ElementRef,
  SimpleChange } from '@angular/core';

import * as Vis from 'vis';

import { VisNetworkService } from './vis-network.service';

@Directive({
  selector: '[visNetwork]'
})
export class VisNetworkDirective implements OnDestroy, OnChanges {

  @Input('visNetwork')
  public visNetwork: string;

  @Input()
  public visNetworkData: Vis.IData;

  @Input()
  public visNetworkOptions: Vis.IOptions;

  @Output()
  public initialized: EventEmitter<any> = new EventEmitter<any>();

  private _visNetworkContainer: any;

  public constructor(private elementRef: ElementRef, private visNetworkService: VisNetworkService) {
    this._visNetworkContainer = elementRef.nativeElement;
  }

  public ngOnChanges(changes: {[propName: string]: SimpleChange}): void {
    // TODO: update network on changes
    console.log(changes);
    if (this.visNetwork && this.visNetworkData) {
      this.createNetwork();
    }
  }

  public ngOnDestroy(): void {
    this.visNetworkService.destroy(this.visNetwork);
  }

  private createNetwork(): void {
    this.visNetworkService.create(
      this.visNetwork,
      this._visNetworkContainer,
      this.visNetworkData,
      this.visNetworkOptions);
    this.initialized.emit(this.visNetwork);
  }
}
