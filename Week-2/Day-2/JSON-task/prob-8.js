var securityQuestions = [
 {
 "question": "What was your first pet’s name?",
 "expectedAnswer": "FlufferNutter"
 },
 {
 "question": "What was the model year of your first car?",
 "expectedAnswer": "1985"
 },
 {
 "question": "What city were you born in?",
 "expectedAnswer": "NYC"
 }
]

var ques = "What was your first pet’s name?";
var ans  =  "FlufferNutter";
//let securityQuestionsJSON= JSON.stringify(securityQuestions);
//console.log(securityQuestionsJSON);

function chksecurityQuestions(securityQuestions,ques,ans) {

 for(let i=0; i<securityQuestions.length; i++){
 	let obj= securityQuestions[i];
 	// console.log(obj);
 	if(obj.question===ques) {
 		if(obj.expectedAnswer===ans) return true;
 		else return false;
 	}

 }
 return false; 
}
var result=chksecurityQuestions(securityQuestions,ques,ans);
console.log(result);