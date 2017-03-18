import * as Vis from 'vis';

import { VisDataSetOptions, VisDataSetQueueOptions, VisId } from '../timeline/index';

export { VisId } from '../timeline/index';
export type VisNetworkEvents = Vis.NetworkEvents;

export interface VisClusterOptions extends Vis.ClusterOptions {}
export interface VisOpenClusterOptions extends Vis.OpenClusterOptions {}
export interface VisNetworkData extends Vis.Data {}
export interface VisNode extends Vis.Node { title?: string; }
export interface VisEdge extends Vis.Edge {}
export interface VisNodeSelectionOptions extends Vis.DataSelectionOptions<VisNode> {}
export interface VisEdgeSelectionOptions extends Vis.DataSelectionOptions<VisEdge> {}
export interface VisFitOptions extends Vis.FitOptions {}
export interface VisNetworkOptions extends Vis.Options {}
export interface VisEdgeOptions extends Vis.EdgeOptions {}
export class VisNetwork extends Vis.Network {}
export interface VisNodeOptions extends Vis.NodeOptions {}
export interface VisPosition extends Vis.Position {}

export class VisNodes extends Vis.DataSet<VisNode> {
    public constructor(data?: VisNode[], options?: VisDataSetOptions) {
        super(data, options);
    }

    public getLength(): number {
        return this.length;
    }

    public add(data: VisNode | VisNode[], senderId?: VisId): VisId[] {
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

    public forEach(callback: (item: VisNode, id: VisId) => void, options?: VisNodeSelectionOptions): void {
        super.forEach(callback, options);
    }

    public getAll(options?: VisNodeSelectionOptions): VisNode[] {
        return super.get(options);
    }

    public getById(id: VisId, options?: VisNodeSelectionOptions): VisNode {
        return super.get(id, options);
    }

    public getByIds(ids: VisId[], options?: VisNodeSelectionOptions): VisNode[] {
        return super.get(ids, options);
    }

    public getDataSet(): VisNodes {
        return super.getDataSet() as VisNodes;
    }

    public getIds(options?: VisNodeSelectionOptions): VisId[] {
        return super.getIds(options);
    }

    public map(callback: (item: VisNode, id: VisId) => any, options?: VisNodeSelectionOptions): any[] {
        return super.map(callback, options);
    }

    public max(field: string): VisNode {
        return super.max(field);
    }

    public min(field: string): VisNode {
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

    public update(data: VisNode[], senderId?: VisId): VisId[] {
        return super.update(data, senderId);
    }
}

export class VisEdges extends Vis.DataSet<VisEdge> {
    public constructor(data?: VisEdge[], options?: VisDataSetOptions) {
        super(data, options);
    }

    public getLength(): number {
        return this.length;
    }

    public add(data: VisEdge | VisEdge[], senderId?: VisId): VisId[] {
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

    public forEach(callback: (item: VisEdge, id: VisId) => void, options?: VisEdgeSelectionOptions): void {
        super.forEach(callback, options);
    }

    public getAll(options?: VisEdgeSelectionOptions): VisEdge[] {
        return super.get(options);
    }

    public getById(id: VisId, options?: VisEdgeSelectionOptions): VisEdge {
        return super.get(id, options);
    }

    public getByIds(ids: VisId[], options?: VisEdgeSelectionOptions): VisEdge[] {
        return super.get(ids, options);
    }

    public getDataSet(): VisEdges {
        return super.getDataSet() as VisEdges;
    }

    public getIds(options?: VisEdgeSelectionOptions): VisId[] {
        return super.getIds(options);
    }

    public map(callback: (item: VisEdge, id: VisId) => any, options?: VisEdgeSelectionOptions): any[] {
        return super.map(callback, options);
    }

    public max(field: string): VisEdge {
        return super.max(field);
    }

    public min(field: string): VisEdge {
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

    public update(data: VisEdge[], senderId?: VisId): VisId[] {
        return super.update(data, senderId);
    }
}

export * from './vis-network.directive';
export * from './vis-network.service';
