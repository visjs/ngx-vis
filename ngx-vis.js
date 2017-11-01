"use strict";
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var index_1 = require("./components/network/index");
var index_2 = require("./components/timeline/index");
__export(require("./components/index"));
var VisModule = /** @class */ (function () {
    function VisModule() {
    }
    VisModule.decorators = [
        { type: core_1.NgModule, args: [{
                    declarations: [index_1.VisNetworkDirective, index_2.VisTimelineDirective],
                    exports: [index_1.VisNetworkDirective, index_2.VisTimelineDirective],
                    providers: [index_1.VisNetworkService, index_2.VisTimelineService],
                },] },
    ];
    /** @nocollapse */
    VisModule.ctorParameters = function () { return []; };
    return VisModule;
}());
exports.VisModule = VisModule;
