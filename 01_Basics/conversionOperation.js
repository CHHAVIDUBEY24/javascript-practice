//Conversion of Data Type
let score="33abc"; //->NaN when converted to string
let sc="12";

let s=null   // -> when its type is converted from string to number the null value got converted to 0
let u=undefined // ->NaN in number but its type is number only

let num=Number(score);
let cs=Number(sc);

let c=Number(s);
let v=Number(u);

console.log(typeof score);
console.log(score);

console.log(typeof num); //Nan
console.log(num);

console.log(typeof cs);
console.log(cs);

console.log(typeof c);
console.log(c);

console.log(typeof v);
console.log(v);


//1 ->"true" 0 -> "false" , ""->false, "anything"-> true