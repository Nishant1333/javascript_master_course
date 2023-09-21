//Dates
let myDate =new Date()
console.log(myDate.toLocaleDateString());


let myCreatedDate =new Date("2023-01-23")
console.log(myCreatedDate.getTime());

// let myTimeStamp =Date.now()
// console.log(myTimeStamp)
let newDate=new Date();
console.log(newDate);


let bor=newDate.toLocaleString('default',{weekday:"long"})
console.log(bor);