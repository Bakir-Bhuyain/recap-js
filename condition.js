// simple if else condition

const age = 20;
if (age >= 18 ){
      console.log('you can vote');
}else{
      console.log("you can't vote");
}
// only value change kore
console.log(5 == "5");
//vlaue and data type 2 tai check kore
console.log(5 === "5");

//&& operator 
// scenario login korar jonno  username and password 2 tai check korbe
const user = "Rakib";
const pass = '3976';
if (user === user && pass === pass){
      console.log ("Login successful");
}else {
      console.log ("your information is incorrect");
};


//|| (or) operator jekono ekta sothik holei hobe.
//Scenario: Holiday hobe jodi ajke Shukrobar hoy OTHOBA Shonibar hoy.
const day = 'Saturday';
if (day === 'Friday' || day === "Saturday"){
      console.log("it's holiday");
}else{
      console.log("it's not holiday");
}


//challenge task 
// scenario "Result Sheet" banate hobe Logic diye.
// Marks jodi 80 ba tar beshi hoy -> Console e dekhabe "A+"
// Marks jodi 33 theke 79 er moddhe hoy -> Console e dekhabe "Passed"
// Marks jodi 33 er kom hoy -> Console e dekhabe "Failed"

const mark = 70;
if (mark >= 80){
      console.log("A+");
}else if (mark >= 33){
      console.log("passed");
}else{
      console.log("failed");
};