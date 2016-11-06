import { Injectable, EventEmitter } from '@angular/core';
import {
    VisDate,
    VisId,
    VisTimelineItems,
    VisTimelineGroups,
    VisTimelineOptions,
    VisTimelineFitOptions,
    VisTimelineEvents,
    VisTimelineEventPropertiesResult,
    VisTimeline } from './index';

@Injectable()
export class VisTimelineService {
    public click: EventEmitter<any> = new EventEmitter<any>();

    private _timelines: {[id: string]: VisTimeline} = {};

    public createWithItems(
        visTimeline: string,
        container: HTMLElement,
        items: VisTimelineItems,
        options?: VisTimelineOptions): void {
        if (this._timelines[visTimeline]) {
            throw new Error(this.alreadyExistsError(visTimeline));
        }

        this._timelines[visTimeline] = new VisTimeline(container, items, options);
    }

    public createWithItemsAndGroups(
        visTimeline: string,
        container: HTMLElement,
        items: VisTimelineItems,
        groups: VisTimelineGroups,
        options?: VisTimelineOptions): void {
        if (this._timelines[visTimeline]) {
            throw new Error(this.alreadyExistsError(visTimeline));
        }

        this._timelines[visTimeline] = new VisTimeline(container, items, groups, options);
    }

    public addCustomTime(visTimeline: string, time: VisDate, id?: VisId): VisId {
        if (this._timelines[visTimeline]) {
            return this._timelines[visTimeline].addCustomTime(time, id);
        } else {
            throw new Error(this.doesNotExistError(visTimeline));
        }
    }

    public fit(visTimeline: string, options?: VisTimelineFitOptions): void {
        if (this._timelines[visTimeline]) {
            this._timelines[visTimeline].fit(options);
        } else {
            throw new Error(this.doesNotExistError(visTimeline));
        }
    }

    public focusOnId(visTimeline: string, id: VisId, options?: VisTimelineFitOptions): void {
        if (this._timelines[visTimeline]) {
            return this._timelines[visTimeline].focus(id, options);
        } else {
            throw new Error(this.doesNotExistError(visTimeline));
        }
    }

    public focusOnIds(visTimeline: string, ids: VisId[], options?: VisTimelineFitOptions): void {
        if (this._timelines[visTimeline]) {
            this._timelines[visTimeline].focus(ids, options);
        } else {
            throw new Error(this.doesNotExistError(visTimeline));
        }
    }

    public getCurrentTime(visTimeline: string): Date {
        if (this._timelines[visTimeline]) {
            return this._timelines[visTimeline].getCurrentTime();
        } else {
            throw new Error(this.doesNotExistError(visTimeline));
        }
    }

    public getCustomTime(visTimeline: string, id?: VisId): Date {
        if (this._timelines[visTimeline]) {
            return this._timelines[visTimeline].getCustomTime(id);
        } else {
            throw new Error(this.doesNotExistError(visTimeline));
        }
    }

    public getEventProperties(visTimeline: string, event: Event): VisTimelineEventPropertiesResult {
        if (this._timelines[visTimeline]) {
            return this._timelines[visTimeline].getEventProperties(event);
        } else {
            throw new Error(this.doesNotExistError(visTimeline));
        }
    }

    public getItemRange(visTimeline: string): any {
        if (this._timelines[visTimeline]) {
            return this._timelines[visTimeline].getItemRange();
        } else {
            throw new Error(this.doesNotExistError(visTimeline));
        }
    }

    public getSelection(visTimeline: string): VisId[] {
        if (this._timelines[visTimeline]) {
            return this._timelines[visTimeline].getSelection();
        } else {
            throw new Error(this.doesNotExistError(visTimeline));
        }
    }

    public getVisibleItems(visTimeline: string): VisId[] {
        if (this._timelines[visTimeline]) {
            return this._timelines[visTimeline].getVisibleItems();
        } else {
            throw new Error(this.doesNotExistError(visTimeline));
        }
    }

    public getWindow(visTimeline: string): Window {
        if (this._timelines[visTimeline]) {
            return this._timelines[visTimeline].getWindow();
        } else {
            throw new Error(this.doesNotExistError(visTimeline));
        }
    }

    public moveTo(visTimeline: string, time: VisDate, options?: VisTimelineFitOptions): void {
        if (this._timelines[visTimeline]) {
            this._timelines[visTimeline].moveTo(time, options);
        } else {
            throw new Error(this.doesNotExistError(visTimeline));
        }
    }

    public redraw(visTimeline: string): void {
        if (this._timelines[visTimeline]) {
            this._timelines[visTimeline].redraw();
        } else {
            throw new Error(this.doesNotExistError(visTimeline));
        }
    }

    public removeCustomTime(visTimeline: string, id: VisId): void {
        if (this._timelines[visTimeline]) {
            this._timelines[visTimeline].removeCustomTime(id);
        } else {
            throw new Error(this.doesNotExistError(visTimeline));
        }
    }

    public setCurrentTime(visTimeline: string, time: VisDate): void {
        if (this._timelines[visTimeline]) {
            this._timelines[visTimeline].setCurrentTime(time);
        } else {
            throw new Error(this.doesNotExistError(visTimeline));
        }
    }

    public setCustomTime(visTimeline: string, time: VisDate, id?: VisId): void {
        if (this._timelines[visTimeline]) {
            this._timelines[visTimeline].setCustomTime(time, id);
        } else {
            throw new Error(this.doesNotExistError(visTimeline));
        }
    }

    public setCustomTimeTitle(visTimeline: string, title: string, id?: VisId): void {
        if (this._timelines[visTimeline]) {
            this._timelines[visTimeline].setCustomTimeTitle(title, id);
        } else {
            throw new Error(this.doesNotExistError(visTimeline));
        }
    }

    public setData(visTimeline: string, data: { groups?: VisTimelineGroups; items?: VisTimelineItems }): void {
        if (this._timelines[visTimeline]) {
            this._timelines[visTimeline].setData(data);
        } else {
            throw new Error(this.doesNotExistError(visTimeline));
        }
    }

    public setGroups(visTimeline: string, groups: VisTimelineGroups): void {
        if (this._timelines[visTimeline]) {
            this._timelines[visTimeline].setGroups(groups);
        } else {
            throw new Error(this.doesNotExistError(visTimeline));
        }
    }

    public setItems(visTimeline: string, items: VisTimelineItems): void {
        if (this._timelines[visTimeline]) {
            this._timelines[visTimeline].setItems(items);
        } else {
            throw new Error(this.doesNotExistError(visTimeline));
        }
    }

    public setOptions(visTimeline: string, options: VisTimelineOptions): void {
        if (this._timelines[visTimeline]) {
            this._timelines[visTimeline].setOptions(options);
        } else {
            throw new Error(this.doesNotExistError(visTimeline));
        }
    }

    public setSelectionToId(visTimeline: string, id: VisId): void {
        if (this._timelines[visTimeline]) {
            this._timelines[visTimeline].setSelection(id);
        } else {
            throw new Error(this.doesNotExistError(visTimeline));
        }
    }

    public setSelectionToIds(visTimeline: string, ids: VisId[]): void {
        if (this._timelines[visTimeline]) {
            this._timelines[visTimeline].setSelection(ids);
        } else {
            throw new Error(this.doesNotExistError(visTimeline));
        }
    }

    public setWindow(visTimeline: string, start: VisDate, end: VisDate, options?: VisTimelineFitOptions): void {
        if (this._timelines[visTimeline]) {
            this._timelines[visTimeline].setWindow(start, end, options);
        } else {
            throw new Error(this.doesNotExistError(visTimeline));
        }
    }

    public destroy(visTimeline: string): void {
        if (this._timelines[visTimeline]) {
            this._timelines[visTimeline].destroy();
            delete this._timelines[visTimeline];
        }
    }

    public on(visTimeline: string, eventName: VisTimelineEvents): boolean {
        if (this._timelines[visTimeline]) {
            let that: {[index: string]: any} = this;
            this._timelines[visTimeline].on(eventName, (params: any) => {
                let emitter = that[eventName] as EventEmitter<any>;
                if (emitter) {
                    emitter.emit(params ? [visTimeline].concat(params) : visTimeline);
                }
            });

            return true;
        }

        return false;
    }

    public off(visTimeline: string, eventName: VisTimelineEvents): void {
        if (this._timelines[visTimeline]) {
            this._timelines[visTimeline].off(eventName, undefined);
        }
    }

    private doesNotExistError(visTimeline: string): string {
        return `Timeline with id ${visTimeline} does not exist.`;
    }

    private alreadyExistsError(visTimeline: string): string {
        return `Timeline with id ${visTimeline} already exists.`;
    }
}
