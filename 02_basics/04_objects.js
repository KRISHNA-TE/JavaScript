//singleton Object
// const tinderUser = new Object()

//nong singleton Object
const tinderUser = {}
tinderUser.id = "1423a"
tinderUser.name = "Rock"
tinderUser.isLoggedIn = false;

// console.log(tinderUser);

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userFullName: {
            firstname: "krishna",
            lastname:"chaitanya"
        }
    }
}
// console.log(regularUser.fullname.userFullName);

const obj1 = {1:"a",2:"b"}
const obj2 = { 3: "a", 4: "b" }

// const obj3 = { obj1, obj2 }
// const obj3 = Object.assign({},obj1,obj2)

const obj3 = {...obj1, ...obj2}
// console.log(obj3);

// console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty('isLoggedIn'));

//Destructure of Objects
const course = {
    coursename: "Js",
    price: "2000",
    courseInst:"hitesh"
}

const { courseInst: inst } = course
console.log(inst);
