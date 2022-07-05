import { EventEmitter, Injectable } from '@angular/core';
import {
  BoundingBox,
  ClusterOptions,
  Data,
  EdgeOptions,
  FitOptions,
  IdType,
  MoveToOptions,
  Network,
  NetworkEvents,
  NodeOptions,
  OpenClusterOptions,
  Options,
  Position,
} from 'vis-network/esnext';

/**
 * A service to create, manage and control Network instances.
 *
 * @export
 * @class NetworkService
 */
@Injectable()
export class VisNetworkService {
  /**
   * Fired when the user clicks the mouse or taps on a touchscreen device.
   *
   * @type {EventEmitter<any>}
   * @memberOf NetworkService
   */
  public click: EventEmitter<any> = new EventEmitter<any>();

  /**
   * Fired when the user double clicks the mouse or double taps on a touchscreen device.
   * Since a double click is in fact 2 clicks, 2 click events are fired, followed by a double click event.
   * If you do not want to use the click events if a double click event is fired,
   * just check the time between click events before processing them.
   *
   * @type {EventEmitter<any>}
   * @memberOf NetworkService
   */
  public doubleClick: EventEmitter<any> = new EventEmitter<any>();

  /**
   * Fired when the user click on the canvas with the right mouse button.
   * The right mouse button does not select by default.
   * You can use the method getNodeAt to select the node if you want.
   *
   * @type {EventEmitter<any>}
   * @memberOf NetworkService
   */
  public oncontext: EventEmitter<any> = new EventEmitter<any>();

  /**
   * Fired when the user clicks and holds the mouse or taps and holds on a touchscreen device.
   * A click event is also fired in this case.
   *
   * @type {EventEmitter<any>}
   * @memberOf NetworkService
   */
  public hold: EventEmitter<any> = new EventEmitter<any>();

  /**
   * Fired after drawing on the canvas has been completed.
   * Can be used to draw on top of the network.
   *
   * @type {EventEmitter<any>}
   * @memberOf NetworkService
   */
  public release: EventEmitter<any> = new EventEmitter<any>();

  /**
   * Fired when the selection has changed by user action.
   * This means a node or edge has been selected, added to the selection or deselected.
   * All select events are only triggered on click and hold.
   *
   * @type {EventEmitter<any>}
   * @memberOf NetworkService
   */
  public select: EventEmitter<any> = new EventEmitter<any>();

  /**
   * Fired when a node has been selected by the user.
   *
   * @type {EventEmitter<any>}
   * @memberOf NetworkService
   */
  public selectNode: EventEmitter<any> = new EventEmitter<any>();

  /**
   * Fired when a edge has been selected by the user.
   *
   * @type {EventEmitter<any>}
   * @memberOf NetworkService
   */
  public selectEdge: EventEmitter<any> = new EventEmitter<any>();

  /**
   * Fired when a node (or nodes) has (or have) been deselected by the user.
   * The previous selection is the list of nodes and edges that were selected before the last user event.
   *
   * @type {EventEmitter<any>}
   * @memberOf NetworkService
   */
  public deselectNode: EventEmitter<any> = new EventEmitter<any>();

  /**
   * Fired when a edge (or edges) has (or have) been deselected by the user.
   * The previous selection is the list of nodes and edges that were selected before the last user event.
   *
   * @type {EventEmitter<any>}
   * @memberOf NetworkService
   */
  public deselectEdge: EventEmitter<any> = new EventEmitter<any>();

  /**
   * Fired when starting a drag.
   *
   * @type {EventEmitter<any>}
   * @memberOf NetworkService
   */
  public dragStart: EventEmitter<any> = new EventEmitter<any>();

  /**
   * Fired when dragging node(s) or the view.
   *
   * @type {EventEmitter<any>}
   * @memberOf NetworkService
   */
  public dragging: EventEmitter<any> = new EventEmitter<any>();

  /**
   * Fired when the drag has finished.
   *
   * @type {EventEmitter<any>}
   * @memberOf NetworkService
   */
  public dragEnd: EventEmitter<any> = new EventEmitter<any>();

  /**
   * Fired if the option interaction:{hover:true} is enabled and the mouse hovers over a node.
   *
   * @type {EventEmitter<any>}
   * @memberOf NetworkService
   */
  public hoverNode: EventEmitter<any> = new EventEmitter<any>();

  /**
   * Fired if the option interaction:{hover:true} is enabled and
   * the mouse moved away from a node it was hovering over before.
   *
   * @type {EventEmitter<any>}
   * @memberOf NetworkService
   */
  public blurNode: EventEmitter<any> = new EventEmitter<any>();

  /**
   * Fired if the option interaction:{hover:true} is enabled and the mouse hovers over an edge.
   *
   * @type {EventEmitter<any>}
   * @memberOf NetworkService
   */
  public hoverEdge: EventEmitter<any> = new EventEmitter<any>();

  /**
   * Fired if the option interaction:{hover:true} is enabled and
   * the mouse moved away from an edge it was hovering over before.
   *
   * @type {EventEmitter<any>}
   * @memberOf NetworkService
   */
  public blurEdge: EventEmitter<any> = new EventEmitter<any>();

  /**
   * Fired when the user zooms in or out.
   *
   * @type {EventEmitter<any>}
   * @memberOf NetworkService
   */
  public zoom: EventEmitter<any> = new EventEmitter<any>();

  /**
   * Fired when the popup (tooltip) is shown.
   *
   * @type {EventEmitter<any>}
   * @memberOf NetworkService
   */
  public showPopup: EventEmitter<any> = new EventEmitter<any>();

  /**
   * Fired when the popup (tooltip) is hidden.
   *
   * @type {EventEmitter<any>}
   * @memberOf NetworkService
   */
  public hidePopup: EventEmitter<any> = new EventEmitter<any>();

  /**
   * Fired when stabilization starts.
   * This is also the case when you drag a node and the physics
   * simulation restarts to stabilize again.
   * Stabilization does not neccesarily imply 'without showing'.
   *
   * @type {EventEmitter<any>}
   * @memberOf NetworkService
   */
  public startStabilizing: EventEmitter<any> = new EventEmitter<any>();

  /**
   * Fired when a multiple of the updateInterval number of iterations is reached.
   * This only occurs in the 'hidden' stabilization.
   *
   * @type {EventEmitter<any>}
   * @memberOf NetworkService
   */
  public stabilizationProgress: EventEmitter<any> = new EventEmitter<any>();

  /**
   * Fired when the 'hidden' stabilization finishes.
   * This does not necessarily mean the network is stabilized;
   * it could also mean that the amount of iterations defined in the options has been reached.
   *
   * @type {EventEmitter<any>}
   * @memberOf NetworkService
   */
  public stabilizationIterationsDone: EventEmitter<any> = new EventEmitter<any>();

  /**
   * Fired when the 'hidden' stabilization finishes.
   * This does not necessarily mean the network is stabilized;
   * it could also mean that the amount of iterations defined in the options has been reached.
   *
   * @type {EventEmitter<any>}
   * @memberOf NetworkService
   */
  public stabilized: EventEmitter<any> = new EventEmitter<any>();

  /**
   * Fired when the size of the canvas has been resized,
   * either by a redraw call when the container div has changed in size,
   * a setSize() call with new values or a setOptions() with new width and/or height values.
   *
   * @type {EventEmitter<any>}
   * @memberOf NetworkService
   */
  public resize: EventEmitter<any> = new EventEmitter<any>();

  /**
   * Fired before the redrawing begins.
   * The simulation step has completed at this point.
   * Can be used to move custom elements before starting drawing the new frame.
   *
   * @type {EventEmitter<any>}
   * @memberOf NetworkService
   */
  public initRedraw: EventEmitter<any> = new EventEmitter<any>();

  /**
   * Fired after the canvas has been cleared, scaled and translated to
   * the viewing position but before all edges and nodes are drawn.
   * Can be used to draw behind the network.
   *
   * @type {EventEmitter<any>}
   * @memberOf NetworkService
   */
  public beforeDrawing: EventEmitter<any> = new EventEmitter<any>();

  /**
   * Fired after drawing on the canvas has been completed.
   * Can be used to draw on top of the network.
   *
   * @type {EventEmitter<any>}
   * @memberOf NetworkService
   */
  public afterDrawing: EventEmitter<any> = new EventEmitter<any>();

  /**
   * Fired when an animation is finished.
   *
   * @type {EventEmitter<any>}
   * @memberOf NetworkService
   */
  public animationFinished: EventEmitter<any> = new EventEmitter<any>();

  /**
   * Fired when a user changes any option in the configurator.
   * The options object can be used with the setOptions method or stringified using JSON.stringify().
   * You do not have to manually put the options into the network: this is done automatically.
   * You can use the event to store user options in the database.
   *
   * @type {EventEmitter<any>}
   * @memberOf NetworkService
   */
  public configChange: EventEmitter<any> = new EventEmitter<any>();

  private networks: { [id: string]: Network } = {};

  /**
   * Creates a new network instance.
   *
   * @param {string} visNetwork The network name/identifier.
   * @param {HTMLElement} container The HTML element that contains the network view.
   * @param {Data} data The initial network nodes and edges.
   * @param {Options} [options] The network options.
   *
   * @throws {Error} Thrown when a network with the same name already exists.
   *
   * @memberOf NetworkService
   */
  public create(visNetwork: string, container: HTMLElement, data: Data, options?: Options): void {
    if (this.networks[visNetwork]) {
      throw new Error(`Network with id ${visNetwork} already exists.`);
    }

    this.networks[visNetwork] = new Network(container, data, options);
  }

  /**
   * Remove the network from the DOM and remove all Hammer bindings and references.
   *
   * @param {string} visNetwork The network name/identifier.
   *
   * @memberOf NetworkService
   */
  public destroy(visNetwork: string): void {
    if (this.networks[visNetwork]) {
      this.networks[visNetwork].destroy();
      delete this.networks[visNetwork];
    }
  }

  /**
   * Activates an event.
   *
   * @param {string} visNetwork The network name/identifier.
   * @param {NetworkEvents} eventName The event name.
   * @param {boolean} preventDefault Stops the default behavior of the event.
   * @returns {boolean} Returns true when the event was activated.
   *
   * @memberOf NetworkService
   */
  public on(visNetwork: string, eventName: NetworkEvents, preventDefault?: boolean): boolean {
    if (this.networks[visNetwork]) {
      /* tslint:disable */
      const that: { [index: string]: any } = this;
      /* tslint:enable */
      this.networks[visNetwork].on(eventName, (params: any) => {
        const emitter = that[eventName] as EventEmitter<any>;
        if (emitter) {
          emitter.emit(params ? [visNetwork].concat(params) : visNetwork);
        }
        if (preventDefault && params.event) {
          params.event.preventDefault();
        }
      });

      return true;
    }

    return false;
  }

  /**
   * Deactivates an event.
   *
   * @param {string} visNetwork The network name/identifier.
   * @param {NetworkEvents} eventName The event name.
   *
   * @memberOf NetworkService
   */
  public off(visNetwork: string, eventName: NetworkEvents): void {
    if (this.networks[visNetwork]) {
      this.networks[visNetwork].off(eventName);
    }
  }

  /**
   * Activates an event listener only once.
   * After it has taken place, the event listener will be removed.
   *
   * @param {string} visNetwork The network name/identifier.
   * @param {NetworkEvents} eventName The event name.
   * @returns {boolean} Returns true when the event was activated.
   *
   * @memberOf NetworkService
   */
  public once(visNetwork: string, eventName: NetworkEvents): boolean {
    if (this.networks[visNetwork]) {
      /* tslint:disable */
      const that: { [index: string]: any } = this;
      /* tslint:disable */
      this.networks[visNetwork].on(eventName, (params: any) => {
        const emitter = that[eventName] as EventEmitter<any>;
        if (emitter) {
          emitter.emit(params ? [visNetwork].concat(params) : visNetwork);
          this.off(visNetwork, eventName);
        }
      });

      return true;
    }

    return false;
  }

  /**
   * Override all the data in the network.
   * If stabilization is enabled in the physics module,
   * the network will stabilize again.
   * This method is also performed when first initializing the network.
   *
   * @param {string} visNetwork The network name/identifier.
   * @param {Data} data The network data.
   *
   * @throws {Error} Thrown when the network does not exist.
   *
   * @memberOf NetworkService
   */
  public setData(visNetwork: string, data: Data): void {
    if (this.networks[visNetwork]) {
      this.networks[visNetwork].setData(data);
    } else {
      throw new Error(`Network with id ${visNetwork} not found.`);
    }
  }

  /**
   * Set the options.
   *
   * @param {string} visNetwork The network name/identifier.
   * @param {Options} options The network options.
   *
   * @throws {Error} Thrown when the network does not exist.
   *
   * @memberOf NetworkService
   */
  public setOptions(visNetwork: string, options: Options): void {
    if (this.networks[visNetwork]) {
      this.networks[visNetwork].setOptions(options);
    } else {
      throw new Error(`Network with id ${visNetwork} not found.`);
    }
  }

  /**
   * Selects the nodes corresponding to the id's in the input array.
   * This method unselects all other objects before selecting its own objects.
   * Does not fire events.
   *
   * @param {string} visNetwork The network name/identifier.
   * @param {IdType[]} nodeIds The node ids that should be selected.
   * @param {boolean} [highlightEdges] If highlightEdges is true or undefined,
   *                                   the neighbouring edges will also be selected.
   *
   * @throws {Error} Thrown when the network does not exist.
   *
   * @memberOf NetworkService
   */
  public selectNodes(visNetwork: string, nodeIds: IdType[], highlightEdges?: boolean): void {
    if (this.networks[visNetwork]) {
      this.networks[visNetwork].selectNodes(nodeIds, highlightEdges);
    } else {
      throw new Error(`Network with id ${visNetwork} not found.`);
    }
  }

  /**
   * Selects the nodes and edges corresponding to the id's in the input arrays.
   * Does not fire events.
   *
   * @param {string} visNetwork The network name/identifier.
   * @param { nodes: IdType[], edges: IdType[] } selection The node and edge ids that should be selected.
   * @param { unselectAll?: boolean, highlightEdges?: boolean } [options]
   * If unselectAll is true or undefined, the other objects will be deselected.
   * If highlightEdges is true or undefined, the neighbouring edges will also be selected.
   *
   * @throws {Error} Thrown when the network does not exist.
   *
   * @memberOf NetworkService
   */
  public setSelection(
    visNetwork: string,
    selection: { nodes: IdType[]; edges: IdType[] },
    options: { unselectAll?: boolean; highlightEdges?: boolean } = {}
  ): void {
    if (this.networks[visNetwork]) {
      this.networks[visNetwork].setSelection(selection, options);
    } else {
      throw new Error(`Network with id ${visNetwork} not found.`);
    }
  }

  /**
   * Returns an object with selected nodes and edges ids.
   *
   * @param {string} visNetwork The network name/identifier.
   * @returns {{ nodes: IdType[], edges: IdType[] }}
   * The selected node and edge ids or undefined when the network does not exist.
   *
   * @memberOf NetworkService
   */
  public getSelection(visNetwork: string): { nodes: IdType[]; edges: IdType[] } {
    if (this.networks[visNetwork]) {
      return this.networks[visNetwork].getSelection();
    }
    return undefined;
  }

  /**
   * Returns an array of selected node ids.
   *
   * @param {string} visNetwork The network name/identifier.
   * @returns {IdType[]} The selected node ids or undefined when the network does not exist.
   *
   * @memberOf NetworkService
   */
  public getSelectedNodes(visNetwork: string): IdType[] {
    if (this.networks[visNetwork]) {
      return this.networks[visNetwork].getSelectedNodes();
    }
    return undefined;
  }

  /**
   * Returns an array of selected edge ids.
   *
   * @param {string} visNetwork The network name/identifier.
   * @returns {IdType[]} The selected edge ids or undefined when the network does not exist.
   *
   * @memberOf NetworkService
   */
  public getSelectedEdges(visNetwork: string): IdType[] {
    if (this.networks[visNetwork]) {
      return this.networks[visNetwork].getSelectedEdges();
    }
    return undefined;
  }

  /**
   * Unselect all objects.
   * Does not fire events.
   *
   * @param {string} visNetwork The network name/identifier.
   *
   * @throws {Error} Thrown when the network does not exist.
   *
   * @memberOf NetworkService
   */
  public unselectAll(visNetwork: string): void {
    if (this.networks[visNetwork]) {
      this.networks[visNetwork].unselectAll();
    } else {
      throw new Error(`Network with id ${visNetwork} not found.`);
    }
  }

  /**
   * Zooms out so all nodes fit on the canvas.
   *
   * @param {string} visNetwork The network name/identifier.
   * @param {VisFitOptions} [options] Options to customize.
   *
   * @throws {Error} Thrown when the network does not exist.
   *
   * @memberOf NetworkService
   */
  public fit(visNetwork: string, options?: FitOptions): void {
    if (this.networks[visNetwork]) {
      this.networks[visNetwork].fit(options);
    } else {
      throw new Error(`Network with id ${visNetwork} not found.`);
    }
  }

  /**
   * Redraw the network.
   *
   * @param {string} visNetwork The network name/identifier.
   *
   * @throws {Error} Thrown when the network does not exist.
   *
   * @memberOf NetworkService
   */
  public redraw(visNetwork: string): void {
    if (this.networks[visNetwork]) {
      this.networks[visNetwork].redraw();
    } else {
      throw new Error(`Network with id ${visNetwork} not found.`);
    }
  }

  /**
   * Go into addNode mode. Having edit mode or manipulation enabled is not required.
   * To get out of this mode, call disableEditMode(). The callback functions defined in handlerFunctions still apply.
   * To use these methods without having the manipulation GUI, make sure you set enabled to false.
   *
   * @param {string} visNetwork The network name/identifier.
   *
   * @throws {Error} Thrown when the network does not exist.
   *
   * @memberOf NetworkService
   */
  public addNodeMode(visNetwork: string): void {
    if (this.networks[visNetwork]) {
      this.networks[visNetwork].addNodeMode();
    } else {
      throw new Error(`Network with id ${visNetwork} not found.`);
    }
  }

  /**
   * Programatically enable the edit mode.
   * Similar effect to pressing the edit button.
   *
   * @param {string} visNetwork The network name/identifier.
   *
   * @throws {Error} Thrown when the network does not exist.
   *
   * @memberOf NetworkService
   */
  public enableEditMode(visNetwork: string): void {
    if (this.networks[visNetwork]) {
      this.networks[visNetwork].enableEditMode();
    } else {
      throw new Error(`Network with id ${visNetwork} not found.`);
    }
  }

  /**
   * Go into addEdge mode.
   * The explaination from addNodeMode applies here as well.
   *
   * @param {string} visNetwork The network name/identifier.
   *
   * @throws {Error} Thrown when the network does not exist.
   *
   * @memberOf NetworkService
   */
  public addEdgeMode(visNetwork: string): void {
    if (this.networks[visNetwork]) {
      this.networks[visNetwork].addEdgeMode();
    } else {
      throw new Error(`Network with id ${visNetwork} not found.`);
    }
  }

  /**
   * Programatically disable the edit mode.
   * Similar effect to pressing the close icon
   * (small cross in the corner of the toolbar).
   *
   * @param {string} visNetwork The network name/identifier.
   *
   * @throws {Error} Thrown when the network does not exist.
   *
   * @memberOf NetworkService
   */
  public disableEditMode(visNetwork: string): void {
    if (this.networks[visNetwork]) {
      this.networks[visNetwork].disableEditMode();
    } else {
      throw new Error(`Network with id ${visNetwork} not found.`);
    }
  }

  /**
   * Delete selected.
   * Having edit mode or manipulation enabled is not required.
   *
   * @param {string} visNetwork The network name/identifier.
   *
   * @throws {Error} Thrown when the network does not exist.
   *
   * @memberOf NetworkService
   */
  public deleteSelected(visNetwork: string): void {
    if (this.networks[visNetwork]) {
      this.networks[visNetwork].deleteSelected();
    } else {
      throw new Error(`Network with id ${visNetwork} not found.`);
    }
  }

  /**
   * Makes a cluster.
   *
   * @param {string} visNetwork The network name/identifier.
   * @param {ClusterOptions} [options] The joinCondition function is presented with all nodes.
   *
   * @throws {Error} Thrown when the network does not exist.
   *
   * @memberOf NetworkService
   */
  public cluster(visNetwork: string, options?: ClusterOptions): void {
    if (this.networks[visNetwork]) {
      this.networks[visNetwork].cluster(options);
    } else {
      throw new Error(`Network with id ${visNetwork} not found.`);
    }
  }

  /**
   * This method looks at the provided node and makes a cluster of it and all it's connected nodes.
   * The behaviour can be customized by proving the options object.
   * All options of this object are explained below.
   * The joinCondition is only presented with the connected nodes.
   *
   * @param {string} visNetwork The network name/identifier.
   * @param {IdType} nodeId the id of the node
   * @param {ClusterOptions} [options] the cluster options
   *
   * @memberOf NetworkService
   */
  public clusterByConnection(visNetwork: string, nodeId: IdType, options?: ClusterOptions): void {
    if (this.networks[visNetwork]) {
      this.networks[visNetwork].clusterByConnection(nodeId as any, options);
    } else {
      throw new Error(`Network with id ${visNetwork} not found.`);
    }
  }

  /**
   * This method checks all nodes in the network and those with a equal or higher
   * amount of edges than specified with the hubsize qualify.
   * If a hubsize is not defined, the hubsize will be determined as the average
   * value plus two standard deviations.
   * For all qualifying nodes, clusterByConnection is performed on each of them.
   * The options object is described for clusterByConnection and does the same here.
   *
   * @param {string} visNetwork The network name/identifier.
   * @param {number} [hubsize] optional hubsize
   * @param {ClusterOptions} [options] optional cluster options
   *
   * @memberOf NetworkService
   */
  public clusterByHubsize(visNetwork: string, hubsize?: number, options?: ClusterOptions): void {
    if (this.networks[visNetwork]) {
      this.networks[visNetwork].clusterByHubsize(hubsize, options);
    } else {
      throw new Error(`Network with id ${visNetwork} not found.`);
    }
  }

  /**
   * This method will cluster all nodes with 1 edge with their respective connected node.
   *
   * @param {string} visNetwork The network name/identifier.
   * @param {ClusterOptions} [options] optional cluster options
   *
   * @memberOf NetworkService
   */
  public clusterOutliers(visNetwork: string, options?: ClusterOptions): void {
    if (this.networks[visNetwork]) {
      this.networks[visNetwork].clusterOutliers(options);
    } else {
      throw new Error(`Network with id ${visNetwork} not found.`);
    }
  }

  /**
   * Nodes can be in clusters.
   * Clusters can also be in clusters.
   * This function returns an array of nodeIds showing where the node is.
   *
   * Example:
   * cluster 'A' contains cluster 'B', cluster 'B' contains cluster 'C',
   * cluster 'C' contains node 'fred'.
   *
   * network.clustering.findNode('fred') will return ['A','B','C','fred'].
   *
   * @param {string} visNetwork The network name/identifier.
   * @param {IdType} nodeId the node id.
   * @returns {IdType[]} an array of nodeIds showing where the node is
   *
   * @memberOf NetworkService
   */
  public findNode(visNetwork: string, nodeId: IdType): IdType[] {
    if (this.networks[visNetwork]) {
      return this.networks[visNetwork].findNode(nodeId);
    } else {
      throw new Error(`Network with id ${visNetwork} not found.`);
    }
  }

  /**
   * Similar to findNode in that it returns all the edge ids that were
   * created from the provided edge during clustering.
   *
   * @param {string} visNetwork The network name/identifier.
   * @param {IdType} baseEdgeId the base edge id
   * @returns {IdType[]} an array of edgeIds
   *
   * @memberOf NetworkService
   */
  public getClusteredEdges(visNetwork: string, baseEdgeId: IdType): IdType[] {
    if (this.networks[visNetwork]) {
      return this.networks[visNetwork].getClusteredEdges(baseEdgeId);
    } else {
      throw new Error(`Network with id ${visNetwork} not found.`);
    }
  }

  /**
   * When a clusteredEdgeId is available, this method will return the original
   * baseEdgeId provided in data.edges ie.
   * After clustering the 'SelectEdge' event is fired but provides only the clustered edge.
   * This method can then be used to return the baseEdgeId.
   *
   * @param {string} visNetwork The network name/identifier.
   * @param {IdType} clusteredEdgeId
   * @returns {IdType}
   *
   * @memberOf NetworkService
   *
   */
  public getBaseEdge(visNetwork: string, clusteredEdgeId: IdType): IdType {
    if (this.networks[visNetwork]) {
      return this.networks[visNetwork].getBaseEdge(clusteredEdgeId);
    } else {
      throw new Error(`Network with id ${visNetwork} not found.`);
    }
  }

  /**
   * Visible edges between clustered nodes are not the same edge as the ones provided
   * in data.edges passed on network creation. With each layer of clustering, copies of
   * the edges between clusters are created and the previous edges are hidden,
   * until the cluster is opened. This method takes an edgeId (ie. a base edgeId from data.edges)
   * and applys the options to it and any edges that were created from it while clustering.
   *
   * @param {string} visNetwork The network name/identifier.
   * @param {IdType} startEdgeId
   * @param {VisEdgeOptions} [options]
   *
   * @memberOf NetworkService
   *
   */
  public updateEdge(visNetwork: string, startEdgeId: IdType, options?: EdgeOptions): void {
    if (this.networks[visNetwork]) {
      this.networks[visNetwork].updateEdge(startEdgeId, options);
    } else {
      throw new Error(`Network with id ${visNetwork} not found.`);
    }
  }

  /**
   * Clustered Nodes when created are not contained in the original data.nodes
   * passed on network creation. This method updates the cluster node.
   *
   * @param {string} visNetwork The network name/identifier.
   * @param {IdType} clusteredNodeId
   * @param {NodeOptions} options
   *
   * @memberOf NetworkService
   */
  public updateClusteredNode(visNetwork: string, clusteredNodeId: IdType, options?: NodeOptions): void {
    if (this.networks[visNetwork]) {
      this.networks[visNetwork].updateClusteredNode(clusteredNodeId, options);
    } else {
      throw new Error(`Network with id ${visNetwork} not found.`);
    }
  }

  /**
   * Returns an array of all nodeIds of the nodes that
   * would be released if you open the cluster.
   *
   * @param {string} visNetwork The network name/identifier.
   * @param {IdType} clusterNodeId the id of the cluster node
   * @returns {IdType[]}
   *
   * @memberOf NetworkService
   */
  public getNodesInCluster(visNetwork: string, clusterNodeId: IdType): IdType[] {
    if (this.networks[visNetwork]) {
      return this.networks[visNetwork].getNodesInCluster(clusterNodeId);
    } else {
      throw new Error(`Network with id ${visNetwork} not found.`);
    }
  }

  /**
   * Opens the cluster, releases the contained nodes and edges,
   * removing the cluster node and cluster edges.
   *
   * @param {string} visNetwork The network name/identifier.
   * @param {IdType} nodeId The node id that represents the cluster.
   * @param {OpenClusterOptions} [options] Cluster options.
   *
   * @throws {Error} Thrown when the network does not exist.
   *
   * @memberOf NetworkService
   */
  public openCluster(visNetwork: string, nodeId: IdType, options?: OpenClusterOptions): void {
    if (this.networks[visNetwork]) {
      this.networks[visNetwork].openCluster(nodeId, options);
    } else {
      throw new Error(`Network with id ${visNetwork} not found.`);
    }
  }

  /**
   * Returns true if the node whose ID has been supplied is a cluster.
   *
   * @param {string} visNetwork The network name/identifier.
   * @param {IdType} nodeId The associated node id.
   * @returns {boolean} True if the node whose ID has been supplied is a cluster.
   *
   * @memberOf NetworkService
   */
  public isCluster(visNetwork: string, nodeId: IdType): boolean {
    if (this.networks[visNetwork]) {
      return this.networks[visNetwork].isCluster(nodeId);
    }

    return false;
  }

  /**
   * If you like the layout of your network and would like it to start in the same way next time,
   * ask for the seed using this method and put it in the layout.randomSeed option.
   *
   * @param {string} visNetwork The network name/identifier.
   * @returns {number} The seed of the current network or -1 when the network is not defined.
   *
   * @memberOf NetworkService
   */
  public getSeed(visNetwork: string): number {
    if (this.networks[visNetwork]) {
      return this.networks[visNetwork].getSeed() as number;
    }

    return -1;
  }

  /**
   * This function converts canvas coordinates to coordinates on the DOM.
   * Input and output are in the form of {x:Number,y:Number}.
   * The DOM values are relative to the network container.
   *
   * @param {string} visNetwork The network name/identifier.
   * @param {Position} position The canvas position.
   * @returns {Position} The DOM position.
   *
   * @memberOf NetworkService
   */
  public canvasToDOM(visNetwork: string, position: Position) {
    return this.networks[visNetwork].canvasToDOM(position);
  }

  /**
   * This function converts DOM coordinates to coordinates on the canvas.
   * Input and output are in the form of {x:Number,y:Number}.
   * The DOM values are relative to the network container.
   *
   * @param {string} visNetwork The network name/identifier.
   * @param {Position} position The DOM position.
   * @returns {Position} The canvas position.
   *
   * @memberOf NetworkService
   */
  public DOMtoCanvas(visNetwork: string, position: Position) {
    return this.networks[visNetwork].DOMtoCanvas(position);
  }

  /**
   * This function looks up the node at the given DOM coordinates on the canvas.
   * Input and output are in the form of {x:Number,y:Number}.
   * The DOM values are relative to the network container -> DOM not Canvas coords.
   *
   * @param {string} visNetwork The network name/identifier.
   * @param {Position} position The DOM position.
   * @returns {IdType} nodeId The associated node id.
   *
   * @memberOf NetworkService
   */
  public getNodeAt(visNetwork: string, position: Position) {
    return this.networks[visNetwork].getNodeAt(position);
  }

  /**
   * This function looks up the edge at the given DOM coordinates on the canvas.
   * Input and output are in the form of {x:Number,y:Number}.
   * The DOM values are relative to the network container -> DOM not Canvas coords.
   *
   * @param {string} visNetwork The network name/identifier.
   * @param {Position} position The DOM position.
   * @returns {IdType} edgeId The associated edge id.
   *
   * @memberOf NetworkService
   */
  public getEdgeAt(visNetwork: string, position: Position) {
    return this.networks[visNetwork].getEdgeAt(position);
  }

  /**
   * This function looks up the edges for a given nodeId.
   * The DOM values are relative to the network container -> DOM not Canvas coords.
   *
   * @param {string} visNetwork The network name/identifier.
   * @param {IdType} nodeId The associated node id.
   * @returns {IdType[]} Return array of edge ids
   *
   * @memberOf NetworkService
   */
  public getConnectedEdges(visNetwork: string, nodeId: IdType) {
    return this.networks[visNetwork].getConnectedEdges(nodeId);
  }

  /**
   * Returns an array of nodeIds of the all the nodes that are directly connected to this node.
   * If you supply an edgeId, vis will first match the id to nodes.
   * If no match is found, it will search in the edgelist and return an array: [fromId, toId].
   *
   * @param {string} visNetwork The network name/identifier.
   * @param nodeOrEdgeId a node or edge id
   * @returns {IdType[]} Return array of node ids
   */
  public getConnectedNodes(visNetwork: string, nodeOrEdgeId: IdType) {
    return this.networks[visNetwork].getConnectedNodes(nodeOrEdgeId);
  }

  /**
   * Returns the positions of the nodes.
   * @param {string} visNetwork The network name/identifier.
   * @param {Array.<Node.id>|String} [ids]  --> optional, can be array of nodeIds, can be string
   * @returns {{}}
   */
  public getPositions(visNetwork: string, nodeIds?: IdType[]) {
    return this.networks[visNetwork].getPositions(nodeIds);
  }

  /**
   * Returns the positions of the nodes.
   * @param {string} visNetwork The network name/identifier.
   */
  public getBoundingBox(visNetwork: string, nodeId: IdType): BoundingBox {
    return this.networks[visNetwork].getBoundingBox(nodeId);
  }

  /**
   * Returns the positions of the nodes.
   * @param {string} visNetwork The network name/identifier.
   */
  public storePositions(visNetwork: string): void {
    return this.networks[visNetwork].storePositions();
  }

  /**
   * You can animate or move the camera using the moveTo method.
   *
   * @param {string} visNetwork The network name/identifier.
   * @param {MoveToOptions} options Options for moveTo function.
   */
  public moveTo(visNetwork: string, moveToOptions: MoveToOptions) {
    return this.networks[visNetwork].moveTo(moveToOptions);
  }

  /**
   * Start the physics simulation.
   * This is normally done whenever needed and is only really useful
   * if you stop the simulation yourself and wish to continue it afterwards.
   * @param {string} visNetwork The network name/identifier.
   */
  public startSimulation(visNetwork: string) {
    return this.networks[visNetwork].startSimulation();
  }

  /**
   * This stops the physics simulation and triggers a stabilized event.
   * Tt can be restarted by dragging a node,
   * altering the dataset or calling startSimulation().
   * @param {string} visNetwork The network name/identifier.
   */
  public stopSimulation(visNetwork: string) {
    return this.networks[visNetwork].stopSimulation();
  }

  /**
   * Returns the current scale of the network. 1.0 is comparible to 100%, 0 is zoomed out infinitely.
   *
   * @param {string} visNetwork The network name/identifier.
   *
   * @throws {Error} Thrown when the network does not exist.
   *
   * @memberOf NetworkService
   */
  public getScale(visNetwork: string): number {
    if (this.networks[visNetwork]) {
      return this.networks[visNetwork].getScale();
    } else {
      throw new Error(`Network with id ${visNetwork} not found.`);
    }
  }
}
