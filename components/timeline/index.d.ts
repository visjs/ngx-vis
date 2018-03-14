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
    getLength(): number;
    add(data: VisTimelineItem | VisTimelineItem[], senderId?: VisId): VisId[];
    clear(senderId?: VisId): VisId[];
    distinct(field: string): any[];
    flush(): void;
    forEach(callback: (item: VisTimelineItem, id: VisId) => void, options?: VisItemSelectionOptions): void;
    getAll(options?: VisItemSelectionOptions): VisTimelineItem[];
    getById(id: VisId, options?: VisItemSelectionOptions): VisTimelineItem;
    getByIds(ids: VisId[], options?: VisItemSelectionOptions): VisTimelineItem[];
    getDataSet(): VisTimelineItems;
    getIds(options?: VisItemSelectionOptions): VisId[];
    map(callback: (item: VisTimelineItem, id: VisId) => any, options?: VisItemSelectionOptions): any[];
    max(field: string): VisTimelineItem;
    min(field: string): VisTimelineItem;
    on(event: string, callback: (event: string, properties: any, senderId: VisId) => void): void;
    off(event: string, callback: (event: string, properties: any, senderId: VisId) => void): void;
    removeItems(ids: VisId[], senderId?: VisId): VisId[];
    setOptions(options?: VisDataSetQueueOptions): void;
    update(data: VisTimelineItem[], senderId?: VisId): VisId[];
}
export declare class VisTimelineGroups extends Vis.DataSet<VisTimelineGroup> {
    constructor(data?: VisTimelineGroup[], options?: VisDataSetOptions);
    getLength(): number;
    add(data: VisTimelineGroup | VisTimelineGroup[], senderId?: VisId): VisId[];
    clear(senderId?: VisId): VisId[];
    distinct(field: string): any[];
    flush(): void;
    forEach(callback: (item: VisTimelineGroup, id: VisId) => void, options?: VisGroupSelectionOptions): void;
    getAll(options?: VisGroupSelectionOptions): VisTimelineGroup[];
    getById(id: VisId, options?: VisGroupSelectionOptions): VisTimelineGroup;
    getByIds(ids: VisId[], options?: VisGroupSelectionOptions): VisTimelineGroup[];
    getDataSet(): VisTimelineGroups;
    getIds(options?: VisGroupSelectionOptions): VisId[];
    map(callback: (item: VisTimelineGroup, id: VisId) => any, options?: VisGroupSelectionOptions): any[];
    max(field: string): VisTimelineGroup;
    min(field: string): VisTimelineGroup;
    on(event: string, callback: (event: string, properties: any, senderId: VisId) => void): void;
    off(event: string, callback: (event: string, properties: any, senderId: VisId) => void): void;
    removeItems(ids: VisId[], senderId?: VisId): VisId[];
    setOptions(options?: VisDataSetQueueOptions): void;
    update(data: VisTimelineGroup[], senderId?: VisId): VisId[];
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
