function createAdder(x) {
	return function(y) {
		return x + y;
	};
}

let adderFunction = createAdder(5);
console.log(adderFunction(7));