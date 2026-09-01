let myDate=new Date()
console.log(myDate);
console.log(myDate.toDateString());
console.log(myDate.toLocaleString());

console.log(myDate.toISOString());
console.log(myDate.toJSON());
console.log(myDate.toLocaleDateString());

console.log(typeof myDate);

let createdDate=new Date(2027,11,24);  //month starts with 0 in js 0 -> jan ....... 11 -> dec
console.log(createdDate.toDateString());
console.log(createdDate.toLocaleString());

let createdDate2=new Date(2027,11,24,2,10);  //after date we can also add time
console.log(createdDate2.toLocaleString());


let createdDate3=new Date("2028-01-02"); // another way to declare date according to the format, here the month starts with 01 only
let createdDate4=new Date("01-2-2028"); //our format mm/dd/yyyy
console.log(createdDate3.toLocaleString());
console.log(createdDate4.toLocaleString());

console.log(createdDate4.getTime());

// -----------------TimeStamp----------------
let myTimeStamp=Date.now()
console.log(myTimeStamp);   // this is miliseconds from 1 jan 1970 till now
