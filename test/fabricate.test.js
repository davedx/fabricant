import mocha from 'mocha';
import expect from 'expect';
import Fabricate from '../dist/fabricate';

describe('Fabrication', () => {

	const userNoComponents = {
		name: "Sam",
		components: []
	}

	class AuthenticatorClass {
		constructor() {
			// ...
		}
	}

	const userWithES6ClassAsComponent = {
		name: "Tom",
		components: [AuthenticatorClass]
	}

	const AuthenticatorObject = {empty: true};

	const userWithPlainObjectAsComponent = {
		name: "Bob",
		components: [AuthenticatorObject]
	};

	it("should not crash from having no components", () => {
		const user = Fabricate(userNoComponents);
		expect(user.name).toBe("Sam");
	});

	it("should be able to create components from ES6 classes", () => {
		const user = Fabricate(userWithES6ClassAsComponent);
		expect(user.name).toBe("Tom");
	});


	it("should be able to create components from POJSOs", () => {
		const newUser = Fabricate(userWithPlainObjectAsComponent);
		expect(newUser.name).toBe("Bob");
	});
});