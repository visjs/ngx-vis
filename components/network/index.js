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
var index_1 = require("../timeline/index");
var index_2 = require("../timeline/index");
exports.VisId = index_2.VisId;
var VisNetwork = /** @class */ (function (_super) {
    __extends(VisNetwork, _super);
    function VisNetwork() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return VisNetwork;
}(Vis.Network));
exports.VisNetwork = VisNetwork;
var VisNodes = /** @class */ (function (_super) {
    __extends(VisNodes, _super);
    function VisNodes(data, options) {
        return _super.call(this, data, options) || this;
    }
    VisNodes.prototype.getLength = function () {
        return this.length;
    };
    VisNodes.prototype.add = function (data, senderId) {
        return _super.prototype.add.call(this, data, senderId);
    };
    VisNodes.prototype.clear = function (senderId) {
        return _super.prototype.clear.call(this, senderId);
    };
    VisNodes.prototype.distinct = function (field) {
        return _super.prototype.distinct.call(this, field);
    };
    VisNodes.prototype.flush = function () {
        _super.prototype.flush.call(this);
    };
    VisNodes.prototype.forEach = function (callback, options) {
        _super.prototype.forEach.call(this, callback, options);
    };
    VisNodes.prototype.getAll = function (options) {
        return _super.prototype.get.call(this, options);
    };
    VisNodes.prototype.getById = function (id, options) {
        return _super.prototype.get.call(this, id, options);
    };
    VisNodes.prototype.getByIds = function (ids, options) {
        return _super.prototype.get.call(this, ids, options);
    };
    VisNodes.prototype.getDataSet = function () {
        return _super.prototype.getDataSet.call(this);
    };
    VisNodes.prototype.getIds = function (options) {
        return _super.prototype.getIds.call(this, options);
    };
    VisNodes.prototype.map = function (callback, options) {
        return _super.prototype.map.call(this, callback, options);
    };
    VisNodes.prototype.max = function (field) {
        return _super.prototype.max.call(this, field);
    };
    VisNodes.prototype.min = function (field) {
        return _super.prototype.min.call(this, field);
    };
    VisNodes.prototype.on = function (event, callback) {
        _super.prototype.on.call(this, event, callback);
    };
    VisNodes.prototype.off = function (event, callback) {
        _super.prototype.off.call(this, event, callback);
    };
    VisNodes.prototype.removeItems = function (ids, senderId) {
        return _super.prototype.remove.call(this, ids, senderId);
    };
    VisNodes.prototype.setOptions = function (options) {
        _super.prototype.setOptions.call(this, options);
    };
    VisNodes.prototype.update = function (data, senderId) {
        return _super.prototype.update.call(this, data, senderId);
    };
    return VisNodes;
}(Vis.DataSet));
exports.VisNodes = VisNodes;
var VisEdges = /** @class */ (function (_super) {
    __extends(VisEdges, _super);
    function VisEdges(data, options) {
        return _super.call(this, data, options) || this;
    }
    VisEdges.prototype.getLength = function () {
        return this.length;
    };
    VisEdges.prototype.add = function (data, senderId) {
        return _super.prototype.add.call(this, data, senderId);
    };
    VisEdges.prototype.clear = function (senderId) {
        return _super.prototype.clear.call(this, senderId);
    };
    VisEdges.prototype.distinct = function (field) {
        return _super.prototype.distinct.call(this, field);
    };
    VisEdges.prototype.flush = function () {
        _super.prototype.flush.call(this);
    };
    VisEdges.prototype.forEach = function (callback, options) {
        _super.prototype.forEach.call(this, callback, options);
    };
    VisEdges.prototype.getAll = function (options) {
        return _super.prototype.get.call(this, options);
    };
    VisEdges.prototype.getById = function (id, options) {
        return _super.prototype.get.call(this, id, options);
    };
    VisEdges.prototype.getByIds = function (ids, options) {
        return _super.prototype.get.call(this, ids, options);
    };
    VisEdges.prototype.getDataSet = function () {
        return _super.prototype.getDataSet.call(this);
    };
    VisEdges.prototype.getIds = function (options) {
        return _super.prototype.getIds.call(this, options);
    };
    VisEdges.prototype.map = function (callback, options) {
        return _super.prototype.map.call(this, callback, options);
    };
    VisEdges.prototype.max = function (field) {
        return _super.prototype.max.call(this, field);
    };
    VisEdges.prototype.min = function (field) {
        return _super.prototype.min.call(this, field);
    };
    VisEdges.prototype.on = function (event, callback) {
        _super.prototype.on.call(this, event, callback);
    };
    VisEdges.prototype.off = function (event, callback) {
        _super.prototype.off.call(this, event, callback);
    };
    VisEdges.prototype.removeItems = function (ids, senderId) {
        return _super.prototype.remove.call(this, ids, senderId);
    };
    VisEdges.prototype.setOptions = function (options) {
        _super.prototype.setOptions.call(this, options);
    };
    VisEdges.prototype.update = function (data, senderId) {
        return _super.prototype.update.call(this, data, senderId);
    };
    return VisEdges;
}(Vis.DataSet));
exports.VisEdges = VisEdges;
__export(require("./vis-network.directive"));
__export(require("./vis-network.service"));
