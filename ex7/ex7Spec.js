var ex7 = require('./ex7.js');

describe("mostFrequentChar", function() {

	it("finds 'a' as the frequent char in 'zuriel yahav'", function(){
		expect(ex7.mostFrequentChar('zuriel yahav')).toBe('a');
	});

	it("returns null. h, a, k, c all show up twice 'ohad kravchick'", function(){
		expect(ex7.mostFrequentChar('ohad kravchick')).toBeNull();
	});

	it("finds a is the the frequent char 'dana kravchick'", function(){
		expect(ex7.mostFrequentChar('dana kravchick')).toBe('a');
	});

	it("finds ' ' is the the frequent char in 'a b c d e f'", function(){
		expect(ex7.mostFrequentChar('a b c d e f')).toBe(' ');
	});

	it("empty string so we are looking to get NULL", function(){
		expect(ex7.mostFrequentChar('')).toBeNull();
	});
});
