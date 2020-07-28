var expected = JSON.stringify({foo: 6, bar: 5});
var actual = JSON.stringify({foo: 5, bar: 6});
function assertObjectsEqual(actual, expected){
 // your code here
 let expEntries= Object.entries(expected);
 let actualEntries= Object.entries(actual);
 let flag=true;

 for(let i=0; i<expEntries.length; i++){
 	let exp= expEntries[i];
 	let act= actualEntries[i];
 	if(exp[0]===act[0]){
 		if(exp[1]===act[1]) continue;
 		else {
 			flag=false;
 			break;
 		}
 	}
 	else{
 		flag=false;
 		break;
 	}
 }
 if(flag=== false){
 	console.log("FAILED, Expected "+ expected+ ",but got "+actual);
 }
 else console.log("PASSED");
}

assertObjectsEqual(actual, expected);
