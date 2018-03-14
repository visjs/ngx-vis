import { ElementRef, EventEmitter, OnChanges, OnDestroy, OnInit, SimpleChange } from '@angular/core';
import { VisNetworkService } from './vis-network.service';
import { VisNetworkData, VisNetworkOptions } from './index';
/**
 * Use this directive with a div container to show network data.
 *
 * @export
 * @class VisNetworkDirective
 * @implements {OnInit}
 * @implements {OnDestroy}
 * @implements {OnChanges}
 */
export declare class VisNetworkDirective implements OnInit, OnDestroy, OnChanges {
    private elementRef;
    private visNetworkService;
    /**
     * The name or identifier of the network (must be unique in your application).
     * This property is used once on init and must not be changed.
     *
     * @type {string}
     * @memberOf VisNetworkDirective
     */
    visNetwork: string;
    /**
     * The data that will be used to create the network.
     * Changes to the nodes or edges property won't be detected but
     * changes to the reference of this object.
     * Changes lead to a call to setData of this network instance.
     *
     * @type {VisNetworkData}
     * @memberOf VisNetworkDirective
     */
    visNetworkData: VisNetworkData;
    /**
     * The options that will be used with this network instance.
     * Only reference changes to the whole options object will be detected
     * but not changes to properties.
     * Changes lead to a call to setOptions of the network instance.
     *
     * @type {VisNetworkOptions}
     * @memberOf VisNetworkDirective
     */
    visNetworkOptions: VisNetworkOptions;
    /**
     * This event will be raised when the network is initialized.
     * At this point of time the network is successfully registered
     * with the VisNetworkService and you can register to events.
     * The event data is the name of the network as a string.
     *
     * @type {EventEmitter<any>}
     * @memberOf VisNetworkDirective
     */
    initialized: EventEmitter<any>;
    private visNetworkContainer;
    private isInitialized;
    /**
     * Creates an instance of VisNetworkDirective.
     *
     * @param {ElementRef} elementRef The HTML element reference.
     * @param {VisNetworkService} visNetworkService The VisNetworkService.
     *
     * @memberOf VisNetworkDirective
     */
    constructor(elementRef: ElementRef, visNetworkService: VisNetworkService);
    /**
     * Create the network when at least visNetwork and visNetworkData
     * are defined.
     *
     * @memberOf VisNetworkDirective
     */
    ngOnInit(): void;
    /**
     * Update the network data or options on reference changes to
     * the visNetworkData or visNetworkOptions properties.
     *
     * @param {{[propName: string]: SimpleChange}} changes
     *
     * @memberOf VisNetworkDirective
     */
    ngOnChanges(changes: {
        [propName: string]: SimpleChange;
    }): void;
    /**
     * Calls the destroy function for this network instance.
     *
     * @memberOf VisNetworkDirective
     */
    ngOnDestroy(): void;
    private createNetwork();
}
