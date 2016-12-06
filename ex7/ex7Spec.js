var mostFrequentChar= require('./ex7.js');

describe("mostFrequentChar", function() {

	it("finds one char that repeats the most", function(){
		expect(mostFrequentChar('zuriel yahav')).toBe('a');
	});

	it("returns null because more than one char repeats twice", function(){
		expect(mostFrequentChar('ohad kravchick')).toBeNull();
	});

	it("finds one char that repeats the most (3)", function(){
		expect(mostFrequentChar('dana kravchick')).toBe('a');
	});

	it("finds a whitespace as the most frequent char", function(){
		expect(mostFrequentChar('a b c d e f')).toBe(' ');
	});

	it("returns null because input is empty", function(){
		fail();
		expect(mostFrequentChar('')).toBeNull();
	});
});
