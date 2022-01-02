let { MarkovMachine } = require('./markov');

describe('test markov machine', () => {
	test('makeText returns string', () => {
		let mm = new MarkovMachine('the cat in the hat');
		expect(mm.makeText()).toEqual(expect.any(String));
	});

	test('choice returns random choice from array', () => {
		let arr = [ 1, 2, 3, 4, 5 ];
		expect(MarkovMachine.choice(arr)).toEqual(expect.any(Number));
	});
});
