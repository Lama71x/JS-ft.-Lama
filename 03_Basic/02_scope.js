//Scopes
// const a = 10
// let b = 20
// var c = 30

// console.log(a);
// console.log(b);
// console.log(c);  ..This is simple and we all know

// let b = 3000    ------->This is a global Scope
// if(true) {
//     const a = 10
//     let b = 20           ----->This is Local Scope
//     var c = 30
// }

// console.log(a);  //This will not print
// console.log(b);     //This will also not print
// console.log(c);  this will print so not to use var this may cause problem


// **************************Part 2**********************

// function one(){
//     const username = "Saroj"

//     function two(){
//         const website = "Youtube"
//         console.log(username);
//     }
//     two()
// }

// one()


// if(true){
//     const username = "Saroj"
//     if (username === "Saroj") {
//         console.log(username)
//     }
// }

// *****************Interesting************************

// function addTwo(num){
//     return num +1
// }

// addTwo(5)



// *****************************IIRFilterNode(Immediate Invoked Function Expression)***************************

// (function chai(){
//     console.log("DB CONNECTED!!")
// })("Saroj")


