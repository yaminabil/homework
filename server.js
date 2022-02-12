// load express
const express = require ("express");
const fibonacci = require ("./fibonacci") ; 






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



// console.log (fibonacci (14));

app.get ( "/fibonacci/:targetNumber" , (req,res) => { 
    if ( fibonacci (parseInt(req.params.targetNumber))  === false ) {
        res.send (`<h1>I can tell this is not a fibonacci number</h1>`) 
    }else { 
        res.send (`<h1>Very good. It is Fibonacci</h1>`);
    }
})




// local hosting 


app.listen (3000 , () => {
    console.log ("listening on port 3000")
})
