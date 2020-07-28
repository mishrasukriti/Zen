var cat = {
 "name": "Fluffy",
 "activities": ["play", "eat cat food"],
 "catFriends": [
 {
 "name": "bar",
 "activities": ["be grumpy", "eat bread omblet"],
 "weight": 8,
 "furcolor": "white"
 }, 
 {
 "name": "foo",
 "activities": ["sleep", "pre-sleep naps"],
 "weight": 3
 }
 ]
}

// Add height and weight to Fluffy
cat.weight = 10;
cat.height = 5;

//Fluffy name is spelled wrongly. Update it to Fluffyy
cat.name = "Fluffyy";

//List all the activities of Fluffyy’s catFriends.
let catFriendsActivities = [];
for(let i=0; i<cat.catFriends.length; i++){
	catFriendsActivities.push.apply(catFriendsActivities, cat.catFriends[i].activities);
}
console.log("Activities of Fluffyy’s catFriends are: " + catFriendsActivities);
let catFriendsName = cat.catFriends[0].name;
for(let i=1; i<cat.catFriends.length; i++){
	//catFriendsName.push.apply(catFriendsName, cat.catFriends[i].name);
	catFriendsName+= ", "+cat.catFriends[i].name;
}
console.log("Names of Fluffyy’s catFriends are: " + catFriendsName);

let totalWeight=0;
for(let i=0; i<cat.catFriends.length; i++){
	totalWeight+=cat.catFriends[i].weight;
}
console.log("Total Weight of Fluffyy’s catFriends are: " + totalWeight);

// Total activities of all cats
let totalActivities=cat.activities.length;
for(let i=0; i<cat.catFriends.length; i++){
	totalActivities+=cat.catFriends[i].activities.length;
}
console.log("Total activities of all cats is: " + totalActivities);

//Add 2 more activities to bar & foo cats
for(let i=0; i<cat.catFriends.length; i++){
	if(cat.catFriends[i].name==="foo"){
		cat.catFriends[i].activities.push("drink milk");
		cat.catFriends[i].activities.push("bath");
		console.log("Updated activities of foo is: "+ cat.catFriends[i].activities);
	}
	if(cat.catFriends[i].name==="bar"){
		cat.catFriends[i].activities.push("dance");
		cat.catFriends[i].activities.push("jump");
		console.log("Updated activities of bar is: "+ cat.catFriends[i].activities);
	} 
}

//Update the fur color of bar

for(let i=0; i<cat.catFriends.length; i++){
	if(cat.catFriends[i].name==="bar") {
		cat.catFriends[i].furcolor="brown";
		console.log("Updated furcolor of bar is: "+ cat.catFriends[i].furcolor);
	}
}

