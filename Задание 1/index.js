function getOddEvenNumber() {
const arr = [1,2,0,0,0,0,14,18,15,19,3,4,5,6,7,8,9,10,null,null];
let evenCount = 0;
let oddCount = 0;
let zeroCount = 0;

for (let i = 0; i < arr.length; i++) {
	if (typeof arr[i] === 'number' && !isNaN(arr[i])) {
		if (arr[i] === 0) {
			zeroCount++;
		}
		else if (arr[i] % 2 === 0) {
			evenCount++;
		} else {
			oddCount++;
		}
	} else {
	console.log("Данное значение не является числом")
	}
}
console.log(`четные- ${evenCount}`)
console.log(`нечетные- ${oddCount}`)
console.log(`нули- ${zeroCount}`)
};

getOddEvenNumber();