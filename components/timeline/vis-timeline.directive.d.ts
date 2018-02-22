import { ElementRef, EventEmitter, OnChanges, OnDestroy, OnInit, SimpleChange } from '@angular/core';
import { VisTimelineService } from './vis-timeline.service';
import { VisTimelineGroups, VisTimelineItems, VisTimelineOptions } from './index';
/**
 * Use this directive with a div container to show timeline data.
 *
 * @export
 * @class VisTimelineDirective
 * @implements {OnInit}
 * @implements {OnDestroy}
 * @implements {OnChanges}
 */
export declare class VisTimelineDirective implements OnInit, OnDestroy, OnChanges {
    private elementRef;
    private visTimelineService;
    /**
     * The name or identifier of the timeline (must be unique in your application).
     * This property is used once on init and must not be changed.
     *
     * @type {string}
     * @memberOf VisTimelineDirective
     */
    visTimeline: string;
    /**
     * The data that will be used to create the timeline.
     * Changes will be detected. If the reference changes then
     * setData will be called on this timeline instance.
     *
     * @type {VisTimelineItems}
     * @memberOf VisTimelineDirective
     */
    visTimelineItems: VisTimelineItems;
    /**
     * The groups that will be used to create the timeline.
     * Changes will be detected. If the reference changes then
     * setGroups will be called on this timeline instance.
     *
     * @type {VisTimelineGroups}
     * @memberOf VisTimelineDirective
     */
    visTimelineGroups: VisTimelineGroups;
    /**
     * The options that will be used with this timeline.
     * Changes will be detected. If the reference changes then
     * setOptions will be called on this timeline instance.
     *
     * @type {VisTimelineOptions}
     * @memberOf VisTimelineDirective
     */
    visTimelineOptions: VisTimelineOptions;
    /**
     * This event will be raised when the timline is initialized.
     * At this point of time the timeline is successfully registered
     * with the VisNetworkService and you can register to events.
     * The event data is the name of the timeline as a string.
     *
     * @type {EventEmitter<any>}
     * @memberOf VisTimelineDirective
     */
    initialized: EventEmitter<any>;
    private visTimelineContainer;
    private isInitialized;
    /**
     * Creates an instance of VisTimelineDirective.
     *
     * @param {ElementRef} elementRef The HTML element reference.
     * @param {VisTimelineService} visTimelineService The VisTimelineService.
     *
     * @memberOf VisTimelineDirective
     */
    constructor(elementRef: ElementRef, visTimelineService: VisTimelineService);
    /**
     * Create the timeline when at least visNetwork and visNetworkData
     * are defined.
     *
     * @memberOf VisTimelineDirective
     */
    ngOnInit(): void;
    /**
     * Update the timeline data, groups or options on reference changes to
     * the visTimelineItems, visTimelineGroups or visTimelineOptions properties.
     *
     * @param {{[propName: string]: SimpleChange}} changes
     *
     * @memberOf VisTimelineDirective
     */
    ngOnChanges(changes: {
        [propName: string]: SimpleChange;
    }): void;
    /**
     * Calls the destroy function for this timeline instance.
     *
     *
     * @memberOf VisTimelineDirective
     */
    ngOnDestroy(): void;
    private createTimeline();
}
