const prompt = require('prompt-sync')();


function p(a,b){
    return a*b;
}


var x=parseInt(prompt("enter the first number"));
var y=parseInt(prompt("enter the second number"));

console.log(p(x,y));