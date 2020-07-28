var arr = [[["firstName", "Vasanth"], ["lastName", "Raja"], ["age", 24], ["role", "JSWizard"]], [["firstName", "Sri"], ["lastName", "Devi"], ["age", 28], ["role", "Coder"]]];
let result=[];
function fromListToObject(arr) {
 
 for(let i=0; i<arr.length; i++){
 	var newObject = {};
 	let listOflist=arr[i];
 	for(let j=0; j<listOflist.length; j++){
 		let list = listOflist[j];
 		let key=list[0];
 		let value= list[1];
 		newObject[key]= value;
 	}
 	result.push(newObject);

 }
}
fromListToObject(arr);
//let obj= fromListToObject(arr);
console.log(result);