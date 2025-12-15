const age = 17;
const price = 500;
if (age >= 12) {
  console.log("you can eat for free");
} else if (age >= 60) {
  const discount = (price % 50) / 100;
  const totalPrice = price - discount;
  console.log(totalPrice);
} else {
  console.log(price);
}

//nested if else
const isLoggedIn = true;
isAdmin = false;
if (isLoggedIn) {
  console.log("welcome user");
  if (isAdmin) {
    console.log("Admin Panel e swagotom! 🛠️");
  } else {
    console.log("sorry you are not an admin");
  }
} else {
  console.log("please log in fast ");
}

//Scenario (Job Application): Chakri pabar sortho holo:
// Tomake (CSE Student OTHOBA EEE Student) hote hobe.
// EBONG Tomar CGPA 3.0 er beshi hote hobe.

const dept = 'EEE';
const cg = 3.5;
if ((dept  === "CSE" || dept  === "EEE" && cg > 3.00)){
      console.log('you are hired');
}else{
      console.log('better luck next time');
}

//Example 3
//Loan Approval System
//Tar (Chakri thake OTHOBA Bari thake).
//EBONG Tar Salary 20000 er beshi hoy.

const hasJob = true;
const hasHouse = false;
const salary = 25000;
if (((hasJob === true || hasHouse === true) && salary>20000)){
      console.log('your loan is approved');
}else{
      console.log('sorry');
}