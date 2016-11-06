import { Component, OnInit, OnDestroy } from '@angular/core';

import { VisTimelineService, VisTimelineItems, VisTimelineItem } from '../../components/timeline';

@Component({
    selector: 'timeline-example',
    template: require('./timeline-example.component.html'),
    styles: [
        require('./timeline-example.component.css')
    ]
})
export class VisTimelineExampleComponent implements OnInit {

    public visTimeline: string = 'timelineId1';
    public visTimelineItems: VisTimelineItems;

    public constructor(private visTimelineService: VisTimelineService) {}

    public timelineInitialized(): void {
        console.log('timeline initialized');
    }

    public ngOnInit(): void {
        this.visTimelineItems = new VisTimelineItems([
            {id: 1, content: 'item 1', start: '2014-04-20'},
            {id: 2, content: 'item 2', start: '2014-04-14'},
            {id: 3, content: 'item 3', start: '2014-04-18'},
            {id: 4, content: 'item 4', start: '2014-04-16', end: '2014-04-19'},
            {id: 5, content: 'item 5', start: '2014-04-25'},
            {id: 6, content: 'item 6', start: '2014-04-27', type: 'point'}
        ]);
    }
}