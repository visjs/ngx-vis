"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
var Vis = require("vis");
var VisTimelineItems = /** @class */ (function (_super) {
    __extends(VisTimelineItems, _super);
    function VisTimelineItems(data, options) {
        return _super.call(this, data, options) || this;
    }
    VisTimelineItems.prototype.getLength = function () {
        return this.length;
    };
    VisTimelineItems.prototype.add = function (data, senderId) {
        return _super.prototype.add.call(this, data, senderId);
    };
    VisTimelineItems.prototype.clear = function (senderId) {
        return _super.prototype.clear.call(this, senderId);
    };
    VisTimelineItems.prototype.distinct = function (field) {
        return _super.prototype.distinct.call(this, field);
    };
    VisTimelineItems.prototype.flush = function () {
        _super.prototype.flush.call(this);
    };
    VisTimelineItems.prototype.forEach = function (callback, options) {
        _super.prototype.forEach.call(this, callback, options);
    };
    VisTimelineItems.prototype.getAll = function (options) {
        return _super.prototype.get.call(this, options);
    };
    VisTimelineItems.prototype.getById = function (id, options) {
        return _super.prototype.get.call(this, id, options);
    };
    VisTimelineItems.prototype.getByIds = function (ids, options) {
        return _super.prototype.get.call(this, ids, options);
    };
    VisTimelineItems.prototype.getDataSet = function () {
        return _super.prototype.getDataSet.call(this);
    };
    VisTimelineItems.prototype.getIds = function (options) {
        return _super.prototype.getIds.call(this, options);
    };
    VisTimelineItems.prototype.map = function (callback, options) {
        return _super.prototype.map.call(this, callback, options);
    };
    VisTimelineItems.prototype.max = function (field) {
        return _super.prototype.max.call(this, field);
    };
    VisTimelineItems.prototype.min = function (field) {
        return _super.prototype.min.call(this, field);
    };
    VisTimelineItems.prototype.on = function (event, callback) {
        _super.prototype.on.call(this, event, callback);
    };
    VisTimelineItems.prototype.off = function (event, callback) {
        _super.prototype.off.call(this, event, callback);
    };
    VisTimelineItems.prototype.removeItems = function (ids, senderId) {
        return _super.prototype.remove.call(this, ids, senderId);
    };
    VisTimelineItems.prototype.setOptions = function (options) {
        _super.prototype.setOptions.call(this, options);
    };
    VisTimelineItems.prototype.update = function (data, senderId) {
        return _super.prototype.update.call(this, data, senderId);
    };
    return VisTimelineItems;
}(Vis.DataSet));
exports.VisTimelineItems = VisTimelineItems;
var VisTimelineGroups = /** @class */ (function (_super) {
    __extends(VisTimelineGroups, _super);
    function VisTimelineGroups(data, options) {
        return _super.call(this, data, options) || this;
    }
    VisTimelineGroups.prototype.getLength = function () {
        return this.length;
    };
    VisTimelineGroups.prototype.add = function (data, senderId) {
        return _super.prototype.add.call(this, data, senderId);
    };
    VisTimelineGroups.prototype.clear = function (senderId) {
        return _super.prototype.clear.call(this, senderId);
    };
    VisTimelineGroups.prototype.distinct = function (field) {
        return _super.prototype.distinct.call(this, field);
    };
    VisTimelineGroups.prototype.flush = function () {
        _super.prototype.flush.call(this);
    };
    VisTimelineGroups.prototype.forEach = function (callback, options) {
        _super.prototype.forEach.call(this, callback, options);
    };
    VisTimelineGroups.prototype.getAll = function (options) {
        return _super.prototype.get.call(this, options);
    };
    VisTimelineGroups.prototype.getById = function (id, options) {
        return _super.prototype.get.call(this, id, options);
    };
    VisTimelineGroups.prototype.getByIds = function (ids, options) {
        return _super.prototype.get.call(this, ids, options);
    };
    VisTimelineGroups.prototype.getDataSet = function () {
        return _super.prototype.getDataSet.call(this);
    };
    VisTimelineGroups.prototype.getIds = function (options) {
        return _super.prototype.getIds.call(this, options);
    };
    VisTimelineGroups.prototype.map = function (callback, options) {
        return _super.prototype.map.call(this, callback, options);
    };
    VisTimelineGroups.prototype.max = function (field) {
        return _super.prototype.max.call(this, field);
    };
    VisTimelineGroups.prototype.min = function (field) {
        return _super.prototype.min.call(this, field);
    };
    VisTimelineGroups.prototype.on = function (event, callback) {
        _super.prototype.on.call(this, event, callback);
    };
    VisTimelineGroups.prototype.off = function (event, callback) {
        _super.prototype.off.call(this, event, callback);
    };
    VisTimelineGroups.prototype.removeItems = function (ids, senderId) {
        return _super.prototype.remove.call(this, ids, senderId);
    };
    VisTimelineGroups.prototype.setOptions = function (options) {
        _super.prototype.setOptions.call(this, options);
    };
    VisTimelineGroups.prototype.update = function (data, senderId) {
        return _super.prototype.update.call(this, data, senderId);
    };
    return VisTimelineGroups;
}(Vis.DataSet));
exports.VisTimelineGroups = VisTimelineGroups;
var VisTimeline = /** @class */ (function (_super) {
    __extends(VisTimeline, _super);
    function VisTimeline() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return VisTimeline;
}(Vis.Timeline));
exports.VisTimeline = VisTimeline;
__export(require("./vis-timeline.service"));
__export(require("./vis-timeline.directive"));
