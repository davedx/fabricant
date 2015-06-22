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

		isAuthed() {
			return true;
		}
	}

	class ProfileClass {
		getProfile() {
			const auth = this.host.components.get(AuthenticatorClass);
			if(auth.isAuthed()) {
				return {email: "dave@example.com"};
			}
			throw new Error("Not authenticated");
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

	const userWithAuthAndProfile = {
		name: "Dave",
		components: [AuthenticatorClass, ProfileClass]
	};

	it("should throw nicely if empty/no prefab is passed in", () => {
		expect(() => {
			const stuff = Fabricate();
		}).toThrow(/prefab/);
	});

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

	it("should allow access to host object and other sibling components from components", () => {
		const user = Fabricate(userWithAuthAndProfile);
		const profileComponent = user.components.get(ProfileClass);
		expect(profileComponent.host).toBe(user);
		expect(profileComponent.host.components.get(AuthenticatorClass)).toBeA(AuthenticatorClass);
		expect(profileComponent.getProfile().email).toBe("dave@example.com");
	});
});