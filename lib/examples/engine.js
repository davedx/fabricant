"use strict";

var _createClass = require("babel-runtime/helpers/create-class")["default"];

var _classCallCheck = require("babel-runtime/helpers/class-call-check")["default"];

var _interopRequireDefault = require("babel-runtime/helpers/interop-require-default")["default"];

var _fabricate = require("../fabricate");

var _fabricate2 = _interopRequireDefault(_fabricate);

var Mover = (function () {
	function Mover() {
		_classCallCheck(this, Mover);
	}

	_createClass(Mover, [{
		key: "start",
		value: function start() {}
	}, {
		key: "update",
		value: function update() {
			console.log("Moving " + this.host.name);
		}
	}]);

	return Mover;
})();

var Health = (function () {
	function Health() {
		_classCallCheck(this, Health);
	}

	_createClass(Health, [{
		key: "start",
		value: function start() {
			console.log("Initializing " + this.host.name + " health to max hps");
		}
	}, {
		key: "update",
		value: function update() {}
	}]);

	return Health;
})();

var AttackController = (function () {
	function AttackController() {
		_classCallCheck(this, AttackController);
	}

	_createClass(AttackController, [{
		key: "start",
		value: function start() {}
	}, {
		key: "update",
		value: function update() {}
	}]);

	return AttackController;
})();

var CameraController = (function () {
	function CameraController() {
		_classCallCheck(this, CameraController);
	}

	_createClass(CameraController, [{
		key: "start",
		value: function start() {}
	}, {
		key: "update",
		value: function update() {}
	}]);

	return CameraController;
})();

var Player = {
	defaultSkin: "bob_the_builder",
	components: [Mover, CameraController, Health, AttackController]
};

var EvilPriest = {
	defaultSkin: "evil_priest",
	components: [Mover, Health, AttackController]
};

var Engine = (function () {
	function Engine(scene) {
		_classCallCheck(this, Engine);

		this.scene = scene;
	}

	_createClass(Engine, [{
		key: "start",
		value: function start() {
			var _this = this;

			var deltaTime = 1000;

			// call start method to let everything do initialization
			this.scene.forEach(function (node) {
				if (node.start) {
					node.start();
				}
				if (node.components) {
					node.components.forEach(function (component) {
						if (component.start) {
							component.start();
						}
					});
				}
			});

			// lock frame rate and update components each frame
			setInterval(function (f) {
				console.log("Tick");
				_this.scene.forEach(function (node) {
					if (node.update) {
						node.update(deltaTime);
					}
					if (node.components) {
						node.components.forEach(function (component) {
							if (component.update) {
								component.update(deltaTime);
							}
						});
					}
				});
			}, deltaTime);
		}
	}]);

	return Engine;
})();

var player = (0, _fabricate2["default"])(Player);
player.name = "Bob";

var enemy1 = (0, _fabricate2["default"])(EvilPriest);
enemy1.name = "enemy1";

var enemy2 = (0, _fabricate2["default"])(EvilPriest);
enemy2.name = "enemy2";

//TODO: actually scene should be a declarative data structure like the prefabs..
var scene = [player, enemy1, enemy2];
var engine = new Engine(scene);

engine.start();