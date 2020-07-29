function CountLegs(tur,horse,pigs) {
	return 2*tur + 4*(horse+pigs);
}
var legs = CountLegs(2,3,5);
console.log("Toatal legs are: "+ legs);