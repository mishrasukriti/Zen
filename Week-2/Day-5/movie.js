/**
Movie class having related attributes and functionalities.
*/
class Movie{
	constructor(title, studio, rating){
		this.title= title;
		this.studio= studio;
		if(rating!==undefined) this.rating=rating;
		else this.rating="PG";
	}
}
// Created 4 instances of movie class with different attributes.
let m1= new Movie("Casino Royale", "EON Production", "PG13");
let m2= new Movie("movie2", "foo Production", "GL");
let m3= new Movie("movie3", "bar Production", "CA");
let m4= new M ovie("movie4", "baz Production");

// Array having moving instances.
let arr=[m1, m2, m3, m4];

//declared an IIFE to print only those movie objects which as rating PG
(function getPG(arr){
	let res =arr.filter(obj=> obj.rating.charAt(0)==='P' && obj.rating.charAt(1)==='G');
	console.log(res);
})(arr);

