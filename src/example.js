import Fabricate from "./fabricate";

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

var Button = {
	components: [Clickable, Focusable]
}

var DropDown = {
	components: [Clickable, Focusable, Expandable, ScrollableList]
}

let MyButton = Fabricate(Button);
MyButton.name = "MyButton";
MyButton.components.get(Clickable).select();

let MyDropDown = Fabricate(DropDown);
MyDropDown.name = "MyDropDown";
MyDropDown.components.get(Clickable).select();
