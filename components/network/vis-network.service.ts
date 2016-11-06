import { Injectable, EventEmitter } from '@angular/core';
import * as Vis from 'vis';

/**
 * A service to create, manage and control VisNetwork instances.
 * 
 * @export
 * @class VisNetworkService
 */
@Injectable()
export class VisNetworkService {

  /**
   * Fired when the user clicks the mouse or taps on a touchscreen device.
   * 
   * @type {EventEmitter<any>}
   * @memberOf VisNetworkService
   */
  public click: EventEmitter<any> = new EventEmitter<any>();

  /**
   * Fired when the user double clicks the mouse or double taps on a touchscreen device.
   * Since a double click is in fact 2 clicks, 2 click events are fired, followed by a double click event.
   * If you do not want to use the click events if a double click event is fired,
   * just check the time between click events before processing them.
   * 
   * @type {EventEmitter<any>}
   * @memberOf VisNetworkService
   */
  public doubleClick: EventEmitter<any> = new EventEmitter<any>();

  /**
   * Fired when the user click on the canvas with the right mouse button.
   * The right mouse button does not select by default.
   * You can use the method getNodeAt to select the node if you want.
   * 
   * @type {EventEmitter<any>}
   * @memberOf VisNetworkService
   */
  public oncontext: EventEmitter<any> = new EventEmitter<any>();

  /**
   * Fired when the user clicks and holds the mouse or taps and holds on a touchscreen device.
   * A click event is also fired in this case.
   * 
   * @type {EventEmitter<any>}
   * @memberOf VisNetworkService
   */
  public hold: EventEmitter<any> = new EventEmitter<any>();

  /**
   * Fired after drawing on the canvas has been completed.
   * Can be used to draw on top of the network.
   * 
   * @type {EventEmitter<any>}
   * @memberOf VisNetworkService
   */
  public release: EventEmitter<any> = new EventEmitter<any>();

  /**
   * Fired when the selection has changed by user action.
   * This means a node or edge has been selected, added to the selection or deselected.
   * All select events are only triggered on click and hold.
   * 
   * @type {EventEmitter<any>}
   * @memberOf VisNetworkService
   */
  public select: EventEmitter<any> = new EventEmitter<any>();

  /**
   * Fired when a node has been selected by the user.
   * 
   * @type {EventEmitter<any>}
   * @memberOf VisNetworkService
   */
  public selectNode: EventEmitter<any> = new EventEmitter<any>();

  /**
   * Fired when a edge has been selected by the user.
   * 
   * @type {EventEmitter<any>}
   * @memberOf VisNetworkService
   */
  public selectEdge: EventEmitter<any> = new EventEmitter<any>();

  /**
   * Fired when a node (or nodes) has (or have) been deselected by the user.
   * The previous selection is the list of nodes and edges that were selected before the last user event.
   * 
   * @type {EventEmitter<any>}
   * @memberOf VisNetworkService
   */
  public deselectNode: EventEmitter<any> = new EventEmitter<any>();

  /**
   * Fired when a edge (or edges) has (or have) been deselected by the user.
   * The previous selection is the list of nodes and edges that were selected before the last user event.
   * 
   * @type {EventEmitter<any>}
   * @memberOf VisNetworkService
   */
  public deselectEdge: EventEmitter<any> = new EventEmitter<any>();

  /**
   * Fired when starting a drag.
   * 
   * @type {EventEmitter<any>}
   * @memberOf VisNetworkService
   */
  public dragStart: EventEmitter<any> = new EventEmitter<any>();

  /**
   * Fired when dragging node(s) or the view.
   * 
   * @type {EventEmitter<any>}
   * @memberOf VisNetworkService
   */
  public dragging: EventEmitter<any> = new EventEmitter<any>();

  /**
   * Fired when the drag has finished.
   * 
   * @type {EventEmitter<any>}
   * @memberOf VisNetworkService
   */
  public dragEnd: EventEmitter<any> = new EventEmitter<any>();

  /**
   * Fired if the option interaction:{hover:true} is enabled and the mouse hovers over a node.
   * 
   * @type {EventEmitter<any>}
   * @memberOf VisNetworkService
   */
  public hoverNode: EventEmitter<any> = new EventEmitter<any>();

  /**
   * Fired if the option interaction:{hover:true} is enabled and
   * the mouse moved away from a node it was hovering over before.
   * 
   * @type {EventEmitter<any>}
   * @memberOf VisNetworkService
   */
  public blurNode: EventEmitter<any> = new EventEmitter<any>();

  /**
   * Fired if the option interaction:{hover:true} is enabled and the mouse hovers over an edge.
   * 
   * @type {EventEmitter<any>}
   * @memberOf VisNetworkService
   */
  public hoverEdge: EventEmitter<any> = new EventEmitter<any>();

  /**
   * Fired if the option interaction:{hover:true} is enabled and
   * the mouse moved away from an edge it was hovering over before.
   * 
   * @type {EventEmitter<any>}
   * @memberOf VisNetworkService
   */
  public blurEdge: EventEmitter<any> = new EventEmitter<any>();

  /**
   * Fired when the user zooms in or out.
   * 
   * @type {EventEmitter<any>}
   * @memberOf VisNetworkService
   */
  public zoom: EventEmitter<any> = new EventEmitter<any>();

  /**
   * Fired when the popup (tooltip) is shown.
   * 
   * @type {EventEmitter<any>}
   * @memberOf VisNetworkService
   */
  public showPopup: EventEmitter<any> = new EventEmitter<any>();

  /**
   * Fired when the popup (tooltip) is hidden.
   * 
   * @type {EventEmitter<any>}
   * @memberOf VisNetworkService
   */
  public hidePopup: EventEmitter<any> = new EventEmitter<any>();

  /**
   * Fired when stabilization starts.
   * This is also the case when you drag a node and the physics
   * simulation restarts to stabilize again.
   * Stabilization does not neccesarily imply 'without showing'.
   * 
   * @type {EventEmitter<any>}
   * @memberOf VisNetworkService
   */
  public startStabilizing: EventEmitter<any> = new EventEmitter<any>();

  /**
   * Fired when a multiple of the updateInterval number of iterations is reached.
   * This only occurs in the 'hidden' stabilization.
   * 
   * @type {EventEmitter<any>}
   * @memberOf VisNetworkService
   */
  public stabilizationProgress: EventEmitter<any> = new EventEmitter<any>();

  /**
   * Fired when the 'hidden' stabilization finishes.
   * This does not necessarily mean the network is stabilized;
   * it could also mean that the amount of iterations defined in the options has been reached.
   * 
   * @type {EventEmitter<any>}
   * @memberOf VisNetworkService
   */
  public stabilizationIterationsDone: EventEmitter<any> = new EventEmitter<any>();

  /**
   * Fired when the 'hidden' stabilization finishes.
   * This does not necessarily mean the network is stabilized;
   * it could also mean that the amount of iterations defined in the options has been reached.
   * 
   * @type {EventEmitter<any>}
   * @memberOf VisNetworkService
   */
  public stabilized: EventEmitter<any> = new EventEmitter<any>();

  /**
   * Fired when the size of the canvas has been resized,
   * either by a redraw call when the container div has changed in size,
   * a setSize() call with new values or a setOptions() with new width and/or height values.
   * 
   * @type {EventEmitter<any>}
   * @memberOf VisNetworkService
   */
  public resize: EventEmitter<any> = new EventEmitter<any>();

  /**
   * Fired before the redrawing begins.
   * The simulation step has completed at this point.
   * Can be used to move custom elements before starting drawing the new frame.
   * 
   * @type {EventEmitter<any>}
   * @memberOf VisNetworkService
   */
  public initRedraw: EventEmitter<any> = new EventEmitter<any>();

  /**
   * Fired after the canvas has been cleared, scaled and translated to
   * the viewing position but before all edges and nodes are drawn.
   * Can be used to draw behind the network.
   * 
   * @type {EventEmitter<any>}
   * @memberOf VisNetworkService
   */
  public beforeDrawing: EventEmitter<any> = new EventEmitter<any>();

  /**
   * Fired after drawing on the canvas has been completed.
   * Can be used to draw on top of the network.
   * 
   * @type {EventEmitter<any>}
   * @memberOf VisNetworkService
   */
  public afterDrawing: EventEmitter<any> = new EventEmitter<any>();

  /**
   * Fired when an animation is finished.
   * 
   * @type {EventEmitter<any>}
   * @memberOf VisNetworkService
   */
  public animationFinished: EventEmitter<any> = new EventEmitter<any>();

  /**
   * Fired when a user changes any option in the configurator.
   * The options object can be used with the setOptions method or stringified using JSON.stringify().
   * You do not have to manually put the options into the network: this is done automatically.
   * You can use the event to store user options in the database.
   * 
   * @type {EventEmitter<any>}
   * @memberOf VisNetworkService
   */
  public configChange: EventEmitter<any> = new EventEmitter<any>();

  private _networks: {[id: string]: any} = [];

  /**
   * Creates a new network instance.
   * 
   * @param {string} visNetwork The network name/identifier.
   * @param {HTMLElement} container The HTML element that contains the network view.
   * @param {Vis.IData} data The initial network nodes and edges.
   * @param {Vis.IOptions} [options] The network options.
   * 
   * @throws {Error} Thrown when a network with the same name already exists.
   * 
   * @memberOf VisNetworkService
   */
  public create(
    visNetwork: string,
    container: HTMLElement,
    data: Vis.IData,
    options?: Vis.IOptions): void {
    if (this._networks[visNetwork]) {
      throw new Error(`Network with id ${visNetwork} already exists.`);
    }

    this._networks[visNetwork] = new Vis.Network(container, data, options);
  }

  /**
   * Remove the network from the DOM and remove all Hammer bindings and references.
   * 
   * @param {string} visNetwork The network name/identifier.
   * 
   * @memberOf VisNetworkService
   */
  public destroy(visNetwork: string): void {
    if (this._networks[visNetwork]) {
      this._networks[visNetwork].destroy();
      delete this._networks[visNetwork];
    }
  }

  /**
   * Activates an event.
   * 
   * @param {string} visNetwork The network name/identifier.
   * @param {string} eventName The event name.
   * @returns {boolean} Returns true when the event was activated.
   * 
   * @memberOf VisNetworkService
   */
  public on(visNetwork: string, eventName: string): boolean {
    if (this._networks[visNetwork]) {
      let that: {[index: string]: any} = this;
      this._networks[visNetwork].on(eventName, (params: any) => {
        let emitter = that[eventName] as EventEmitter<any>;
        if (emitter) {
          emitter.emit(params ? [visNetwork].concat(params) : visNetwork);
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
   * @param {string} eventName The event name.
   * 
   * @memberOf VisNetworkService
   */
  public off(visNetwork: string, eventName: string): void {
    if (this._networks[visNetwork]) {
      this._networks[visNetwork].off(eventName);
    }
  }

  /**
   * Activates an event listener only once.
   * After it has taken place, the event listener will be removed.
   * 
   * @param {string} visNetwork The network name/identifier.
   * @param {string} eventName The event name.
   * @returns {boolean} Returns true when the event was activated.
   * 
   * @memberOf VisNetworkService
   */
  public once(visNetwork: string, eventName: string): boolean {
    if (this._networks[visNetwork]) {
      let that: {[index: string]: any} = this;
      this._networks[visNetwork].on(eventName, (params: any) => {
        let emitter = that[eventName] as EventEmitter<any>;
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
   * @param {Vis.IData} data The network data.
   * 
   * @throws {Error} Thrown when the network does not exist.
   * 
   * @memberOf VisNetworkService
   */
  public setData(visNetwork: string, data: Vis.IData): void {
    if (this._networks[visNetwork]) {
      this._networks[visNetwork].setData(data);
    } else {
      throw new Error(`Network with id ${visNetwork} not found.`);
    }
  }

  /**
   * Set the options.
   * 
   * @param {string} visNetwork The network name/identifier.
   * @param {Vis.IOptions} options The network options.
   * 
   * @throws {Error} Thrown when the network does not exist.
   * 
   * @memberOf VisNetworkService
   */
  public setOptions(visNetwork: string, options: Vis.IOptions): void {
    if (this._networks[visNetwork]) {
      this._networks[visNetwork].setOptions(options);
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
   * @param {string[]} nodeIds The node ids that should be selected.
   * @param {boolean} [highlightEdges] If highlightEdges is true or undefined,
   *                                   the neighbouring edges will also be selected.
   * 
   * @throws {Error} Thrown when the network does not exist.
   * 
   * @memberOf VisNetworkService
   */
  public selectNodes(visNetwork: string, nodeIds: string[], highlightEdges?: boolean): void {
    if (this._networks[visNetwork]) {
      this._networks[visNetwork].selectNodes(nodeIds, highlightEdges);
    } else {
      throw new Error(`Network with id ${visNetwork} not found.`);
    }
  }

  /**
   * Returns an object with selected nodes and edges ids.
   * 
   * @param {string} visNetwork The network name/identifier.
   * @returns {{ nodes: string[], edges: string[] }}
   * The selected node and edge ids or undefined when the network does not exist.
   * 
   * @memberOf VisNetworkService
   */
  public getSelection(visNetwork: string): { nodes: string[], edges: string[] } {
    if (this._networks[visNetwork]) {
      return this._networks[visNetwork].getSelection();
    }
    return undefined;
  }

  /**
   * Returns an array of selected node ids.
   * 
   * @param {string} visNetwork The network name/identifier.
   * @returns {string[]} The selected node ids or undefined when the network does not exist.
   * 
   * @memberOf VisNetworkService
   */
  public getSelectedNodes(visNetwork: string): string[] {
    if (this._networks[visNetwork]) {
      return this._networks[visNetwork].getSelectedNodes();
    }
    return undefined;
  }

  /**
   * Returns an array of selected edge ids.
   * 
   * @param {string} visNetwork The network name/identifier.
   * @returns {string[]} The selected edge ids or undefined when the network does not exist.
   * 
   * @memberOf VisNetworkService
   */
  public getSelectedEdges(visNetwork: string): string[] {
    if (this._networks[visNetwork]) {
      return this._networks[visNetwork].getSelectedEdges();
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
   * @memberOf VisNetworkService
   */
  public unselectAll(visNetwork: string): void {
    if (this._networks[visNetwork]) {
      this._networks[visNetwork].unselectAll();
    } else {
      throw new Error(`Network with id ${visNetwork} not found.`);
    }
  }

  /**
   * Zooms out so all nodes fit on the canvas.
   * 
   * @param {string} visNetwork The network name/identifier.
   * @param {Vis.IFitOptions} [options] Options to customize.
   * 
   * @throws {Error} Thrown when the network does not exist.
   * 
   * @memberOf VisNetworkService
   */
  public fit(visNetwork: string, options?: Vis.IFitOptions): void {
    if (this._networks[visNetwork]) {
      this._networks[visNetwork].fit(options);
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
   * @memberOf VisNetworkService
   */
  public redraw(visNetwork: string): void {
    if (this._networks[visNetwork]) {
      this._networks[visNetwork].redraw();
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
   * @memberOf VisNetworkService
   */
  public enableEditMode(visNetwork: string): void {
    if (this._networks[visNetwork]) {
      this._networks[visNetwork].enableEditMode();
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
   * @memberOf VisNetworkService
   */
  public addEdgeMode(visNetwork: string): void {
    if (this._networks[visNetwork]) {
      this._networks[visNetwork].addEdgeMode();
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
   * @memberOf VisNetworkService
   */
  public disableEditMode(visNetwork: string): void {
    if (this._networks[visNetwork]) {
      this._networks[visNetwork].disableEditMode();
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
   * @memberOf VisNetworkService
   */
  public deleteSelected(visNetwork: string): void {
    if (this._networks[visNetwork]) {
      this._networks[visNetwork].deleteSelected();
    } else {
      throw new Error(`Network with id ${visNetwork} not found.`);
    }
  }

  /**
   * Makes a cluster.
   * 
   * @param {string} visNetwork The network name/identifier.
   * @param {*} [options] The joinCondition function is presented with all nodes.
   * 
   * @throws {Error} Thrown when the network does not exist.
   * 
   * @memberOf VisNetworkService
   */
  public cluster(visNetwork: string, options?: any): void {
    if (this._networks[visNetwork]) {
      this._networks[visNetwork].cluster(options);
    } else {
      throw new Error(`Network with id ${visNetwork} not found.`);
    }
  }

  /**
   * Opens the cluster, releases the contained nodes and edges,
   * removing the cluster node and cluster edges.
   * 
   * @param {string} visNetwork The network name/identifier.
   * @param {string} nodeId The node id that represents the cluster.
   * @param {*} [options] Cluster options.
   * 
   * @throws {Error} Thrown when the network does not exist.
   * 
   * @memberOf VisNetworkService
   */
  public openCluster(visNetwork: string, nodeId: string, options?: any): void {
    if (this._networks[visNetwork]) {
      this._networks[visNetwork].openCluster(nodeId, options);
    } else {
      throw new Error(`Network with id ${visNetwork} not found.`);
    }
  }

  /**
   * Returns true if the node whose ID has been supplied is a cluster.
   * 
   * @param {string} visNetwork The network name/identifier.
   * @param {string} nodeId The associated node id.
   * @returns {boolean} True if the node whose ID has been supplied is a cluster.
   * 
   * @memberOf VisNetworkService
   */
  public isCluster(visNetwork: string, nodeId: string): boolean {
    if (this._networks[visNetwork]) {
      return this._networks[visNetwork].isCluster(nodeId);
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
   * @memberOf VisNetworkService
   */
  public getSeed(visNetwork: string): number {
    if (this._networks[visNetwork]) {
      return this._networks[visNetwork].getSeed();
    }

    return -1;
  }
}
