"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var index_1 = require("./index");
/**
 * A service to create, manage and control VisTimeline instances.
 *
 * @export
 * @class VisTimelineService
 */
var VisTimelineService = /** @class */ (function () {
    function VisTimelineService() {
        /**
           * Fired when the current time bar redraws.
           * The rate depends on the zoom level.
           *
           * @type {EventEmitter<any>}
           * @memberOf VisTimelineService
           */
        this.currentTimeTick = new core_1.EventEmitter();
        /**
           * Fired when clicked inside the Timeline.
           *
           * @type {EventEmitter<any>}
           * @memberOf VisTimelineService
           */
        this.click = new core_1.EventEmitter();
        /**
           * Fired when right-clicked inside the Timeline.
           * Note that in order to prevent the context menu from showing up,
           * default behavior of the event must be stopped.
           *
           * @type {EventEmitter<any>}
           * @memberOf VisTimelineService
           */
        this.contextmenu = new core_1.EventEmitter();
        /**
           * Fired when double clicked inside the Timeline.
           *
           * @type {EventEmitter<any>}
           * @memberOf VisTimelineService
           */
        this.doubleClick = new core_1.EventEmitter();
        /**
           * 	Fired after the dragging of a group is finished.
           *
           * @type {EventEmitter<any>}
           * @memberOf VisTimelineService
           */
        this.groupDragged = new core_1.EventEmitter();
        /**
           * Fired once after each graph redraw.
           *
           * @type {EventEmitter<any>}
           * @memberOf VisTimelineService
           */
        this.changed = new core_1.EventEmitter();
        /**
           * Fired repeatedly when the timeline window is being changed.
           *
           * @type {EventEmitter<any>}
           * @memberOf VisTimelineService
           */
        this.rangechange = new core_1.EventEmitter();
        /**
           * Fired once after the timeline window has been changed.
           *
           * @type {EventEmitter<any>}
           * @memberOf VisTimelineService
           */
        this.rangechanged = new core_1.EventEmitter();
        /**
           * Fired after the user selects or deselects items by tapping or holding them.
           * When a use taps an already selected item, the select event is fired again.
           * Not fired when the method setSelectionis executed.
           *
           * @type {EventEmitter<any>}
           * @memberOf VisTimelineService
           */
        this.select = new core_1.EventEmitter();
        /**
           * Fired when the user moves the mouse over an item.
           *
           * @type {EventEmitter<any>}
           * @memberOf VisTimelineService
           */
        this.itemover = new core_1.EventEmitter();
        /**
           * Fired when the user moves the mouse out of an item.
           *
           * @type {EventEmitter<any>}
           * @memberOf VisTimelineService
           */
        this.itemout = new core_1.EventEmitter();
        /**
           * Fired repeatedly when the user is dragging the custom time bar.
           * Only available when the custom time bar is enabled.
           *
           * @type {EventEmitter<any>}
           * @memberOf VisTimelineService
           */
        this.timechange = new core_1.EventEmitter();
        /**
           * Fired once after the user has dragged the custom time bar.
           * Only available when the custom time bar is enabled.
           *
           * @type {EventEmitter<any>}
           * @memberOf VisTimelineService
           */
        this.timechanged = new core_1.EventEmitter();
        this.timelines = {};
    }
    /**
     * Creates a new timeline instance.
     *
     * @param {string} visTimeline The timeline name/identifier.
     * @param {HTMLElement} container The HTML element that contains the timeline view.
     * @param {VisTimelineItems} items The initial timeline items.
     * @param {VisTimelineOptions} [options] The timeline options.
     *
     * @throws {Error} Thrown when timeline already exists.
     *
     * @memberOf VisTimelineService
     */
    /**
       * Creates a new timeline instance.
       *
       * @param {string} visTimeline The timeline name/identifier.
       * @param {HTMLElement} container The HTML element that contains the timeline view.
       * @param {VisTimelineItems} items The initial timeline items.
       * @param {VisTimelineOptions} [options] The timeline options.
       *
       * @throws {Error} Thrown when timeline already exists.
       *
       * @memberOf VisTimelineService
       */
    VisTimelineService.prototype.createWithItems = /**
       * Creates a new timeline instance.
       *
       * @param {string} visTimeline The timeline name/identifier.
       * @param {HTMLElement} container The HTML element that contains the timeline view.
       * @param {VisTimelineItems} items The initial timeline items.
       * @param {VisTimelineOptions} [options] The timeline options.
       *
       * @throws {Error} Thrown when timeline already exists.
       *
       * @memberOf VisTimelineService
       */
    function (visTimeline, container, items, options) {
        if (this.timelines[visTimeline]) {
            throw new Error(this.alreadyExistsError(visTimeline));
        }
        this.timelines[visTimeline] = new index_1.VisTimeline(container, items, options);
    };
    /**
     * Creates a new timeline instance.
     *
     * @param {string} visTimeline The timeline name/identifier.
     * @param {HTMLElement} container The HTML element that contains the timeline view.
     * @param {VisTimelineItems} items The initial timeline items.
     * @param {VisTimelineGroups} groups The initial timeline groups.
     * @param {VisTimelineOptions} [options] The timeline options.
     *
     * @throws {Error} Thrown when timeline already exists.
     *
     * @memberOf VisTimelineService
     */
    /**
       * Creates a new timeline instance.
       *
       * @param {string} visTimeline The timeline name/identifier.
       * @param {HTMLElement} container The HTML element that contains the timeline view.
       * @param {VisTimelineItems} items The initial timeline items.
       * @param {VisTimelineGroups} groups The initial timeline groups.
       * @param {VisTimelineOptions} [options] The timeline options.
       *
       * @throws {Error} Thrown when timeline already exists.
       *
       * @memberOf VisTimelineService
       */
    VisTimelineService.prototype.createWithItemsAndGroups = /**
       * Creates a new timeline instance.
       *
       * @param {string} visTimeline The timeline name/identifier.
       * @param {HTMLElement} container The HTML element that contains the timeline view.
       * @param {VisTimelineItems} items The initial timeline items.
       * @param {VisTimelineGroups} groups The initial timeline groups.
       * @param {VisTimelineOptions} [options] The timeline options.
       *
       * @throws {Error} Thrown when timeline already exists.
       *
       * @memberOf VisTimelineService
       */
    function (visTimeline, container, items, groups, options) {
        if (this.timelines[visTimeline]) {
            throw new Error(this.alreadyExistsError(visTimeline));
        }
        this.timelines[visTimeline] = new index_1.VisTimeline(container, items, groups, options);
    };
    /**
     * Add new vertical bar representing a custom time that can be dragged by the user.
     * The id is added as CSS class name of the custom time bar,
     * allowing to style multiple time bars differently.
     *
     * @param {string} visTimeline The timeline name/identifier.
     * @param {VisDate} time Parameter time can be a Date, Number, or String, and is new Date() by default.
     * @param {VisId} [id] Parameter id can be Number or String and is undefined by default.
     * @returns {VisId} The method returns id of the created bar.
     *
     * @throws {Error} Thrown when timeline does not exist.
     *
     * @memberOf VisTimelineService
     */
    /**
       * Add new vertical bar representing a custom time that can be dragged by the user.
       * The id is added as CSS class name of the custom time bar,
       * allowing to style multiple time bars differently.
       *
       * @param {string} visTimeline The timeline name/identifier.
       * @param {VisDate} time Parameter time can be a Date, Number, or String, and is new Date() by default.
       * @param {VisId} [id] Parameter id can be Number or String and is undefined by default.
       * @returns {VisId} The method returns id of the created bar.
       *
       * @throws {Error} Thrown when timeline does not exist.
       *
       * @memberOf VisTimelineService
       */
    VisTimelineService.prototype.addCustomTime = /**
       * Add new vertical bar representing a custom time that can be dragged by the user.
       * The id is added as CSS class name of the custom time bar,
       * allowing to style multiple time bars differently.
       *
       * @param {string} visTimeline The timeline name/identifier.
       * @param {VisDate} time Parameter time can be a Date, Number, or String, and is new Date() by default.
       * @param {VisId} [id] Parameter id can be Number or String and is undefined by default.
       * @returns {VisId} The method returns id of the created bar.
       *
       * @throws {Error} Thrown when timeline does not exist.
       *
       * @memberOf VisTimelineService
       */
    function (visTimeline, time, id) {
        if (this.timelines[visTimeline]) {
            return this.timelines[visTimeline].addCustomTime(time, id);
        }
        else {
            throw new Error(this.doesNotExistError(visTimeline));
        }
    };
    /**
     * Adjust the visible window such that it fits all items.
     * See also function focus(id).
     *
     * @param {string} visTimeline The timeline name/identifier.
     * @param {VisTimelineAnimationOptions} [options] Optional options.
     *
     * @throws {Error} Thrown when timeline does not exist.
     *
     * @memberOf VisTimelineService
     */
    /**
       * Adjust the visible window such that it fits all items.
       * See also function focus(id).
       *
       * @param {string} visTimeline The timeline name/identifier.
       * @param {VisTimelineAnimationOptions} [options] Optional options.
       *
       * @throws {Error} Thrown when timeline does not exist.
       *
       * @memberOf VisTimelineService
       */
    VisTimelineService.prototype.fit = /**
       * Adjust the visible window such that it fits all items.
       * See also function focus(id).
       *
       * @param {string} visTimeline The timeline name/identifier.
       * @param {VisTimelineAnimationOptions} [options] Optional options.
       *
       * @throws {Error} Thrown when timeline does not exist.
       *
       * @memberOf VisTimelineService
       */
    function (visTimeline, options) {
        if (this.timelines[visTimeline]) {
            this.timelines[visTimeline].fit(options);
        }
        else {
            throw new Error(this.doesNotExistError(visTimeline));
        }
    };
    /**
     * Adjust the visible window such that the selected item is centered on screen.
     *
     * @param {string} visTimeline The timeline name/identifier.
     * @param {VisId} id The id of the item.
     * @param {VisTimelineAnimationOptions} [options] Options options.
     *
     * @throws {Error} Thrown when timeline does not exist.
     *
     * @memberOf VisTimelineService
     */
    /**
       * Adjust the visible window such that the selected item is centered on screen.
       *
       * @param {string} visTimeline The timeline name/identifier.
       * @param {VisId} id The id of the item.
       * @param {VisTimelineAnimationOptions} [options] Options options.
       *
       * @throws {Error} Thrown when timeline does not exist.
       *
       * @memberOf VisTimelineService
       */
    VisTimelineService.prototype.focusOnId = /**
       * Adjust the visible window such that the selected item is centered on screen.
       *
       * @param {string} visTimeline The timeline name/identifier.
       * @param {VisId} id The id of the item.
       * @param {VisTimelineAnimationOptions} [options] Options options.
       *
       * @throws {Error} Thrown when timeline does not exist.
       *
       * @memberOf VisTimelineService
       */
    function (visTimeline, id, options) {
        if (this.timelines[visTimeline]) {
            this.timelines[visTimeline].focus(id, options);
        }
        else {
            throw new Error(this.doesNotExistError(visTimeline));
        }
    };
    /**
     * Adjust the visible window such that the selected items are centered on screen.
     *
     * @param {string} visTimeline The timeline name/identifier.
     * @param {VisId[]} ids The item ids.
     * @param {VisTimelineAnimationOptions} [options] Optional options.
     *
     * @throws {Error} Thrown when timeline does not exist.
     *
     * @memberOf VisTimelineService
     */
    /**
       * Adjust the visible window such that the selected items are centered on screen.
       *
       * @param {string} visTimeline The timeline name/identifier.
       * @param {VisId[]} ids The item ids.
       * @param {VisTimelineAnimationOptions} [options] Optional options.
       *
       * @throws {Error} Thrown when timeline does not exist.
       *
       * @memberOf VisTimelineService
       */
    VisTimelineService.prototype.focusOnIds = /**
       * Adjust the visible window such that the selected items are centered on screen.
       *
       * @param {string} visTimeline The timeline name/identifier.
       * @param {VisId[]} ids The item ids.
       * @param {VisTimelineAnimationOptions} [options] Optional options.
       *
       * @throws {Error} Thrown when timeline does not exist.
       *
       * @memberOf VisTimelineService
       */
    function (visTimeline, ids, options) {
        if (this.timelines[visTimeline]) {
            this.timelines[visTimeline].focus(ids, options);
        }
        else {
            throw new Error(this.doesNotExistError(visTimeline));
        }
    };
    /**
     * Get the current time.
     * Only applicable when option showCurrentTime is true.
     *
     * @param {string} visTimeline The timeline name/identifier.
     * @returns {Date} The current time.
     *
     * @throws {Error} Thrown when timeline does not exist.
     *
     * @memberOf VisTimelineService
     */
    /**
       * Get the current time.
       * Only applicable when option showCurrentTime is true.
       *
       * @param {string} visTimeline The timeline name/identifier.
       * @returns {Date} The current time.
       *
       * @throws {Error} Thrown when timeline does not exist.
       *
       * @memberOf VisTimelineService
       */
    VisTimelineService.prototype.getCurrentTime = /**
       * Get the current time.
       * Only applicable when option showCurrentTime is true.
       *
       * @param {string} visTimeline The timeline name/identifier.
       * @returns {Date} The current time.
       *
       * @throws {Error} Thrown when timeline does not exist.
       *
       * @memberOf VisTimelineService
       */
    function (visTimeline) {
        if (this.timelines[visTimeline]) {
            return this.timelines[visTimeline].getCurrentTime();
        }
        else {
            throw new Error(this.doesNotExistError(visTimeline));
        }
    };
    /**
     * Retrieve the custom time from the custom time bar with given id.
     * Id is undefined by default.
     *
     * @param {string} visTimeline The timeline name/identifier.
     * @param {VisId} [id] The time bar id.
     * @returns {Date} The custom time.
     *
     * @throws {Error} Thrown when timeline does not exist.
     *
     * @memberOf VisTimelineService
     */
    /**
       * Retrieve the custom time from the custom time bar with given id.
       * Id is undefined by default.
       *
       * @param {string} visTimeline The timeline name/identifier.
       * @param {VisId} [id] The time bar id.
       * @returns {Date} The custom time.
       *
       * @throws {Error} Thrown when timeline does not exist.
       *
       * @memberOf VisTimelineService
       */
    VisTimelineService.prototype.getCustomTime = /**
       * Retrieve the custom time from the custom time bar with given id.
       * Id is undefined by default.
       *
       * @param {string} visTimeline The timeline name/identifier.
       * @param {VisId} [id] The time bar id.
       * @returns {Date} The custom time.
       *
       * @throws {Error} Thrown when timeline does not exist.
       *
       * @memberOf VisTimelineService
       */
    function (visTimeline, id) {
        if (this.timelines[visTimeline]) {
            return this.timelines[visTimeline].getCustomTime(id);
        }
        else {
            throw new Error(this.doesNotExistError(visTimeline));
        }
    };
    /**
     * Returns an Object with relevant properties from an event.
     *
     * @param {string} visTimeline The timeline name/identifier.
     * @param {Event} event The event.
     * @returns {VisTimelineEventPropertiesResult} Properties of an event
     *
     * @throws {Error} Thrown when timeline does not exist.
     *
     * @memberOf VisTimelineService
     */
    /**
       * Returns an Object with relevant properties from an event.
       *
       * @param {string} visTimeline The timeline name/identifier.
       * @param {Event} event The event.
       * @returns {VisTimelineEventPropertiesResult} Properties of an event
       *
       * @throws {Error} Thrown when timeline does not exist.
       *
       * @memberOf VisTimelineService
       */
    VisTimelineService.prototype.getEventProperties = /**
       * Returns an Object with relevant properties from an event.
       *
       * @param {string} visTimeline The timeline name/identifier.
       * @param {Event} event The event.
       * @returns {VisTimelineEventPropertiesResult} Properties of an event
       *
       * @throws {Error} Thrown when timeline does not exist.
       *
       * @memberOf VisTimelineService
       */
    function (visTimeline, event) {
        if (this.timelines[visTimeline]) {
            return this.timelines[visTimeline].getEventProperties(event);
        }
        else {
            throw new Error(this.doesNotExistError(visTimeline));
        }
    };
    /**
     * Get the range of all the items as an object containing min: Date and max: Date.
     *
     * @param {string} visTimeline The timeline name/identifier.
     * @returns {{ min: Date, max: Date }} The min and max dates.
     *
     * @throws {Error} Thrown when timeline does not exist.
     *
     * @memberOf VisTimelineService
     */
    /**
       * Get the range of all the items as an object containing min: Date and max: Date.
       *
       * @param {string} visTimeline The timeline name/identifier.
       * @returns {{ min: Date, max: Date }} The min and max dates.
       *
       * @throws {Error} Thrown when timeline does not exist.
       *
       * @memberOf VisTimelineService
       */
    VisTimelineService.prototype.getItemRange = /**
       * Get the range of all the items as an object containing min: Date and max: Date.
       *
       * @param {string} visTimeline The timeline name/identifier.
       * @returns {{ min: Date, max: Date }} The min and max dates.
       *
       * @throws {Error} Thrown when timeline does not exist.
       *
       * @memberOf VisTimelineService
       */
    function (visTimeline) {
        if (this.timelines[visTimeline]) {
            return this.timelines[visTimeline].getItemRange();
        }
        else {
            throw new Error(this.doesNotExistError(visTimeline));
        }
    };
    /**
     * Get an array with the ids of the currently selected items.
     *
     * @param {string} visTimeline The timeline name/identifier.
     * @returns {VisId[]} The currently selected items.
     *
     * @throws {Error} Thrown when timeline does not exist.
     *
     * @memberOf VisTimelineService
     */
    /**
       * Get an array with the ids of the currently selected items.
       *
       * @param {string} visTimeline The timeline name/identifier.
       * @returns {VisId[]} The currently selected items.
       *
       * @throws {Error} Thrown when timeline does not exist.
       *
       * @memberOf VisTimelineService
       */
    VisTimelineService.prototype.getSelection = /**
       * Get an array with the ids of the currently selected items.
       *
       * @param {string} visTimeline The timeline name/identifier.
       * @returns {VisId[]} The currently selected items.
       *
       * @throws {Error} Thrown when timeline does not exist.
       *
       * @memberOf VisTimelineService
       */
    function (visTimeline) {
        if (this.timelines[visTimeline]) {
            return this.timelines[visTimeline].getSelection();
        }
        else {
            throw new Error(this.doesNotExistError(visTimeline));
        }
    };
    /**
     * Get an array with the ids of the currently visible items.
     *
     * @param {string} visTimeline The timeline name/identifier.
     * @returns {VisId[]} The currently visible items.
     *
     * @throws {Error} Thrown when timeline does not exist.
     *
     * @memberOf VisTimelineService
     */
    /**
       * Get an array with the ids of the currently visible items.
       *
       * @param {string} visTimeline The timeline name/identifier.
       * @returns {VisId[]} The currently visible items.
       *
       * @throws {Error} Thrown when timeline does not exist.
       *
       * @memberOf VisTimelineService
       */
    VisTimelineService.prototype.getVisibleItems = /**
       * Get an array with the ids of the currently visible items.
       *
       * @param {string} visTimeline The timeline name/identifier.
       * @returns {VisId[]} The currently visible items.
       *
       * @throws {Error} Thrown when timeline does not exist.
       *
       * @memberOf VisTimelineService
       */
    function (visTimeline) {
        if (this.timelines[visTimeline]) {
            return this.timelines[visTimeline].getVisibleItems();
        }
        else {
            throw new Error(this.doesNotExistError(visTimeline));
        }
    };
    /**
     * Get the current visible window.
     *
     * @param {string} visTimeline The timeline name/identifier.
     * @returns {{ start: Date, end: Date }} Returns an object with properties start: Date and end: Date.
     *
     * @throws {Error} Thrown when timeline does not exist.
     *
     * @memberOf VisTimelineService
     */
    /**
       * Get the current visible window.
       *
       * @param {string} visTimeline The timeline name/identifier.
       * @returns {{ start: Date, end: Date }} Returns an object with properties start: Date and end: Date.
       *
       * @throws {Error} Thrown when timeline does not exist.
       *
       * @memberOf VisTimelineService
       */
    VisTimelineService.prototype.getWindow = /**
       * Get the current visible window.
       *
       * @param {string} visTimeline The timeline name/identifier.
       * @returns {{ start: Date, end: Date }} Returns an object with properties start: Date and end: Date.
       *
       * @throws {Error} Thrown when timeline does not exist.
       *
       * @memberOf VisTimelineService
       */
    function (visTimeline) {
        if (this.timelines[visTimeline]) {
            return this.timelines[visTimeline].getWindow();
        }
        else {
            throw new Error(this.doesNotExistError(visTimeline));
        }
    };
    /**
     * 	Move the window such that given time is centered on screen.
     *
     * @param {string} visTimeline The timeline name/identifier.
     * @param {VisDate} time Parameter time can be a Date, Number, or String.
     * @param {VisTimelineAnimationOptions} [options] Optional options.
     *
     * @throws {Error} Thrown when timeline does not exist.
     *
     * @memberOf VisTimelineService
     */
    /**
       * 	Move the window such that given time is centered on screen.
       *
       * @param {string} visTimeline The timeline name/identifier.
       * @param {VisDate} time Parameter time can be a Date, Number, or String.
       * @param {VisTimelineAnimationOptions} [options] Optional options.
       *
       * @throws {Error} Thrown when timeline does not exist.
       *
       * @memberOf VisTimelineService
       */
    VisTimelineService.prototype.moveTo = /**
       * 	Move the window such that given time is centered on screen.
       *
       * @param {string} visTimeline The timeline name/identifier.
       * @param {VisDate} time Parameter time can be a Date, Number, or String.
       * @param {VisTimelineAnimationOptions} [options] Optional options.
       *
       * @throws {Error} Thrown when timeline does not exist.
       *
       * @memberOf VisTimelineService
       */
    function (visTimeline, time, options) {
        if (this.timelines[visTimeline]) {
            this.timelines[visTimeline].moveTo(time, options);
        }
        else {
            throw new Error(this.doesNotExistError(visTimeline));
        }
    };
    /**
     * Force a redraw of the Timeline.
     * The size of all items will be recalculated.
     * Can be useful to manually redraw when option autoResize=false and the window has been resized,
     * or when the items CSS has been changed.
     *
     * @param {string} visTimeline The timeline name/identifier.
     *
     * @throws {Error} Thrown when timeline does not exist.
     *
     * @memberOf VisTimelineService
     */
    /**
       * Force a redraw of the Timeline.
       * The size of all items will be recalculated.
       * Can be useful to manually redraw when option autoResize=false and the window has been resized,
       * or when the items CSS has been changed.
       *
       * @param {string} visTimeline The timeline name/identifier.
       *
       * @throws {Error} Thrown when timeline does not exist.
       *
       * @memberOf VisTimelineService
       */
    VisTimelineService.prototype.redraw = /**
       * Force a redraw of the Timeline.
       * The size of all items will be recalculated.
       * Can be useful to manually redraw when option autoResize=false and the window has been resized,
       * or when the items CSS has been changed.
       *
       * @param {string} visTimeline The timeline name/identifier.
       *
       * @throws {Error} Thrown when timeline does not exist.
       *
       * @memberOf VisTimelineService
       */
    function (visTimeline) {
        if (this.timelines[visTimeline]) {
            this.timelines[visTimeline].redraw();
        }
        else {
            throw new Error(this.doesNotExistError(visTimeline));
        }
    };
    /**
     * Remove vertical bars previously added to the timeline via addCustomTime method.
     *
     * @param {string} visTimeline The timeline name/identifier.
     * @param {VisId} id Parameter id is the ID of the custom vertical bar returned by addCustomTime method.
     *
     * @throws {Error} Thrown when timeline does not exist.
     *
     * @memberOf VisTimelineService
     */
    /**
       * Remove vertical bars previously added to the timeline via addCustomTime method.
       *
       * @param {string} visTimeline The timeline name/identifier.
       * @param {VisId} id Parameter id is the ID of the custom vertical bar returned by addCustomTime method.
       *
       * @throws {Error} Thrown when timeline does not exist.
       *
       * @memberOf VisTimelineService
       */
    VisTimelineService.prototype.removeCustomTime = /**
       * Remove vertical bars previously added to the timeline via addCustomTime method.
       *
       * @param {string} visTimeline The timeline name/identifier.
       * @param {VisId} id Parameter id is the ID of the custom vertical bar returned by addCustomTime method.
       *
       * @throws {Error} Thrown when timeline does not exist.
       *
       * @memberOf VisTimelineService
       */
    function (visTimeline, id) {
        if (this.timelines[visTimeline]) {
            this.timelines[visTimeline].removeCustomTime(id);
        }
        else {
            throw new Error(this.doesNotExistError(visTimeline));
        }
    };
    /**
     * Set a current time.
     * This can be used for example to ensure that a client's time is synchronized
     * with a shared server time.
     * Only applicable when option showCurrentTime is true.
     *
     * @param {string} visTimeline The timeline name/identifier.
     * @param {VisDate} time time can be a Date object, numeric timestamp, or ISO date string.
     *
     * @throws {Error} Thrown when timeline does not exist.
     *
     * @memberOf VisTimelineService
     */
    /**
       * Set a current time.
       * This can be used for example to ensure that a client's time is synchronized
       * with a shared server time.
       * Only applicable when option showCurrentTime is true.
       *
       * @param {string} visTimeline The timeline name/identifier.
       * @param {VisDate} time time can be a Date object, numeric timestamp, or ISO date string.
       *
       * @throws {Error} Thrown when timeline does not exist.
       *
       * @memberOf VisTimelineService
       */
    VisTimelineService.prototype.setCurrentTime = /**
       * Set a current time.
       * This can be used for example to ensure that a client's time is synchronized
       * with a shared server time.
       * Only applicable when option showCurrentTime is true.
       *
       * @param {string} visTimeline The timeline name/identifier.
       * @param {VisDate} time time can be a Date object, numeric timestamp, or ISO date string.
       *
       * @throws {Error} Thrown when timeline does not exist.
       *
       * @memberOf VisTimelineService
       */
    function (visTimeline, time) {
        if (this.timelines[visTimeline]) {
            this.timelines[visTimeline].setCurrentTime(time);
        }
        else {
            throw new Error(this.doesNotExistError(visTimeline));
        }
    };
    /**
     * 	Adjust the time of a custom time bar.
     *
     * @param {string} visTimeline The timeline name/identifier.
     * @param {VisDate} time Parameter time can be a Date object, numeric timestamp, or ISO date string.
     * @param {VisId} [id] Parameter id is the id of the custom time bar, and is undefined by default.
     *
     * @throws {Error} Thrown when timeline does not exist.
     *
     * @memberOf VisTimelineService
     */
    /**
       * 	Adjust the time of a custom time bar.
       *
       * @param {string} visTimeline The timeline name/identifier.
       * @param {VisDate} time Parameter time can be a Date object, numeric timestamp, or ISO date string.
       * @param {VisId} [id] Parameter id is the id of the custom time bar, and is undefined by default.
       *
       * @throws {Error} Thrown when timeline does not exist.
       *
       * @memberOf VisTimelineService
       */
    VisTimelineService.prototype.setCustomTime = /**
       * 	Adjust the time of a custom time bar.
       *
       * @param {string} visTimeline The timeline name/identifier.
       * @param {VisDate} time Parameter time can be a Date object, numeric timestamp, or ISO date string.
       * @param {VisId} [id] Parameter id is the id of the custom time bar, and is undefined by default.
       *
       * @throws {Error} Thrown when timeline does not exist.
       *
       * @memberOf VisTimelineService
       */
    function (visTimeline, time, id) {
        if (this.timelines[visTimeline]) {
            this.timelines[visTimeline].setCustomTime(time, id);
        }
        else {
            throw new Error(this.doesNotExistError(visTimeline));
        }
    };
    /**
     * Adjust the title attribute of a custom time bar.
     *
     * @param {string} visTimeline The timeline name/identifier.
     * @param {string} title Parameter title is the string to be set as title.
     *                       Use empty string to hide the title completely.
     * @param {VisId} [id] Parameter id is the id of the custom time bar, and is undefined by default.
     *
     * @throws {Error} Thrown when timeline does not exist.
     *
     * @memberOf VisTimelineService
     */
    /**
       * Adjust the title attribute of a custom time bar.
       *
       * @param {string} visTimeline The timeline name/identifier.
       * @param {string} title Parameter title is the string to be set as title.
       *                       Use empty string to hide the title completely.
       * @param {VisId} [id] Parameter id is the id of the custom time bar, and is undefined by default.
       *
       * @throws {Error} Thrown when timeline does not exist.
       *
       * @memberOf VisTimelineService
       */
    VisTimelineService.prototype.setCustomTimeTitle = /**
       * Adjust the title attribute of a custom time bar.
       *
       * @param {string} visTimeline The timeline name/identifier.
       * @param {string} title Parameter title is the string to be set as title.
       *                       Use empty string to hide the title completely.
       * @param {VisId} [id] Parameter id is the id of the custom time bar, and is undefined by default.
       *
       * @throws {Error} Thrown when timeline does not exist.
       *
       * @memberOf VisTimelineService
       */
    function (visTimeline, title, id) {
        if (this.timelines[visTimeline]) {
            this.timelines[visTimeline].setCustomTimeTitle(title, id);
        }
        else {
            throw new Error(this.doesNotExistError(visTimeline));
        }
    };
    /**
     * Set both groups and items at once.
     * Both properties are optional.
     * This is a convenience method for individually calling both setItems(items) and setGroups(groups).
     * Both items and groups can be an Array with Objects, a DataSet (offering 2 way data binding),
     * or a DataView (offering 1 way data binding).
     * For each of the groups, the items of the timeline are filtered on the property group,
     * which must correspond with the id of the group.
     *
     * @param {string} visTimeline The timeline name/identifier.
     * @param {{ groups?: VisTimelineGroups; items?: VisTimelineItems }} data The new timline data.
     *
     * @throws {Error} Thrown when timeline does not exist.
     *
     * @memberOf VisTimelineService
     */
    /**
       * Set both groups and items at once.
       * Both properties are optional.
       * This is a convenience method for individually calling both setItems(items) and setGroups(groups).
       * Both items and groups can be an Array with Objects, a DataSet (offering 2 way data binding),
       * or a DataView (offering 1 way data binding).
       * For each of the groups, the items of the timeline are filtered on the property group,
       * which must correspond with the id of the group.
       *
       * @param {string} visTimeline The timeline name/identifier.
       * @param {{ groups?: VisTimelineGroups; items?: VisTimelineItems }} data The new timline data.
       *
       * @throws {Error} Thrown when timeline does not exist.
       *
       * @memberOf VisTimelineService
       */
    VisTimelineService.prototype.setData = /**
       * Set both groups and items at once.
       * Both properties are optional.
       * This is a convenience method for individually calling both setItems(items) and setGroups(groups).
       * Both items and groups can be an Array with Objects, a DataSet (offering 2 way data binding),
       * or a DataView (offering 1 way data binding).
       * For each of the groups, the items of the timeline are filtered on the property group,
       * which must correspond with the id of the group.
       *
       * @param {string} visTimeline The timeline name/identifier.
       * @param {{ groups?: VisTimelineGroups; items?: VisTimelineItems }} data The new timline data.
       *
       * @throws {Error} Thrown when timeline does not exist.
       *
       * @memberOf VisTimelineService
       */
    function (visTimeline, data) {
        if (this.timelines[visTimeline]) {
            this.timelines[visTimeline].setData(data);
        }
        else {
            throw new Error(this.doesNotExistError(visTimeline));
        }
    };
    /**
     * Set a data set with groups for the Timeline.
     * For each of the groups, the items of the timeline are filtered on the property group,
     * which must correspond with the id of the group.
     *
     * @param {string} visTimeline The timeline name/identifier.
     * @param {VisTimelineGroups} groups a DataSet (offering 2 way data binding)
     *
     * @throws {Error} Thrown when timeline does not exist.
     *
     * @memberOf VisTimelineService
     */
    /**
       * Set a data set with groups for the Timeline.
       * For each of the groups, the items of the timeline are filtered on the property group,
       * which must correspond with the id of the group.
       *
       * @param {string} visTimeline The timeline name/identifier.
       * @param {VisTimelineGroups} groups a DataSet (offering 2 way data binding)
       *
       * @throws {Error} Thrown when timeline does not exist.
       *
       * @memberOf VisTimelineService
       */
    VisTimelineService.prototype.setGroups = /**
       * Set a data set with groups for the Timeline.
       * For each of the groups, the items of the timeline are filtered on the property group,
       * which must correspond with the id of the group.
       *
       * @param {string} visTimeline The timeline name/identifier.
       * @param {VisTimelineGroups} groups a DataSet (offering 2 way data binding)
       *
       * @throws {Error} Thrown when timeline does not exist.
       *
       * @memberOf VisTimelineService
       */
    function (visTimeline, groups) {
        if (this.timelines[visTimeline]) {
            this.timelines[visTimeline].setGroups(groups);
        }
        else {
            throw new Error(this.doesNotExistError(visTimeline));
        }
    };
    /**
     * Set a data set with items for the Timeline.
     *
     * @param {string} visTimeline The timeline name/identifier.
     * @param {VisTimelineItems} items can be an Array with Objects, a DataSet (offering 2 way data binding)
     *
     * @throws {Error} Thrown when timeline does not exist.
     *
     * @memberOf VisTimelineService
     */
    /**
       * Set a data set with items for the Timeline.
       *
       * @param {string} visTimeline The timeline name/identifier.
       * @param {VisTimelineItems} items can be an Array with Objects, a DataSet (offering 2 way data binding)
       *
       * @throws {Error} Thrown when timeline does not exist.
       *
       * @memberOf VisTimelineService
       */
    VisTimelineService.prototype.setItems = /**
       * Set a data set with items for the Timeline.
       *
       * @param {string} visTimeline The timeline name/identifier.
       * @param {VisTimelineItems} items can be an Array with Objects, a DataSet (offering 2 way data binding)
       *
       * @throws {Error} Thrown when timeline does not exist.
       *
       * @memberOf VisTimelineService
       */
    function (visTimeline, items) {
        if (this.timelines[visTimeline]) {
            this.timelines[visTimeline].setItems(items);
        }
        else {
            throw new Error(this.doesNotExistError(visTimeline));
        }
    };
    /**
     * Set or update options.
     * It is possible to change any option of the timeline at any time.
     * You can for example switch orientation on the fly.
     *
     * @param {string} visTimeline The timeline name/identifier.
     * @param {VisTimelineOptions} options The new options of the timeline.
     *
     * @throws {Error} Thrown when timeline does not exist.
     *
     * @memberOf VisTimelineService
     */
    /**
       * Set or update options.
       * It is possible to change any option of the timeline at any time.
       * You can for example switch orientation on the fly.
       *
       * @param {string} visTimeline The timeline name/identifier.
       * @param {VisTimelineOptions} options The new options of the timeline.
       *
       * @throws {Error} Thrown when timeline does not exist.
       *
       * @memberOf VisTimelineService
       */
    VisTimelineService.prototype.setOptions = /**
       * Set or update options.
       * It is possible to change any option of the timeline at any time.
       * You can for example switch orientation on the fly.
       *
       * @param {string} visTimeline The timeline name/identifier.
       * @param {VisTimelineOptions} options The new options of the timeline.
       *
       * @throws {Error} Thrown when timeline does not exist.
       *
       * @memberOf VisTimelineService
       */
    function (visTimeline, options) {
        if (this.timelines[visTimeline]) {
            this.timelines[visTimeline].setOptions(options);
        }
        else {
            throw new Error(this.doesNotExistError(visTimeline));
        }
    };
    /**
     * Select one item by its id.#
     * The currently selected items will be unselected.
     *
     * @param {string} visTimeline The timeline name/identifier.
     * @param {VisId} id The id of the item that should be selected.
     *
     * @throws {Error} Thrown when timeline does not exist.
     *
     * @memberOf VisTimelineService
     */
    /**
       * Select one item by its id.#
       * The currently selected items will be unselected.
       *
       * @param {string} visTimeline The timeline name/identifier.
       * @param {VisId} id The id of the item that should be selected.
       *
       * @throws {Error} Thrown when timeline does not exist.
       *
       * @memberOf VisTimelineService
       */
    VisTimelineService.prototype.setSelectionToId = /**
       * Select one item by its id.#
       * The currently selected items will be unselected.
       *
       * @param {string} visTimeline The timeline name/identifier.
       * @param {VisId} id The id of the item that should be selected.
       *
       * @throws {Error} Thrown when timeline does not exist.
       *
       * @memberOf VisTimelineService
       */
    function (visTimeline, id) {
        if (this.timelines[visTimeline]) {
            this.timelines[visTimeline].setSelection(id);
        }
        else {
            throw new Error(this.doesNotExistError(visTimeline));
        }
    };
    /**
     * Select multiple items by their id.
     * The currently selected items will be unselected.
     * To unselect all selected items, call `setSelection([])`.
     *
     * @param {string} visTimeline The timeline name/identifier.
     * @param {VisId[]} ids The ids of the irems that should be selected.
     *
     * @throws {Error} Thrown when timeline does not exist.
     *
     * @memberOf VisTimelineService
     */
    /**
       * Select multiple items by their id.
       * The currently selected items will be unselected.
       * To unselect all selected items, call `setSelection([])`.
       *
       * @param {string} visTimeline The timeline name/identifier.
       * @param {VisId[]} ids The ids of the irems that should be selected.
       *
       * @throws {Error} Thrown when timeline does not exist.
       *
       * @memberOf VisTimelineService
       */
    VisTimelineService.prototype.setSelectionToIds = /**
       * Select multiple items by their id.
       * The currently selected items will be unselected.
       * To unselect all selected items, call `setSelection([])`.
       *
       * @param {string} visTimeline The timeline name/identifier.
       * @param {VisId[]} ids The ids of the irems that should be selected.
       *
       * @throws {Error} Thrown when timeline does not exist.
       *
       * @memberOf VisTimelineService
       */
    function (visTimeline, ids) {
        if (this.timelines[visTimeline]) {
            this.timelines[visTimeline].setSelection(ids);
        }
        else {
            throw new Error(this.doesNotExistError(visTimeline));
        }
    };
    /**
     * Set the current visible window.
     *
     * If the parameter value of start or end is null, the parameter will be left unchanged.
     *
     * @param {string} visTimeline The timeline name/identifier.
     * @param {VisDate} start The parameters start can be a Date, Number, or String.
     * @param {VisDate} end The parameters end can be a Date, Number, or String.
     * @param {VisTimelineAnimationOptions} [options] Optional options.
     *
     * @throws {Error} Thrown when timeline does not exist.
     *
     * @memberOf VisTimelineService
     */
    /**
       * Set the current visible window.
       *
       * If the parameter value of start or end is null, the parameter will be left unchanged.
       *
       * @param {string} visTimeline The timeline name/identifier.
       * @param {VisDate} start The parameters start can be a Date, Number, or String.
       * @param {VisDate} end The parameters end can be a Date, Number, or String.
       * @param {VisTimelineAnimationOptions} [options] Optional options.
       *
       * @throws {Error} Thrown when timeline does not exist.
       *
       * @memberOf VisTimelineService
       */
    VisTimelineService.prototype.setWindow = /**
       * Set the current visible window.
       *
       * If the parameter value of start or end is null, the parameter will be left unchanged.
       *
       * @param {string} visTimeline The timeline name/identifier.
       * @param {VisDate} start The parameters start can be a Date, Number, or String.
       * @param {VisDate} end The parameters end can be a Date, Number, or String.
       * @param {VisTimelineAnimationOptions} [options] Optional options.
       *
       * @throws {Error} Thrown when timeline does not exist.
       *
       * @memberOf VisTimelineService
       */
    function (visTimeline, start, end, options) {
        if (this.timelines[visTimeline]) {
            this.timelines[visTimeline].setWindow(start, end, options);
        }
        else {
            throw new Error(this.doesNotExistError(visTimeline));
        }
    };
    /**
     * Destroy the Timeline.
     * The timeline is removed from memory.
     * All DOM elements and event listeners are cleaned up.
     *
     * @param {string} visTimeline The timeline name/identifier.
     *
     * @memberOf VisTimelineService
     */
    /**
       * Destroy the Timeline.
       * The timeline is removed from memory.
       * All DOM elements and event listeners are cleaned up.
       *
       * @param {string} visTimeline The timeline name/identifier.
       *
       * @memberOf VisTimelineService
       */
    VisTimelineService.prototype.destroy = /**
       * Destroy the Timeline.
       * The timeline is removed from memory.
       * All DOM elements and event listeners are cleaned up.
       *
       * @param {string} visTimeline The timeline name/identifier.
       *
       * @memberOf VisTimelineService
       */
    function (visTimeline) {
        if (this.timelines[visTimeline]) {
            this.timelines[visTimeline].destroy();
            delete this.timelines[visTimeline];
        }
    };
    /**
     * Activates an event.
     *
     * @param {string} visTimeline The timeline name/identifier.
     * @param {VisTimelineEvents} eventName The event name.
     * @param {boolean} preventDefault Stops the default behavior of the event.
     * @returns {boolean} Returns true when the event was activated.
     *
     * @memberOf VisTimelineService
     */
    /**
       * Activates an event.
       *
       * @param {string} visTimeline The timeline name/identifier.
       * @param {VisTimelineEvents} eventName The event name.
       * @param {boolean} preventDefault Stops the default behavior of the event.
       * @returns {boolean} Returns true when the event was activated.
       *
       * @memberOf VisTimelineService
       */
    VisTimelineService.prototype.on = /**
       * Activates an event.
       *
       * @param {string} visTimeline The timeline name/identifier.
       * @param {VisTimelineEvents} eventName The event name.
       * @param {boolean} preventDefault Stops the default behavior of the event.
       * @returns {boolean} Returns true when the event was activated.
       *
       * @memberOf VisTimelineService
       */
    function (visTimeline, eventName, preventDefault) {
        if (this.timelines[visTimeline]) {
            /* tslint:disable */
            var that_1 = this;
            /* tslint:enable */
            this.timelines[visTimeline].on(eventName, function (params) {
                var emitter = that_1[eventName];
                if (emitter) {
                    emitter.emit(params ? [visTimeline].concat(params) : visTimeline);
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
     * @param {string} visTimeline The timeline name/identifier.
     * @param {VisTimelineEvents} eventName The event name.
     *
     * @memberOf VisTimelineService
     */
    /**
       * Deactivates an event.
       *
       * @param {string} visTimeline The timeline name/identifier.
       * @param {VisTimelineEvents} eventName The event name.
       *
       * @memberOf VisTimelineService
       */
    VisTimelineService.prototype.off = /**
       * Deactivates an event.
       *
       * @param {string} visTimeline The timeline name/identifier.
       * @param {VisTimelineEvents} eventName The event name.
       *
       * @memberOf VisTimelineService
       */
    function (visTimeline, eventName) {
        if (this.timelines[visTimeline]) {
            this.timelines[visTimeline].off(eventName, undefined);
        }
    };
    VisTimelineService.prototype.doesNotExistError = function (visTimeline) {
        return "Timeline with id " + visTimeline + " does not exist.";
    };
    VisTimelineService.prototype.alreadyExistsError = function (visTimeline) {
        return "Timeline with id " + visTimeline + " already exists.";
    };
    VisTimelineService.decorators = [
        { type: core_1.Injectable },
    ];
    /** @nocollapse */
    VisTimelineService.ctorParameters = function () { return []; };
    return VisTimelineService;
}());
exports.VisTimelineService = VisTimelineService;
