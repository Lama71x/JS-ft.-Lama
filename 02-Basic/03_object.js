const tinderUser = new Object()

tinderUser.id = "123abc"
tinderUser.name = "Lama"
tinderUser.email = "Saroj@gmail.com"
tinderUser.isLoggedIn = false

// console.log("My Id is "+tinderUser.id+". My Name is "+tinderUser.name);

const regularUser = {
    email: "Some@google.com",
    fullName: {
        userName: {
            firstName :"Saroj",
            lastName : "Lama"
        }
    }
}

// console.log(regularUser.fullName.userName.firstName);


const obj1 = { 1:"a", 2:"b" }
const obj2 = { 3:"c", 4:"d"}
// const obj3 = {obj1,obj2}


//Assign

// const obj3 = Object.assign(obj1,obj2)
// console.log(obj3);

//Spride Operator
const obj3 = {...obj1,...obj2}
console.log(obj3);



