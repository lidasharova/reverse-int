module.exports = function reverse (n) {
	str = ""+ n ;
	if (str[0]=== '-'){
		let b = str.slice(1, str.length);
		return Number([...b].reverse().join(""));
	}
  return Number([...str].reverse().join(''))
}
