console.log(null < 0 );     //false
console.log(null == 0);     //false

console.log(null <= 0);     //****true -> here null converted into 0 and then compare the value
console.log(null >= 0);     //""

console.log(undefined <= 0);  //in all the three it gives false
console.log(undefined == 0);
console.log(undefined < 0);  

//=== -> strick check ->it checks the value as well as the data type
console.log(2===2); //true

console.log("2"===2); //false
console.log('2'===2); //false