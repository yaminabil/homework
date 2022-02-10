// load express
const express = require ("express");



// create our express app
const app = express ();

// importing randomExpress function 
const randomExpress = require ("./random-expression");


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

app.get ("/magic/:question", (req,res) => {
    if (req.params.question === "Will I be a Millionaire" ) {
        res.send (`<h1> Question : Will I be a Millionaire ? <h1> <br> Answer : ${randomExpress()}` );
    }
})




// local hosting 
app.listen (3000 , () => {
    console.log ("listening on port 3000")
})
