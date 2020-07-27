var cors = require("cors");
var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
var request = new XMLHttpRequest();
var url_string = 'https://api.domainsdb.info/v1/domains/search?domain=facebook&zone=com';
// Open a new connection, using the GET request on the URL endpoint
request.open('GET',url_string , true)
request.onload = function() {
  // Begin accessing JSON data here
 
var data = JSON.parse(this.responseText);
console.log(data);
}
request.send();
