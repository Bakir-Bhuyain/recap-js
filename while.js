// let i = 0;
// while (i<5){
//       console.log("loading..." + i);
//       i++;
// }
// let num = 0;
// while(num <=10){
//       console.log(num)
//       num++;
// }

// let i = 1;
// let sum = 0;
// while (i <= 10) {
//   sum = sum + i;
//   console.log('sum', sum)
//   i++;
// }

// let num = 1;
// while (num <= 10) {
//   // console.log(num);
//   if (num % 2 === 0) {
//     console.log("number is even", num);
//   }
//   num++;
// }
//display sum of the all even number 

let number = 206
let num = 0;
while (number <= 311){
      // console.log(number)
      if(number %2 === 0){
            num = num+ number;
            console.log(number);
      }
      number++;
}
console.log('sum of all even' , num);