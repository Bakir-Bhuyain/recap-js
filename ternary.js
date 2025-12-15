//if-else 
//scenario Mone koro amra check korbo ekjon "Adult" naki "Child".
const age = 20 ;
let status ;
if (age >= 18){
      status = "adult";
}else{
      status = "child";
}
console.log(status);

//pro way ternary operator
const ages = 20;
const state = (ages >= 18) ? "Adult" : "Child";
console.log(state);

//exp2
const isRaining = true;
const action = isRaining  ? "Take Umbrella" :"go out";
console.log(action);