module.exports = reverse;

function reverse(n) {
	return Number(String(n).replace('-', '').split('').reverse().join(''));
}


