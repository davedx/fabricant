import Fabricate from "../fabricate";

class Clickable {
	select() {
		console.log("Clicked "+this.host.name);
	}
}

class Focusable {
	focus() {
		console.log("Focused me");
		// swap to a focused skin
	}
	blur() {
		console.log("Blurred me");
		// swap to blurred skin
	}
}

class Expandable {
	onSelect() {
		this.expanded = !!this.expanded;
	}
}

class ScrollableList {
	// ...
}

const Button = {
	defaultSkin: "blue_steel",
	components: [Clickable, Focusable]
}

const DropDown = {
	defaultSkin: "blue_steel",
	components: [Clickable, Focusable, Expandable, ScrollableList]
}

const MyButton = Fabricate(Button);
MyButton.name = "MyButton";
MyButton.components.get(Clickable).select();
console.log("Skin: "+MyButton.defaultSkin);

const MyDropDown = Fabricate(DropDown);
MyDropDown.name = "MyDropDown";
MyDropDown.components.get(Clickable).select();
