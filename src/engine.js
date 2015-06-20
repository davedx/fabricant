import Fabricate from "./fabricate";

class Mover {
	start() {

	}

	update() {
		console.log("Moving "+this.host.name);
	}
}

class Health {
	start() {

	}

	update() {

	}
}

class AttackController {
	start() {

	}

	update() {

	}
}

class CameraController {
	start() {

	}

	update() {

	}
}

var Player = {
	defaultSkin: "bob_the_builder",
	components: [Mover, CameraController, Health, AttackController]
}

var EvilPriest = {
	defaultSkin: "evil_priest",
	components: [Mover, Health, AttackController]
}

class Engine {
	constructor(scene) {
		this.scene = scene;
	}

	start() {
		let deltaTime = 1000;
		setInterval(f => {
			console.log("Tick");
			this.scene.forEach(node => {
				if(node.update) {
					node.update(deltaTime);
				}
				node.components.forEach(component => {
					if(component.update) {
						component.update(deltaTime);
					}
				})
			})
		}, deltaTime);
	}
}

let player = Fabricate(Player);
player.name = "Bob";

let enemy1 = Fabricate(EvilPriest);
enemy1.name = "enemy1";

let enemy2 = Fabricate(EvilPriest);
enemy2.name = "enemy2";

//TODO: actually scene should be a declarative data structure like the prefabs..
let scene = [player, enemy1, enemy2];
let engine = new Engine(scene);

engine.start();
