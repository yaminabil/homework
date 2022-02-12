


// fibonacci 
// xn = xn−1 + xn−2

// iscle

function  fibonacci  (targetNumber) {
    



let num1= 0 ; 
let num2 = 1 ; 
let nextNum = 0; 
// console.log("fubonacci serri : ");
// console.log (num1);
// console.log (num2);




while (nextNum < targetNumber){   // nextNum >clea= targetNumber)

    nextNum = num1+num2 ; 
    // console.log (nextNum);  // <--------- 
    num1=num2;
    num2=nextNum;

}

if (nextNum === targetNumber) { 
    return (true );
}else return (false) ; 

} 



module.exports = fibonacci ; 