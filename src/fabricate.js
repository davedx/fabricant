function Fabricate(prefab) {
	let host = Object.create(prefab);
	host.components = new Map();
	prefab.components.forEach(component => {
		var componentInst = new component();
		componentInst.host = host;
		host.components.set(component, componentInst);
	});
	return host;
}

export default Fabricate;
