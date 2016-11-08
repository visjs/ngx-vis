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

import {
  VisNetworkData,
  VisNetworkOptions,
  VisNetworkService
} from './index';

/**
 * Use this directive with a div container to show network data.
 * 
 * @export
 * @class VisNetworkDirective
 * @implements {OnInit}
 * @implements {OnDestroy}
 * @implements {OnChanges}
 */
@Directive({
  selector: '[visNetwork]'
})
export class VisNetworkDirective implements OnInit, OnDestroy, OnChanges {

  /**
   * The name or identifier of the network (must be unique in your application).
   * This property is used once on init and must not be changed.
   * 
   * @type {string}
   * @memberOf VisNetworkDirective
   */
  @Input('visNetwork')
  public visNetwork: string;

  /**
   * The data that will be used to create the network.
   * Changes to the nodes or edges property won't be detected but
   * changes to the reference of this object.
   * Changes lead to a call to setData of this network instance.
   * 
   * @type {VisNetworkData}
   * @memberOf VisNetworkDirective
   */
  @Input()
  public visNetworkData: VisNetworkData;

  /**
   * The options that will be used with this network instance.
   * Only reference changes to the whole options object will be detected
   * but not changes to properties.
   * Changes lead to a call to setOptions of the network instance.
   * 
   * @type {VisNetworkOptions}
   * @memberOf VisNetworkDirective
   */
  @Input()
  public visNetworkOptions: VisNetworkOptions;

  /**
   * This event will be raised when the network is initialized.
   * At this point of time the network is successfully registered
   * with the VisNetworkService and you can register to events.
   * The event data is the name of the network as a string.
   * 
   * @type {EventEmitter<any>}
   * @memberOf VisNetworkDirective
   */
  @Output()
  public initialized: EventEmitter<any> = new EventEmitter<any>();

  private _visNetworkContainer: any;
  private _isInitialized: boolean = false;

  /**
   * Creates an instance of VisNetworkDirective.
   * 
   * @param {ElementRef} elementRef The HTML element reference.
   * @param {VisNetworkService} visNetworkService The VisNetworkService.
   * 
   * @memberOf VisNetworkDirective
   */
  public constructor(private elementRef: ElementRef, private visNetworkService: VisNetworkService) {
    this._visNetworkContainer = elementRef.nativeElement;
  }

  /**
   * Create the network when at least visNetwork and visNetworkData
   * are defined. 
   * 
   * @memberOf VisNetworkDirective
   */
  public ngOnInit(): void {
    if (!this._isInitialized && this.visNetwork && this.visNetworkData) {
      this.createNetwork();
    }
  }

  /**
   * Update the network data or options on reference changes to
   * the visNetworkData or visNetworkOptions properties.
   * 
   * @param {{[propName: string]: SimpleChange}} changes
   * 
   * @memberOf VisNetworkDirective
   */
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

  /**
   * Calls the destroy function for this network instance.
   * 
   * 
   * @memberOf VisNetworkDirective
   */
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
