import * as Vis from 'vis';

export interface VisNetworkData extends Vis.IData {}
export interface VisFitOptions extends Vis.IFitOptions {}
export interface VisNetworkOptions extends Vis.IOptions {}
export class VisNetwork extends Vis.Network {}

export * from './vis-network.directive';
export * from './vis-network.service';