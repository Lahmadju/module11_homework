function getTypeOfNumber(num1) {
	if(num1 === 0 || num1 === 1) {
		console.log('Числа 0 и 1 не является ни простым, ни составным')
	} else {
		let primeNumber = true;

		for (let i = 2; i < num1; i++) {
			if(num1 % i === 0) {
				primeNumber = false;
				break
			}
		}
		console.log(primeNumber ? 'Данное число является проcтым' : 'Данное число является составным')
	}
}

getTypeOfNumber(3);