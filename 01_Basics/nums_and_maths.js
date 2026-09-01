//----------------Number----------------------//
const n=10
console.log(n);
const num=new Number(100);

console.log(num);
console.log(num.toFixed(2));
console.log(num.toString().length);

const otherNum=98.9349
console.log(otherNum.toPrecision(4));   //it is use for round off accounding to the number of digits that we have specified

const hundreds=1000000
console.log(hundreds.toLocaleString()); //used for representation : default in US standard
console.log(hundreds.toLocaleString('en-IN')); // now according to indian format

//----------------Maths--------------------//

console.log(Math);
console.log(Math.abs(-4));
console.log(Math.round(98.9349)); //removes the decimal value by rounding them off
console.log(Math.floor(4.9));
console.log(Math.ceil(4.9));

console.log(Math.min(12,3,4,5,6,1));

//Important Math.random ->its value always come in between 0 and 1 -> 0<=val<=1
console.log(Math.random());

console.log((Math.random()*10)+1);
console.log((Math.random()*10)+1);
