import {
  Directive,
  ElementRef,
  EventEmitter,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  Output,
  SimpleChange } from '@angular/core';

import { VisTimelineService } from './vis-timeline.service';

import {
    VisTimelineGroups,
    VisTimelineItems,
    VisTimelineOptions } from './index';

/**
 * Use this directive with a div container to show timeline data.
 *
 * @export
 * @class VisTimelineDirective
 * @implements {OnInit}
 * @implements {OnDestroy}
 * @implements {OnChanges}
 */
@Directive({
  selector: '[visTimeline]',
})
export class VisTimelineDirective implements OnInit, OnDestroy, OnChanges {

    /**
     * The name or identifier of the timeline (must be unique in your application).
     * This property is used once on init and must not be changed.
     *
     * @type {string}
     * @memberOf VisTimelineDirective
     */
    @Input('visTimeline')
    public visTimeline: string;

    /**
     * The data that will be used to create the timeline.
     * Changes will be detected. If the reference changes then
     * setData will be called on this timeline instance.
     *
     * @type {VisTimelineItems}
     * @memberOf VisTimelineDirective
     */
    @Input()
    public visTimelineItems: VisTimelineItems;

    /**
     * The groups that will be used to create the timeline.
     * Changes will be detected. If the reference changes then
     * setGroups will be called on this timeline instance.
     *
     * @type {VisTimelineGroups}
     * @memberOf VisTimelineDirective
     */
    @Input()
    public visTimelineGroups: VisTimelineGroups;

    /**
     * The options that will be used with this timeline.
     * Changes will be detected. If the reference changes then
     * setOptions will be called on this timeline instance.
     *
     * @type {VisTimelineOptions}
     * @memberOf VisTimelineDirective
     */
    @Input()
    public visTimelineOptions: VisTimelineOptions;

    /**
     * This event will be raised when the timline is initialized.
     * At this point of time the timeline is successfully registered
     * with the VisNetworkService and you can register to events.
     * The event data is the name of the timeline as a string.
     *
     * @type {EventEmitter<any>}
     * @memberOf VisTimelineDirective
     */
    @Output()
    public initialized: EventEmitter<any> = new EventEmitter<any>();

    private visTimelineContainer: any;
    private isInitialized: boolean = false;

    /**
     * Creates an instance of VisTimelineDirective.
     *
     * @param {ElementRef} elementRef The HTML element reference.
     * @param {VisTimelineService} visTimelineService The VisTimelineService.
     *
     * @memberOf VisTimelineDirective
     */
    public constructor(private elementRef: ElementRef, private visTimelineService: VisTimelineService) {
        this.visTimelineContainer = elementRef.nativeElement;
    }

    /**
     * Create the timeline when at least visNetwork and visNetworkData
     * are defined.
     *
     * @memberOf VisTimelineDirective
     */
    public ngOnInit(): void {
        if (!this.isInitialized && this.visTimeline && this.visTimelineItems) {
            this.createTimeline();
        }
    }

    /**
     * Update the timeline data, groups or options on reference changes to
     * the visTimelineItems, visTimelineGroups or visTimelineOptions properties.
     *
     * @param {{[propName: string]: SimpleChange}} changes
     *
     * @memberOf VisTimelineDirective
     */
    public ngOnChanges(changes: {[propName: string]: SimpleChange}): void {
        if (!this.isInitialized && this.visTimeline && this.visTimelineItems) {
            this.createTimeline();
        }

        for (const propertyName in changes) {
          if (changes.hasOwnProperty(propertyName)) {
            const change = changes[propertyName];
            if (!change.isFirstChange()) {
              if (propertyName === 'visTimelineItems') {
                  this.visTimelineService.setItems(this.visTimeline, changes[propertyName].currentValue);
              }
              if (propertyName === 'visTimelineOptions') {
                  this.visTimelineService.setOptions(this.visTimeline, changes[propertyName].currentValue);
              }
              if (propertyName === 'visTimelineGroups') {
                  this.visTimelineService.setGroups(this.visTimeline, changes[propertyName].currentValue);
              }
            }
          }
        }
    }

    /**
     * Calls the destroy function for this timeline instance.
     *
     *
     * @memberOf VisTimelineDirective
     */
    public ngOnDestroy(): void {
        this.isInitialized = false;
        this.visTimelineService.destroy(this.visTimeline);
    }

    private createTimeline(): void {
        if (this.visTimelineGroups) {
            this.visTimelineService.createWithItemsAndGroups(
                this.visTimeline,
                this.visTimelineContainer,
                this.visTimelineItems,
                this.visTimelineGroups,
                this.visTimelineOptions);
        } else {
            this.visTimelineService.createWithItems(
                this.visTimeline,
                this.visTimelineContainer,
                this.visTimelineItems,
                this.visTimelineOptions);
        }
        this.isInitialized = true;
        this.initialized.emit(this.visTimeline);
    }
}
