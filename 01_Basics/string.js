//backticks->have string interpoliation 
const name="Chhavi-Dubey"
const age=22

console.log("Name: "+name +"and age is:"+ age) //not recommended to use

console.log(`Name is ${name} ans age is ${age}`); // this uses string interpoliation where the placeholder is used for variables

const name1=new String('chhavi'); //its another way to declare string: its an object where the ind and char is stored in the form of key value pair

console.log(name[0]);
console.log(name.charAt(0));

console.log(name.__proto__); // there are many methods in the prototype some are listed below
console.log(name.length)
console.log(name.toUpperCase());
console.log(name.indexOf('h'));


//Important string method

const newString = name.substring(0,4) //it does not include the end index
console.log(newString);

const newSlice=name.slice(0,4) //similar to string but also include the negative index, when we give negative index then it reverses the string
console.log(newSlice)

const s=name.slice(-8,4); 
console.log(s);

const newStringOne="   Chhavi     "

console.log(newStringOne);
console.log(newStringOne.trim()); //it removes the starting and ending spaces

const url="chhavi%24.com"

console.log(url);
console.log(url.replace('%','-'));
console.log(url);
console.log(url.includes('chhavi'));

//Split it has two arguments a seperator and limitor -> it generates an array as per the seperator specified

const gameName="mario-contra-car-race";
console.log(gameName.split('-'))
console.log(gameName);
