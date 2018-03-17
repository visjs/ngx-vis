import * as Vis from 'vis';
import { VisDataSetOptions, VisDataSetQueueOptions, VisId } from '../timeline/index';
export { VisId } from '../timeline/index';
export declare type VisNetworkEvents = Vis.NetworkEvents;
export declare type VisMoveToOptions = Vis.MoveToOptions;
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
    getLength(): number;
    add(data: VisNode | VisNode[], senderId?: VisId): VisId[];
    clear(senderId?: VisId): VisId[];
    distinct(field: string): any[];
    flush(): void;
    forEach(callback: (item: VisNode, id: VisId) => void, options?: VisNodeSelectionOptions): void;
    getAll(options?: VisNodeSelectionOptions): VisNode[];
    getById(id: VisId, options?: VisNodeSelectionOptions): VisNode;
    getByIds(ids: VisId[], options?: VisNodeSelectionOptions): VisNode[];
    getDataSet(): VisNodes;
    getIds(options?: VisNodeSelectionOptions): VisId[];
    map(callback: (item: VisNode, id: VisId) => any, options?: VisNodeSelectionOptions): any[];
    max(field: string): VisNode;
    min(field: string): VisNode;
    on(event: string, callback: (event: string, properties: any, senderId: VisId) => void): void;
    off(event: string, callback: (event: string, properties: any, senderId: VisId) => void): void;
    removeItems(ids: VisId[], senderId?: VisId): VisId[];
    setOptions(options?: VisDataSetQueueOptions): void;
    update(data: VisNode[], senderId?: VisId): VisId[];
}
export declare class VisEdges extends Vis.DataSet<VisEdge> {
    constructor(data?: VisEdge[], options?: VisDataSetOptions);
    getLength(): number;
    add(data: VisEdge | VisEdge[], senderId?: VisId): VisId[];
    clear(senderId?: VisId): VisId[];
    distinct(field: string): any[];
    flush(): void;
    forEach(callback: (item: VisEdge, id: VisId) => void, options?: VisEdgeSelectionOptions): void;
    getAll(options?: VisEdgeSelectionOptions): VisEdge[];
    getById(id: VisId, options?: VisEdgeSelectionOptions): VisEdge;
    getByIds(ids: VisId[], options?: VisEdgeSelectionOptions): VisEdge[];
    getDataSet(): VisEdges;
    getIds(options?: VisEdgeSelectionOptions): VisId[];
    map(callback: (item: VisEdge, id: VisId) => any, options?: VisEdgeSelectionOptions): any[];
    max(field: string): VisEdge;
    min(field: string): VisEdge;
    on(event: string, callback: (event: string, properties: any, senderId: VisId) => void): void;
    off(event: string, callback: (event: string, properties: any, senderId: VisId) => void): void;
    removeItems(ids: VisId[], senderId?: VisId): VisId[];
    setOptions(options?: VisDataSetQueueOptions): void;
    update(data: VisEdge[], senderId?: VisId): VisId[];
}
export * from './vis-network.directive';
export * from './vis-network.service';
