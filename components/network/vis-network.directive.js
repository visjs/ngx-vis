"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var vis_network_service_1 = require("./vis-network.service");
/**
 * Use this directive with a div container to show network data.
 *
 * @export
 * @class VisNetworkDirective
 * @implements {OnInit}
 * @implements {OnDestroy}
 * @implements {OnChanges}
 */
var VisNetworkDirective = /** @class */ (function () {
    /**
     * Creates an instance of VisNetworkDirective.
     *
     * @param {ElementRef} elementRef The HTML element reference.
     * @param {VisNetworkService} visNetworkService The VisNetworkService.
     *
     * @memberOf VisNetworkDirective
     */
    function VisNetworkDirective(elementRef, visNetworkService) {
        this.elementRef = elementRef;
        this.visNetworkService = visNetworkService;
        /**
           * This event will be raised when the network is initialized.
           * At this point of time the network is successfully registered
           * with the VisNetworkService and you can register to events.
           * The event data is the name of the network as a string.
           *
           * @type {EventEmitter<any>}
           * @memberOf VisNetworkDirective
           */
        this.initialized = new core_1.EventEmitter();
        this.isInitialized = false;
        this.visNetworkContainer = elementRef.nativeElement;
    }
    /**
     * Create the network when at least visNetwork and visNetworkData
     * are defined.
     *
     * @memberOf VisNetworkDirective
     */
    /**
       * Create the network when at least visNetwork and visNetworkData
       * are defined.
       *
       * @memberOf VisNetworkDirective
       */
    VisNetworkDirective.prototype.ngOnInit = /**
       * Create the network when at least visNetwork and visNetworkData
       * are defined.
       *
       * @memberOf VisNetworkDirective
       */
    function () {
        if (!this.isInitialized && this.visNetwork && this.visNetworkData) {
            this.createNetwork();
        }
    };
    /**
     * Update the network data or options on reference changes to
     * the visNetworkData or visNetworkOptions properties.
     *
     * @param {{[propName: string]: SimpleChange}} changes
     *
     * @memberOf VisNetworkDirective
     */
    /**
       * Update the network data or options on reference changes to
       * the visNetworkData or visNetworkOptions properties.
       *
       * @param {{[propName: string]: SimpleChange}} changes
       *
       * @memberOf VisNetworkDirective
       */
    VisNetworkDirective.prototype.ngOnChanges = /**
       * Update the network data or options on reference changes to
       * the visNetworkData or visNetworkOptions properties.
       *
       * @param {{[propName: string]: SimpleChange}} changes
       *
       * @memberOf VisNetworkDirective
       */
    function (changes) {
        if (!this.isInitialized && this.visNetwork && this.visNetworkData) {
            this.createNetwork();
        }
        for (var propertyName in changes) {
            if (changes.hasOwnProperty(propertyName)) {
                var change = changes[propertyName];
                if (!change.isFirstChange()) {
                    if (propertyName === 'visNetworkData') {
                        this.visNetworkService.setData(this.visNetwork, changes[propertyName].currentValue);
                    }
                    if (propertyName === 'visNetworkOptions') {
                        this.visNetworkService.setOptions(this.visNetwork, changes[propertyName].currentValue);
                    }
                }
            }
        }
    };
    /**
     * Calls the destroy function for this network instance.
     *
     * @memberOf VisNetworkDirective
     */
    /**
       * Calls the destroy function for this network instance.
       *
       * @memberOf VisNetworkDirective
       */
    VisNetworkDirective.prototype.ngOnDestroy = /**
       * Calls the destroy function for this network instance.
       *
       * @memberOf VisNetworkDirective
       */
    function () {
        this.isInitialized = false;
        this.visNetworkService.destroy(this.visNetwork);
    };
    VisNetworkDirective.prototype.createNetwork = function () {
        this.visNetworkService.create(this.visNetwork, this.visNetworkContainer, this.visNetworkData, this.visNetworkOptions);
        this.isInitialized = true;
        this.initialized.emit(this.visNetwork);
    };
    VisNetworkDirective.decorators = [
        { type: core_1.Directive, args: [{
                    selector: '[visNetwork]',
                },] },
    ];
    /** @nocollapse */
    VisNetworkDirective.ctorParameters = function () { return [
        { type: core_1.ElementRef, },
        { type: vis_network_service_1.VisNetworkService, },
    ]; };
    VisNetworkDirective.propDecorators = {
        "visNetwork": [{ type: core_1.Input, args: ['visNetwork',] },],
        "visNetworkData": [{ type: core_1.Input },],
        "visNetworkOptions": [{ type: core_1.Input },],
        "initialized": [{ type: core_1.Output },],
    };
    return VisNetworkDirective;
}());
exports.VisNetworkDirective = VisNetworkDirective;
