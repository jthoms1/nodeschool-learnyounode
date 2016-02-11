var total = 0;
process.argv.forEach(function(element, index, array) {
	if (index > 1) {
		total += Number(element);
	}
});
console.log(total);
