function getPositives(ar)
{	let res=[];
 	for(let i=0; i<ar.length; i++) if(ar[i]>=0) res.push(ar[i]);
 	return res;
}
var ar = [-5, 10, -3, 12, -9, 5, 90, 0, 1];
var ar2 = getPositives(ar);
console.log(ar2);