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

import { VisTimelineService } from './vis-timeline.service';
import {
    VisTimelineItems,
    VisTimelineGroups,
    VisTimelineOptions } from './index';

@Directive({
  selector: '[visTimeline]'
})
export class VisTimelineDirective implements OnInit, OnDestroy, OnChanges {

    @Input('visTimeline')
    public visTimeline: string;

    @Input()
    public visTimelineItems: VisTimelineItems;

    @Input()
    public visTimelineGroups: VisTimelineGroups;

    @Input()
    public visTimelineOptions: VisTimelineOptions;

    @Output()
    public initialized: EventEmitter<any> = new EventEmitter<any>();

    private _visTimelineContainer: any;
    private _isInitialized: boolean = false;

    public constructor(private elementRef: ElementRef, private visTimelineService: VisTimelineService) {
        this._visTimelineContainer = elementRef.nativeElement;
    }

    public ngOnInit(): void {
        if (!this._isInitialized && this.visTimeline && this.visTimelineItems) {
            this.createTimeline();
        }
    }

    public ngOnChanges(changes: {[propName: string]: SimpleChange}): void {
        if (!this._isInitialized && this.visTimeline && this.visTimelineItems) {
            this.createTimeline();
        }

        // TODO: handle changes
        console.log(changes);
    }

    public ngOnDestroy(): void {
        this._isInitialized = false;
        this.visTimelineService.destroy(this.visTimeline);
    }

    private createTimeline(): void {
        if (this.visTimelineGroups) {
            this.visTimelineService.createWithItemsAndGroups(
                this.visTimeline,
                this._visTimelineContainer,
                this.visTimelineItems,
                this.visTimelineGroups,
                this.visTimelineOptions);
        } else {
            this.visTimelineService.createWithItems(
                this.visTimeline,
                this._visTimelineContainer,
                this.visTimelineItems,
                this.visTimelineOptions);
        }
        this._isInitialized = true;
        this.initialized.emit(this.visTimeline);
    }
}
