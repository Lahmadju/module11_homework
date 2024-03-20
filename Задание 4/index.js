function countInterval(start, end) {
	let current = start;
	let interval = setInterval(function() {
		if (current >= end) {
			clearInterval(interval);
		}
		console.log(current);
		current++;
	}, 1000);
}

countInterval(5, 15);