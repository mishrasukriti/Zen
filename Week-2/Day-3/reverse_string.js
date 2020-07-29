var s = reverseString("JavaScript");
console.log(s);
function reverseString(s)
{
	let str="";
   for(let i=s.length-1; i>=0; i--){
   		str+=s.charAt(i);
   }
   return str;
}