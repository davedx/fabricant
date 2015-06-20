function Fabricate(prefab) {
	const host = Object.create(prefab);
	host.components = new Map();
	if(prefab.components) {
		prefab.components.forEach(component => {
			let componentInst;
			if(component.prototype && component.prototype.constructor) {
				componentInst = new component();
			} else {
				componentInst = Object.create(component);
			}
			componentInst.host = host;
			host.components.set(component, componentInst);
		});
	}
	return host;
}

export default Fabricate;
