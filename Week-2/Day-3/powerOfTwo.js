function powersOfTwo(n){
  res=[];
  res[0]=1;
  for(let i=1;i<=n; i++) res[i]= 2*res[i-1];
  return res;
}
let ans= powersOfTwo(3);
console.log(ans);