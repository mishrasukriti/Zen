console.log(sumCSV("1.5, 2.3, 3.1, 4, 5.5, 6, 7, 8, 9, 10.9"));
function sumCSV(s)
{
  // your code here
  
  let arr=s.split(",").map(v=> +v);
  let sum=0;
  for (var i = 0; i < arr.length; i++) {
  	    sum+=arr[i];
  }
  return sum;
}