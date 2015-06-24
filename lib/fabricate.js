"use strict";

var _Object$create = require("babel-runtime/core-js/object/create")["default"];

var _Map = require("babel-runtime/core-js/map")["default"];

Object.defineProperty(exports, "__esModule", {
	value: true
});
function Fabricate(prefab) {
	if (!prefab) {
		throw new Error("No prefab passed to Fabricate.");
	}
	var host = _Object$create(prefab);
	host.components = new _Map();
	if (prefab.components) {
		prefab.components.forEach(function (component) {
			var componentInst = undefined;
			if (component.prototype && component.prototype.constructor) {
				componentInst = new component();
			} else {
				componentInst = _Object$create(component);
			}
			componentInst.host = host;
			host.components.set(component, componentInst);
		});
	}
	return host;
}

exports["default"] = Fabricate;
module.exports = exports["default"];