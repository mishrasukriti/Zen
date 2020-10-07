/**
* Function to find the minimum jumps needed to go from x to y,
*@param{number} x
*@param{number} y
*@return{number}
*/

function minJumps(x,y){
	let ans = 0;
	while(y>x){
		if(y%2!==0){
			y++;
			ans++;
		}
		y/=2;
		ans++;
	}
	return (ans + x - y);
}