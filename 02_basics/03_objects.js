// singleton

// object literals

const mySym =Symbol("key")

const JsUser = {
    name: "Krishna",
    "full name": "Krishna Chaitanya",
    [mySym]:"mykey1",
    age: 24,
    location: "Benguluru",
    email: "Krishna@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday","Saturday"]
}

// console.log(JsUser.email)
// console.log(JsUser["email"])
// console.log(JsUser["full name"])
// console.log(JsUser[mySym]);

JsUser.email = "Krishna@Chatgpt.com"
// Object.freeze(JsUser)
JsUser.email = "Krishna@microsoft.com"

// console.log(JsUser);

JsUser.greeting = function () {
    console.log("Hello Js User");
}
JsUser.greetingTwo = function () {
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());