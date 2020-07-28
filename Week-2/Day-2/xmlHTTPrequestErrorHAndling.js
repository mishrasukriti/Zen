var cors = require("cors");
var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
var request = new XMLHttpRequest();
var url_string = 'https://api.openweathermap.org/data/2.5/weather?q=Delhi&APPID=a421b15d9970e5c08a67c82f0b67f444';
// Open a new connection, using the GET request on the URL endpoint
request.open('GET',url_string , true)
request.onreadystatechange = function (oEvent) {  
    if (request.readyState === 4) {  
        if (request.status === 200) {  
          console.log(request.responseText)  
        } else {  
           console.log("Error: ", request.statusText);  
        }  
    }  
}; 

request.onerror = function () {
  console.log("** An error occurred during the transaction");
};
request.send();
request.onload = function() {
  // Begin accessing JSON data here
 
var data = JSON.parse(this.responseText);
console.log(data);
}
