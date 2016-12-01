var containsValue = require('./ex3');

describe("function containsValue", function() {

	it("should correctly answer when the value isnt found", function() {
		expect(containsValue([1,3,5,7,9], 8)).toBeFalsy();
	});

	it("should find a number when the input is in order", function() {
		expect(containsValue([1,3,5,7,9], 7)).toBeTruthy();
	});

	it("should find a number when the input is not in order", function() {
		expect(containsValue([9,7,5,3,1], 7)).toBeTruthy();
	});
});
