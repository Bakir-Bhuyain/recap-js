//array declaration
// const myArr = [1,2,3,3,4,5];
const shoppingList = ["Rice", "Egg", "Oil", "Salt"];
shoppingList[3] = "sugar";
console.log(shoppingList);
console.log(shoppingList[2]);

//Array of objects
//Example (Phone er Dokan): Amra 3 ta phone er data rakhbo.
const phones = [
  { id: 1, model: "samsung", price: 120000 },
  { id: 2, model: "iphone-15", price: 130000 },
  { id: 3, model: "pixel-6", price: 90000 },
];
console.log(phones[1].model);

//example (student list);
const students = [
  { name: "Rakib", roll: 11, isPassed: "passed" },
  { name: "saikat", roll: 12, isPassed: "!passed" },
  { name: "taher", roll: 14, isPassed: "passed" },
  { name: "tusher", roll: 13, isPassed: "!passed" },
];
console.log(students[1].name);

//array push
const number = [12, 22, 14, 44, 56, 88, 77];
number.push(94);
console.log(number);

//array pop 
const name = ['rahim', 'karim', 'salam', 'jabbar', 'selim'];
name.pop();
console.log(name);
//shift 
const numbers = [1, 2, 3];
numbers.unshift(4);
console.log(numbers);

//unshift 
const hasNum = [1, 2, 3, 4];
hasNum.shift();
console.log(hasNum);

let bus = [];
bus.push('rahim','karim');
bus.unshift('minister');
bus.pop();
bus.shift();
console.log(bus);

//SEARCH METHOD OF ARRAY
//includes
const friends = ['bakir', 'rakib', 'abir'];
console.log(friends.includes('bakir'));
console.log(friends.includes('tusher'));


if (friends.includes('bakir')){
      console.log('party')
}else{
      console.log('no party');
}
//indexOf 
const names = ['asd', 'dfd', 'dfds'];
console.log(Array.isArray(names));
console.log(names.indexOf('dfd'));
console.log(names.indexOf('kjkh'))

//cutting and editing
//slice 
//mainly hocche je dhoro start theke suru hbe and end er agh porjonto katbe
const foods = ["Burger", "Pizza", "Pasta", "Sandwich", "Fries"];
const myPlate = foods.slice(1,2);
console.log(myPlate);
console.log(foods);

//splice 
const food = ["Burger", "Pizza", "Pasta"];
food.splice(1,1, "Biriyani");
console.log(food);

