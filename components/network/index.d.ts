import * as Vis from 'vis';
import { VisDataSetOptions, VisDataSetQueueOptions, VisId } from '../timeline/index';
export { VisId } from '../timeline/index';
export declare type VisNetworkEvents = Vis.NetworkEvents;
export interface VisClusterOptions extends Vis.ClusterOptions {
}
export interface VisOpenClusterOptions extends Vis.OpenClusterOptions {
}
export interface VisNetworkData extends Vis.Data {
}
export interface VisNode extends Vis.Node {
    title?: string;
}
export interface VisEdge extends Vis.Edge {
}
export interface VisNodeSelectionOptions extends Vis.DataSelectionOptions<VisNode> {
}
export interface VisEdgeSelectionOptions extends Vis.DataSelectionOptions<VisEdge> {
}
export interface VisFitOptions extends Vis.FitOptions {
}
export interface VisNetworkOptions extends Vis.Options {
}
export interface VisEdgeOptions extends Vis.EdgeOptions {
}
export declare class VisNetwork extends Vis.Network {
}
export interface VisNodeOptions extends Vis.NodeOptions {
}
export interface VisPosition extends Vis.Position {
}
export declare class VisNodes extends Vis.DataSet<VisNode> {
    constructor(data?: VisNode[], options?: VisDataSetOptions);
    public getLength(): number;
    public add(data: VisNode | VisNode[], senderId?: VisId): VisId[];
    public clear(senderId?: VisId): VisId[];
    public distinct(field: string): any[];
    public flush(): void;
    public forEach(callback: (item: VisNode, id: VisId) => void, options?: VisNodeSelectionOptions): void;
    public getAll(options?: VisNodeSelectionOptions): VisNode[];
    public getById(id: VisId, options?: VisNodeSelectionOptions): VisNode;
    public getByIds(ids: VisId[], options?: VisNodeSelectionOptions): VisNode[];
    public getDataSet(): VisNodes;
    public getIds(options?: VisNodeSelectionOptions): VisId[];
    public map(callback: (item: VisNode, id: VisId) => any, options?: VisNodeSelectionOptions): any[];
    public max(field: string): VisNode;
    public min(field: string): VisNode;
    public on(event: string, callback: (event: string, properties: any, senderId: VisId) => void): void;
    public off(event: string, callback: (event: string, properties: any, senderId: VisId) => void): void;
    public removeItems(ids: VisId[], senderId?: VisId): VisId[];
    public setOptions(options?: VisDataSetQueueOptions): void;
    public update(data: VisNode[], senderId?: VisId): VisId[];
}
export declare class VisEdges extends Vis.DataSet<VisEdge> {
    constructor(data?: VisEdge[], options?: VisDataSetOptions);
    public getLength(): number;
    public add(data: VisEdge | VisEdge[], senderId?: VisId): VisId[];
    public clear(senderId?: VisId): VisId[];
    public distinct(field: string): any[];
    public flush(): void;
    public forEach(callback: (item: VisEdge, id: VisId) => void, options?: VisEdgeSelectionOptions): void;
    public getAll(options?: VisEdgeSelectionOptions): VisEdge[];
    public getById(id: VisId, options?: VisEdgeSelectionOptions): VisEdge;
    public getByIds(ids: VisId[], options?: VisEdgeSelectionOptions): VisEdge[];
    public getDataSet(): VisEdges;
    public getIds(options?: VisEdgeSelectionOptions): VisId[];
    public map(callback: (item: VisEdge, id: VisId) => any, options?: VisEdgeSelectionOptions): any[];
    public max(field: string): VisEdge;
    public min(field: string): VisEdge;
    public on(event: string, callback: (event: string, properties: any, senderId: VisId) => void): void;
    public off(event: string, callback: (event: string, properties: any, senderId: VisId) => void): void;
    public removeItems(ids: VisId[], senderId?: VisId): VisId[];
    public setOptions(options?: VisDataSetQueueOptions): void;
    public update(data: VisEdge[], senderId?: VisId): VisId[];
}
export * from './vis-network.directive';
export * from './vis-network.service';
