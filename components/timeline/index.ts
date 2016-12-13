import * as Vis from 'vis';

export type VisId = Vis.IdType;
export interface VisTimelineItem extends Vis.DataItem {}
export interface VisTimelineGroup extends Vis.DataGroup {}
export interface VisDataSetOptions extends Vis.DataSetOptions {}
export interface VisTimelineOptions extends Vis.TimelineOptions {}
export class VisTimelineItems extends Vis.DataSet<VisTimelineItem> {
    public constructor(data?: VisTimelineItem[], options?: VisDataSetOptions) {
        super(data, options);
    }

    public getLength(): number {
        return this.length;
    }

    public add(data: VisTimelineItem | VisTimelineItem[], senderId?: VisId): VisId[] {
        return super.add(data, senderId);
    }

    public clear(senderId?: VisId): VisId[] {
        return super.clear(senderId);
    }

    public distinct(field: string): any[] {
        return super.distinct(field);
    }

    public flush(): void {
        super.flush();
    }

    public forEach(callback: (item: VisTimelineItem, id: VisId) => void, options?: VisItemSelectionOptions): void {
        super.forEach(callback, options);
    }

    public getAll(options?: VisItemSelectionOptions): VisTimelineItem[] {
        return super.get(options);
    }

    public getById(id: VisId, options?: VisItemSelectionOptions): VisTimelineItem {
        return super.get(id, options);
    }

    public getByIds(ids: VisId[], options?: VisItemSelectionOptions): VisTimelineItem[] {
        return super.get(ids, options);
    }

    public getDataSet(): VisTimelineItems {
        return super.getDataSet() as VisTimelineItems;
    }

    public getIds(options?: VisItemSelectionOptions): VisId[] {
        return super.getIds(options);
    }

    public map(callback: (item: VisTimelineItem, id: VisId) => any, options?: VisItemSelectionOptions): any[] {
        return super.map(callback, options);
    }

    public max(field: string): VisTimelineItem {
        return super.max(field);
    }

    public min(field: string): VisTimelineItem {
        return super.min(field);
    }

    public on(event: string, callback: (event: string, properties: any, senderId: VisId) => void): void {
        super.on(event, callback);
    }

    public off(event: string, callback: (event: string, properties: any, senderId: VisId) => void): void {
        super.off(event, callback);
    }

    public removeItems(ids: VisId[], senderId?: VisId): VisId[] {
        return super.remove(ids, senderId);
    }

    public setOptions(options?: VisDataSetQueueOptions): void {
        super.setOptions(options);
    }

    public update(data: VisTimelineItem[], senderId?: VisId): VisId[] {
        return super.update(data, senderId);
    }
}
export class VisTimelineGroups extends Vis.DataSet<VisTimelineGroup> {
    public constructor(data?: VisTimelineGroup[], options?: VisDataSetOptions) {
        super(data, options);
    }

    public getLength(): number {
        return this.length;
    }

    public add(data: VisTimelineGroup | VisTimelineGroup[], senderId?: VisId): VisId[] {
        return super.add(data, senderId);
    }

    public clear(senderId?: VisId): VisId[] {
        return super.clear(senderId);
    }

    public distinct(field: string): any[] {
        return super.distinct(field);
    }

    public flush(): void {
        super.flush();
    }

    public forEach(callback: (item: VisTimelineGroup, id: VisId) => void, options?: VisGroupSelectionOptions): void {
        super.forEach(callback, options);
    }

    public getAll(options?: VisGroupSelectionOptions): VisTimelineGroup[] {
        return super.get(options);
    }

    public getById(id: VisId, options?: VisGroupSelectionOptions): VisTimelineGroup {
        return super.get(id, options);
    }

    public getByIds(ids: VisId[], options?: VisGroupSelectionOptions): VisTimelineGroup[] {
        return super.get(ids, options);
    }

    public getDataSet(): VisTimelineGroups {
        return super.getDataSet() as VisTimelineGroups;
    }

    public getIds(options?: VisGroupSelectionOptions): VisId[] {
        return super.getIds(options);
    }

    public map(callback: (item: VisTimelineGroup, id: VisId) => any, options?: VisGroupSelectionOptions): any[] {
        return super.map(callback, options);
    }

    public max(field: string): VisTimelineGroup {
        return super.max(field);
    }

    public min(field: string): VisTimelineGroup {
        return super.min(field);
    }

    public on(event: string, callback: (event: string, properties: any, senderId: VisId) => void): void {
        super.on(event, callback);
    }

    public off(event: string, callback: (event: string, properties: any, senderId: VisId) => void): void {
        super.off(event, callback);
    }

    public removeItems(ids: VisId[], senderId?: VisId): VisId[] {
        return super.remove(ids, senderId);
    }

    public setOptions(options?: VisDataSetQueueOptions): void {
        super.setOptions(options);
    }

    public update(data: VisTimelineGroup[], senderId?: VisId): VisId[] {
        return super.update(data, senderId);
    }
}

export interface VisDataSetQueueOptions extends Vis.DataSetQueueOptions {}
export interface VisItemSelectionOptions extends Vis.DataSelectionOptions<VisTimelineItem> {}
export interface VisGroupSelectionOptions extends Vis.DataSelectionOptions<VisTimelineGroup> {}
export type VisDate = Vis.DateType;
export type VisTimelineEvents = Vis.TimelineEvents;
export interface VisTimelineFitOptions extends Vis.TimelineFitOptions {}
export interface VisTimelineEventPropertiesResult extends  Vis.TimelineEventPropertiesResult {}

export class VisTimeline extends Vis.Timeline {}

export * from './vis-timeline.service';
export * from './vis-timeline.directive';
