//Primitive data type   
//number
//bigint -> used in big webisite, trading
//string -> "" '' we can use both single and double quotes
//boolean -> true/false
//null -> its a data type as well as stand alone value ; its an object
//undefined -> 
//symbol ->

//objects

let age=12;

console.log(typeof age);

console.log(typeof "Hello");

console.log(typeof null); //object


console.log(typeof undefined); //undefined

//There are 2 types of datatypes: 1.Primitive 2.Non-Primitive (Reference type)

 //Primitive : 7 types -> they all are call by value  (the data is being copied and then passed, changes are made in the copy)
 //String, Number, Boolean, null, undefined, BigInt, Symbol (used in adv js -> a component is being used in many places and if in any place is required to work differently then it is wrapped inside the symbol)

 //Non Primitives (Reference) :
 //Arrays, Objects, Functions   

 //Arrays
 const a=["Chhavi","Aru","Tejas"]

 //Objects
//  {
//     name:'Chhavi',
//     age: 22,
//  }

//Objects
 let myobj={
    name:"xyz",  //it stores value in key-value format
    age:19,
 }

 //function
 let myfun=function()
 {
    console.log("Hello World")
 }

 //In "typeof" all the non primitives gives object and function gives function which is also the function object/(object function)

