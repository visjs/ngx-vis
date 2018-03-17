import { EventEmitter } from '@angular/core';
import * as vis from "vis";
import { VisMoveToOptions } from '..';
import { VisClusterOptions, VisEdgeOptions, VisFitOptions, VisId, VisNetworkData, VisNetworkEvents, VisNetworkOptions, VisNodeOptions, VisOpenClusterOptions } from './index';
/**
 * A service to create, manage and control VisNetwork instances.
 *
 * @export
 * @class VisNetworkService
 */
export declare class VisNetworkService {
    /**
     * Fired when the user clicks the mouse or taps on a touchscreen device.
     *
     * @type {EventEmitter<any>}
     * @memberOf VisNetworkService
     */
    click: EventEmitter<any>;
    /**
     * Fired when the user double clicks the mouse or double taps on a touchscreen device.
     * Since a double click is in fact 2 clicks, 2 click events are fired, followed by a double click event.
     * If you do not want to use the click events if a double click event is fired,
     * just check the time between click events before processing them.
     *
     * @type {EventEmitter<any>}
     * @memberOf VisNetworkService
     */
    doubleClick: EventEmitter<any>;
    /**
     * Fired when the user click on the canvas with the right mouse button.
     * The right mouse button does not select by default.
     * You can use the method getNodeAt to select the node if you want.
     *
     * @type {EventEmitter<any>}
     * @memberOf VisNetworkService
     */
    oncontext: EventEmitter<any>;
    /**
     * Fired when the user clicks and holds the mouse or taps and holds on a touchscreen device.
     * A click event is also fired in this case.
     *
     * @type {EventEmitter<any>}
     * @memberOf VisNetworkService
     */
    hold: EventEmitter<any>;
    /**
     * Fired after drawing on the canvas has been completed.
     * Can be used to draw on top of the network.
     *
     * @type {EventEmitter<any>}
     * @memberOf VisNetworkService
     */
    release: EventEmitter<any>;
    /**
     * Fired when the selection has changed by user action.
     * This means a node or edge has been selected, added to the selection or deselected.
     * All select events are only triggered on click and hold.
     *
     * @type {EventEmitter<any>}
     * @memberOf VisNetworkService
     */
    select: EventEmitter<any>;
    /**
     * Fired when a node has been selected by the user.
     *
     * @type {EventEmitter<any>}
     * @memberOf VisNetworkService
     */
    selectNode: EventEmitter<any>;
    /**
     * Fired when a edge has been selected by the user.
     *
     * @type {EventEmitter<any>}
     * @memberOf VisNetworkService
     */
    selectEdge: EventEmitter<any>;
    /**
     * Fired when a node (or nodes) has (or have) been deselected by the user.
     * The previous selection is the list of nodes and edges that were selected before the last user event.
     *
     * @type {EventEmitter<any>}
     * @memberOf VisNetworkService
     */
    deselectNode: EventEmitter<any>;
    /**
     * Fired when a edge (or edges) has (or have) been deselected by the user.
     * The previous selection is the list of nodes and edges that were selected before the last user event.
     *
     * @type {EventEmitter<any>}
     * @memberOf VisNetworkService
     */
    deselectEdge: EventEmitter<any>;
    /**
     * Fired when starting a drag.
     *
     * @type {EventEmitter<any>}
     * @memberOf VisNetworkService
     */
    dragStart: EventEmitter<any>;
    /**
     * Fired when dragging node(s) or the view.
     *
     * @type {EventEmitter<any>}
     * @memberOf VisNetworkService
     */
    dragging: EventEmitter<any>;
    /**
     * Fired when the drag has finished.
     *
     * @type {EventEmitter<any>}
     * @memberOf VisNetworkService
     */
    dragEnd: EventEmitter<any>;
    /**
     * Fired if the option interaction:{hover:true} is enabled and the mouse hovers over a node.
     *
     * @type {EventEmitter<any>}
     * @memberOf VisNetworkService
     */
    hoverNode: EventEmitter<any>;
    /**
     * Fired if the option interaction:{hover:true} is enabled and
     * the mouse moved away from a node it was hovering over before.
     *
     * @type {EventEmitter<any>}
     * @memberOf VisNetworkService
     */
    blurNode: EventEmitter<any>;
    /**
     * Fired if the option interaction:{hover:true} is enabled and the mouse hovers over an edge.
     *
     * @type {EventEmitter<any>}
     * @memberOf VisNetworkService
     */
    hoverEdge: EventEmitter<any>;
    /**
     * Fired if the option interaction:{hover:true} is enabled and
     * the mouse moved away from an edge it was hovering over before.
     *
     * @type {EventEmitter<any>}
     * @memberOf VisNetworkService
     */
    blurEdge: EventEmitter<any>;
    /**
     * Fired when the user zooms in or out.
     *
     * @type {EventEmitter<any>}
     * @memberOf VisNetworkService
     */
    zoom: EventEmitter<any>;
    /**
     * Fired when the popup (tooltip) is shown.
     *
     * @type {EventEmitter<any>}
     * @memberOf VisNetworkService
     */
    showPopup: EventEmitter<any>;
    /**
     * Fired when the popup (tooltip) is hidden.
     *
     * @type {EventEmitter<any>}
     * @memberOf VisNetworkService
     */
    hidePopup: EventEmitter<any>;
    /**
     * Fired when stabilization starts.
     * This is also the case when you drag a node and the physics
     * simulation restarts to stabilize again.
     * Stabilization does not neccesarily imply 'without showing'.
     *
     * @type {EventEmitter<any>}
     * @memberOf VisNetworkService
     */
    startStabilizing: EventEmitter<any>;
    /**
     * Fired when a multiple of the updateInterval number of iterations is reached.
     * This only occurs in the 'hidden' stabilization.
     *
     * @type {EventEmitter<any>}
     * @memberOf VisNetworkService
     */
    stabilizationProgress: EventEmitter<any>;
    /**
     * Fired when the 'hidden' stabilization finishes.
     * This does not necessarily mean the network is stabilized;
     * it could also mean that the amount of iterations defined in the options has been reached.
     *
     * @type {EventEmitter<any>}
     * @memberOf VisNetworkService
     */
    stabilizationIterationsDone: EventEmitter<any>;
    /**
     * Fired when the 'hidden' stabilization finishes.
     * This does not necessarily mean the network is stabilized;
     * it could also mean that the amount of iterations defined in the options has been reached.
     *
     * @type {EventEmitter<any>}
     * @memberOf VisNetworkService
     */
    stabilized: EventEmitter<any>;
    /**
     * Fired when the size of the canvas has been resized,
     * either by a redraw call when the container div has changed in size,
     * a setSize() call with new values or a setOptions() with new width and/or height values.
     *
     * @type {EventEmitter<any>}
     * @memberOf VisNetworkService
     */
    resize: EventEmitter<any>;
    /**
     * Fired before the redrawing begins.
     * The simulation step has completed at this point.
     * Can be used to move custom elements before starting drawing the new frame.
     *
     * @type {EventEmitter<any>}
     * @memberOf VisNetworkService
     */
    initRedraw: EventEmitter<any>;
    /**
     * Fired after the canvas has been cleared, scaled and translated to
     * the viewing position but before all edges and nodes are drawn.
     * Can be used to draw behind the network.
     *
     * @type {EventEmitter<any>}
     * @memberOf VisNetworkService
     */
    beforeDrawing: EventEmitter<any>;
    /**
     * Fired after drawing on the canvas has been completed.
     * Can be used to draw on top of the network.
     *
     * @type {EventEmitter<any>}
     * @memberOf VisNetworkService
     */
    afterDrawing: EventEmitter<any>;
    /**
     * Fired when an animation is finished.
     *
     * @type {EventEmitter<any>}
     * @memberOf VisNetworkService
     */
    animationFinished: EventEmitter<any>;
    /**
     * Fired when a user changes any option in the configurator.
     * The options object can be used with the setOptions method or stringified using JSON.stringify().
     * You do not have to manually put the options into the network: this is done automatically.
     * You can use the event to store user options in the database.
     *
     * @type {EventEmitter<any>}
     * @memberOf VisNetworkService
     */
    configChange: EventEmitter<any>;
    private networks;
    /**
     * Creates a new network instance.
     *
     * @param {string} visNetwork The network name/identifier.
     * @param {HTMLElement} container The HTML element that contains the network view.
     * @param {VisNetworkData} data The initial network nodes and edges.
     * @param {VisNetworkOptions} [options] The network options.
     *
     * @throws {Error} Thrown when a network with the same name already exists.
     *
     * @memberOf VisNetworkService
     */
    create(visNetwork: string, container: HTMLElement, data: VisNetworkData, options?: VisNetworkOptions): void;
    /**
     * Remove the network from the DOM and remove all Hammer bindings and references.
     *
     * @param {string} visNetwork The network name/identifier.
     *
     * @memberOf VisNetworkService
     */
    destroy(visNetwork: string): void;
    /**
     * Activates an event.
     *
     * @param {string} visNetwork The network name/identifier.
     * @param {VisNetworkEvents} eventName The event name.
     * @param {boolean} preventDefault Stops the default behavior of the event.
     * @returns {boolean} Returns true when the event was activated.
     *
     * @memberOf VisNetworkService
     */
    on(visNetwork: string, eventName: VisNetworkEvents, preventDefault?: boolean): boolean;
    /**
     * Deactivates an event.
     *
     * @param {string} visNetwork The network name/identifier.
     * @param {VisNetworkEvents} eventName The event name.
     *
     * @memberOf VisNetworkService
     */
    off(visNetwork: string, eventName: VisNetworkEvents): void;
    /**
     * Activates an event listener only once.
     * After it has taken place, the event listener will be removed.
     *
     * @param {string} visNetwork The network name/identifier.
     * @param {VisNetworkEvents} eventName The event name.
     * @returns {boolean} Returns true when the event was activated.
     *
     * @memberOf VisNetworkService
     */
    once(visNetwork: string, eventName: VisNetworkEvents): boolean;
    /**
     * Override all the data in the network.
     * If stabilization is enabled in the physics module,
     * the network will stabilize again.
     * This method is also performed when first initializing the network.
     *
     * @param {string} visNetwork The network name/identifier.
     * @param {VisNetworkData} data The network data.
     *
     * @throws {Error} Thrown when the network does not exist.
     *
     * @memberOf VisNetworkService
     */
    setData(visNetwork: string, data: VisNetworkData): void;
    /**
     * Set the options.
     *
     * @param {string} visNetwork The network name/identifier.
     * @param {VisNetworkOptions} options The network options.
     *
     * @throws {Error} Thrown when the network does not exist.
     *
     * @memberOf VisNetworkService
     */
    setOptions(visNetwork: string, options: VisNetworkOptions): void;
    /**
     * Selects the nodes corresponding to the id's in the input array.
     * This method unselects all other objects before selecting its own objects.
     * Does not fire events.
     *
     * @param {string} visNetwork The network name/identifier.
     * @param {VisId[]} nodeIds The node ids that should be selected.
     * @param {boolean} [highlightEdges] If highlightEdges is true or undefined,
     *                                   the neighbouring edges will also be selected.
     *
     * @throws {Error} Thrown when the network does not exist.
     *
     * @memberOf VisNetworkService
     */
    selectNodes(visNetwork: string, nodeIds: VisId[], highlightEdges?: boolean): void;
    /**
     * Returns an object with selected nodes and edges ids.
     *
     * @param {string} visNetwork The network name/identifier.
     * @returns {{ nodes: VisId[], edges: VisId[] }}
     * The selected node and edge ids or undefined when the network does not exist.
     *
     * @memberOf VisNetworkService
     */
    getSelection(visNetwork: string): {
        nodes: VisId[];
        edges: VisId[];
    };
    /**
     * Returns an array of selected node ids.
     *
     * @param {string} visNetwork The network name/identifier.
     * @returns {VisId[]} The selected node ids or undefined when the network does not exist.
     *
     * @memberOf VisNetworkService
     */
    getSelectedNodes(visNetwork: string): VisId[];
    /**
     * Returns an array of selected edge ids.
     *
     * @param {string} visNetwork The network name/identifier.
     * @returns {VisId[]} The selected edge ids or undefined when the network does not exist.
     *
     * @memberOf VisNetworkService
     */
    getSelectedEdges(visNetwork: string): VisId[];
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
    unselectAll(visNetwork: string): void;
    /**
     * Zooms out so all nodes fit on the canvas.
     *
     * @param {string} visNetwork The network name/identifier.
     * @param {VisFitOptions} [options] Options to customize.
     *
     * @throws {Error} Thrown when the network does not exist.
     *
     * @memberOf VisNetworkService
     */
    fit(visNetwork: string, options?: VisFitOptions): void;
    /**
     * Redraw the network.
     *
     * @param {string} visNetwork The network name/identifier.
     *
     * @throws {Error} Thrown when the network does not exist.
     *
     * @memberOf VisNetworkService
     */
    redraw(visNetwork: string): void;
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
    enableEditMode(visNetwork: string): void;
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
    addEdgeMode(visNetwork: string): void;
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
    disableEditMode(visNetwork: string): void;
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
    deleteSelected(visNetwork: string): void;
    /**
     * Makes a cluster.
     *
     * @param {string} visNetwork The network name/identifier.
     * @param {VisClusterOptions} [options] The joinCondition function is presented with all nodes.
     *
     * @throws {Error} Thrown when the network does not exist.
     *
     * @memberOf VisNetworkService
     */
    cluster(visNetwork: string, options?: VisClusterOptions): void;
    /**
     * This method looks at the provided node and makes a cluster of it and all it's connected nodes.
     * The behaviour can be customized by proving the options object.
     * All options of this object are explained below.
     * The joinCondition is only presented with the connected nodes.
     *
     * @param {string} visNetwork The network name/identifier.
     * @param {VisId} nodeId the id of the node
     * @param {VisClusterOptions} [options] the cluster options
     *
     * @memberOf VisNetworkService
     */
    clusterByConnection(visNetwork: string, nodeId: VisId, options?: VisClusterOptions): void;
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
     * @param {VisClusterOptions} [options] optional cluster options
     *
     * @memberOf VisNetworkService
     */
    clusterByHubsize(visNetwork: string, hubsize?: number, options?: VisClusterOptions): void;
    /**
     * This method will cluster all nodes with 1 edge with their respective connected node.
     *
     * @param {string} visNetwork The network name/identifier.
     * @param {VisClusterOptions} [options] optional cluster options
     *
     * @memberOf VisNetworkService
     */
    clusterOutliers(visNetwork: string, options?: VisClusterOptions): void;
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
     * @param {VisId} nodeId the node id.
     * @returns {VisId[]} an array of nodeIds showing where the node is
     *
     * @memberOf VisNetworkService
     */
    findNode(visNetwork: string, nodeId: VisId): VisId[];
    /**
     * Similar to findNode in that it returns all the edge ids that were
     * created from the provided edge during clustering.
     *
     * @param {string} visNetwork The network name/identifier.
     * @param {VisId} baseEdgeId the base edge id
     * @returns {VisId[]} an array of edgeIds
     *
     * @memberOf VisNetworkService
     */
    getClusteredEdges(visNetwork: string, baseEdgeId: VisId): VisId[];
    /**
     * When a clusteredEdgeId is available, this method will return the original
     * baseEdgeId provided in data.edges ie.
     * After clustering the 'SelectEdge' event is fired but provides only the clustered edge.
     * This method can then be used to return the baseEdgeId.
     *
     * @param {string} visNetwork The network name/identifier.
     * @param {VisId} clusteredEdgeId
     * @returns {VisId}
     *
     * @memberOf VisNetworkService
     *
     */
    getBaseEdge(visNetwork: string, clusteredEdgeId: VisId): VisId;
    /**
     * Visible edges between clustered nodes are not the same edge as the ones provided
     * in data.edges passed on network creation. With each layer of clustering, copies of
     * the edges between clusters are created and the previous edges are hidden,
     * until the cluster is opened. This method takes an edgeId (ie. a base edgeId from data.edges)
     * and applys the options to it and any edges that were created from it while clustering.
     *
     * @param {string} visNetwork The network name/identifier.
     * @param {VisId} startEdgeId
     * @param {VisEdgeOptions} [options]
     *
     * @memberOf VisNetworkService
     *
     */
    updateEdge(visNetwork: string, startEdgeId: VisId, options?: VisEdgeOptions): void;
    /**
     * Clustered Nodes when created are not contained in the original data.nodes
     * passed on network creation. This method updates the cluster node.
     *
     * @param {string} visNetwork The network name/identifier.
     * @param {VisId} clusteredNodeId
     * @param {VisNodeOptions} options
     *
     * @memberOf VisNetworkService
     */
    updateClusteredNode(visNetwork: string, clusteredNodeId: VisId, options?: VisNodeOptions): void;
    /**
     * Returns an array of all nodeIds of the nodes that
     * would be released if you open the cluster.
     *
     * @param {string} visNetwork The network name/identifier.
     * @param {VisId} clusterNodeId the id of the cluster node
     * @returns {VisId[]}
     *
     * @memberOf VisNetworkService
     */
    getNodesInCluster(visNetwork: string, clusterNodeId: VisId): VisId[];
    /**
     * Opens the cluster, releases the contained nodes and edges,
     * removing the cluster node and cluster edges.
     *
     * @param {string} visNetwork The network name/identifier.
     * @param {VisId} nodeId The node id that represents the cluster.
     * @param {VisOpenClusterOptions} [options] Cluster options.
     *
     * @throws {Error} Thrown when the network does not exist.
     *
     * @memberOf VisNetworkService
     */
    openCluster(visNetwork: string, nodeId: VisId, options?: VisOpenClusterOptions): void;
    /**
     * Returns true if the node whose ID has been supplied is a cluster.
     *
     * @param {string} visNetwork The network name/identifier.
     * @param {VisId} nodeId The associated node id.
     * @returns {boolean} True if the node whose ID has been supplied is a cluster.
     *
     * @memberOf VisNetworkService
     */
    isCluster(visNetwork: string, nodeId: VisId): boolean;
    /**
     * If you like the layout of your network and would like it to start in the same way next time,
     * ask for the seed using this method and put it in the layout.randomSeed option.
     *
     * @param {string} visNetwork The network name/identifier.
     * @returns {number} The seed of the current network or -1 when the network is not defined.
     *
     * @memberOf VisNetworkService
     */
    getSeed(visNetwork: string): number;
    /**
     * This function converts canvas coordinates to coordinates on the DOM.
     * Input and output are in the form of {x:Number,y:Number}.
     * The DOM values are relative to the network container.
     *
     * @param {string} visNetwork The network name/identifier.
     * @param {Position} position The canvas position.
     * @returns {Position} The DOM position.
     *
     * @memberOf VisNetworkService
     */
    canvasToDOM(visNetwork: string, position: vis.Position): vis.Position;
    /**
     * This function converts DOM coordinates to coordinates on the canvas.
     * Input and output are in the form of {x:Number,y:Number}.
     * The DOM values are relative to the network container.
     *
     * @param {string} visNetwork The network name/identifier.
     * @param {Position} position The DOM position.
     * @returns {Position} The canvas position.
     *
     * @memberOf VisNetworkService
     */
    DOMtoCanvas(visNetwork: string, position: vis.Position): vis.Position;
    /**
     * This function looks up the node at the given DOM coordinates on the canvas.
     * Input and output are in the form of {x:Number,y:Number}.
     * The DOM values are relative to the network container -> DOM not Canvas coords.
     *
     * @param {string} visNetwork The network name/identifier.
     * @param {Position} position The DOM position.
     * @returns {VisId} nodeId The associated node id.
     *
     * @memberOf VisNetworkService
     */
    getNodeAt(visNetwork: string, position: vis.Position): vis.IdType;
    /**
   * This function looks up the edge at the given DOM coordinates on the canvas.
   * Input and output are in the form of {x:Number,y:Number}.
   * The DOM values are relative to the network container -> DOM not Canvas coords.
   *
   * @param {string} visNetwork The network name/identifier.
   * @param {Position} position The DOM position.
   * @returns {VisId} edgeId The associated edge id.
   *
   * @memberOf VisNetworkService
   */
    getEdgeAt(visNetwork: string, position: vis.Position): vis.IdType;
    /**
  * This function looks up the edges for a given nodeId.
  * The DOM values are relative to the network container -> DOM not Canvas coords.
  *
  * @param {string} visNetwork The network name/identifier.
  * @param {VisId} nodeId The associated node id.
  * @returns {VisId[]} Return array of edge ids
  *
  * @memberOf VisNetworkService
  */
    getConnectedEdges(visNetwork: string, nodeId: vis.IdType): vis.IdType[];
    /**
   * Returns an array of nodeIds of the all the nodes that are directly connected to this node.
   * If you supply an edgeId, vis will first match the id to nodes.
   * If no match is found, it will search in the edgelist and return an array: [fromId, toId].
   *
   * @param {string} visNetwork The network name/identifier.
   * @param nodeOrEdgeId a node or edge id
   * @returns {VisId[]} Return array of node ids
   */
    getConnectedNodes(visNetwork: string, nodeOrEdgeId: vis.IdType): vis.IdType[] | {
        fromId: vis.IdType;
        toId: vis.IdType;
    }[];
    /**
     * Returns the positions of the nodes.
     * @param {string} visNetwork The network name/identifier.
     * @param {Array.<Node.id>|String} [ids]  --> optional, can be array of nodeIds, can be string
     * @returns {{}}
     */
    getPositions(visNetwork: string, nodeIds: VisId[]): {
        [nodeId: string]: vis.Position;
    };
    /**
     * You can animate or move the camera using the moveTo method.
     *
     * @param {string} visNetwork The network name/identifier.
     * @param {VisFocusOptions} options Options for moveTo function.
     */
    moveTo(visNetwork: string, moveToOptions: VisMoveToOptions): void;
    /**
     * Start the physics simulation.
     * This is normally done whenever needed and is only really useful
     * if you stop the simulation yourself and wish to continue it afterwards.
     * @param {string} visNetwork The network name/identifier.
     */
    startSimulation(visNetwork: string): void;
    /**
     * This stops the physics simulation and triggers a stabilized event.
     * Tt can be restarted by dragging a node,
     * altering the dataset or calling startSimulation().
     * @param {string} visNetwork The network name/identifier.
     */
    stopSimulation(visNetwork: string): void;
}
