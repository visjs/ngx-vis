import * as Vis from 'vis';
export declare type VisId = Vis.IdType;
export interface VisTimelineItem extends Vis.DataItem {
}
export interface VisTimelineGroup extends Vis.DataGroup {
}
export interface VisDataSetOptions extends Vis.DataSetOptions {
}
export interface VisTimelineOptions extends Vis.TimelineOptions {
}
export declare class VisTimelineItems extends Vis.DataSet<VisTimelineItem> {
    constructor(data?: VisTimelineItem[], options?: VisDataSetOptions);
    public getLength(): number;
    public add(data: VisTimelineItem | VisTimelineItem[], senderId?: VisId): VisId[];
    public clear(senderId?: VisId): VisId[];
    public distinct(field: string): any[];
    public flush(): void;
    public forEach(callback: (item: VisTimelineItem, id: VisId) => void, options?: VisItemSelectionOptions): void;
    public getAll(options?: VisItemSelectionOptions): VisTimelineItem[];
    public getById(id: VisId, options?: VisItemSelectionOptions): VisTimelineItem;
    public getByIds(ids: VisId[], options?: VisItemSelectionOptions): VisTimelineItem[];
    public getDataSet(): VisTimelineItems;
    public getIds(options?: VisItemSelectionOptions): VisId[];
    public map(callback: (item: VisTimelineItem, id: VisId) => any, options?: VisItemSelectionOptions): any[];
    public max(field: string): VisTimelineItem;
    public min(field: string): VisTimelineItem;
    public on(event: string, callback: (event: string, properties: any, senderId: VisId) => void): void;
    public off(event: string, callback: (event: string, properties: any, senderId: VisId) => void): void;
    public removeItems(ids: VisId[], senderId?: VisId): VisId[];
    public setOptions(options?: VisDataSetQueueOptions): void;
    public update(data: VisTimelineItem[], senderId?: VisId): VisId[];
}
export declare class VisTimelineGroups extends Vis.DataSet<VisTimelineGroup> {
    constructor(data?: VisTimelineGroup[], options?: VisDataSetOptions);
    public getLength(): number;
    public add(data: VisTimelineGroup | VisTimelineGroup[], senderId?: VisId): VisId[];
    public clear(senderId?: VisId): VisId[];
    public distinct(field: string): any[];
    public flush(): void;
    public forEach(callback: (item: VisTimelineGroup, id: VisId) => void, options?: VisGroupSelectionOptions): void;
    public getAll(options?: VisGroupSelectionOptions): VisTimelineGroup[];
    public getById(id: VisId, options?: VisGroupSelectionOptions): VisTimelineGroup;
    public getByIds(ids: VisId[], options?: VisGroupSelectionOptions): VisTimelineGroup[];
    public getDataSet(): VisTimelineGroups;
    public getIds(options?: VisGroupSelectionOptions): VisId[];
    public map(callback: (item: VisTimelineGroup, id: VisId) => any, options?: VisGroupSelectionOptions): any[];
    public max(field: string): VisTimelineGroup;
    public min(field: string): VisTimelineGroup;
    public on(event: string, callback: (event: string, properties: any, senderId: VisId) => void): void;
    public off(event: string, callback: (event: string, properties: any, senderId: VisId) => void): void;
    public removeItems(ids: VisId[], senderId?: VisId): VisId[];
    public setOptions(options?: VisDataSetQueueOptions): void;
    public update(data: VisTimelineGroup[], senderId?: VisId): VisId[];
}
export interface VisDataSetQueueOptions extends Vis.DataSetQueueOptions {
}
export interface VisItemSelectionOptions extends Vis.DataSelectionOptions<VisTimelineItem> {
}
export interface VisGroupSelectionOptions extends Vis.DataSelectionOptions<VisTimelineGroup> {
}
export declare type VisDate = Vis.DateType;
export declare type VisTimelineEvents = Vis.TimelineEvents;
export interface VisTimelineAnimationOptions extends Vis.TimelineAnimationOptions {
}
export interface VisTimelineEventPropertiesResult extends Vis.TimelineEventPropertiesResult {
}
export declare class VisTimeline extends Vis.Timeline {
}
export * from './vis-timeline.service';
export * from './vis-timeline.directive';
