//jshint esversion:6
// creating templets
const express = require("express"); // express
const bodyParser = require("body-parser"); // body parser
const app = express(); // declearing app
const date = require(__dirname + "/date.js");
var items = ["Eat","Code","Sleep"];  // for storing multiple list items
var workItems = [];

app.set("view engine", 'ejs'); // seting engine to ejs
app.use(bodyParser.urlencoded({extended: true})); // app is using body parser
app.use(express.static("public")); // using static js and CSS files

app.get('/',function(req,res){ // send the list.ejs file as a response
   var day = date.getDate();
    res.render("list", {listTitle: day, newListItems:items}); // sending "day" to list.ejs and replacing kindOfDay to day
});


app.post('/',function(req,res) { // post request -> basically it take all the data which was send by our post function by form
    var item = String(req.body.newItem); // taking the value of input from webpage and storing it into item veriable
    if(req.body.list === "Work List"){
        workItems.push(item);  
        res.redirect("/work"); // redirect means -> calling get method "of work"
    }
    else{
    items.push(item); // pushing that same variable into items array
    res.redirect("/"); // redirecting to "/"(root) again
    }
});

app.get("/work", function(req,res){
    res.render("list",{listTitle:"Work List",newListItems: workItems}); // render means taking the list.ejs file and send to the webpage
});

app.post("/work", function(req,res){
    let item = res.body.newItem;
    workItems.push(item);
    res.redirect("/work"); // calling get method whith work keyword
})

app.get("/about", function(req,res){
res.render("about");
});

app.listen(3000, function(){ // port is running on port 3000
    console.log("Port is running on port 3000");
});