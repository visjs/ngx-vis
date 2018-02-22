"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var vis = require("vis");
var index_1 = require("./index");
/**
 * A service to create, manage and control VisNetwork instances.
 *
 * @export
 * @class VisNetworkService
 */
var VisNetworkService = /** @class */ (function () {
    function VisNetworkService() {
        /**
           * Fired when the user clicks the mouse or taps on a touchscreen device.
           *
           * @type {EventEmitter<any>}
           * @memberOf VisNetworkService
           */
        this.click = new core_1.EventEmitter();
        /**
           * Fired when the user double clicks the mouse or double taps on a touchscreen device.
           * Since a double click is in fact 2 clicks, 2 click events are fired, followed by a double click event.
           * If you do not want to use the click events if a double click event is fired,
           * just check the time between click events before processing them.
           *
           * @type {EventEmitter<any>}
           * @memberOf VisNetworkService
           */
        this.doubleClick = new core_1.EventEmitter();
        /**
           * Fired when the user click on the canvas with the right mouse button.
           * The right mouse button does not select by default.
           * You can use the method getNodeAt to select the node if you want.
           *
           * @type {EventEmitter<any>}
           * @memberOf VisNetworkService
           */
        this.oncontext = new core_1.EventEmitter();
        /**
           * Fired when the user clicks and holds the mouse or taps and holds on a touchscreen device.
           * A click event is also fired in this case.
           *
           * @type {EventEmitter<any>}
           * @memberOf VisNetworkService
           */
        this.hold = new core_1.EventEmitter();
        /**
           * Fired after drawing on the canvas has been completed.
           * Can be used to draw on top of the network.
           *
           * @type {EventEmitter<any>}
           * @memberOf VisNetworkService
           */
        this.release = new core_1.EventEmitter();
        /**
           * Fired when the selection has changed by user action.
           * This means a node or edge has been selected, added to the selection or deselected.
           * All select events are only triggered on click and hold.
           *
           * @type {EventEmitter<any>}
           * @memberOf VisNetworkService
           */
        this.select = new core_1.EventEmitter();
        /**
           * Fired when a node has been selected by the user.
           *
           * @type {EventEmitter<any>}
           * @memberOf VisNetworkService
           */
        this.selectNode = new core_1.EventEmitter();
        /**
           * Fired when a edge has been selected by the user.
           *
           * @type {EventEmitter<any>}
           * @memberOf VisNetworkService
           */
        this.selectEdge = new core_1.EventEmitter();
        /**
           * Fired when a node (or nodes) has (or have) been deselected by the user.
           * The previous selection is the list of nodes and edges that were selected before the last user event.
           *
           * @type {EventEmitter<any>}
           * @memberOf VisNetworkService
           */
        this.deselectNode = new core_1.EventEmitter();
        /**
           * Fired when a edge (or edges) has (or have) been deselected by the user.
           * The previous selection is the list of nodes and edges that were selected before the last user event.
           *
           * @type {EventEmitter<any>}
           * @memberOf VisNetworkService
           */
        this.deselectEdge = new core_1.EventEmitter();
        /**
           * Fired when starting a drag.
           *
           * @type {EventEmitter<any>}
           * @memberOf VisNetworkService
           */
        this.dragStart = new core_1.EventEmitter();
        /**
           * Fired when dragging node(s) or the view.
           *
           * @type {EventEmitter<any>}
           * @memberOf VisNetworkService
           */
        this.dragging = new core_1.EventEmitter();
        /**
           * Fired when the drag has finished.
           *
           * @type {EventEmitter<any>}
           * @memberOf VisNetworkService
           */
        this.dragEnd = new core_1.EventEmitter();
        /**
           * Fired if the option interaction:{hover:true} is enabled and the mouse hovers over a node.
           *
           * @type {EventEmitter<any>}
           * @memberOf VisNetworkService
           */
        this.hoverNode = new core_1.EventEmitter();
        /**
           * Fired if the option interaction:{hover:true} is enabled and
           * the mouse moved away from a node it was hovering over before.
           *
           * @type {EventEmitter<any>}
           * @memberOf VisNetworkService
           */
        this.blurNode = new core_1.EventEmitter();
        /**
           * Fired if the option interaction:{hover:true} is enabled and the mouse hovers over an edge.
           *
           * @type {EventEmitter<any>}
           * @memberOf VisNetworkService
           */
        this.hoverEdge = new core_1.EventEmitter();
        /**
           * Fired if the option interaction:{hover:true} is enabled and
           * the mouse moved away from an edge it was hovering over before.
           *
           * @type {EventEmitter<any>}
           * @memberOf VisNetworkService
           */
        this.blurEdge = new core_1.EventEmitter();
        /**
           * Fired when the user zooms in or out.
           *
           * @type {EventEmitter<any>}
           * @memberOf VisNetworkService
           */
        this.zoom = new core_1.EventEmitter();
        /**
           * Fired when the popup (tooltip) is shown.
           *
           * @type {EventEmitter<any>}
           * @memberOf VisNetworkService
           */
        this.showPopup = new core_1.EventEmitter();
        /**
           * Fired when the popup (tooltip) is hidden.
           *
           * @type {EventEmitter<any>}
           * @memberOf VisNetworkService
           */
        this.hidePopup = new core_1.EventEmitter();
        /**
           * Fired when stabilization starts.
           * This is also the case when you drag a node and the physics
           * simulation restarts to stabilize again.
           * Stabilization does not neccesarily imply 'without showing'.
           *
           * @type {EventEmitter<any>}
           * @memberOf VisNetworkService
           */
        this.startStabilizing = new core_1.EventEmitter();
        /**
           * Fired when a multiple of the updateInterval number of iterations is reached.
           * This only occurs in the 'hidden' stabilization.
           *
           * @type {EventEmitter<any>}
           * @memberOf VisNetworkService
           */
        this.stabilizationProgress = new core_1.EventEmitter();
        /**
           * Fired when the 'hidden' stabilization finishes.
           * This does not necessarily mean the network is stabilized;
           * it could also mean that the amount of iterations defined in the options has been reached.
           *
           * @type {EventEmitter<any>}
           * @memberOf VisNetworkService
           */
        this.stabilizationIterationsDone = new core_1.EventEmitter();
        /**
           * Fired when the 'hidden' stabilization finishes.
           * This does not necessarily mean the network is stabilized;
           * it could also mean that the amount of iterations defined in the options has been reached.
           *
           * @type {EventEmitter<any>}
           * @memberOf VisNetworkService
           */
        this.stabilized = new core_1.EventEmitter();
        /**
           * Fired when the size of the canvas has been resized,
           * either by a redraw call when the container div has changed in size,
           * a setSize() call with new values or a setOptions() with new width and/or height values.
           *
           * @type {EventEmitter<any>}
           * @memberOf VisNetworkService
           */
        this.resize = new core_1.EventEmitter();
        /**
           * Fired before the redrawing begins.
           * The simulation step has completed at this point.
           * Can be used to move custom elements before starting drawing the new frame.
           *
           * @type {EventEmitter<any>}
           * @memberOf VisNetworkService
           */
        this.initRedraw = new core_1.EventEmitter();
        /**
           * Fired after the canvas has been cleared, scaled and translated to
           * the viewing position but before all edges and nodes are drawn.
           * Can be used to draw behind the network.
           *
           * @type {EventEmitter<any>}
           * @memberOf VisNetworkService
           */
        this.beforeDrawing = new core_1.EventEmitter();
        /**
           * Fired after drawing on the canvas has been completed.
           * Can be used to draw on top of the network.
           *
           * @type {EventEmitter<any>}
           * @memberOf VisNetworkService
           */
        this.afterDrawing = new core_1.EventEmitter();
        /**
           * Fired when an animation is finished.
           *
           * @type {EventEmitter<any>}
           * @memberOf VisNetworkService
           */
        this.animationFinished = new core_1.EventEmitter();
        /**
           * Fired when a user changes any option in the configurator.
           * The options object can be used with the setOptions method or stringified using JSON.stringify().
           * You do not have to manually put the options into the network: this is done automatically.
           * You can use the event to store user options in the database.
           *
           * @type {EventEmitter<any>}
           * @memberOf VisNetworkService
           */
        this.configChange = new core_1.EventEmitter();
        this.networks = {};
    }
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
    VisNetworkService.prototype.create = /**
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
    function (visNetwork, container, data, options) {
        if (this.networks[visNetwork]) {
            throw new Error("Network with id " + visNetwork + " already exists.");
        }
        this.networks[visNetwork] = new index_1.VisNetwork(container, data, options);
    };
    /**
     * Remove the network from the DOM and remove all Hammer bindings and references.
     *
     * @param {string} visNetwork The network name/identifier.
     *
     * @memberOf VisNetworkService
     */
    /**
       * Remove the network from the DOM and remove all Hammer bindings and references.
       *
       * @param {string} visNetwork The network name/identifier.
       *
       * @memberOf VisNetworkService
       */
    VisNetworkService.prototype.destroy = /**
       * Remove the network from the DOM and remove all Hammer bindings and references.
       *
       * @param {string} visNetwork The network name/identifier.
       *
       * @memberOf VisNetworkService
       */
    function (visNetwork) {
        if (this.networks[visNetwork]) {
            this.networks[visNetwork].destroy();
            delete this.networks[visNetwork];
        }
    };
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
    VisNetworkService.prototype.on = /**
       * Activates an event.
       *
       * @param {string} visNetwork The network name/identifier.
       * @param {VisNetworkEvents} eventName The event name.
       * @param {boolean} preventDefault Stops the default behavior of the event.
       * @returns {boolean} Returns true when the event was activated.
       *
       * @memberOf VisNetworkService
       */
    function (visNetwork, eventName, preventDefault) {
        if (this.networks[visNetwork]) {
            /* tslint:disable */
            var that_1 = this;
            /* tslint:enable */
            this.networks[visNetwork].on(eventName, function (params) {
                var emitter = that_1[eventName];
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
    };
    /**
     * Deactivates an event.
     *
     * @param {string} visNetwork The network name/identifier.
     * @param {VisNetworkEvents} eventName The event name.
     *
     * @memberOf VisNetworkService
     */
    /**
       * Deactivates an event.
       *
       * @param {string} visNetwork The network name/identifier.
       * @param {VisNetworkEvents} eventName The event name.
       *
       * @memberOf VisNetworkService
       */
    VisNetworkService.prototype.off = /**
       * Deactivates an event.
       *
       * @param {string} visNetwork The network name/identifier.
       * @param {VisNetworkEvents} eventName The event name.
       *
       * @memberOf VisNetworkService
       */
    function (visNetwork, eventName) {
        if (this.networks[visNetwork]) {
            this.networks[visNetwork].off(eventName);
        }
    };
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
    VisNetworkService.prototype.once = /**
       * Activates an event listener only once.
       * After it has taken place, the event listener will be removed.
       *
       * @param {string} visNetwork The network name/identifier.
       * @param {VisNetworkEvents} eventName The event name.
       * @returns {boolean} Returns true when the event was activated.
       *
       * @memberOf VisNetworkService
       */
    function (visNetwork, eventName) {
        var _this = this;
        if (this.networks[visNetwork]) {
            /* tslint:disable */
            var that_2 = this;
            /* tslint:disable */
            this.networks[visNetwork].on(eventName, function (params) {
                var emitter = that_2[eventName];
                if (emitter) {
                    emitter.emit(params ? [visNetwork].concat(params) : visNetwork);
                    _this.off(visNetwork, eventName);
                }
            });
            return true;
        }
        return false;
    };
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
    VisNetworkService.prototype.setData = /**
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
    function (visNetwork, data) {
        if (this.networks[visNetwork]) {
            this.networks[visNetwork].setData(data);
        }
        else {
            throw new Error("Network with id " + visNetwork + " not found.");
        }
    };
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
    VisNetworkService.prototype.setOptions = /**
       * Set the options.
       *
       * @param {string} visNetwork The network name/identifier.
       * @param {VisNetworkOptions} options The network options.
       *
       * @throws {Error} Thrown when the network does not exist.
       *
       * @memberOf VisNetworkService
       */
    function (visNetwork, options) {
        if (this.networks[visNetwork]) {
            this.networks[visNetwork].setOptions(options);
        }
        else {
            throw new Error("Network with id " + visNetwork + " not found.");
        }
    };
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
    VisNetworkService.prototype.selectNodes = /**
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
    function (visNetwork, nodeIds, highlightEdges) {
        if (this.networks[visNetwork]) {
            this.networks[visNetwork].selectNodes(nodeIds, highlightEdges);
        }
        else {
            throw new Error("Network with id " + visNetwork + " not found.");
        }
    };
    /**
     * Returns an object with selected nodes and edges ids.
     *
     * @param {string} visNetwork The network name/identifier.
     * @returns {{ nodes: VisId[], edges: VisId[] }}
     * The selected node and edge ids or undefined when the network does not exist.
     *
     * @memberOf VisNetworkService
     */
    /**
       * Returns an object with selected nodes and edges ids.
       *
       * @param {string} visNetwork The network name/identifier.
       * @returns {{ nodes: VisId[], edges: VisId[] }}
       * The selected node and edge ids or undefined when the network does not exist.
       *
       * @memberOf VisNetworkService
       */
    VisNetworkService.prototype.getSelection = /**
       * Returns an object with selected nodes and edges ids.
       *
       * @param {string} visNetwork The network name/identifier.
       * @returns {{ nodes: VisId[], edges: VisId[] }}
       * The selected node and edge ids or undefined when the network does not exist.
       *
       * @memberOf VisNetworkService
       */
    function (visNetwork) {
        if (this.networks[visNetwork]) {
            return this.networks[visNetwork].getSelection();
        }
        return undefined;
    };
    /**
     * Returns an array of selected node ids.
     *
     * @param {string} visNetwork The network name/identifier.
     * @returns {VisId[]} The selected node ids or undefined when the network does not exist.
     *
     * @memberOf VisNetworkService
     */
    /**
       * Returns an array of selected node ids.
       *
       * @param {string} visNetwork The network name/identifier.
       * @returns {VisId[]} The selected node ids or undefined when the network does not exist.
       *
       * @memberOf VisNetworkService
       */
    VisNetworkService.prototype.getSelectedNodes = /**
       * Returns an array of selected node ids.
       *
       * @param {string} visNetwork The network name/identifier.
       * @returns {VisId[]} The selected node ids or undefined when the network does not exist.
       *
       * @memberOf VisNetworkService
       */
    function (visNetwork) {
        if (this.networks[visNetwork]) {
            return this.networks[visNetwork].getSelectedNodes();
        }
        return undefined;
    };
    /**
     * Returns an array of selected edge ids.
     *
     * @param {string} visNetwork The network name/identifier.
     * @returns {VisId[]} The selected edge ids or undefined when the network does not exist.
     *
     * @memberOf VisNetworkService
     */
    /**
       * Returns an array of selected edge ids.
       *
       * @param {string} visNetwork The network name/identifier.
       * @returns {VisId[]} The selected edge ids or undefined when the network does not exist.
       *
       * @memberOf VisNetworkService
       */
    VisNetworkService.prototype.getSelectedEdges = /**
       * Returns an array of selected edge ids.
       *
       * @param {string} visNetwork The network name/identifier.
       * @returns {VisId[]} The selected edge ids or undefined when the network does not exist.
       *
       * @memberOf VisNetworkService
       */
    function (visNetwork) {
        if (this.networks[visNetwork]) {
            return this.networks[visNetwork].getSelectedEdges();
        }
        return undefined;
    };
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
    VisNetworkService.prototype.unselectAll = /**
       * Unselect all objects.
       * Does not fire events.
       *
       * @param {string} visNetwork The network name/identifier.
       *
       * @throws {Error} Thrown when the network does not exist.
       *
       * @memberOf VisNetworkService
       */
    function (visNetwork) {
        if (this.networks[visNetwork]) {
            this.networks[visNetwork].unselectAll();
        }
        else {
            throw new Error("Network with id " + visNetwork + " not found.");
        }
    };
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
    VisNetworkService.prototype.fit = /**
       * Zooms out so all nodes fit on the canvas.
       *
       * @param {string} visNetwork The network name/identifier.
       * @param {VisFitOptions} [options] Options to customize.
       *
       * @throws {Error} Thrown when the network does not exist.
       *
       * @memberOf VisNetworkService
       */
    function (visNetwork, options) {
        if (this.networks[visNetwork]) {
            this.networks[visNetwork].fit(options);
        }
        else {
            throw new Error("Network with id " + visNetwork + " not found.");
        }
    };
    /**
     * Redraw the network.
     *
     * @param {string} visNetwork The network name/identifier.
     *
     * @throws {Error} Thrown when the network does not exist.
     *
     * @memberOf VisNetworkService
     */
    /**
       * Redraw the network.
       *
       * @param {string} visNetwork The network name/identifier.
       *
       * @throws {Error} Thrown when the network does not exist.
       *
       * @memberOf VisNetworkService
       */
    VisNetworkService.prototype.redraw = /**
       * Redraw the network.
       *
       * @param {string} visNetwork The network name/identifier.
       *
       * @throws {Error} Thrown when the network does not exist.
       *
       * @memberOf VisNetworkService
       */
    function (visNetwork) {
        if (this.networks[visNetwork]) {
            this.networks[visNetwork].redraw();
        }
        else {
            throw new Error("Network with id " + visNetwork + " not found.");
        }
    };
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
    VisNetworkService.prototype.enableEditMode = /**
       * Programatically enable the edit mode.
       * Similar effect to pressing the edit button.
       *
       * @param {string} visNetwork The network name/identifier.
       *
       * @throws {Error} Thrown when the network does not exist.
       *
       * @memberOf VisNetworkService
       */
    function (visNetwork) {
        if (this.networks[visNetwork]) {
            this.networks[visNetwork].enableEditMode();
        }
        else {
            throw new Error("Network with id " + visNetwork + " not found.");
        }
    };
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
    VisNetworkService.prototype.addEdgeMode = /**
       * Go into addEdge mode.
       * The explaination from addNodeMode applies here as well.
       *
       * @param {string} visNetwork The network name/identifier.
       *
       * @throws {Error} Thrown when the network does not exist.
       *
       * @memberOf VisNetworkService
       */
    function (visNetwork) {
        if (this.networks[visNetwork]) {
            this.networks[visNetwork].addEdgeMode();
        }
        else {
            throw new Error("Network with id " + visNetwork + " not found.");
        }
    };
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
    VisNetworkService.prototype.disableEditMode = /**
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
    function (visNetwork) {
        if (this.networks[visNetwork]) {
            this.networks[visNetwork].disableEditMode();
        }
        else {
            throw new Error("Network with id " + visNetwork + " not found.");
        }
    };
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
    VisNetworkService.prototype.deleteSelected = /**
       * Delete selected.
       * Having edit mode or manipulation enabled is not required.
       *
       * @param {string} visNetwork The network name/identifier.
       *
       * @throws {Error} Thrown when the network does not exist.
       *
       * @memberOf VisNetworkService
       */
    function (visNetwork) {
        if (this.networks[visNetwork]) {
            this.networks[visNetwork].deleteSelected();
        }
        else {
            throw new Error("Network with id " + visNetwork + " not found.");
        }
    };
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
    VisNetworkService.prototype.cluster = /**
       * Makes a cluster.
       *
       * @param {string} visNetwork The network name/identifier.
       * @param {VisClusterOptions} [options] The joinCondition function is presented with all nodes.
       *
       * @throws {Error} Thrown when the network does not exist.
       *
       * @memberOf VisNetworkService
       */
    function (visNetwork, options) {
        if (this.networks[visNetwork]) {
            this.networks[visNetwork].cluster(options);
        }
        else {
            throw new Error("Network with id " + visNetwork + " not found.");
        }
    };
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
    VisNetworkService.prototype.clusterByConnection = /**
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
    function (visNetwork, nodeId, options) {
        if (this.networks[visNetwork]) {
            this.networks[visNetwork].clusterByConnection(nodeId, options);
        }
        else {
            throw new Error("Network with id " + visNetwork + " not found.");
        }
    };
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
    VisNetworkService.prototype.clusterByHubsize = /**
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
    function (visNetwork, hubsize, options) {
        if (this.networks[visNetwork]) {
            this.networks[visNetwork].clusterByHubsize(hubsize, options);
        }
        else {
            throw new Error("Network with id " + visNetwork + " not found.");
        }
    };
    /**
     * This method will cluster all nodes with 1 edge with their respective connected node.
     *
     * @param {string} visNetwork The network name/identifier.
     * @param {VisClusterOptions} [options] optional cluster options
     *
     * @memberOf VisNetworkService
     */
    /**
       * This method will cluster all nodes with 1 edge with their respective connected node.
       *
       * @param {string} visNetwork The network name/identifier.
       * @param {VisClusterOptions} [options] optional cluster options
       *
       * @memberOf VisNetworkService
       */
    VisNetworkService.prototype.clusterOutliers = /**
       * This method will cluster all nodes with 1 edge with their respective connected node.
       *
       * @param {string} visNetwork The network name/identifier.
       * @param {VisClusterOptions} [options] optional cluster options
       *
       * @memberOf VisNetworkService
       */
    function (visNetwork, options) {
        if (this.networks[visNetwork]) {
            this.networks[visNetwork].clusterOutliers(options);
        }
        else {
            throw new Error("Network with id " + visNetwork + " not found.");
        }
    };
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
    VisNetworkService.prototype.findNode = /**
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
    function (visNetwork, nodeId) {
        if (this.networks[visNetwork]) {
            return this.networks[visNetwork].findNode(nodeId);
        }
        else {
            throw new Error("Network with id " + visNetwork + " not found.");
        }
    };
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
    VisNetworkService.prototype.getClusteredEdges = /**
       * Similar to findNode in that it returns all the edge ids that were
       * created from the provided edge during clustering.
       *
       * @param {string} visNetwork The network name/identifier.
       * @param {VisId} baseEdgeId the base edge id
       * @returns {VisId[]} an array of edgeIds
       *
       * @memberOf VisNetworkService
       */
    function (visNetwork, baseEdgeId) {
        if (this.networks[visNetwork]) {
            return this.networks[visNetwork].getClusteredEdges(baseEdgeId);
        }
        else {
            throw new Error("Network with id " + visNetwork + " not found.");
        }
    };
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
    VisNetworkService.prototype.getBaseEdge = /**
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
    function (visNetwork, clusteredEdgeId) {
        if (this.networks[visNetwork]) {
            return this.networks[visNetwork].getBaseEdge(clusteredEdgeId);
        }
        else {
            throw new Error("Network with id " + visNetwork + " not found.");
        }
    };
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
    VisNetworkService.prototype.updateEdge = /**
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
    function (visNetwork, startEdgeId, options) {
        if (this.networks[visNetwork]) {
            this.networks[visNetwork].updateEdge(startEdgeId, options);
        }
        else {
            throw new Error("Network with id " + visNetwork + " not found.");
        }
    };
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
    VisNetworkService.prototype.updateClusteredNode = /**
       * Clustered Nodes when created are not contained in the original data.nodes
       * passed on network creation. This method updates the cluster node.
       *
       * @param {string} visNetwork The network name/identifier.
       * @param {VisId} clusteredNodeId
       * @param {VisNodeOptions} options
       *
       * @memberOf VisNetworkService
       */
    function (visNetwork, clusteredNodeId, options) {
        if (this.networks[visNetwork]) {
            this.networks[visNetwork].updateClusteredNode(clusteredNodeId, options);
        }
        else {
            throw new Error("Network with id " + visNetwork + " not found.");
        }
    };
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
    VisNetworkService.prototype.getNodesInCluster = /**
       * Returns an array of all nodeIds of the nodes that
       * would be released if you open the cluster.
       *
       * @param {string} visNetwork The network name/identifier.
       * @param {VisId} clusterNodeId the id of the cluster node
       * @returns {VisId[]}
       *
       * @memberOf VisNetworkService
       */
    function (visNetwork, clusterNodeId) {
        if (this.networks[visNetwork]) {
            return this.networks[visNetwork].getNodesInCluster(clusterNodeId);
        }
        else {
            throw new Error("Network with id " + visNetwork + " not found.");
        }
    };
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
    VisNetworkService.prototype.openCluster = /**
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
    function (visNetwork, nodeId, options) {
        if (this.networks[visNetwork]) {
            this.networks[visNetwork].openCluster(nodeId, options);
        }
        else {
            throw new Error("Network with id " + visNetwork + " not found.");
        }
    };
    /**
     * Returns true if the node whose ID has been supplied is a cluster.
     *
     * @param {string} visNetwork The network name/identifier.
     * @param {VisId} nodeId The associated node id.
     * @returns {boolean} True if the node whose ID has been supplied is a cluster.
     *
     * @memberOf VisNetworkService
     */
    /**
       * Returns true if the node whose ID has been supplied is a cluster.
       *
       * @param {string} visNetwork The network name/identifier.
       * @param {VisId} nodeId The associated node id.
       * @returns {boolean} True if the node whose ID has been supplied is a cluster.
       *
       * @memberOf VisNetworkService
       */
    VisNetworkService.prototype.isCluster = /**
       * Returns true if the node whose ID has been supplied is a cluster.
       *
       * @param {string} visNetwork The network name/identifier.
       * @param {VisId} nodeId The associated node id.
       * @returns {boolean} True if the node whose ID has been supplied is a cluster.
       *
       * @memberOf VisNetworkService
       */
    function (visNetwork, nodeId) {
        if (this.networks[visNetwork]) {
            return this.networks[visNetwork].isCluster(nodeId);
        }
        return false;
    };
    /**
     * If you like the layout of your network and would like it to start in the same way next time,
     * ask for the seed using this method and put it in the layout.randomSeed option.
     *
     * @param {string} visNetwork The network name/identifier.
     * @returns {number} The seed of the current network or -1 when the network is not defined.
     *
     * @memberOf VisNetworkService
     */
    /**
       * If you like the layout of your network and would like it to start in the same way next time,
       * ask for the seed using this method and put it in the layout.randomSeed option.
       *
       * @param {string} visNetwork The network name/identifier.
       * @returns {number} The seed of the current network or -1 when the network is not defined.
       *
       * @memberOf VisNetworkService
       */
    VisNetworkService.prototype.getSeed = /**
       * If you like the layout of your network and would like it to start in the same way next time,
       * ask for the seed using this method and put it in the layout.randomSeed option.
       *
       * @param {string} visNetwork The network name/identifier.
       * @returns {number} The seed of the current network or -1 when the network is not defined.
       *
       * @memberOf VisNetworkService
       */
    function (visNetwork) {
        if (this.networks[visNetwork]) {
            return this.networks[visNetwork].getSeed();
        }
        return -1;
    };
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
    VisNetworkService.prototype.canvasToDOM = /**
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
    function (visNetwork, position) {
        return this.networks[visNetwork].canvasToDOM(position);
    };
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
    VisNetworkService.prototype.DOMtoCanvas = /**
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
    function (visNetwork, position) {
        return this.networks[visNetwork].DOMtoCanvas(position);
    };
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
    VisNetworkService.prototype.getNodeAt = /**
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
    function (visNetwork, position) {
        return this.networks[visNetwork].getNodeAt(position);
    };
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
    VisNetworkService.prototype.getEdgeAt = /**
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
    function (visNetwork, position) {
        return this.networks[visNetwork].getEdgeAt(position);
    };
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
    VisNetworkService.prototype.getConnectedEdges = /**
    * This function looks up the edges for a given nodeId.
    * The DOM values are relative to the network container -> DOM not Canvas coords.
    *
    * @param {string} visNetwork The network name/identifier.
    * @param {VisId} nodeId The associated node id.
    * @returns {VisId[]} Return array of edge ids
    *
    * @memberOf VisNetworkService
    */
    function (visNetwork, nodeId) {
        return this.networks[visNetwork].getConnectedEdges(nodeId);
    };
    VisNetworkService.decorators = [
        { type: core_1.Injectable },
    ];
    /** @nocollapse */
    VisNetworkService.ctorParameters = function () { return []; };
    return VisNetworkService;
}());
exports.VisNetworkService = VisNetworkService;
