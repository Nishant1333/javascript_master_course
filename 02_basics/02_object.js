const tinderUser ={}
tinderUser.id="32we"
tinderUser.name="sami"

const regUser={
    email:"somr@gmail.com",
    fullname:{
        fname:"Nishant",
        lname:"Bhardwaj"

    }
}
// console.log(regUser.fullname?.fname);
// const obj1={1:"a",2:"b"}
// const obj2={3:"a",4:"b"}

// const obj3=Object.assign({},obj1,obj2)
// const obj3={...obj1,...obj2}

// console.log(obj3);

// const user=[
//     {
//         id:1,
//         namee:"nishu"
//     },{},{}

    
// ]
console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));

console.log(tinderUser.hasOwnProperty('gh'))