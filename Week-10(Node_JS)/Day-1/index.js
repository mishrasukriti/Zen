
const express = require("express");
const fs = require('fs');

const app = express();
 
app.listen(3000, () => console.log("Your app is running with port:3000 "));

app.get("/", (request, response) =>{
    response.send("Home Route");
});

app.use('/', express.static('/Users/sukritimishra/Documents/ZenGitRepo/Zen/ZenHTMLAndCSS/Week-10(Node_JS)/Day-1'));
app.use('/images', express.static('/Users/sukritimishra/Documents/ZenGitRepo/Zen/ZenHTMLAndCSS/Week-10(Node_JS)/Day-1'));

app.get("/list", function(request, response) {
    const path = "/Users/sukritimishra/Documents/" ;
    fs.readdir(
       path,
       "utf-8",
       (err, files) =>{
           if(err) throw err;
           console.log("reading folders of Documents: ");
           let result = "";
           let icon ;
           
           files.forEach(file=>{
               console.log(file);
               let stats = fs.statSync(path + file);
               
               if(stats.isDirectory()) {
                   icon = '<img src="images/folder.png" height="100px" width="100px">';
               } else {
                icon = '<img src="images/file.png" height="100px" width="100px">';
               }
               result+= '<div>' + icon + file + '</div>' + '<br>';
           })
           response.send(result);
       }
    );
});
