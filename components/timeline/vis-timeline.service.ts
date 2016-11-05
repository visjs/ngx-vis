import { Injectable } from '@angular/core';
import * as Vis from 'vis';

@Injectable()
export class VisTimelineService {

    private _timelines: {[id: string]: any} = [];

    public createWithItems(
        visTimeline: string,
        container: HTMLElement,
        items: Vis.DataSet<Vis.DataItem>,
        options?: Vis.TimelineOptions): void {
        if (this._timelines[visTimeline]) {
            throw new Error(`Timeline with id ${visTimeline} already exists.`);
        }

        this._timelines[visTimeline] = new Vis.Timeline(container, items, options);
    }

    public createWithItemsAndGroups(
        visTimeline: string,
        container: HTMLElement,
        items: Vis.DataSet<Vis.DataItem>,
        groups: Vis.DataSet<Vis.DataGroup>,
        options?: Vis.TimelineOptions): void {
        if (this._timelines[visTimeline]) {
            throw new Error(`Timeline with id ${visTimeline} already exists.`);
        }

        this._timelines[visTimeline] = new Vis.Timeline(container, items, groups, options);
    }

    public destroy(visTimeline: string): void {
        if (this._timelines[visTimeline]) {
            this._timelines[visTimeline].destroy();
            delete this._timelines[visTimeline];
        }
    }
}
