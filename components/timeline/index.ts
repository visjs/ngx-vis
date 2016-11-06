import * as Vis from 'vis';

export * from './vis-timeline.directive';
export * from './vis-timeline.service';
export interface VisTimelineItem extends Vis.DataItem {}
export interface VisTimelineGroup extends Vis.DataGroup {}
export interface VisDataSetOptions extends Vis.DataSetOptions {}
export interface VisTimelineOptions extends Vis.TimelineOptions {}
export class VisTimelineItems extends Vis.DataSet<VisTimelineItem> {
    public constructor(data?: Array<VisTimelineItem>, options?: VisDataSetOptions) {
        super(data, options);
    }
}
export class VisTimelineGroups extends Vis.DataSet<VisTimelineGroup> {
    public constructor(data?: Array<VisTimelineGroup>, options?: VisDataSetOptions) {
        super(data, options);
    }
}
