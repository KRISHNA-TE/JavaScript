const bikes = ["Yamaha", "Ktm", "Kavasaki"]

const cars = ["rangeRover", "Benz", "Bmw"]

// bikes.push(cars)

// console.log(bikes);

//By using concat method
// const newbike = bikes.concat(cars)
// console.log(newbike);

//By using Spread syntax
// const all_new_bikes = [...bikes, ...cars]
// console.log(all_new_bikes);

const newArr = [1, 2, 3,[4, 5], 7,[6, 8,[9]]]

const realArr = newArr.flat(Infinity)

// console.log(realArr);
// console.log(realArr);

console.log(Array.isArray("Krishna"));
console.log(Array.from("Krishna"));
console.log(Array.from({ name: "Krishna" }));//Instersting


//of method
let score = 100;
let score2 = 200;

console.log(Array.of(score,score2));
