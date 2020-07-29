console.log(getDistance(100, 100, 400, 300));
function getDistance(x1, y1, x2, y2)
{
	let a=Math.abs(x2-x1);
	let b=Math.abs(y2-y1);
 	return Math.sqrt(a*a + b*b);
}