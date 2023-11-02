import { Component, OnDestroy, OnInit } from "@angular/core";
import { DataItem, VisTimelineService } from "ngx-vis";


@Component({
  selector: 'timeline-example',
  templateUrl: './timeline-example.component.html',
})
export class VisTimelineExampleComponent implements OnInit, OnDestroy {
  public visTimeline: string = 'timelineId1';
  public visTimelineItems!: DataItem[];

  public constructor(private visTimelineService: VisTimelineService) { }

  public timelineInitialized(): void {
    // tslint:disable: no-console
    console.log('timeline initialized');

    // now we can use the service to register on events
    this.visTimelineService.on(this.visTimeline, 'click');

    // open your console/dev tools to see the click params
    this.visTimelineService.click.subscribe((eventData: any[]) => {
      if (eventData[0] === this.visTimeline) {
        // tslint:disable: no-console
        console.log(eventData[1]);
      }
    });
  }

  public addItem(): void {
    const newLength = this.visTimelineItems.length + 1;
    this.visTimelineItems.push({ id: newLength, content: 'item ' + newLength, start: Date.now() });
    this.visTimelineService.setItems(this.visTimeline, this.visTimelineItems);
    this.visTimelineService.focusOnIds(this.visTimeline, [1, newLength]);
  }

  public ngOnInit(): void {
    this.visTimelineItems = [
      { id: 1, content: 'item 1', start: '2016-04-20' },
      { id: 2, content: 'item 2', start: '2017-04-14' },
      { id: 3, content: 'item 3', start: '2017-04-18' },
      { id: 4, content: 'item 4', start: '2018-04-16', end: '2016-04-19' },
      { id: 5, content: 'item 5', start: '2018-04-25' },
      { id: 6, content: 'item 6', start: '2019-04-27', type: 'point' },
    ];
  }

  public ngOnDestroy(): void {
    this.visTimelineService.off(this.visTimeline, 'click');
  }
}
