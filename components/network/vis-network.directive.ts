import {
  Directive,
  Input,
  Output,
  EventEmitter,
  OnDestroy,
  OnInit,
  OnChanges,
  ElementRef,
  SimpleChange } from '@angular/core';

import * as Vis from 'vis';

import { VisNetworkService } from './vis-network.service';

@Directive({
  selector: '[visNetwork]'
})
export class VisNetworkDirective implements OnInit, OnDestroy, OnChanges {

  @Input('visNetwork')
  public visNetwork: string;

  @Input()
  public visNetworkData: Vis.IData;

  @Input()
  public visNetworkOptions: Vis.IOptions;

  @Output()
  public initialized: EventEmitter<any> = new EventEmitter<any>();

  private _visNetworkContainer: any;
  private _isInitialized: boolean = false;

  public constructor(private elementRef: ElementRef, private visNetworkService: VisNetworkService) {
    this._visNetworkContainer = elementRef.nativeElement;
  }

  public ngOnInit(): void {
    // at least the network name and data must be defined
    if (this.visNetwork && this.visNetworkData) {
      this.createNetwork();
    }
  }

  public ngOnChanges(changes: {[propName: string]: SimpleChange}): void {

    if (!this._isInitialized && this.visNetwork && this.visNetworkData) {
      this.createNetwork();
    }

    for (let propertyName in changes) {
      if (changes.hasOwnProperty(propertyName)) {
        let change = changes[propertyName];
        if (!change.isFirstChange()) {
          if (propertyName === 'visNetworkData') {
            this.visNetworkService.setData(this.visNetwork, changes[propertyName].currentValue);
          }
          if (propertyName === 'visNetworkOptions') {
            this.visNetworkService.setOptions(this.visNetwork, changes[propertyName].currentValue);
          }
        }
      }
    }
  }

  public ngOnDestroy(): void {
    this._isInitialized = false;
    this.visNetworkService.destroy(this.visNetwork);
  }

  private createNetwork(): void {
    this.visNetworkService.create(
      this.visNetwork,
      this._visNetworkContainer,
      this.visNetworkData,
      this.visNetworkOptions);
    this._isInitialized = true;
    this.initialized.emit(this.visNetwork);
  }
}
