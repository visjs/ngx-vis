"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var vis_timeline_service_1 = require("./vis-timeline.service");
var index_1 = require("./index");
/**
 * Use this directive with a div container to show timeline data.
 *
 * @export
 * @class VisTimelineDirective
 * @implements {OnInit}
 * @implements {OnDestroy}
 * @implements {OnChanges}
 */
var VisTimelineDirective = /** @class */ (function () {
    /**
     * Creates an instance of VisTimelineDirective.
     *
     * @param {ElementRef} elementRef The HTML element reference.
     * @param {VisTimelineService} visTimelineService The VisTimelineService.
     *
     * @memberOf VisTimelineDirective
     */
    function VisTimelineDirective(elementRef, visTimelineService) {
        this.elementRef = elementRef;
        this.visTimelineService = visTimelineService;
        /**
             * This event will be raised when the timline is initialized.
             * At this point of time the timeline is successfully registered
             * with the VisNetworkService and you can register to events.
             * The event data is the name of the timeline as a string.
             *
             * @type {EventEmitter<any>}
             * @memberOf VisTimelineDirective
             */
        this.initialized = new core_1.EventEmitter();
        this.isInitialized = false;
        this.visTimelineContainer = elementRef.nativeElement;
    }
    /**
     * Create the timeline when at least visNetwork and visNetworkData
     * are defined.
     *
     * @memberOf VisTimelineDirective
     */
    /**
         * Create the timeline when at least visNetwork and visNetworkData
         * are defined.
         *
         * @memberOf VisTimelineDirective
         */
    VisTimelineDirective.prototype.ngOnInit = /**
         * Create the timeline when at least visNetwork and visNetworkData
         * are defined.
         *
         * @memberOf VisTimelineDirective
         */
    function () {
        if (!this.isInitialized && this.visTimeline && this.visTimelineItems) {
            this.createTimeline();
        }
    };
    /**
     * Update the timeline data, groups or options on reference changes to
     * the visTimelineItems, visTimelineGroups or visTimelineOptions properties.
     *
     * @param {{[propName: string]: SimpleChange}} changes
     *
     * @memberOf VisTimelineDirective
     */
    /**
         * Update the timeline data, groups or options on reference changes to
         * the visTimelineItems, visTimelineGroups or visTimelineOptions properties.
         *
         * @param {{[propName: string]: SimpleChange}} changes
         *
         * @memberOf VisTimelineDirective
         */
    VisTimelineDirective.prototype.ngOnChanges = /**
         * Update the timeline data, groups or options on reference changes to
         * the visTimelineItems, visTimelineGroups or visTimelineOptions properties.
         *
         * @param {{[propName: string]: SimpleChange}} changes
         *
         * @memberOf VisTimelineDirective
         */
    function (changes) {
        if (!this.isInitialized && this.visTimeline && this.visTimelineItems) {
            this.createTimeline();
        }
        for (var propertyName in changes) {
            if (changes.hasOwnProperty(propertyName)) {
                var change = changes[propertyName];
                if (!change.isFirstChange()) {
                    if (propertyName === 'visTimelineItems') {
                        this.visTimelineService.setItems(this.visTimeline, changes[propertyName].currentValue);
                    }
                    if (propertyName === 'visTimelineOptions') {
                        this.visTimelineService.setOptions(this.visTimeline, changes[propertyName].currentValue);
                    }
                    if (propertyName === 'visTimelineGroups') {
                        this.visTimelineService.setGroups(this.visTimeline, changes[propertyName].currentValue);
                    }
                }
            }
        }
    };
    /**
     * Calls the destroy function for this timeline instance.
     *
     *
     * @memberOf VisTimelineDirective
     */
    /**
         * Calls the destroy function for this timeline instance.
         *
         *
         * @memberOf VisTimelineDirective
         */
    VisTimelineDirective.prototype.ngOnDestroy = /**
         * Calls the destroy function for this timeline instance.
         *
         *
         * @memberOf VisTimelineDirective
         */
    function () {
        this.isInitialized = false;
        this.visTimelineService.destroy(this.visTimeline);
    };
    VisTimelineDirective.prototype.createTimeline = function () {
        if (this.visTimelineGroups) {
            this.visTimelineService.createWithItemsAndGroups(this.visTimeline, this.visTimelineContainer, this.visTimelineItems, this.visTimelineGroups, this.visTimelineOptions);
        }
        else {
            this.visTimelineService.createWithItems(this.visTimeline, this.visTimelineContainer, this.visTimelineItems, this.visTimelineOptions);
        }
        this.isInitialized = true;
        this.initialized.emit(this.visTimeline);
    };
    VisTimelineDirective.decorators = [
        { type: core_1.Directive, args: [{
                    selector: '[visTimeline]',
                },] },
    ];
    /** @nocollapse */
    VisTimelineDirective.ctorParameters = function () { return [
        { type: core_1.ElementRef, },
        { type: vis_timeline_service_1.VisTimelineService, },
    ]; };
    VisTimelineDirective.propDecorators = {
        "visTimeline": [{ type: core_1.Input, args: ['visTimeline',] },],
        "visTimelineItems": [{ type: core_1.Input },],
        "visTimelineGroups": [{ type: core_1.Input },],
        "visTimelineOptions": [{ type: core_1.Input },],
        "initialized": [{ type: core_1.Output },],
    };
    return VisTimelineDirective;
}());
exports.VisTimelineDirective = VisTimelineDirective;
