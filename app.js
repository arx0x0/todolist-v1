const express = require("express");
const bodyParser = require("body-parser");
const { getDate, getDay } = require("./views/date");
const date = require(__dirname + "/views/date"); //Accessing the date module 

const app = express();

//arrays to store new items
const items = ["Buy Food", "Cook Food", "Eat Food"];
const workItems = [];

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

//Get method for the root page
app.get("/", function(req, res){

 const day = date.getDate(); //Calling the date.js file's module.exports.getDate

  res.render("list", {listTitle: day, newListItems: items})

});

//Post method for the root page
app.post("/", function(req, res){

  const item = req.body.newItem;

  if (req.body.list === "Work") {
    workItems.push(item);
    res.redirect("/work");
  } else {
    items.push(item);
    res.redirect("/");
  }

});

//Making a get callback for the work template
app.get("/work", function(req, res){
  //Res.render we are basically making keyvalue pairs that get parsed over to the list.ejs file
  //Here, property newListItems is for workItems array 
  res.render("list", {listTitle: "Work", newListItems: workItems})
});

app.get("/about", function(req, res){
  res.render("about");
});

app.listen(3000, function(){
  console.log("Server started on port 3000");
});