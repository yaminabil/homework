// load express
const express = require ("express");
const { toNamespacedPath } = require("path/posix");


// create our express app
const app = express ();

//=======> making routes <=========\\

// main page 
app.get ("/" , (req,res) => {
    res.send ("<h1>Hello World</h1>");

})

// make greeting 
app.get ("/greeting" , (req,res) => {
    res.send ("<h1>Hello Stranger </h1>");
})

// add name 
app.get ("/greeting/:name" , (req,res) => {
    res.send (`<h1>Wow! Hello there,   ${req.params.name} </h1>`);
})

app.get ("/tip/:total/:tipPercentage", (req,res) => {
    res.send (`<h1>You gave the custumor ${req.params.total * req.params.tipPercentage /100} dollars</h1>`)
})




// local hosting 
app.listen (3000 , () => {
    console.log ("listening on port 3000")
})
