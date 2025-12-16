//for of loop
const fruits = ["apple", "Mango", "Orange"];
//loop start
for (const fruit of fruits) {
//   console.log(`I love fruits ${fruit}`);
}

//example -Scenario: Tomar kache kichu number ache.
// Tomake bolte hobe konta Even (Jor) ar konta Odd (Bijor).

const numbers = [12, 22, 19, 24, 7, 55, 69, 88, 46];

for (const number of numbers) {
  if(number %2 ===0){
      // console.log(` ${number} is even`);
  }else{
      // console.log(`${number} is odd`)
  }
}

//The "Shop Manager" Challenge 🛒

const products = [
  { name: "Laptop", price: 50000, inStock: true },
  { name: "Phone", price: 20000, inStock: false },
  { name: "Watch", price: 3000, inStock: true },
  { name: "Headphone", price: 1500, inStock: false },
];
for (const product of products){
      if(product.inStock){
            console.log(`${product.name} product is available`);
      }else{
            console.log(`${product.name} is out of stock`);
      }
}