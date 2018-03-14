import { Component, OnDestroy, OnInit } from '@angular/core';

import { VisTimelineItems, VisTimelineService } from '../../components/timeline';

@Component({
    selector: 'timeline-example',
    template: `
      <h2>Timeline</h2>
      <h3>Basic usage</h3>
      <div [visTimeline]="visTimeline"
           [visTimelineItems]="visTimelineItems"
           (initialized)="timelineInitialized()"></div>
      <button type="button" class="btn btn-default" (click)="addItem()">Add and focus</button>
      <p>
        <strong>Note:</strong> Open your dev tools to see the console output when the timeline receives click events.
      </p>
    `,
})
export class VisTimelineExampleComponent implements OnInit, OnDestroy {

    public visTimeline: string = 'timelineId1';
    public visTimelineItems: VisTimelineItems;

    public constructor(private visTimelineService: VisTimelineService) {}

    public timelineInitialized(): void {
        console.log('timeline initialized');

        // now we can use the service to register on events
        this.visTimelineService.on(this.visTimeline, 'click');

        // open your console/dev tools to see the click params
        this.visTimelineService.click
            .subscribe((eventData: any[]) => {
                if (eventData[0] === this.visTimeline) {
                    console.log(eventData[1]);
                }
            });
    }

    public addItem(): void {
        const newLength = this.visTimelineItems.getLength() + 1;
        this.visTimelineItems.add(
            {id: newLength, content: 'item ' + newLength, start: Date.now() },
        );
        this.visTimelineService.focusOnIds(this.visTimeline, [1, newLength]);
    }

    public ngOnInit(): void {
        this.visTimelineItems = new VisTimelineItems([
            {id: 1, content: 'item 1', start: '2016-04-20'},
            {id: 2, content: 'item 2', start: '2016-04-14'},
            {id: 3, content: 'item 3', start: '2016-04-18'},
            {id: 4, content: 'item 4', start: '2016-04-16', end: '2016-04-19'},
            {id: 5, content: 'item 5', start: '2016-04-25'},
            {id: 6, content: 'item 6', start: '2016-04-27', type: 'point'},
        ]);
    }

    public ngOnDestroy(): void {
        this.visTimelineService.off(this.visTimeline, 'click');
    }
}
