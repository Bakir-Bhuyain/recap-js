//if-else
//scenario Mone koro amra check korbo ekjon "Adult" naki "Child".
const age = 20;
let status;
if (age >= 18) {
  status = "adult";
} else {
  status = "child";
}
console.log(status);

//pro way ternary operator
const ages = 20;
const state = ages >= 18 ? "Adult" : "Child";
console.log(state);

//exp2
const isRaining = true;
const action = isRaining ? "Take Umbrella" : "go out";
console.log(action);

//advanced if else shorthand ternary
//example (Logical Operators inside Ternary)
const hasJob = true;
const hasHouse = false;
const salary = 25000;
const loanStatus =
  (hasJob || hasHouse) && salary > 20000 ? " loan approved" : " sorry ";
console.log(loanStatus);

//example (Chained Ternary (The "Else-If" Killer))

const signal = "red";
const action10 =
  signal === "red"
    ? "stop"
    : signal === "yellow"
    ? "wait"
    : signal === "green"
    ? "go"
    : "unknown Signal";

console.log(action10);

//challenge problem
//Conditions:

// Temp jodi 30 er beshi hoy -> "Hot 🔥"

// Temp jodi 20 er beshi hoy -> "Nice 🌤️"

// Temp jodi 10 er beshi hoy -> "Cool ❄️"

// Baki shob khetre (Else) -> "Cold 🥶"

const temp = 25;
const weather =
  temp > 30 ? "Hot" : temp > 20 ? "nice" : temp > 10 ? "cool" : "cold";
console.log(weather);
