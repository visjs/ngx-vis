import { EventEmitter, Injectable, NgZone } from '@angular/core';
import {
  DataGroupCollectionType,
  DataItemCollectionType,
  DateType,
  IdType,
  Timeline,
  TimelineAnimationOptions,
  TimelineEventPropertiesResult,
  TimelineOptions,
} from 'vis-timeline';

/**
 * A service to create, manage and control VisTimeline instances.
 *
 * @export
 * @class VisTimelineService
 */
@Injectable()
export class VisTimelineService {
  /**
   * Fired when the current time bar redraws.
   * The rate depends on the zoom level.
   *
   * @type {EventEmitter<any>}
   * @memberOf VisTimelineService
   */
  public currentTimeTick: EventEmitter<any> = new EventEmitter<any>();

  /**
   * Fired when clicked inside the Timeline.
   *
   * @type {EventEmitter<any>}
   * @memberOf VisTimelineService
   */
  public click: EventEmitter<any> = new EventEmitter<any>();

  /**
   * Fired when right-clicked inside the Timeline.
   * Note that in order to prevent the context menu from showing up,
   * default behavior of the event must be stopped.
   *
   * @type {EventEmitter<any>}
   * @memberOf VisTimelineService
   */
  public contextmenu: EventEmitter<any> = new EventEmitter<any>();

  /**
   * Fired when double clicked inside the Timeline.
   *
   * @type {EventEmitter<any>}
   * @memberOf VisTimelineService
   */
  public doubleClick: EventEmitter<any> = new EventEmitter<any>();

  /**
   * 	Fired after the dragging of a group is finished.
   *
   * @type {EventEmitter<any>}
   * @memberOf VisTimelineService
   */
  public groupDragged: EventEmitter<any> = new EventEmitter<any>();

  /**
   * Fired once after each graph redraw.
   *
   * @type {EventEmitter<any>}
   * @memberOf VisTimelineService
   */
  public changed: EventEmitter<any> = new EventEmitter<any>();

  /**
   * Fired repeatedly when the timeline window is being changed.
   *
   * @type {EventEmitter<any>}
   * @memberOf VisTimelineService
   */
  public rangechange: EventEmitter<any> = new EventEmitter<any>();

  /**
   * Fired once after the timeline window has been changed.
   *
   * @type {EventEmitter<any>}
   * @memberOf VisTimelineService
   */
  public rangechanged: EventEmitter<any> = new EventEmitter<any>();

  /**
   * Fired after the user selects or deselects items by tapping or holding them.
   * When a use taps an already selected item, the select event is fired again.
   * Not fired when the method setSelectionis executed.
   *
   * @type {EventEmitter<any>}
   * @memberOf VisTimelineService
   */
  public select: EventEmitter<any> = new EventEmitter<any>();

  /**
   * Fired when the user moves the mouse over an item.
   *
   * @type {EventEmitter<any>}
   * @memberOf VisTimelineService
   */
  public itemover: EventEmitter<any> = new EventEmitter<any>();

  /**
   * Fired when the user moves the mouse out of an item.
   *
   * @type {EventEmitter<any>}
   * @memberOf VisTimelineService
   */
  public itemout: EventEmitter<any> = new EventEmitter<any>();

  /**
   * Fired repeatedly when the user is dragging the custom time bar.
   * Only available when the custom time bar is enabled.
   *
   * @type {EventEmitter<any>}
   * @memberOf VisTimelineService
   */
  public timechange: EventEmitter<any> = new EventEmitter<any>();

  /**
   * Fired once after the user has dragged the custom time bar.
   * Only available when the custom time bar is enabled.
   *
   * @type {EventEmitter<any>}
   * @memberOf VisTimelineService
   */
  public timechanged: EventEmitter<any> = new EventEmitter<any>();

  private events: Map<string, EventEmitter<any>> = new Map();

  private timelines: { [id: string]: Timeline } = {};

  constructor(
    private ngZone: NgZone,
  ) { }

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
  public createWithItems(visTimeline: string, container: HTMLElement, items: DataItemCollectionType, options?: TimelineOptions): void {
    if (this.timelines[visTimeline]) {
      throw new Error(this.alreadyExistsError(visTimeline));
    }

    this.timelines[visTimeline] = this.ngZone.runOutsideAngular(() => new Timeline(container, items, this.wrapCallbacksWithNgZone(options)));
  }

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
  public createWithItemsAndGroups(
    visTimeline: string,
    container: HTMLElement,
    items: DataItemCollectionType,
    groups: DataGroupCollectionType,
    options?: TimelineOptions,
  ): void {
    if (this.timelines[visTimeline]) {
      throw new Error(this.alreadyExistsError(visTimeline));
    }

    this.timelines[visTimeline] = this.ngZone.runOutsideAngular(() => new Timeline(container, items, groups, this.wrapCallbacksWithNgZone(options)));
  }

  /**
   * Add new vertical bar representing a custom time that can be dragged by the user.
   * The id is added as CSS class name of the custom time bar,
   * allowing to style multiple time bars differently.
   *
   * @param {string} visTimeline The timeline name/identifier.
   * @param {DateType} time Parameter time can be a Date, Number, or String, and is new Date() by default.
   * @param {IdType} [id] Parameter id can be Number or String and is undefined by default.
   * @returns {IdType} The method returns id of the created bar.
   *
   * @throws {Error} Thrown when timeline does not exist.
   *
   * @memberOf VisTimelineService
   */
  public addCustomTime(visTimeline: string, time: DateType, id?: IdType): IdType {
    if (this.timelines[visTimeline]) {
      return this.timelines[visTimeline].addCustomTime(time, id);
    } else {
      throw new Error(this.doesNotExistError(visTimeline));
    }
  }

  /**
   * Adjust the visible window such that it fits all items.
   * See also function focus(id).
   *
   * @param {string} visTimeline The timeline name/identifier.
   * @param {TimelineAnimationOptions} [options] Optional options.
   *
   * @throws {Error} Thrown when timeline does not exist.
   *
   * @memberOf VisTimelineService
   */
  public fit(visTimeline: string, options?: TimelineAnimationOptions): void {
    if (this.timelines[visTimeline]) {
      this.timelines[visTimeline].fit(options);
    } else {
      throw new Error(this.doesNotExistError(visTimeline));
    }
  }

  /**
   * Adjust the visible window such that the selected item is centered on screen.
   *
   * @param {string} visTimeline The timeline name/identifier.
   * @param {IdType} id The id of the item.
   * @param {TimelineAnimationOptions} [options] Options options.
   *
   * @throws {Error} Thrown when timeline does not exist.
   *
   * @memberOf VisTimelineService
   */
  public focusOnId(visTimeline: string, id: IdType, options?: TimelineAnimationOptions): void {
    if (this.timelines[visTimeline]) {
      this.timelines[visTimeline].focus(id, options);
    } else {
      throw new Error(this.doesNotExistError(visTimeline));
    }
  }

  /**
   * Adjust the visible window such that the selected items are centered on screen.
   *
   * @param {string} visTimeline The timeline name/identifier.
   * @param {IdType[]} ids The item ids.
   * @param {TimelineAnimationOptions} [options] Optional options.
   *
   * @throws {Error} Thrown when timeline does not exist.
   *
   * @memberOf VisTimelineService
   */
  public focusOnIds(visTimeline: string, ids: IdType[], options?: TimelineAnimationOptions): void {
    if (this.timelines[visTimeline]) {
      this.timelines[visTimeline].focus(ids, options);
    } else {
      throw new Error(this.doesNotExistError(visTimeline));
    }
  }

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
  public getCurrentTime(visTimeline: string): Date {
    if (this.timelines[visTimeline]) {
      return this.timelines[visTimeline].getCurrentTime();
    } else {
      throw new Error(this.doesNotExistError(visTimeline));
    }
  }

  /**
   * Retrieve the custom time from the custom time bar with given id.
   * Id is undefined by default.
   *
   * @param {string} visTimeline The timeline name/identifier.
   * @param {IdType} [id] The time bar id.
   * @returns {Date} The custom time.
   *
   * @throws {Error} Thrown when timeline does not exist.
   *
   * @memberOf VisTimelineService
   */
  public getCustomTime(visTimeline: string, id?: IdType): Date {
    if (this.timelines[visTimeline]) {
      return this.timelines[visTimeline].getCustomTime(id);
    } else {
      throw new Error(this.doesNotExistError(visTimeline));
    }
  }

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
  public getEventProperties(visTimeline: string, event: Event): TimelineEventPropertiesResult {
    if (this.timelines[visTimeline]) {
      return this.timelines[visTimeline].getEventProperties(event);
    } else {
      throw new Error(this.doesNotExistError(visTimeline));
    }
  }

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
  public getItemRange(visTimeline: string): { min: Date; max: Date } {
    if (this.timelines[visTimeline]) {
      return this.timelines[visTimeline].getItemRange();
    } else {
      throw new Error(this.doesNotExistError(visTimeline));
    }
  }

  /**
   * Get an array with the ids of the currently selected items.
   *
   * @param {string} visTimeline The timeline name/identifier.
   * @returns {IdType[]} The currently selected items.
   *
   * @throws {Error} Thrown when timeline does not exist.
   *
   * @memberOf VisTimelineService
   */
  public getSelection(visTimeline: string): IdType[] {
    if (this.timelines[visTimeline]) {
      return this.timelines[visTimeline].getSelection();
    } else {
      throw new Error(this.doesNotExistError(visTimeline));
    }
  }

  /**
   * Get an array with the ids of the currently visible items.
   *
   * @param {string} visTimeline The timeline name/identifier.
   * @returns {IdType[]} The currently visible items.
   *
   * @throws {Error} Thrown when timeline does not exist.
   *
   * @memberOf VisTimelineService
   */
  public getVisibleItems(visTimeline: string): IdType[] {
    if (this.timelines[visTimeline]) {
      return this.timelines[visTimeline].getVisibleItems();
    } else {
      throw new Error(this.doesNotExistError(visTimeline));
    }
  }

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
  public getWindow(visTimeline: string): { start: Date; end: Date } {
    if (this.timelines[visTimeline]) {
      return this.timelines[visTimeline].getWindow();
    } else {
      throw new Error(this.doesNotExistError(visTimeline));
    }
  }

  /**
   * 	Move the window such that given time is centered on screen.
   *
   * @param {string} visTimeline The timeline name/identifier.
   * @param {DateType} time Parameter time can be a Date, Number, or String.
   * @param {TimelineAnimationOptions} [options] Optional options.
   *
   * @throws {Error} Thrown when timeline does not exist.
   *
   * @memberOf VisTimelineService
   */
  public moveTo(visTimeline: string, time: DateType, options?: TimelineAnimationOptions): void {
    if (this.timelines[visTimeline]) {
      this.timelines[visTimeline].moveTo(time, options);
    } else {
      throw new Error(this.doesNotExistError(visTimeline));
    }
  }

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
  public redraw(visTimeline: string): void {
    if (this.timelines[visTimeline]) {
      this.timelines[visTimeline].redraw();
    } else {
      throw new Error(this.doesNotExistError(visTimeline));
    }
  }

  /**
   * Remove vertical bars previously added to the timeline via addCustomTime method.
   *
   * @param {string} visTimeline The timeline name/identifier.
   * @param {IdType} id Parameter id is the ID of the custom vertical bar returned by addCustomTime method.
   *
   * @throws {Error} Thrown when timeline does not exist.
   *
   * @memberOf VisTimelineService
   */
  public removeCustomTime(visTimeline: string, id: IdType): void {
    if (this.timelines[visTimeline]) {
      this.timelines[visTimeline].removeCustomTime(id);
    } else {
      throw new Error(this.doesNotExistError(visTimeline));
    }
  }

  /**
   * Set a current time.
   * This can be used for example to ensure that a client's time is synchronized
   * with a shared server time.
   * Only applicable when option showCurrentTime is true.
   *
   * @param {string} visTimeline The timeline name/identifier.
   * @param {DateType} time time can be a Date object, numeric timestamp, or ISO date string.
   *
   * @throws {Error} Thrown when timeline does not exist.
   *
   * @memberOf VisTimelineService
   */
  public setCurrentTime(visTimeline: string, time: DateType): void {
    if (this.timelines[visTimeline]) {
      this.timelines[visTimeline].setCurrentTime(time);
    } else {
      throw new Error(this.doesNotExistError(visTimeline));
    }
  }

  /**
   * 	Adjust the time of a custom time bar.
   *
   * @param {string} visTimeline The timeline name/identifier.
   * @param {DateType} time Parameter time can be a Date object, numeric timestamp, or ISO date string.
   * @param {IdType} [id] Parameter id is the id of the custom time bar, and is undefined by default.
   *
   * @throws {Error} Thrown when timeline does not exist.
   *
   * @memberOf VisTimelineService
   */
  public setCustomTime(visTimeline: string, time: DateType, id?: IdType): void {
    if (this.timelines[visTimeline]) {
      this.timelines[visTimeline].setCustomTime(time, id);
    } else {
      throw new Error(this.doesNotExistError(visTimeline));
    }
  }

  /**
   * Adjust the title attribute of a custom time bar.
   *
   * @param {string} visTimeline The timeline name/identifier.
   * @param {string} title Parameter title is the string to be set as title.
   *                       Use empty string to hide the title completely.
   * @param {IdType} [id] Parameter id is the id of the custom time bar, and is undefined by default.
   *
   * @throws {Error} Thrown when timeline does not exist.
   *
   * @memberOf VisTimelineService
   */
  public setCustomTimeTitle(visTimeline: string, title: string, id?: IdType): void {
    if (this.timelines[visTimeline]) {
      this.timelines[visTimeline].setCustomTimeTitle(title, id);
    } else {
      throw new Error(this.doesNotExistError(visTimeline));
    }
  }

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
  public setData(visTimeline: string, data: { groups?: DataGroupCollectionType; items?: DataItemCollectionType }): void {
    if (this.timelines[visTimeline]) {
      this.timelines[visTimeline].setData(data);
    } else {
      throw new Error(this.doesNotExistError(visTimeline));
    }
  }

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
  public setGroups(visTimeline: string, groups: DataGroupCollectionType): void {
    if (this.timelines[visTimeline]) {
      this.timelines[visTimeline].setGroups(groups);
    } else {
      throw new Error(this.doesNotExistError(visTimeline));
    }
  }

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
  public setItems(visTimeline: string, items: DataItemCollectionType): void {
    if (this.timelines[visTimeline]) {
      this.timelines[visTimeline].setItems(items);
    } else {
      throw new Error(this.doesNotExistError(visTimeline));
    }
  }

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
  public setOptions(visTimeline: string, options: TimelineOptions): void {
    if (this.timelines[visTimeline]) {
      this.timelines[visTimeline].setOptions(options);
    } else {
      throw new Error(this.doesNotExistError(visTimeline));
    }
  }

  /**
   * Select one item by its id.#
   * The currently selected items will be unselected.
   *
   * @param {string} visTimeline The timeline name/identifier.
   * @param {IdType} id The id of the item that should be selected.
   *
   * @throws {Error} Thrown when timeline does not exist.
   *
   * @memberOf VisTimelineService
   */
  public setSelectionToId(visTimeline: string, id: IdType): void {
    if (this.timelines[visTimeline]) {
      this.timelines[visTimeline].setSelection(id);
    } else {
      throw new Error(this.doesNotExistError(visTimeline));
    }
  }

  /**
   * Select multiple items by their id.
   * The currently selected items will be unselected.
   * To unselect all selected items, call `setSelection([])`.
   *
   * @param {string} visTimeline The timeline name/identifier.
   * @param {IdType[]} ids The ids of the irems that should be selected.
   *
   * @throws {Error} Thrown when timeline does not exist.
   *
   * @memberOf VisTimelineService
   */
  public setSelectionToIds(visTimeline: string, ids: IdType[]): void {
    if (this.timelines[visTimeline]) {
      this.timelines[visTimeline].setSelection(ids);
    } else {
      throw new Error(this.doesNotExistError(visTimeline));
    }
  }

  /**
   * Set the current visible window.
   *
   * If the parameter value of start or end is null, the parameter will be left unchanged.
   *
   * @param {string} visTimeline The timeline name/identifier.
   * @param {DateType} start The parameters start can be a Date, Number, or String.
   * @param {DateType} end The parameters end can be a Date, Number, or String.
   * @param {TimelineAnimationOptions} [options] Optional options.
   *
   * @throws {Error} Thrown when timeline does not exist.
   *
   * @memberOf VisTimelineService
   */
  public setWindow(visTimeline: string, start: DateType, end: DateType, options?: TimelineAnimationOptions): void {
    if (this.timelines[visTimeline]) {
      this.timelines[visTimeline].setWindow(start, end, options);
    } else {
      throw new Error(this.doesNotExistError(visTimeline));
    }
  }

  /**
   * Destroy the Timeline.
   * The timeline is removed from memory.
   * All DOM elements and event listeners are cleaned up.
   *
   * @param {string} visTimeline The timeline name/identifier.
   *
   * @memberOf VisTimelineService
   */
  public destroy(visTimeline: string): void {
    if (this.timelines[visTimeline]) {
      this.timelines[visTimeline].destroy();
      delete this.timelines[visTimeline];
    }
  }

  /**
   * Activates an event.
   *
   * @param {string} visTimeline The timeline name/identifier.
   * @param {string} eventName The event name.
   * @param {boolean} preventDefault Stops the default behavior of the event.
   * @returns {boolean} Returns true when the event was activated.
   *
   * @memberOf VisTimelineService
   */
  public on(visTimeline: string, eventName: string, preventDefault?: boolean): boolean {
    if (this.timelines[visTimeline]) {
      this.events.set(eventName, new EventEmitter<any>());
      // tslint:disable-next-line
      const that: { [index: string]: any } = this;
      this.timelines[visTimeline].on(eventName, (params: any) => {
        const emitter = (that[eventName] || that.events.get(eventName)) as EventEmitter<any>;
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
  }

  /**
   * Deactivates an event.
   *
   * @param {string} visTimeline The timeline name/identifier.
   * @param {string} eventName The event name.
   *
   * @memberOf VisTimelineService
   */
  public off(visTimeline: string, eventName: string): void {
    if (this.timelines[visTimeline]) {
      this.events.delete(eventName);
      this.timelines[visTimeline].off(eventName, undefined);
    }
  }

  /**
   * Get the event emitter associated with the specified event name.
   * @param {string} eventName The event name.
   * @returns {EventEmitter<any>} The event emitter of the specified event name.
   */
  public getEmitter(eventName: string): EventEmitter<any> {
    return this.events.get(eventName);
  }

  private doesNotExistError(visTimeline: string): string {
    return `Timeline with id ${visTimeline} does not exist.`;
  }

  private alreadyExistsError(visTimeline: string): string {
    return `Timeline with id ${visTimeline} already exists.`;
  }

  private wrapCallbacksWithNgZone(options: TimelineOptions): TimelineOptions {
    const updatedOptions: any = { ...options };
    const callbackFunctions: Array<keyof TimelineOptions> = [
      'onAdd',
      'onAddGroup',
      'onDropObjectOnItem',
      'onInitialDrawComplete',
      'onUpdate',
      'onMove',
      'onMoveGroup',
      'onMoving',
      'onRemove',
      'onRemoveGroup',
    ];

    callbackFunctions
      .filter((callbackFunction) => updatedOptions.hasOwnProperty(callbackFunction))
      .forEach((callbackFunction) => {
        updatedOptions[callbackFunction] = (...params: any[]) => this.ngZone.run(() => options[callbackFunction](...params));
      });

    return updatedOptions;

  }
}
