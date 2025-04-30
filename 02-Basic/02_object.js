//There are two type of Objects:
//1-literals
//2.Constructor

//1.Objects Literals


const mySym = Symbol("Key2")


const jsUser = {
    name: "Saroj ",
    age: 18,
    location: "Kirtipur",
    isLoggedIn: false,
    lastLoggedIn: ["Saunday" , "Monday"]
    // [mySym] =  Key33
}
 
// console.log(jsUser.age,jsUser.isLoggedIn); //Dont User Such Way

// console.log(jsUser["name"]);
// console.log(jsUser["name[2]"]);
// // console.log(jsUser[mySym]);

// //If you want to change value
// jsUser.age = 16

// console.log(jsUser.age)


//How to Freeze 

// Object.freeze(jsUser)
// console.log(jsUser.isLoggedIn)
// jsUser.isLoggedIn = true //Done


//Add Greeting

// jsUser.greeting = function(){
//     console.log("Hello Beautiful People");
    
// }

// console.log(jsUser.greeting());







