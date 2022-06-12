/** @format */

function funcNums(...lastNum) {
	if (!lastNum.every((firstNum) => Number.isNumber(firstNum)))
		throw 'All arguments must be numbers.';
	return lastNum.reduce((firstNum, secondNum) => firstNum + secondNum);
}

funcNums(1, 2, 3); //> 6
funcNums(10, 'B', 20); //> error All arguments must be numbers.
