"use strict";

var _createClass = require("babel-runtime/helpers/create-class")["default"];

var _classCallCheck = require("babel-runtime/helpers/class-call-check")["default"];

var _interopRequireDefault = require("babel-runtime/helpers/interop-require-default")["default"];

var _fabricate = require("../fabricate");

var _fabricate2 = _interopRequireDefault(_fabricate);

var Clickable = (function () {
	function Clickable() {
		_classCallCheck(this, Clickable);
	}

	_createClass(Clickable, [{
		key: "select",
		value: function select() {
			console.log("Clicked " + this.host.name);
		}
	}]);

	return Clickable;
})();

var Focusable = (function () {
	function Focusable() {
		_classCallCheck(this, Focusable);
	}

	_createClass(Focusable, [{
		key: "focus",
		value: function focus() {
			console.log("Focused me");
			// swap to a focused skin
		}
	}, {
		key: "blur",
		value: function blur() {
			console.log("Blurred me");
			// swap to blurred skin
		}
	}]);

	return Focusable;
})();

var Expandable = (function () {
	function Expandable() {
		_classCallCheck(this, Expandable);
	}

	_createClass(Expandable, [{
		key: "onSelect",
		value: function onSelect() {
			this.expanded = !!this.expanded;
		}
	}]);

	return Expandable;
})();

var ScrollableList = function ScrollableList() {
	_classCallCheck(this, ScrollableList);
};

var Button = {
	defaultSkin: "blue_steel",
	components: [Clickable, Focusable]
};

var DropDown = {
	defaultSkin: "blue_steel",
	components: [Clickable, Focusable, Expandable, ScrollableList]
};

var MyButton = (0, _fabricate2["default"])(Button);
MyButton.name = "MyButton";
MyButton.components.get(Clickable).select();
console.log("Skin: " + MyButton.defaultSkin);

var MyDropDown = (0, _fabricate2["default"])(DropDown);
MyDropDown.name = "MyDropDown";
MyDropDown.components.get(Clickable).select();

// ...